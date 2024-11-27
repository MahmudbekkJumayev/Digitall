"use client";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Service from "@/components/Service/Service";
import Consulting from "@/components/Consulting/Consulting";

import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Work from "@/components/work/Work";

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
