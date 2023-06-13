import React, { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Login";
import About from "./components/About";
import Feature from "./components/Feature";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import { GreetingContext } from "./components/Login";
import ParentComponent from "./components/ParentComponent";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Feature />
      <Booking />
      <Footer />
    </div>
  );
};

export default Home;
