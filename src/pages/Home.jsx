import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import TopProds from "../components/TopProds";
import RegularProds from "../components/RegularProds";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <div className="px-8 md:px-14 lg:px-20 flex flex-col gap-20">
        <WhyChooseUs/>
        <TopProds/>
        <RegularProds/>
        <Banner/>
        <Services />
        <Testimonials/>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
