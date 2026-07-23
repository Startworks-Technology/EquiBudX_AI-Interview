import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle2 } from 'lucide-react';
import { coursesData } from '../../data';

export default function QuizRoom() {
  const { assignmentId } = useParams(); // This is the courseId in our new schema
  const navigate = useNavigate();
  
  const course = coursesData.find(c => c.id === assignmentId);
  const questions = course?.assignment?.questions || [];

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes (600s)

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit(); // Auto-submit when time is up
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (!course) return <div className="p-12 text-center">Assignment not found</div>;

  const currentQuestion = questions[currentQIndex];
  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  const handleSubmit = () => {
    // In the future, this will POST /api/scores
    // For now, redirect to scorecard
    navigate(`/scorecard/${course.id}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Quiz Header */}
      <header className="h-16 border-b border-border bg-white flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-foreground" title="Go Back">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-bold text-foreground">{course.assignment.title}</h1>
        </div>
        <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-sm font-bold ${timeLeft < 60 ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-foreground'}`}>
          <Clock className="w-4 h-4" />
          {formatTime(timeLeft)}
        </div>
      </header>

      {/* Main Quiz Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-6 flex flex-col mt-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-bold text-muted-foreground mb-2">
            <span>Question {currentQIndex + 1} of {questions.length}</span>
            <span>{Math.round(((currentQIndex + 1) / questions.length) * 100)}% Completed</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-300"
              style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-8 border border-border shadow-sm flex-1 flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold text-foreground leading-relaxed mb-8">
            {currentQuestion.text}
          </h2>

          <div className="space-y-3 flex-1">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOptions(prev => ({ ...prev, [currentQIndex]: idx }))}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group
                  ${selectedOptions[currentQIndex] === idx 
                    ? 'border-primary bg-primary/5 shadow-sm' 
                    : 'border-border hover:border-slate-300 bg-white'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                    ${selectedOptions[currentQIndex] === idx ? 'border-primary bg-primary' : 'border-slate-300 group-hover:border-slate-400'}`}
                  >
                    {selectedOptions[currentQIndex] === idx && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <span className={`font-semibold ${selectedOptions[currentQIndex] === idx ? 'text-primary' : 'text-foreground'}`}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
            <button 
              onClick={() => setCurrentQIndex(p => p - 1)}
              disabled={currentQIndex === 0}
              className="px-6 py-2.5 rounded-lg font-bold text-foreground border border-border hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Previous
            </button>
            
            {currentQIndex === questions.length - 1 ? (
              <button 
                onClick={handleSubmit}
                className="px-8 py-2.5 rounded-lg font-bold text-white bg-accent hover:bg-accent/90 shadow-sm flex items-center gap-2 transition-all"
              >
                Submit Assignment <CheckCircle2 className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={() => setCurrentQIndex(p => p + 1)}
                className="px-8 py-2.5 rounded-lg font-bold text-white bg-primary hover:bg-primary/90 shadow-sm transition-all"
              >
                Next Question
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
