import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Bot, Brain, Award, GraduationCap, CheckCircle2, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 lg:pt-40 pb-20 px-6 lg:px-12 bg-white overflow-hidden border-b border-slate-100">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      
      {/* Soft Indigo Ambient Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            AI Interview Preparation & Placement SaaS
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="block"
            >
              Crack Technical & Soft-Skill
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block text-blue-600 mt-1.5"
            >
              AI Interviews Before Your First Job
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal"
          >
            Grooming 3rd & 4th year degree students with AI mock interviews, hard & soft skill feedback, aptitudes, and real-time recommendations for top internships and campus placements.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button 
              onClick={() => navigate('/register')}
              className="bg-slate-900 text-white px-7 py-3.5 rounded-xl font-bold text-base flex items-center gap-2.5 hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:scale-[1.01]"
            >
              Start AI Mock Interview <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="bg-slate-50 text-slate-700 border border-slate-200/90 px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-slate-100 hover:text-slate-900 transition-all"
            >
              Partnered College Portal
            </button>
          </motion.div>

          {/* Platform Highlights Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-6 text-slate-500 text-xs font-medium"
          >
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-blue-600" />
              <span>AI Avatar Interviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-emerald-600" />
              <span>Hard & Soft Skill Feedback</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span>Campus Partnerships</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Sleek Light Visual Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 lg:p-8 shadow-xl shadow-slate-200/50"
        >
          {/* Card Header Banner */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 mb-5 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">AI Technical Interviewer</p>
                <p className="text-[11px] text-slate-500">Evaluating: Data Structures & Communication</p>
              </div>
            </div>
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Session
            </span>
          </div>
          
          {/* Detailed Skill Evaluation Cards */}
          <div className="space-y-3">
            <div className="bg-white border border-slate-200/80 p-4 rounded-xl flex items-center justify-between shadow-sm">
              <div>
                <p className="text-xs font-medium text-slate-500">Technical Hard Skills</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">React, Node.js & System Design</p>
              </div>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80">92/100</span>
            </div>

            <div className="bg-white border border-slate-200/80 p-4 rounded-xl flex items-center justify-between shadow-sm">
              <div>
                <p className="text-xs font-medium text-slate-500">Soft Skills & Communication</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">Confidence, Speech Pace & Delivery</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/80">Grade A</span>
            </div>

            <div className="bg-white border border-slate-200/80 p-4 rounded-xl flex items-center justify-between shadow-sm">
              <div>
                <p className="text-xs font-medium text-slate-500">Internship & Placement Readiness</p>
                <p className="text-sm font-bold text-emerald-600 mt-0.5">Ready for Tier-1 Company Interviews</p>
              </div>
              <Award className="w-5 h-5 text-amber-500" />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
