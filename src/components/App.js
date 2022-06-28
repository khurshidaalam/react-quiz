import React from "react";
import "../styles/App.css";
import Layout from "./Layout";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";

const App = () => {
  return (
    
      <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/quiz" element={<Quiz />} />
            <Route exact path="/result" element={<Result />} />
            <Route path="*" element={"404 not found"} />
          </Routes>
          </Layout>
          </AuthProvider>
      </BrowserRouter>
    
  );
};

export default App;
