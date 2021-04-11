import React from "react";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Community from "./components/Community/Community";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
        <Services />
        <Community />
        <Blog />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
