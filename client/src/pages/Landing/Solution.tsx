import { BookOpen, CheckCircle, Trophy } from "lucide-react";

export default function Solution() {
  return (
    <section id="solution" className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Everything you need to get <span className="text-primary">Hired.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MockMate is a complete learning and testing platform designed specifically to bridge the gap between college and your first job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">1. Modern Courses</h3>
                <p className="text-muted-foreground leading-relaxed">Learn exactly what the industry demands today. Master React, Node.js, System Design, and Data Structures through our premium video modules.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">2. Rigorous Assignments</h3>
                <p className="text-muted-foreground leading-relaxed">Put your knowledge to the test. Take distraction-free Multiple Choice quizzes that simulate actual technical screening rounds.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-7 h-7 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">3. Verified Scorecards</h3>
                <p className="text-muted-foreground leading-relaxed">Get a public, shareable resume link that proves your technical competency to recruiters, backed by our automated grading engine.</p>
              </div>
            </div>

          </div>

          <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl transform md:rotate-3">
             <div className="w-full h-8 flex gap-2 mb-6">
               <div className="w-3 h-3 rounded-full bg-red-500" />
               <div className="w-3 h-3 rounded-full bg-yellow-500" />
               <div className="w-3 h-3 rounded-full bg-green-500" />
             </div>
             <pre className="text-sm font-mono text-green-400">
               <span className="text-blue-400">const</span> student = <span className="text-yellow-300">new</span> <span className="text-white">MockMateGraduate</span>();
               <br/><br/>
               <span className="text-blue-400">await</span> student.<span className="text-yellow-200">learn</span>(<span className="text-orange-300">'React'</span>);<br/>
               <span className="text-blue-400">await</span> student.<span className="text-yellow-200">passAssignment</span>();<br/>
               <br/>
               console.<span className="text-yellow-200">log</span>(student.status);<br/>
               <span className="text-slate-500">// Output: "HIRED!"</span>
             </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
