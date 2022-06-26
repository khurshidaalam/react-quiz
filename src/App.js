import React from 'react'
import "./styles/App.css";
import Layout from "./components/Layout";
import Home from './components/Pages/Home';


const App = () =>{
  return (
    <>
    <Home/>
    <Layout>
      <Home/>
    </Layout>
    hello  from app
    </>
  );
}

export default App;
