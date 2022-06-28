import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const { username, email, password, confirmpass } = userData;
  const submitData = async (event) => {
    event.preventDefault();
    
    if (username && email && password && confirmpass) {
      const res = await fetch(
        // "https://signup-form-abbff-default-rtdb.firebaseio.com/userdata.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username,
            email,
            password,
            confirmpass,
          }),
        }
      );

      if(res){
        alert("data stored");
      }else{
        alert("fill the blanks first");
      }

    }
    
  };

  return (
    <Form style={{ height: `500px` }}>
      <TextInput
        type="text"
        placeholder="enter your name"
        icon="person"
        name="username"
        value={username}
        onChange={handleInput}
      />
      <TextInput
        type="email"
        placeholder="enter your email"
        icon="alternate_email"
        name="email"
        value={email}
        onChange={handleInput}
      />
      <TextInput
        type="password"
        placeholder="enter your password"
        icon="lock"
        name="password"
        value={password}
        onChange={handleInput}
      />
      <TextInput
        type="password"
        placeholder="confirm your password"
        icon="lock_clock"
        name="confirmpass"
        value={confirmpass}
        onChange={handleInput}
      />
      <Checkbox text=" I agree to the Terms &amp; Condition" />
      <Button onSubmit={submitData}>
        <span>Submit now</span>
      </Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignUpForm;
