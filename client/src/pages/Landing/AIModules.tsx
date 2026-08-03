import { motion } from "framer-motion";
import { Bot, FileCheck, BookOpen, Award, ArrowRight, CheckCircle2, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AIModules() {
  const navigate = useNavigate();

  const realAppModules = [
    {
      id: "interview",
      title: "1. AI Interactive Interview Room",
      icon: Bot,
      badge: "Real-time AI Feedback",
      description: "Take dynamic Technical, System Design, Behavioral, and HR interview rounds. Answer via text or speech, and receive instant AI evaluation reports with role-specific scoring.",
      highlights: [
        "Technical, Behavioral & HR Round Configurations",
        "Real-Time Speech & Text Input",
        "Instant AI Strengths & Weaknesses Feedback Report"
      ]
    },
    {
      id: "quiz",
      title: "2. Distraction-Free MCQ Quiz Room",
      icon: FileCheck,
      badge: "Timed Screening Tests",
      description: "Simulate corporate screening tests with full-screen, distraction-free MCQ quizzes across Data Structures, React, Node.js, and System Design with automatic scoring.",
      highlights: [
        "Timed Screening Assessments",
        "Distraction-Free Anti-Cheating Interface",
        "Automated Instant Grading & Explanation Breakdown"
      ]
    },
    {
      id: "courses",
      title: "3. Modern Curriculum & Video Courses",
      icon: BookOpen,
      badge: "Structured Learning Modules",
      description: "Access curated video learning tracks tailored for degree students, featuring interactive chapter checklists, lesson notes, downloadable resources, and progress tracking.",
      highlights: [
        "Full-Stack, Data Structures & System Design Tracks",
        "Interactive Chapter Checklists & Video Player",
        "Resource Materials & Project Checkpoints"
      ]
    },
    {
      id: "scorecard",
      title: "4. Verifiable Performance Scorecard",
      icon: Award,
      badge: "Recruiter Credentials",
      description: "Build a verified academic and technical transcript displaying your overall grade, quiz scores, interview feedback ratings, and shareable public profile link.",
      highlights: [
        "Shareable Public Profile Link for Recruiters",
        "Verifiable Overall Technical Grade (A+, A, B)",
        "Detailed Performance Breakdown Transcript"
      ]
    }
  ];

  return (
    <section id="ai-modules" className="py-24 px-6 lg:px-12 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-4">
            Platform Features & Modules
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Explore the Core Application Modules
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Everything integrated inside EquiBudX — built specifically to train degree students and empower college placement cells.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {realAppModules.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-8 hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-slate-200/80 pt-5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Features Inside</p>
                  <ul className="space-y-2 mb-6">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => navigate('/register')}
                    className="w-full bg-white border border-slate-200 hover:border-blue-500 text-slate-800 hover:text-blue-600 font-semibold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    Open {item.title.split('.')[1]} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Demo Banner CTA */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Video className="w-4 h-4" /> Full Application Ready
            </div>
            <h3 className="text-2xl font-bold">Ready to Start Preparing for Campus Placements?</h3>
            <p className="text-sm text-slate-300 max-w-xl">Create your student account in 5 seconds and access all interview rooms, courses, and scorecards.</p>
          </div>
          <button 
            onClick={() => navigate('/register')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex-shrink-0 flex items-center gap-2"
          >
            Sign Up Instantly <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
