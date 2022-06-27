import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import LoginImage from "../../assets/images/login.svg";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration src={LoginImage} />
        <Form className={`${classes.login} form`}>
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

          <Button><span>Login now</span></Button>

          <div class="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
