import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  BookOpen, CheckCircle, ArrowLeft, PlayCircle, ChevronLeft, 
  ChevronRight, Copy, Check, Menu, X, Sparkles, AlertCircle
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkBreaks from 'remark-breaks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { coursesData } from '../../data';

// Custom CodeBlock component with Copy button
function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-lg not-prose">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs text-slate-400">
        <div className="flex items-center gap-2 font-mono">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
          <span className="ml-2 text-slate-300 font-bold uppercase tracking-wider">{language || 'code'}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all font-medium"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>

      {/* Code Area */}
      <SyntaxHighlighter
        children={code}
        style={vscDarkPlus as any}
        language={language || 'text'}
        PreTag="div"
        customStyle={{ margin: 0, padding: '1.25rem', background: 'transparent', fontSize: '0.875rem' }}
      />
    </div>
  );
}

export default function CourseViewer() {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const course = coursesData.find(c => c.id === courseId);
  const activeModuleId = moduleId || course?.modules[0]?.id;

  // Auto-scroll to top when module changes
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeModuleId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="bg-white p-8 rounded-2xl border border-red-200 shadow-md text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-slate-800 mb-2">Course Not Found</h2>
          <p className="text-slate-600 mb-6">The requested course module does not exist or has been moved.</p>
          <button onClick={() => navigate('/student/dashboard')} className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl">
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const activeModuleIndex = course.modules.findIndex(m => m.id === activeModuleId);
  const activeModule = course.modules[activeModuleIndex];

  const cleanTitle = (rawTitle: string, index: number) => {
    if (rawTitle.startsWith('Module') || rawTitle.startsWith('Phase')) {
      return rawTitle;
    }
    const cleaned = rawTitle.replace(/^\d+[\.\s\-]+/, '');
    return `${index + 1}. ${cleaned}`;
  };

  const renderModuleButton = (mod: any, idx: number) => {
    const isActive = activeModuleId === mod.id;
    return (
      <button 
        key={mod.id}
        onClick={() => {
          navigate(`/student/course/${course.id}/module/${mod.id}`);
          setMobileSidebarOpen(false);
        }}
        className={`w-full text-left px-3.5 py-3 rounded-xl flex items-start gap-3 transition-all ${
          isActive 
            ? 'bg-primary/10 text-primary font-bold border-l-4 border-primary shadow-sm' 
            : 'hover:bg-slate-100 text-slate-700 font-medium'
        }`}
      >
        <div className={`mt-0.5 flex-shrink-0 ${isActive ? 'text-primary' : 'text-slate-400'}`}>
          <BookOpen className="w-4 h-4" />
        </div>
        <span className="text-sm leading-snug">{cleanTitle(mod.title, idx)}</span>
      </button>
    );
  };

  const handleNext = () => {
    if (activeModuleIndex < course.modules.length - 1) {
      navigate(`/student/course/${course.id}/module/${course.modules[activeModuleIndex + 1].id}`);
    } else {
      navigate(`/quiz/${course.id}`);
    }
  };

  const handlePrev = () => {
    if (activeModuleIndex > 0) {
      navigate(`/student/course/${course.id}/module/${course.modules[activeModuleIndex - 1].id}`);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      {/* Top Navbar */}
      <header className="h-16 border-b border-border bg-white flex items-center justify-between px-4 sm:px-6 flex-shrink-0 z-20 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} 
            className="p-2 hover:bg-slate-100 rounded-lg lg:hidden text-slate-700"
            aria-label="Toggle Navigation"
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
            title="Go Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-bold text-foreground line-clamp-1 text-sm sm:text-base">{course.title}</h1>
            <span className="text-xs text-muted-foreground hidden sm:block">
              Module {activeModuleIndex + 1} of {course.modules.length}
            </span>
          </div>
        </div>
        <button 
          onClick={() => navigate(`/quiz/${course.id}`)}
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-sm"
        >
          <PlayCircle className="w-4 h-4" /> Certification Exam
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar Backdrop for Mobile */}
        {mobileSidebarOpen && (
          <div 
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          />
        )}

        {/* Sidebar Navigation */}
        <aside className={`
          fixed lg:static top-16 bottom-0 left-0 w-80 border-r border-border bg-white overflow-y-auto flex-shrink-0 z-40 transition-transform duration-300 shadow-xl lg:shadow-none
          ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-black uppercase tracking-wider text-muted-foreground">Course Content</h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {course.modules.length} Topics
              </span>
            </div>

            {course.id === 'full-stack' ? (
              <>
                <div className="mb-3 mt-2 px-2 text-[10px] font-black uppercase tracking-widest text-blue-500">
                  Frontend Track
                </div>
                <div className="space-y-1 mb-6">
                  {course.modules.slice(0, 14).map((mod, idx) => renderModuleButton(mod, idx))}
                </div>
                
                <div className="mb-3 mt-6 px-2 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                  Backend Track
                </div>
                <div className="space-y-1">
                  {course.modules.slice(14).map((mod, idx) => renderModuleButton(mod, idx + 14))}
                </div>
              </>
            ) : (
              <div className="space-y-1">
                {course.modules.map((mod, idx) => renderModuleButton(mod, idx))}
              </div>
            )}

            <h2 className="text-xs font-black uppercase tracking-wider text-muted-foreground mt-8 mb-4">Final Certification</h2>
            <button 
              onClick={() => navigate(`/quiz/${course.id}`)}
              className="w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all group"
            >
              <div className="text-emerald-600">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-emerald-950 block">Final Assignment Exam</span>
                <span className="text-xs text-emerald-700">Test your mastery</span>
              </div>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-8 lg:p-12 scroll-smooth">
          <div className="max-w-4xl mx-auto">
            {activeModule ? (
              <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 sm:p-10 lg:p-12">
                  <div className="prose prose-slate prose-base sm:prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl sm:prose-h2:text-3xl prose-h3:text-xl prose-a:text-primary hover:prose-a:text-primary/80">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkBreaks]}
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        code({ node, className, children, ...props }: any) {
                          const match = /language-(\w+)/.exec(className || '');
                          const isInline = !match;
                          const rawCode = String(children).replace(/\n$/, '');

                          if (!isInline) {
                            return <CodeBlock language={match[1]} code={rawCode} />;
                          }

                          return (
                            <code {...props} className="bg-slate-100 text-pink-600 px-1.5 py-0.5 rounded-md font-mono text-sm before:content-none after:content-none border border-slate-200">
                              {children}
                            </code>
                          );
                        },
                        blockquote({ children }: any) {
                          return (
                            <div className="my-6 p-5 rounded-2xl bg-indigo-50/70 border-l-4 border-indigo-500 text-indigo-950 not-prose shadow-sm flex items-start gap-3">
                              <Sparkles className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                              <div className="text-sm sm:text-base leading-relaxed">{children}</div>
                            </div>
                          );
                        }
                      }}
                    >
                      {activeModule.content}
                    </ReactMarkdown>
                  </div>
                </div>

                {/* Footer Navigation Buttons */}
                <div className="bg-slate-50 p-6 sm:p-8 border-t border-slate-100 flex items-center justify-between gap-4">
                  <button 
                    onClick={handlePrev}
                    disabled={activeModuleIndex === 0}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>
                  
                  <button 
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg text-sm"
                  >
                    {activeModuleIndex === course.modules.length - 1 ? 'Take Final Exam' : 'Next Topic'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground text-center mt-20">Select a topic to begin reading.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
