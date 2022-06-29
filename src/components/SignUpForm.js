import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import { Link , useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import {useAuth} from "./contexts/AuthContext";

const SignUpForm = () => {
  const [error,setError] = useState("");
  const [loading,setLoading] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpass: "",
    agree: ""
  });
const navigate = useNavigate();
const { username, email, password, confirmpass,agree } = userData;
  
const handleInput = (event) => {
  const {name, value} = event.target;
  setUserData({ ...userData, [name]: value });
};

  const {signup} = useAuth();

  const submitData = async (event) => {
    event.preventDefault();

    //password validation
    if(password !== confirmpass){
      return setError("password don't match. try again!")
    }
    try{
      setError("");
      setLoading(true);
      await signup(email,password,username);
      navigate('/');
    }catch(err){
      console.log(err);
      setError("signup failed");
      setLoading(false);
    }
    
    
  };

  return (
    <Form style={{ height: `500px` }} onSubmit={submitData}>
      <TextInput
        type="text"
        placeholder="enter your name"
        icon="person"
        name="username"
        value={username}
        onChange={handleInput}
        required
      />
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
      <TextInput
        type="password"
        placeholder="confirm your password"
        icon="lock_clock"
        name="confirmpass"
        value={confirmpass}
        onChange={handleInput}
        required
      />
      <Checkbox 
      name="agree"
        value={agree}
        onChange={handleInput}
         text=" I agree to the Terms &amp; Condition" 
         required
         />
      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>
      {error && <p>{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignUpForm;
