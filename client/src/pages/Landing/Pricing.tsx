import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-24 px-6 lg:px-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
          Invest in your Career.
        </h2>
        <p className="text-lg text-muted-foreground">
          Less than the cost of a weekend dinner, but guarantees you are ready for technical interviews.
        </p>
      </div>

      <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 relative overflow-hidden">
        
        {/* Popular Badge */}
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
          MOST POPULAR
        </div>

        <h3 className="text-2xl font-bold mb-2">Student Annual Pass</h3>
        <p className="text-muted-foreground text-sm mb-6">Full access to all courses and mock assignments for 12 months.</p>
        
        <div className="mb-8">
          <span className="text-5xl font-black text-foreground">₹500</span>
          <span className="text-muted-foreground font-medium"> / year</span>
        </div>

        <button 
          onClick={() => navigate('/login')}
          className="w-full bg-foreground text-white py-4 rounded-xl font-bold text-lg hover:bg-primary transition-colors mb-8"
        >
          Get Started Now
        </button>

        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-foreground font-medium text-sm">
            <CheckCircle2 className="w-5 h-5 text-accent" /> Access to all Premium Courses
          </li>
          <li className="flex items-center gap-3 text-foreground font-medium text-sm">
            <CheckCircle2 className="w-5 h-5 text-accent" /> Unlimited MCQ Assignments
          </li>
          <li className="flex items-center gap-3 text-foreground font-medium text-sm">
            <CheckCircle2 className="w-5 h-5 text-accent" /> Public Verified Scorecard
          </li>
          <li className="flex items-center gap-3 text-foreground font-medium text-sm">
            <CheckCircle2 className="w-5 h-5 text-accent" /> Priority Support
          </li>
        </ul>
      </div>
    </section>
  );
}
