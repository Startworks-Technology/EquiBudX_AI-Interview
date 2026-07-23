import { AlertCircle, Target, TrendingDown } from "lucide-react";

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 lg:px-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-4">
          The Institutional Readiness Gap
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
          Bridging the Gap Between Academia & Enterprise Hiring
        </h2>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-16 max-w-3xl mx-auto font-normal">
          Traditional computer science curricula often prioritize theoretical concepts over production-grade engineering standards. This disconnect creates evaluation friction for corporate recruiters and campus placement directors alike.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-slate-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Curricular Divergence</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Lack of exposure to modern frameworks, system design, and production engineering practices required by tech firms.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-slate-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Evaluation Overhead</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Conducting individual 1-on-1 mock interviews for hundreds of campus candidates demands immense faculty bandwidth.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-slate-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Unverified Credentials</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Recruiters struggle to gauge true candidate proficiency from static resumes without verifiable technical scorecards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
