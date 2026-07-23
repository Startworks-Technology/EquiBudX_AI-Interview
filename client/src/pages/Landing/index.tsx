import Navbar from "./Navbar";
import Hero from "./Hero";
import Problem from "./Problem";
import Solution from "./Solution";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
