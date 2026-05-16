import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

function Landing() {

  const location = useLocation();

  useEffect(() => {

    if (location.hash) {

      const element = document.querySelector(
        location.hash
      );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <FAQ />
      <Footer />
    </>
  );
}

export default Landing;