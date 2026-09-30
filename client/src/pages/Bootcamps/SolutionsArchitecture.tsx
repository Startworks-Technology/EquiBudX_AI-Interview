import Navbar from '../Landing/Navbar';
import Footer from '../Landing/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle2, Server, Rocket, Cloud, Shield } from 'lucide-react';

export default function SolutionsArchitecture() {
  const highlights = [
    "AWS, Azure, and Google Cloud design patterns",
    "Microservices architecture and containerization (Docker & Kubernetes)",
    "Infrastructure as Code (Terraform & CloudFormation)",
    "Security, compliance, and disaster recovery strategies"
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200/80 text-purple-700 text-sm font-bold px-4 py-2 rounded-full mb-6">
              <Cloud className="w-4 h-4" /> Intensive Bootcamp
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Solutions <br/><span className="text-purple-600">Architecture</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Design the systems of tomorrow. Master cloud-native architectures, scalable infrastructure, and enterprise-grade security to lead technical teams.
            </p>
            
            <div className="space-y-4 mb-10">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link to="/apply" className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all flex items-center gap-2">
                Apply for this Track <Rocket className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">Curriculum Overview</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-black text-slate-400">01</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Cloud Infrastructure</h4>
                  <p className="text-slate-500 text-sm mt-1">Deep dive into AWS services, networking, and compute resource optimization.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-black text-slate-400">02</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Containerization</h4>
                  <p className="text-slate-500 text-sm mt-1">Deploy and orchestrate distributed microservices using Docker and Kubernetes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-black text-slate-400">03</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">System Design</h4>
                  <p className="text-slate-500 text-sm mt-1">Architect highly available, fault-tolerant systems for millions of concurrent users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
