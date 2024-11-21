
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import "./styles/dashboard.css";
import Header from "./components/HeaderAndFooter/Header";
import Footer from "./components/HeaderAndFooter/Footer";

const App = () => (
<>
<Header/>
  <Router>
 
    <Routes>
      {routes.map(({ path, Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
    </Routes>
    
  </Router>
  <Footer/>
  </>
);

export default App;
