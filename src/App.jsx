import Navbar from "@/components/navbar/NavbarInicio";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import Showcase from "@/components/landing/Showcase";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <FAQ />
      <Footer />
      <Showcase />
    </div>
  );
}

export default App;
