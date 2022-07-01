import React from "react";
import "../styles/App.css";
import Layout from "./Layout";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<PublicRoute />}>
              <Route exact path="/signup" element={<Signup />} />
            </Route>
            <Route exact path="/login" element={<PublicRoute />}>
              <Route exact path="/login" element={<Login />} />
            </Route>
            <Route exact path="/quiz" element={<PrivateRoute />}>
              <Route exact path="/quiz" element={<Quiz />} />
            </Route>
            <Route exact path="/result" element={<PrivateRoute />}>
              <Route exact path="/result" element={<Result />} />
            </Route>
            <Route path="*" element={"404 not found"} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
