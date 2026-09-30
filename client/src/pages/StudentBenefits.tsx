import { CheckCircle2, Briefcase, Award, TrendingUp, Code2, Users, Rocket, Laptop } from "lucide-react";
import Navbar from "./Landing/Navbar";
import Footer from "./Landing/Footer";
import { Link } from "react-router-dom";

export default function StudentBenefits() {
  const benefits = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Industry-Curated Curriculum",
      description: "Our syllabus is designed by engineers from top tech companies. You learn exactly what is being used in production today, avoiding outdated academic theories.",
      color: "blue"
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Hands-On Real World Projects",
      description: "Stop building to-do apps. You will build enterprise-grade applications, scalable APIs, and complex architectures that you can proudly showcase on your resume.",
      color: "emerald"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "1:1 Expert Mentorship",
      description: "Get unstuck faster. Our industry mentors provide personalized code reviews, career guidance, and architectural advice throughout your journey.",
      color: "purple"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "100% Placement Assistance",
      description: "We partner with top tech companies to get your resume at the top of the pile. Includes portfolio building, LinkedIn optimization, and direct referrals.",
      color: "amber"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "AI Interview Preparation",
      description: "Don't freeze in your real interviews. Use our proprietary AI interviewer to practice technical and behavioral rounds infinitely until you're perfectly confident.",
      color: "rose"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Continuous Skill Tracking",
      description: "Our dashboard tracks your progress across 36+ deep modules, giving you clear visibility into your strengths and the exact areas you need to improve.",
      color: "indigo"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full inline-block mb-6">
              Why Choose Startworks Learning
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              Transform Your Potential Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">High-Paying Career</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              We bridge the massive gap between college education and industry expectations. Here is exactly what you get when you join our bootcamps.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg
                  ${benefit.color === 'blue' ? 'bg-blue-600 shadow-blue-600/20' : ''}
                  ${benefit.color === 'emerald' ? 'bg-emerald-600 shadow-emerald-600/20' : ''}
                  ${benefit.color === 'purple' ? 'bg-purple-600 shadow-purple-600/20' : ''}
                  ${benefit.color === 'amber' ? 'bg-amber-500 shadow-amber-500/20' : ''}
                  ${benefit.color === 'rose' ? 'bg-rose-500 shadow-rose-500/20' : ''}
                  ${benefit.color === 'indigo' ? 'bg-indigo-600 shadow-indigo-600/20' : ''}
                `}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Ready to accelerate your tech career?
              </h2>
              <p className="text-lg text-slate-300 mb-10">
                Join thousands of students who have transformed their careers through our structured learning paths and AI-powered preparation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/bootcamps"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
                >
                  Explore Bootcamps
                </Link>
                <Link 
                  to="/#apply"
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-bold px-8 py-4 rounded-xl transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
