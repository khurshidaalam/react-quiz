import Illustration from "../Illustration";
import signUpimage from "../../assets/images/signup.svg";
import SignUpForm from "../SignUpForm";


const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={signUpimage}/>
        <SignUpForm/>
      </div>
    </>
  );
};

export default Signup;
