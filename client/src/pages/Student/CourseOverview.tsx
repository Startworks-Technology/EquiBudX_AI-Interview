import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Layers } from 'lucide-react';
import { coursesData } from '../../data';

export default function CourseOverview() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = coursesData.find(c => c.id === courseId);

  if (!course) {
    return <div className="p-12 text-center text-red-500">Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <header className="h-16 border-b border-border bg-white flex items-center px-6 flex-shrink-0 z-10 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors mr-4" title="Go Back">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <span className="text-muted-foreground font-medium text-sm">Return to Previous Page</span>
      </header>

      {/* Hero Section */}
      <section className="bg-white border-b border-border py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover shadow-lg border border-slate-100 flex-shrink-0"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              {course.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
              Learn and master concepts to achieve fluency. 
              All the concepts covered are explained in the context of language-specific paradigms and conventions.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 text-slate-500 font-medium bg-slate-100 px-4 py-2 rounded-lg">
                <Layers className="w-5 h-5 text-primary" />
                {course.modules.length} Key Concepts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Grid */}
      <main className="flex-1 py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary" />
            Concept Map
          </h2>
          
          {course.id === 'full-stack' ? (
            <div className="space-y-12">
              {/* Frontend Track */}
              <div>
                <h3 className="text-xl font-bold text-slate-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black">1</span>
                  Frontend Track
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {course.modules.slice(0, 14).map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => navigate(`/student/course/${course.id}/module/${mod.id}`)}
                      className="group bg-white border border-slate-200 rounded-2xl p-6 text-left hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
                    >
                      <div className="absolute -right-8 -top-8 w-24 h-24 bg-blue-500/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out" />
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors relative z-10">
                        {mod.title}
                      </h3>
                      <div className="mt-auto relative z-10 flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Read Concept <ArrowLeft className="w-4 h-4 rotate-180" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Backend Track */}
              <div>
                <h3 className="text-xl font-bold text-slate-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">2</span>
                  Backend Track
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {course.modules.slice(14).map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => navigate(`/student/course/${course.id}/module/${mod.id}`)}
                      className="group bg-white border border-slate-200 rounded-2xl p-6 text-left hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
                    >
                      <div className="absolute -right-8 -top-8 w-24 h-24 bg-emerald-500/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out" />
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors relative z-10">
                        {mod.title}
                      </h3>
                      <div className="mt-auto relative z-10 flex items-center gap-2 text-sm font-bold text-emerald-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Read Concept <ArrowLeft className="w-4 h-4 rotate-180" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {course.modules.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => navigate(`/student/course/${course.id}/module/${mod.id}`)}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 text-left hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
                >
                  {/* Decorative background shape */}
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out" />
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors relative z-10">
                    {mod.title}
                  </h3>
                  
                  <div className="mt-auto relative z-10 flex items-center gap-2 text-sm font-bold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Read Concept <ArrowLeft className="w-4 h-4 rotate-180" />
                  </div>
                </button>
              ))}
            </div>
          )}
          
          {/* Final Challenge Card */}
          <div className="mt-12">
            <button
              onClick={() => navigate(`/quiz/${course.id}`)}
              className="w-full sm:w-auto bg-gradient-to-r from-accent to-pink-500 text-white font-black text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
            >
              Take Final Certification
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
