import Navbar from "./Navbar";
import Hero from "./Hero";
import AIModules from "./AIModules";
import Problem from "./Problem";
import Solution from "./Solution";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import LeadForm from "./LeadForm";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AIModules />
      <Problem />
      <Solution />
      <Pricing />
      <FAQ />
      <LeadForm />
      <Footer />
    </div>
  );
}
