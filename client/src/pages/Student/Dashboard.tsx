import { useNavigate, useSearchParams } from 'react-router-dom';
import { BookOpen, CheckCircle, Layers, Sparkles } from 'lucide-react';
import { coursesData, categoriesData } from '../../data';

export default function Dashboard() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategoryId = searchParams.get('category') || 'all';

  const setActiveCategoryId = (catId: string) => {
    if (catId !== 'all') {
      setSearchParams({ category: catId });
    } else {
      setSearchParams({});
    }
  };

  const filteredCourses = activeCategoryId === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.categoryId === activeCategoryId);

  return (
    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Hero Banner */}
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Structured Learning Paths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Curriculum Dashboard</h2>
            <p className="text-slate-300 text-base sm:text-lg mb-6">
              Master your craft through our structured technology modules.
            </p>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-white">{coursesData.length}</div>
                <div className="text-xs text-slate-300">Total Courses</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-white">
                  {coursesData.reduce((acc, c) => acc + c.modules.length, 0)}+
                </div>
                <div className="text-xs text-slate-300">Deep Modules</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-indigo-300">100%</div>
                <div className="text-xs text-slate-300">Interactive Quiz Quizzes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Clickable Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 border-b border-border hide-scrollbar">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2
              ${activeCategoryId === 'all' 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white border border-border text-foreground hover:border-primary/50'}`}
          >
            <Layers className="w-4 h-4" /> All Courses
          </button>
          
          {categoriesData.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategoryId(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all
                ${activeCategoryId === category.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white border border-border text-foreground hover:border-primary/50'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => {
              const category = categoriesData.find(c => c.id === course.categoryId);
              return (
                <div 
                  key={course.id}
                  className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col"
                  onClick={() => navigate(`/student/course/${course.id}`)}
                >
                  <div className="h-48 bg-slate-100 overflow-hidden relative">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                      {category?.name || 'Course'}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-1">{course.description}</p>
                    
                    <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground mt-auto">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4" /> {course.modules.length} Modules
                      </div>
                      <div className="flex items-center gap-1.5 text-accent">
                        <CheckCircle className="w-4 h-4" /> Final Exam
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-border border-dashed">
            <h3 className="text-lg font-bold text-muted-foreground">No courses available in this category yet.</h3>
          </div>
        )}
      </main>
    </>
  );
}
