import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import LoginImage from "../../assets/images/login.svg";
import {Link} from "react-router-dom";

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

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
