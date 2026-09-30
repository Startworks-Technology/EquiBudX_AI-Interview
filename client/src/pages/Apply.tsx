import Navbar from './Landing/Navbar';
import Footer from './Landing/Footer';
import LeadForm from './Landing/LeadForm';

export default function Apply() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* The LeadForm has its own padding and background styles */}
        <LeadForm />
      </main>

      <Footer />
    </div>
  );
}
