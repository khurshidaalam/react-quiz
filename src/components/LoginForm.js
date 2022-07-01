import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import Form from "./Form";
import { Link , useNavigate } from "react-router-dom";
import {useAuth} from "./contexts/AuthContext";

const LoginForm = () => {
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(true);
    const [userData, setUserData] = useState({
      email: "",
      password: ""
    });
  const navigate = useNavigate();
  const { email, password } = userData;
   
    const handleInput = (event) => {
      const {name, value} = event.target;
      setUserData({ ...userData, [name]: value });
    };
  
    const {login} = useAuth();
  
    const submitData = async (event) => {
      event.preventDefault();
  
      try{
        setError("");
        setLoading(true);
        await login(email,password);
        navigate('/');
      }catch(err){
        console.log(err);
        setError("login failed! use valid emial or password");
        setLoading(false);
      }
      
      
    };
  return (
    <Form style={{height: "330px"}} onSubmit={submitData}>
          <TextInput
            type="email"
            placeholder="enter your email"
            icon="alternate_email"
            name="email"
            value={email}
        onChange={handleInput}
        required
          />
          <TextInput
            type="password"
            placeholder="enter your password"
            icon="lock"
            name="password"
            value={password}
        onChange={handleInput}
        required
          />

          <Button type="submit" disabled={loading}><span>Login now</span></Button>
          {error && <p>{error}</p>}
          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
  )
}

export default LoginForm