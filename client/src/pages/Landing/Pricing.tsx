import { CheckCircle2, ShieldCheck, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-24 px-6 lg:px-12 bg-slate-50/60 border-y border-slate-200/80">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full inline-block mb-4">
          B2B2C Institutional Pricing
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Campus Partnership & Student Access
        </h2>
        <p className="text-base md:text-lg text-slate-600">
          Complete 1-year access to AI mock interviews, hard & soft skill feedback, aptitude tests, and placement grooming.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* Card 1: College Institutional Partnership */}
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-slate-200 flex flex-col justify-between relative overflow-hidden transition-all">
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-wider uppercase">
            B2B Campus Plan
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">College Enterprise Plan</h3>
            </div>
            <p className="text-slate-600 text-sm mb-6">Direct institutional partnership for 3rd & 4th-year degree student cohorts.</p>
            


            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-700 font-medium text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Unlimited AI Mock Technical & Soft Skill Interviews
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Automated Placement & Internship Readiness Tracking
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> CSV Bulk Cohort Onboarding & Roster Controls
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Institutional Placement Analytics Dashboard
              </li>
            </ul>
          </div>

          <a 
            href="mailto:lionel@equibudx.com"
            className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm block text-center"
          >
            Please contact for pricing
          </a>
        </div>

        {/* Card 2: Individual Student Pass */}
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-slate-200 flex flex-col justify-between relative overflow-hidden transition-all">
          <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-wider uppercase">
            Individual Student
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Individual Student Pass</h3>
            </div>
            <p className="text-slate-600 text-sm mb-6">Self-paced 12-month access to interview prep, scorecards, and skill assessments.</p>
            


            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-700 font-medium text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> AI Avatar Mock Technical & Behavioral Interviews
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Hard & Soft Skill Evaluation Reports
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verifiable Candidate Scorecards & Certificates
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Internship & Job Placement Recommendations
              </li>
            </ul>
          </div>

          <a 
            href="mailto:lionel@equibudx.com"
            className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-500 transition-colors shadow-sm block text-center"
          >
            Please contact for pricing
          </a>
        </div>

      </div>
    </section>
  );
}
