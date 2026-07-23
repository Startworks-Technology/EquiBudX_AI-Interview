import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-md border-b border-gray-100 z-50 px-6 lg:px-12 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-black tracking-tighter text-primary">MockMate.</h1>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#problem" className="hover:text-foreground transition-colors">For Colleges</a>
          <a href="#solution" className="hover:text-foreground transition-colors">For Students</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate('/login')}
          className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          Login
        </button>
        <button 
          onClick={() => navigate('/login')}
          className="text-sm font-semibold bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-sm"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
