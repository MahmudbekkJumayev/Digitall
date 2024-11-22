"use client";
import Header from "@/pages/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Service from "@/pages/Service/Service";
import Consulting from "@/pages/Consulting/Consulting";

import Contact from "@/pages/Contact/Contact";
import Footer from "@/pages/Footer/Footer";
import Work from "@/pages/work/Work";

const scrollToSection = () => {
  document.querySelector("#section-id").scrollIntoView({
    behavior: "smooth",
  });
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Service />
      {/* <Team /> */}
      {/* <Technologies /> */}
      {/* <System /> */}
      {/* <Design />
      <Optimization /> */}
      <Consulting />
      
     
      <Work /> 
      <Contact />
      <Footer />
    </main>
  );
}
