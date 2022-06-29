import Illustration from "../Illustration";
import LoginImage from "../../assets/images/login.svg";
import LoginForm from "../LoginForm";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration src={LoginImage} />
        <LoginForm/>
      </div>
    </>
  );
};

export default Login;
