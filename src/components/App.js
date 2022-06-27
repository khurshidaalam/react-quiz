import React from 'react'
import "../styles/App.css";
import Layout from "./Layout";
import Login from './Pages/Login';
// import Home from './Pages/Home';
// import Signup from './Signup';


const App = () =>{
  return (
    <>
    <Layout>
      <Login/>
    </Layout>
    </>
  );
}

export default App;
