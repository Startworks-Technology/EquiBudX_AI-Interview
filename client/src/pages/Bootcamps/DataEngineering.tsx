import Navbar from '../Landing/Navbar';
import Footer from '../Landing/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle2, Database, Rocket, ServerCrash, Cpu } from 'lucide-react';

export default function DataEngineering() {
  const highlights = [
    "Big Data architecture and distributed systems",
    "Data pipeline construction with Apache Airflow and Spark",
    "Data warehousing with Snowflake and Redshift",
    "Real-time streaming with Apache Kafka"
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-sm font-bold px-4 py-2 rounded-full mb-6">
              <Database className="w-4 h-4" /> Intensive Bootcamp
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Data <br/><span className="text-emerald-600">Engineering</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Build the backbone of modern AI. Learn to design, build, and manage massive data infrastructure and ETL pipelines that power today's largest enterprises.
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
              <Link to="/apply" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2">
                Apply for this Track <Rocket className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">Curriculum Overview</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-black text-slate-400">01</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Python & SQL Mastery</h4>
                  <p className="text-slate-500 text-sm mt-1">Advanced data manipulation, complex aggregations, and performance tuning.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-black text-slate-400">02</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">ETL & Orchestration</h4>
                  <p className="text-slate-500 text-sm mt-1">Build automated, fault-tolerant data pipelines using Apache Airflow.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-black text-slate-400">03</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Data Warehousing</h4>
                  <p className="text-slate-500 text-sm mt-1">Design star schemas and optimize storage with modern cloud data warehouses.</p>
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
