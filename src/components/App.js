import React from 'react'
import "../styles/App.css";
import Layout from "./Layout";
// import Login from './Pages/Login';
// import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
// import Home from './Pages/Home';
// import Signup from './Signup';


const App = () =>{
  return (
    <>
    <Layout>
      <Result/>
    </Layout>
    </>
  );
}

export default App;
