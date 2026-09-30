import { Link } from 'react-router-dom';
import { ChevronRight, Code, Database, Cloud, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../Landing/Navbar'; // Reuse the existing public navbar
import Footer from '../Landing/Footer'; // Reuse the existing footer

const bootcamps = [
  {
    id: 'full-stack',
    title: 'Full Stack Development',
    badge: 'High Demand',
    description: 'Master frontend engineering, robust backend APIs, relational & NoSQL databases, and full deployment pipelines.',
    icon: <Code className="w-8 h-8 text-blue-500" />,
    color: 'blue',
    curriculum: [
      'Advanced React, Next.js 14 & State Management',
      'Node.js, Express & Fastify Microservices',
      'PostgreSQL, Prisma ORM & MongoDB',
      'Docker containerization & Cloud CI/CD'
    ],
    audience: 'Developers, students, and engineers looking to build scalable modern web apps end-to-end.',
    path: '/student/bootcamp/apply?track=full-stack'
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    badge: 'Enterprise Focus',
    description: 'Design and build enterprise-grade data pipelines, real-time analytics streaming, and scalable data warehouses.',
    icon: <Database className="w-8 h-8 text-emerald-500" />,
    color: 'emerald',
    curriculum: [
      'Advanced SQL & Python for Data Engineering',
      'ETL/ELT Pipelines with Apache Airflow & dbt',
      'Data Warehousing with Snowflake / BigQuery',
      'Distributed Data Processing & Kafka Streaming'
    ],
    audience: 'Software developers, analysts, and math/CS graduates aiming for lucrative data engineering roles.',
    path: '/student/bootcamp/apply?track=data-engineering'
  },
  {
    id: 'solutions-architecture',
    title: 'Solutions Architecture',
    badge: 'Advanced Track',
    description: 'Architect resilient, cost-effective, and highly scalable cloud systems following industry-proven frameworks.',
    icon: <Cloud className="w-8 h-8 text-purple-500" />,
    color: 'purple',
    curriculum: [
      'Cloud System Design (AWS / Azure / GCP)',
      'Microservices, Event-Driven & Serverless Patterns',
      'High Availability, Disaster Recovery & Multi-Region',
      'Enterprise Security, Compliance & FinOps Cost Mastery'
    ],
    audience: 'Experienced developers, DevOps engineers, and tech leads ready to step into architectural leadership.',
    path: '/student/bootcamp/apply?track=solutions-architecture'
  }
];

export default function Bootcamps() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
              <Star className="w-4 h-4" />
              Startworks Learning Elite Cohorts
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
              Launch Your Tech Career <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">With Expert Led Bootcamps</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 font-medium">
              Join intensive, industry-aligned programs designed to transform you into a high-impact professional. Clear the eligibility test to enroll.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bootcamps.map((camp) => (
              <div 
                key={camp.id} 
                className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="absolute top-0 right-0 p-6 pointer-events-none">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-${camp.color}-100 text-${camp.color}-700 border border-${camp.color}-200`}>
                    {camp.badge}
                  </span>
                </div>
                
                <div className={`w-16 h-16 rounded-2xl bg-${camp.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {camp.icon}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3">{camp.title}</h3>
                <p className="text-slate-600 mb-8 font-medium leading-relaxed flex-grow">
                  {camp.description}
                </p>
                
                <div className="mb-8 bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Core Curriculum</h4>
                  <ul className="space-y-3">
                    {camp.curriculum.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 text-${camp.color}-500 shrink-0 mt-0.5`} />
                        <span className="text-sm text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <p className="text-sm text-slate-600 font-medium">
                    <span className="font-bold text-slate-900">Who this is for:</span> {camp.audience}
                  </p>
                </div>

                <Link 
                  to={camp.path}
                  className="mt-auto w-full group/btn relative overflow-hidden rounded-xl bg-slate-900 text-white font-bold py-4 px-6 flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Apply & Take Eligibility Test
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
