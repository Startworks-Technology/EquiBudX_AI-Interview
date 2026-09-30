import { Bot, BarChart3, Award, CheckCircle2 } from "lucide-react";

export default function Solution() {
  return (
    <section id="solution" className="py-24 px-6 lg:px-12 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Unified Institutional Platform
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            End-to-End Evaluation & Career Readiness Infrastructure
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            EquiBudX provides higher education institutions with an automated AI interview engine, cohort progress tracking, and verifiable candidate credentials.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-600/20">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Adaptive AI Interviews</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Conduct real-time technical and behavioral interview simulations tailored to modern engineering roles, providing instantaneous, objective feedback reports.
              </p>
            </div>
            <ul className="space-y-2 border-t border-slate-200/80 pt-5 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Real-time Speech & Text Evaluation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Standardized Scoring Rubrics</li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-600/20">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Campus Placement Analytics</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Equip placement officers and department heads with administrative dashboards to monitor student participation, skill gaps, and readiness benchmarks.
              </p>
            </div>
            <ul className="space-y-2 border-t border-slate-200/80 pt-5 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Cohort Roster & CSV Onboarding</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Institutional Administrative Controls</li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-6 shadow-md shadow-purple-600/20">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Verifiable Skill Credentials</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Generate shareable, tamper-proof candidate scorecards that demonstrate verified technical proficiency directly to corporate recruiting partners.
              </p>
            </div>
            <ul className="space-y-2 border-t border-slate-200/80 pt-5 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Automated Assessment Evaluation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Public Shareable Reports</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
