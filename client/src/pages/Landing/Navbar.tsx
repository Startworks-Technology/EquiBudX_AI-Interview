import { useNavigate, Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md border-b border-slate-200/80 z-50 px-6 lg:px-12 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-slate-900">EquiBudX<span className="text-blue-600">.</span></span>
          <span className="hidden sm:inline-flex items-center gap-1 bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Institutional AI
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#ai-modules" className="hover:text-blue-600 transition-colors">AI Interview Modules</a>
          <a href="#problem" className="hover:text-slate-900 transition-colors">Institutions</a>
          <a href="#solution" className="hover:text-slate-900 transition-colors">Platform Capabilities</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing & Plans</a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate('/login')}
          className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-4 py-2 rounded-lg transition-colors"
        >
          Sign In
        </button>
        <button 
          onClick={() => navigate('/register')}
          className="text-sm font-bold bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-blue-600 transition-all shadow-sm flex items-center gap-2"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
