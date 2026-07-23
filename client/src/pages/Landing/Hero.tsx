import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-background overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6"
          >
            <div className="w-10 h-px bg-foreground" />
            For Ambitious Degree Students
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-foreground">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="block"
            >
              Stop failing tech interviews.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block text-primary mt-2"
            >
              Start passing them.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Master modern tech stacks, take verified mock assignments, and build a public scorecard that proves to employers you are ready to be hired.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <button 
              onClick={() => navigate('/login')}
              className="bg-foreground text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-primary transition-all hover:scale-105 shadow-xl"
            >
              Start For Free <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-4 text-sm text-muted-foreground font-medium">Join 10,000+ students from top degree colleges.</p>
          </motion.div>
        </div>

        {/* Right Content - Visual Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[500px] bg-slate-950 rounded-2xl p-8 border-4 border-slate-900 shadow-2xl overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Abstract IDE Background */}
          <div className="absolute inset-0 opacity-20">
             <pre className="text-accent text-[10px] p-4 font-mono leading-relaxed">
               {`function solve(arr) {
  let map = new Map();
  for(let i=0; i<arr.length; i++) {
    if(map.has(arr[i])) return true;
    map.set(arr[i], true);
  }
  return false;
}`}
             </pre>
          </div>
          
          {/* Mock Scorecard Floating Overlay */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative z-10 bg-white rounded-xl p-6 shadow-2xl w-80 transform rotate-[-2deg]"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Final Result</p>
                <h3 className="font-black text-xl text-foreground">Data Structures</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent">
                <span className="font-bold text-accent">A+</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Arrays & Hashing
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Two Pointers
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Sliding Window
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
