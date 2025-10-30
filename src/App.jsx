import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { FaThemeco } from "react-icons/fa";
const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div className=" dark:bg-black relative">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Services />
      <TrustedBy />
      <AboutUs theme={theme} />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
