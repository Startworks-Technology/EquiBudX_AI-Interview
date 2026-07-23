import { XCircle } from "lucide-react";

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 lg:px-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8">
          The College Syllabus is <span className="text-red-500">Broken.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">
          Degree colleges are teaching outdated theory. Industry is demanding practical skills in modern tech stacks. This massive gap is why thousands of students fail their technical coding rounds every single year.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <XCircle className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Outdated Theory</h3>
            <p className="text-muted-foreground text-sm">Learning languages that haven't been used in production for a decade.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <XCircle className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">No Practical Tests</h3>
            <p className="text-muted-foreground text-sm">Passing exams by memorization, but failing when asked to write actual code.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <XCircle className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Zero Proof</h3>
            <p className="text-muted-foreground text-sm">Having no verified way to show recruiters that you actually know the tech stack.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
