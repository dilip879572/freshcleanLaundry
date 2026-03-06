import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Laundryoffers from "../../Pages/Offerlaundry/Laundryoffers";
import LaundryPrice from "../../Pages/LaundryPrice/LaundryPrice";
import Maxima from "../../Pages/Maxima/MaximaHero";
import TheaderHeader from "../TheaderHeader/TheaderHeader";
import Booknowlaundry from "../../Pages/Booknowlaundry/Booknowlaundry";
import ExpertServices from "../../Pages/ExpertServices/ExpertServices";
import PressOnly from "../../Pages/PressOnly/PressOnly";
import DryCleaning from "../../Pages/DryCleaning/DryCleaning";
import WashFold from "../../Pages/WashFold/WashFold";
import JaiMaRobe from "../../Pages/JaiMaRobe/JaiMaRobe";
import Finishing from "../../Pages/Finishing/Finishing";
import WhitePlus from "../../Pages/WhitePlus/WhitePlus";
import StainPrevention from "../../Pages/StainPrevention/StainPrevention";
import Starching from "../../Pages/Starching/Starching";
import ShoeCare from "../../Pages/ShoeCare/ShoeCare";
import BagCareSection from "../../Pages/BagCareSection/BagCareSection";
import SanitizationService from "../../Pages/SanitizationService/SanitizationService";
import CarpetCleaning from "../../Pages/CarpetCleaning/CarpetCleaning";
import MonthlyPlans from "../../Pages/MonthlyPlans/MonthlyPlans";
import HeroSlider from "../../Pages/Home/HeroSlider/HeroSection";
import About from "../../Pages/About/About";
import Sustainability from "../../Pages/Sustainability/Sustainability";
import ServiceAreas from "../../Pages/ServiceAreas/ServiceAreas";
import Faqloundryqustions from "../../Pages/Faqloundryqustions/Faqloundryqustions";
import AreaDetail from "../../Pages/ServiceAreas/AreaDetail";
import ConditionsTeams  from "../../Pages/ConditionsTeams/ConditionsTeams";
import ContactUs from "../../Pages/ContactUs/ContactUs";
export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* Top Moving Header */}
      {/* <TheaderHeader /> */}
      <Header />
      <Routes>
        <Route path="/" element={<HeroSlider />} />
        <Route path="/laundry-offer" element={<Laundryoffers />} />
        <Route path="/laundry-price" element={<LaundryPrice />} />
        <Route path="/maxima" element={<Maxima />} />
        <Route path="/booknow-laundry" element={<Booknowlaundry />} />
        <Route path="/expert-services" element={<ExpertServices />} />
        <Route path="/press-only" element={<PressOnly />} />
        <Route path="/drycleaning" element={<DryCleaning />} />
        <Route path="/washfold" element={<WashFold />} />
        <Route path="/jaimarobe" element={<JaiMaRobe />} />
        <Route path="/finishing" element={<Finishing />} />
        <Route path="/whiteplus" element={<WhitePlus />} />
        <Route path="/stain-revention" element={<StainPrevention />} />
        <Route path="/starching" element={<Starching />} />
        <Route path="/shoe-care" element={<ShoeCare />} />
        <Route path="/bagcare-section" element={<BagCareSection />} />
        <Route path="/sanitization-service" element={<SanitizationService />} />
        <Route path="/carpet-cleaning" element={<CarpetCleaning />} />
        <Route path="/monthly-plans" element={<MonthlyPlans />} />
        <Route path="/about" element={<About />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/area/:name" element={<AreaDetail />} />

        <Route path="/service-sreas" element={<ServiceAreas />} />
        <Route path="/faqloundry-qustions" element={<Faqloundryqustions />} />
                <Route path="/conditions-teams" element={<ConditionsTeams />} />

                                <Route path="/contactus" element={<ContactUs/>} />


        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
