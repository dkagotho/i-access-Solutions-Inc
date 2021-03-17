import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import OurServices from "./components/pages/OurServices";
import OurPartners from "./components/pages/OurPartners";
import ContactUs from "./components/pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/our-services" component={OurServices} />
          <Route path="/our-partners" component={OurPartners} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
