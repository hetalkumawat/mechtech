import React from "react";
import Navbar from "./Navbar";

import "./MainPage.css";
import SolutionsServices from "./SolutionsServices";
import HeroSection from "./HeroSection";
import CardsSection from "./CardsSection";
import PartnersSection from "./PartnersSection";
import TestimonialsSection from "./TestimonialsSection";
import FeatureHighlight from "./FeatureHighlight";
import AboutMechaCraft from "./AboutMechaCraft";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <div id="fullpage">
        {/* <Navbar /> */}
        <HeroSection />
        <AboutMechaCraft/>
        <CardsSection/>
        <PartnersSection/>
        <TestimonialsSection/>
        <FeatureHighlight/>
        <Footer/>
        
       
      
    
      
    </div>
  );
};

export default MainPage;

{/* <div className="video-container">
  <video autoPlay loop muted className="background-video">
    <source src="./src/assets/bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div> */}