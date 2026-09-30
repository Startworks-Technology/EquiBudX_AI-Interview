import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-foreground text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Your dream job won't wait.</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-md">Join Startworks Learning today and start building the technical skills you actually need to get hired.</p>
          <button 
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
          >
            Start your first course
          </button>
        </div>
        
        <div className="text-left md:text-right">
          <h1 className="text-2xl font-black tracking-tighter text-white mb-4">Startworks Learning.</h1>
          <p className="text-slate-500 text-sm mb-1">© {new Date().getFullYear()} Startworks Learning Inc. All rights reserved.</p>
          <p className="text-slate-500 text-sm">
            Built by <a href="https://startworks.in" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 font-bold transition-colors">Startworks</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
