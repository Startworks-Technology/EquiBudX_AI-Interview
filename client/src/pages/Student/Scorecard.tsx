import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, Download } from "lucide-react";
import html2canvas from "html2canvas";

export default function Scorecard() {
  const navigate = useNavigate();
  const scorecardRef = useRef<HTMLDivElement>(null);

  // Mock Result
  const score = 8;
  const total = 10;
  const percentage = (score / total) * 100;
  const passed = percentage >= 70;

  const handleDownload = async () => {
    if (!scorecardRef.current) return;
    
    try {
      const canvas = await html2canvas(scorecardRef.current, {
        scale: 2, // Higher quality
        backgroundColor: "#ffffff", // Ensure white background
      });
      
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "EquiBudX_Scorecard.png";
      link.click();
    } catch (err) {
      console.error("Failed to download image", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Navigation & Actions */}
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/student/dashboard')}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>

          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            Download Report
          </button>
        </div>

        {/* Capturable Container */}
        <div ref={scorecardRef} className="space-y-8 p-4 bg-slate-50 dark:bg-slate-950 -m-4 rounded-3xl">
          {/* Hero Score Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 text-center relative overflow-hidden">
          
          {/* Confetti / Decor (Mock) */}
          {passed && (
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500" />
          )}

          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
            Assignment Completed!
          </h1>
          <p className="text-slate-500 mb-8">Java Backend Fundamentals</p>

          <div className="inline-flex items-center justify-center relative w-48 h-48 mb-8">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-100 dark:text-slate-800"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={passed ? "text-green-500" : "text-red-500"}
                strokeDasharray={`${percentage}, 100`}
                strokeWidth="3"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tighter">
                {score}<span className="text-2xl text-slate-400">/{total}</span>
              </span>
              <span className="text-sm font-medium mt-1 text-slate-500">{percentage}%</span>
            </div>
          </div>

          <div>
            {passed ? (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-semibold text-sm">
                <CheckCircle className="w-5 h-5" />
                You Passed! Certificate Unlocked.
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 font-semibold text-sm">
                <XCircle className="w-5 h-5" />
                Not quite there. Please review the material.
              </div>
            )}
          </div>
        </div>

        {/* Detailed Review Section */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50">Review Your Answers</h3>
          </div>
          
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {/* Example Correct Question */}
            <div className="p-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">1. What is Polymorphism?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    <span className="font-medium text-slate-900 dark:text-slate-300">Your Answer:</span> The ability of different objects to respond to the same method call in their own way.
                  </p>
                </div>
              </div>
            </div>

            {/* Example Incorrect Question */}
            <div className="p-6 bg-red-50/30 dark:bg-red-900/10">
              <div className="flex gap-4">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">2. Which is NOT a primitive type in Java?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    <span className="font-medium text-slate-900 dark:text-slate-300">Your Answer:</span> boolean
                  </p>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-red-100 dark:border-red-900/30">
                    <p className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Correct Answer: String
                    </p>
                    <p className="text-xs text-slate-500 mt-1">String is an Object, not a primitive type in Java.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
