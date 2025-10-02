import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import ServicesCarousel from "./components/Service";
import ClientReviews from "./components/ClientReviews";
import FooterSection from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutMetricsTimeline from "./components/About";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/about" element={<AboutMetricsTimeline />} />
      </Routes> */}
      <Hero />
      <HeroSection />
      <ServicesCarousel />
      <ClientReviews />
      <FooterSection />
    </>
  );
};

export default App;
