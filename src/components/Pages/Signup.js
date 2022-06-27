import classes from "../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import signUpimage from "../assets/images/signup.svg";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={signUpimage}/>
        <Form className={`${classes.signup} form`}>
          <TextInput type="text" placeholder="enter your name" icon="person" />
          <TextInput
            type="email"
            placeholder="enter your email"
            icon="alternate_email"
          />
          <TextInput
            type="password"
            placeholder="enter your password"
            icon="lock"
          />
          <TextInput
            type="password"
            placeholder="confirm your password"
            icon="lock_clock"
          />
          <Checkbox text=" I agree to the Terms &amp; Condition" />
          <Button><span>Submit now</span></Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
