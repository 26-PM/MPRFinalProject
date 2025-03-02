import React from "react";
// import styles from "./App.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import FeaturedNGOs from "../components/FeaturedNGOs/FeaturedNGOs";
import DonationCategories from "../components/DonationCategories/DonationCategories";
import ImpactStats from "../components/ImpactStats/ImpactStats";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import Testimonials from "../components/Testimonials/Testimonials";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";

function LandingPage() {
  return (
    <div>
      <Header />

      <Hero />
      <HowItWorks />
      <DonationCategories />
      <FeaturedNGOs />
      <ImpactStats />
      <QuoteSection />

      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default LandingPage;
