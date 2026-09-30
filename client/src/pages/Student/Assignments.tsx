import { useState, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Code, Atom, Server, Database, Network, Palette, FileType, Binary, Globe, GitBranch,
  ChevronRight, ArrowLeft, CheckCircle, XCircle, Clock, Trophy, RotateCcw, BookOpen, X, Download, Loader
} from 'lucide-react';
import html2canvas from 'html2canvas';
import { useAuth } from '../../contexts/AuthContext';

// We'll import from bootcampTests.ts for the pre-screening logic
import { bootcampTests as quizModules } from '../../data/assignments/bootcampTests';
import type { QuizModule } from '../../data/assignments/bootcampTests';

const iconMap: Record<string, React.ReactNode> = {
  'code': <Code className="w-7 h-7" />,
  'atom': <Atom className="w-7 h-7" />,
  'server': <Server className="w-7 h-7" />,
  'database': <Database className="w-7 h-7" />,
  'network': <Network className="w-7 h-7" />,
  'palette': <Palette className="w-7 h-7" />,
  'file-type': <FileType className="w-7 h-7" />,
  'binary': <Binary className="w-7 h-7" />,
  'globe': <Globe className="w-7 h-7" />,
  'git-branch': <GitBranch className="w-7 h-7" />,
};

const colorMap: Record<string, { bg: string; border: string; text: string; light: string; badge: string }> = {
  'yellow':  { bg: 'bg-yellow-50',  border: 'border-yellow-200',  text: 'text-yellow-600',  light: 'bg-yellow-100',  badge: 'bg-yellow-500' },
  'blue':    { bg: 'bg-blue-50',    border: 'border-blue-200',    text: 'text-blue-600',    light: 'bg-blue-100',    badge: 'bg-blue-500' },
  'emerald': { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', light: 'bg-emerald-100', badge: 'bg-emerald-500' },
  'purple':  { bg: 'bg-purple-50',  border: 'border-purple-200',  text: 'text-purple-600',  light: 'bg-purple-100',  badge: 'bg-purple-500' },
  'orange':  { bg: 'bg-orange-50',  border: 'border-orange-200',  text: 'text-orange-600',  light: 'bg-orange-100',  badge: 'bg-orange-500' },
  'pink':    { bg: 'bg-pink-50',    border: 'border-pink-200',    text: 'text-pink-600',    light: 'bg-pink-100',    badge: 'bg-pink-500' },
  'cyan':    { bg: 'bg-cyan-50',    border: 'border-cyan-200',    text: 'text-cyan-600',    light: 'bg-cyan-100',    badge: 'bg-cyan-500' },
  'red':     { bg: 'bg-red-50',     border: 'border-red-200',     text: 'text-red-600',     light: 'bg-red-100',     badge: 'bg-red-500' },
  'indigo':  { bg: 'bg-indigo-50',  border: 'border-indigo-200',  text: 'text-indigo-600',  light: 'bg-indigo-100',  badge: 'bg-indigo-500' },
  'slate':   { bg: 'bg-slate-50',   border: 'border-slate-200',   text: 'text-slate-600',   light: 'bg-slate-100',   badge: 'bg-slate-500' },
};

type ViewState = 
  | { mode: 'grid' }
  | { mode: 'quiz'; moduleId: string; skillId: string; questionIndex: number; answers: (number | null)[] }
  | { mode: 'results'; moduleId: string; skillId: string; answers: (number | null)[] };

export default function PreScreening() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState<ViewState>({ mode: 'grid' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedModuleId = searchParams.get('module');
  const selectedModuleForModal = quizModules.find(m => m.id === selectedModuleId) || null;

  const setSelectedModuleForModal = (mod: QuizModule | null) => {
    if (mod) {
      setSearchParams({ module: mod.id });
    } else {
      setSearchParams({});
    }
  };
  const reportRef = useRef<HTMLDivElement>(null);

  const startQuiz = (moduleId: string, skillId: string) => {
    const mod = quizModules.find(m => m.id === moduleId);
    if (!mod) return;
    const skill = mod.skills.find(s => s.id === skillId);
    if (!skill) return;
    setView({ 
      mode: 'quiz', 
      moduleId, 
      skillId,
      questionIndex: 0, 
      answers: new Array(skill.questions.length).fill(null) 
    });
    setSelectedModuleForModal(null);
  };

  const selectAnswer = (answerIndex: number) => {
    if (view.mode !== 'quiz') return;
    const newAnswers = [...view.answers];
    newAnswers[view.questionIndex] = answerIndex;
    setView({ ...view, answers: newAnswers });
  };

  const nextQuestion = async () => {
    if (view.mode !== 'quiz') return;
    const mod = quizModules.find(m => m.id === view.moduleId);
    if (!mod) return;
    const skill = mod.skills.find(s => s.id === view.skillId);
    if (!skill) return;

    if (view.questionIndex < skill.questions.length - 1) {
      setView({ ...view, questionIndex: view.questionIndex + 1 });
    } else {
      // Quiz complete → Auto-score and submit to backend
      setIsSubmitting(true);
      try {
        const correctCount = view.answers.reduce<number>((acc, answer, idx) => {
          return acc + (answer === skill.questions[idx].correctAnswer ? 1 : 0);
        }, 0);
        const percentage = Math.round((correctCount / skill.questions.length) * 100);

        await fetch('http://localhost:5000/api/bootcamp/score', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ scorePercentage: percentage })
        });
      } catch (err) {
        console.error('Failed to submit score:', err);
      } finally {
        setIsSubmitting(false);
        setView({ mode: 'results', moduleId: view.moduleId, skillId: view.skillId, answers: view.answers });
      }
    }
  };

  const prevQuestion = () => {
    if (view.mode !== 'quiz') return;
    if (view.questionIndex > 0) {
      setView({ ...view, questionIndex: view.questionIndex - 1 });
    }
  };

  // ─── GRID VIEW ───
  if (view.mode === 'grid') {
    return (
      <div className="h-full flex flex-col bg-slate-50">
        <div className="px-8 py-8 bg-white border-b border-slate-200 flex-shrink-0">
          <h1 className="text-3xl font-black text-slate-900 mb-2">Bootcamp Pre-Screening</h1>
          <p className="text-slate-500 font-medium">
            Clear the eligibility test to unlock your bootcamp enrollment.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-slate-900">{quizModules.length} Modules Available</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizModules.map((mod) => {
                const colors = colorMap[mod.color] || colorMap['slate'];
                return (
                  <div
                    key={mod.id}
                    className={`${colors.bg} border ${colors.border} rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group flex flex-col`}
                    onClick={() => setSelectedModuleForModal(mod)}
                  >
                    <div className={`w-14 h-14 rounded-xl ${colors.light} ${colors.text} flex items-center justify-center mb-5`}>
                      {iconMap[mod.icon] || <Code className="w-7 h-7" />}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">{mod.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 flex-1">{mod.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                      <span className="text-sm font-bold text-slate-500">
                        {mod.skills.length} Skills Available
                      </span>
                      <span className={`flex items-center gap-1 text-sm font-bold ${colors.text} group-hover:translate-x-1 transition-transform`}>
                        Start Quiz <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skill Selection Modal */}
        {selectedModuleForModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-in">
              <button 
                onClick={() => setSelectedModuleForModal(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-100`}>
                  {iconMap[selectedModuleForModal.icon] || iconMap['code']}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">{selectedModuleForModal.title}</h3>
                  <p className="text-slate-500 font-medium">Select a specific skill to practice</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {selectedModuleForModal.skills.map(skill => (
                  <button
                    key={skill.id}
                    onClick={() => startQuiz(selectedModuleForModal.id, skill.id)}
                    className="w-full text-left bg-slate-50 border border-slate-200 p-4 rounded-xl hover:border-primary hover:shadow-md transition-all group flex items-center justify-between"
                  >
                    <div>
                      <span className="font-bold text-slate-700 group-hover:text-primary transition-colors block">{skill.title}</span>
                      <span className="text-xs text-slate-500">{skill.questions.length} Questions</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ─── QUIZ VIEW ───
  if (view.mode === 'quiz') {
    const mod = quizModules.find(m => m.id === view.moduleId)!;
    const skill = mod.skills.find(s => s.id === view.skillId)!;
    const question = skill.questions[view.questionIndex];
    const colors = colorMap[mod.color] || colorMap['slate'];
    const selectedAnswer = view.answers[view.questionIndex];
    const answeredCount = view.answers.filter(a => a !== null).length;
    const progress = ((view.questionIndex + 1) / skill.questions.length) * 100;

    return (
      <div className="h-full flex flex-col bg-slate-50">
        {/* Header */}
        <div className="px-6 py-4 bg-white border-b border-slate-200 flex-shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setView({ mode: 'grid' })}
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
            <div>
              <h2 className="text-lg font-bold text-slate-900">{mod.title} <span className="text-slate-400 font-normal ml-2">| {skill.title}</span></h2>
              <p className="text-sm text-slate-500">Question {view.questionIndex + 1} of {skill.questions.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-slate-500">
              {answeredCount}/{skill.questions.length} answered
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-slate-100">
          <div 
            className={`h-full ${colors.badge} transition-all duration-500 ease-out`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-3xl mx-auto">
            {/* Question */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.light} ${colors.text} text-xs font-bold uppercase tracking-wider mb-4`}>
                Question {view.questionIndex + 1}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                {question.question}
              </h3>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {question.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D

                return (
                  <button
                    key={idx}
                    onClick={() => selectAnswer(idx)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-start gap-4 group ${
                      isSelected
                        ? `${colors.border} ${colors.bg} shadow-md scale-[1.01]`
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                      isSelected
                        ? `${colors.badge} text-white`
                        : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}>
                      {optionLetter}
                    </span>
                    <span className={`text-base font-medium pt-1.5 ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-6 py-4 bg-white border-t border-slate-200 flex-shrink-0">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <button
              onClick={prevQuestion}
              disabled={view.questionIndex === 0}
              className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {/* Question dots */}
            <div className="hidden md:flex items-center gap-1.5">
              {skill.questions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setView({ ...view, questionIndex: idx })}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === view.questionIndex
                      ? `${colors.badge} scale-125`
                      : view.answers[idx] !== null
                        ? 'bg-slate-400'
                        : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextQuestion}
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-xl font-bold text-white transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 ${colors.badge} hover:opacity-90`}
            >
              {isSubmitting && view.questionIndex === skill.questions.length - 1 ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                view.questionIndex === skill.questions.length - 1 ? 'Submit Test' : 'Next'
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── RESULTS VIEW ───
  if (view.mode === 'results') {
    const mod = quizModules.find(m => m.id === view.moduleId)!;
    const skill = mod.skills.find(s => s.id === view.skillId)!;
    const colors = colorMap[mod.color] || colorMap['slate'];

    const correctCount = view.answers.reduce<number>((acc, answer, idx) => {
      return acc + (answer === skill.questions[idx].correctAnswer ? 1 : 0);
    }, 0);

    const totalQuestions = skill.questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const skippedCount = view.answers.filter(a => a === null).length;

    let gradeMessage = '';
    let gradeColor = '';
    if (percentage >= 90) { gradeMessage = 'Outstanding! 🌟'; gradeColor = 'text-emerald-600'; }
    else if (percentage >= 70) { gradeMessage = 'Great Job! 👏'; gradeColor = 'text-blue-600'; }
    else if (percentage >= 50) { gradeMessage = 'Good Effort! 💪'; gradeColor = 'text-yellow-600'; }
    else { gradeMessage = 'Keep Practicing! 📚'; gradeColor = 'text-red-600'; }

    return (
      <div className="h-full flex flex-col bg-slate-50">
        {/* Header */}
        <div className="px-6 py-4 bg-white border-b border-slate-200 flex-shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setView({ mode: 'grid' })}
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
            <h2 className="text-lg font-bold text-slate-900">{mod.title} <span className="text-slate-400 font-normal ml-2">| {skill.title}</span> — Results</h2>
          </div>
          
          <button 
            onClick={async () => {
              if (!reportRef.current) return;
              
              // temporarily make it visible for capture
              const el = reportRef.current;
              el.style.display = 'block';
              
              try {
                const canvas = await html2canvas(el, { scale: 2, backgroundColor: "#ffffff" });
                const image = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.href = image;
                link.download = `EquiBudX_Certificate_${mod.title.replace(/\s+/g, '_')}.png`;
                link.click();
              } catch (err) {
                console.error("Failed to download image", err);
              } finally {
                el.style.display = 'none';
              }
            }}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            Download Certificate
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-3xl mx-auto">
            {/* Hidden Certificate for HTML2Canvas */}
            <div ref={reportRef} className="bg-white p-12 border-[16px] border-slate-900 rounded-lg text-center" style={{ width: '1000px', height: '750px', display: 'none', position: 'absolute', top: '-9999px', left: '-9999px' }}>
              <div className="border-4 border-double border-slate-200 p-12 h-full flex flex-col items-center justify-start relative">
                
                <h1 className="text-5xl font-black text-slate-900 uppercase tracking-widest mb-4 mt-6" style={{ fontFamily: 'Georgia, serif' }}>Certificate of Completion</h1>
                <div className="w-32 h-1.5 bg-primary mb-12"></div>
                
                <p className="text-xl text-slate-500 uppercase tracking-widest mb-6">This certifies that</p>
                <h2 className="text-6xl font-bold text-slate-900 mb-10" style={{ fontFamily: 'cursive' }}>
                  {user?.firstName} {user?.lastName}
                </h2>
                
                <p className="text-xl text-slate-500 mb-4">has successfully completed the assessment for</p>
                <h3 className="text-3xl font-black text-primary mb-12 max-w-2xl leading-tight">{mod.title} — {skill.title}</h3>
                
                <p className="text-2xl font-bold text-slate-700">
                  Passing Score: <span className={gradeColor}>{percentage}%</span> <span className="text-slate-500 text-lg">({gradeMessage})</span>
                </p>
                
                <div className="absolute bottom-6 left-12 text-left">
                  <div className="border-b border-slate-300 w-48 mb-3"></div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">EquiBudX Platform</p>
                </div>
                
                <div className="absolute bottom-6 right-12 text-right">
                  <div className="border-b border-slate-300 w-48 mb-3 text-center text-lg font-bold text-slate-800 pb-1">
                    {new Date().toLocaleDateString()}
                  </div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Date of Completion</p>
                </div>
              </div>
            </div>

            {/* Score Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-10 mb-8 text-center">
              <div className="w-24 h-24 rounded-full bg-slate-50 border-4 border-slate-200 flex items-center justify-center mx-auto mb-6">
                <Trophy className={`w-12 h-12 ${colors.text}`} />
              </div>
              <h2 className={`text-2xl font-black mb-2 ${gradeColor}`}>{gradeMessage}</h2>
              <p className="text-5xl font-black text-slate-900 mb-2">
                {correctCount}<span className="text-2xl text-slate-400">/{totalQuestions}</span>
              </p>
              <p className="text-slate-500 font-medium mb-6">{percentage}% correct</p>

              <div className="flex items-center justify-center gap-6 text-sm font-bold">
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle className="w-4 h-4" /> {correctCount} Correct
                </span>
                <span className="flex items-center gap-1.5 text-red-500">
                  <XCircle className="w-4 h-4" /> {totalQuestions - correctCount - skippedCount} Wrong
                </span>
                {skippedCount > 0 && (
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-4 h-4" /> {skippedCount} Skipped
                  </span>
                )}
              </div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => startQuiz(mod.id, skill.id)}
                  className="px-6 py-3 rounded-xl font-bold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Retry Quiz
                </button>
                <button
                  onClick={() => navigate('/student/dashboard')}
                  className={`px-6 py-3 rounded-xl font-bold text-white ${colors.badge} hover:opacity-90 transition-colors shadow-sm`}
                >
                  Go to Dashboard
                </button>
              </div>
            </div>

            {/* Question Breakdown */}
            <h3 className="text-xl font-bold text-slate-900 mb-6">Question Breakdown</h3>
            <div className="flex flex-col gap-4">
              {skill.questions.map((q, idx) => {
                const userAnswer = view.answers[idx];
                const isCorrect = userAnswer === q.correctAnswer;
                const wasSkipped = userAnswer === null;

                return (
                  <div key={q.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                    <div className={`px-6 py-4 flex items-start gap-4 ${
                      wasSkipped ? 'bg-slate-50' : isCorrect ? 'bg-emerald-50' : 'bg-red-50'
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        wasSkipped 
                          ? 'bg-slate-200 text-slate-500' 
                          : isCorrect 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-red-500 text-white'
                      }`}>
                        {wasSkipped ? <Clock className="w-4 h-4" /> : isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Question {idx + 1}</p>
                        <p className="font-bold text-slate-900">{q.question}</p>
                      </div>
                    </div>
                    <div className="px-6 py-4 space-y-2">
                      {!isCorrect && !wasSkipped && (
                        <p className="text-sm text-red-600 font-medium">
                          Your answer: <span className="font-bold">{q.options[userAnswer!]}</span>
                        </p>
                      )}
                      <p className="text-sm text-emerald-700 font-medium">
                        Correct answer: <span className="font-bold">{q.options[q.correctAnswer]}</span>
                      </p>
                      <p className="text-sm text-slate-600 mt-2 bg-slate-50 p-3 rounded-lg">
                        💡 {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
