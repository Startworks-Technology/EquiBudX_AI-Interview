import Navbar from '../Landing/Navbar';
import Footer from '../Landing/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle2, Code2, Server, Database, Rocket } from 'lucide-react';

export default function FullStack() {
  const highlights = [
    "Frontend mastery with React, Next.js, and Tailwind CSS",
    "Backend engineering with Node.js, Express, and PostgreSQL",
    "API Design (REST & GraphQL) and Authentication",
    "Cloud deployment and CI/CD pipelines"
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-blue-700 text-sm font-bold px-4 py-2 rounded-full mb-6">
              <Code2 className="w-4 h-4" /> Intensive Bootcamp
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Full Stack <br/><span className="text-blue-600">Web Development</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Master the entire web stack. Build scalable, enterprise-grade applications from scratch and become a highly sought-after Full Stack Engineer.
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
              <Link to="/apply" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2">
                Apply for this Track <Rocket className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">Curriculum Overview</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-black text-slate-400">01</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Frontend Architecture</h4>
                  <p className="text-slate-500 text-sm mt-1">Deep dive into React internals, state management, and responsive design.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-black text-slate-400">02</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Backend & APIs</h4>
                  <p className="text-slate-500 text-sm mt-1">Build robust Node.js servers, secure auth flows, and complex API architectures.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-black text-slate-400">03</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Database Design</h4>
                  <p className="text-slate-500 text-sm mt-1">Schema design, indexing, and complex queries using PostgreSQL and Prisma.</p>
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
