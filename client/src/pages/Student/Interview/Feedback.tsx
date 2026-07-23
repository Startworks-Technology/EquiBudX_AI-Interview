import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertTriangle, Trophy, Clock, Target, Bot, User, MessageSquare, LayoutTemplate, FileText, Award } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function Feedback() {
  const location = useLocation();
  const navigate = useNavigate();
  const { report, qaPairs, score, correct, wrong, roleTitle } = location.state || {};
  const [activeTab, setActiveTab] = useState<'summary' | 'feedback' | 'log'>('summary');

  if (!report) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-slate-50">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
        <h2 className="text-2xl font-bold text-slate-800 mb-2">No Feedback Found</h2>
        <p className="text-slate-500 mb-6">It looks like you haven't completed an interview yet.</p>
        <button onClick={() => navigate('/student/interview')} className="bg-primary text-white px-6 py-3 rounded-xl font-bold">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <div className="px-8 py-6 bg-white border-b border-slate-200 flex-shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/student/interview')} 
            className="p-2 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-3">
            <CheckCircle className="w-7 h-7 text-emerald-500" />
            Interview Report
          </h1>
        </div>
        
        {/* Tabs */}
        <div className="hidden md:flex bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('summary')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${
              activeTab === 'summary' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <LayoutTemplate className="w-4 h-4" /> Summary
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${
              activeTab === 'feedback' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <FileText className="w-4 h-4" /> AI Feedback
          </button>
          <button
            onClick={() => setActiveTab('log')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${
              activeTab === 'log' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <MessageSquare className="w-4 h-4" /> Conversation Log
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto">
          
          {activeTab === 'summary' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-24 h-24 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-12 h-12 text-emerald-600" />
              </div>

              {roleTitle && (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 border border-primary/20">
                  <Target className="w-4 h-4" /> {roleTitle}
                </div>
              )}

              <h2 className="text-4xl font-black text-slate-900 mb-2">Evaluation Complete</h2>
              <p className="text-lg text-slate-500 font-medium mb-8">
                Your AI interviewer analyzed your responses for <span className="font-bold text-slate-900">{roleTitle || 'this topic'}</span>.
              </p>

              {/* Recruiter Hiring Verdict Badge */}
              <div className="mb-10 inline-block">
                <div className={`px-6 py-3 rounded-2xl border font-black text-lg shadow-sm flex items-center justify-center gap-2 ${
                  (score || 0) >= 85 
                    ? 'bg-emerald-500 text-white border-emerald-600 shadow-emerald-500/20' 
                    : (score || 0) >= 70 
                      ? 'bg-blue-600 text-white border-blue-700 shadow-blue-500/20' 
                      : (score || 0) >= 50 
                        ? 'bg-amber-500 text-white border-amber-600 shadow-amber-500/20' 
                        : 'bg-red-500 text-white border-red-600 shadow-red-500/20'
                }`}>
                  <Award className="w-6 h-6" />
                  RECRUITER VERDICT: {(score || 0) >= 85 ? 'STRONG HIRE' : (score || 0) >= 70 ? 'HIRE' : (score || 0) >= 50 ? 'NEEDS PRACTICE' : 'NO HIRE'}
                </div>
              </div>


              {/* Score section */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12 border-y border-slate-100 py-10">
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-wider mb-2">Overall Score</p>
                  <p className="text-6xl font-black text-primary">{score ?? 'N/A'}{score !== undefined && <span className="text-3xl text-slate-300">/100</span>}</p>
                </div>
                <div className="hidden md:block w-px h-24 bg-slate-200"></div>
                <div className="flex gap-8">
                  <div className="text-center">
                    <p className="text-emerald-500 font-bold uppercase tracking-wider mb-2">Correct/Strong</p>
                    <p className="text-4xl font-black text-emerald-600">{correct ?? 'N/A'}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-red-400 font-bold uppercase tracking-wider mb-2">Incorrect/Weak</p>
                    <p className="text-4xl font-black text-red-500">{wrong ?? 'N/A'}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold">
                <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-3 rounded-xl">
                  <Target className="w-5 h-5" /> Live Interview
                </span>
                <span className="flex items-center gap-2 bg-slate-100 text-slate-700 px-5 py-3 rounded-xl">
                  <MessageSquare className="w-5 h-5" /> {qaPairs?.length || 0} Questions
                </span>
                <span className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-3 rounded-xl">
                  <Clock className="w-5 h-5" /> Completed
                </span>
              </div>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <Bot className="w-8 h-8 text-primary" />
                AI Feedback & Analysis
              </h2>
              <div className="prose prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-primary max-w-none text-lg">
                <ReactMarkdown>{report}</ReactMarkdown>
              </div>
            </div>
          )}

          {activeTab === 'log' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3 px-2">
                <MessageSquare className="w-8 h-8 text-slate-700" />
                Conversation Log
              </h2>
              <div className="space-y-6">
                {qaPairs?.map((qa: any, index: number) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* AI Question */}
                    <div className="bg-slate-50 p-6 md:p-8 border-b border-slate-100 flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 block">Question {index + 1}</span>
                        <p className="text-xl font-bold text-slate-900 leading-relaxed">{qa.question}</p>
                      </div>
                    </div>
                    {/* User Answer */}
                    <div className="p-6 md:p-8 flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 block">Your Answer</span>
                        {qa.answer ? (
                          <p className="text-lg text-slate-700 leading-relaxed font-medium">{qa.answer}</p>
                        ) : (
                          <p className="text-lg text-slate-400 italic">No answer provided or speech not detected.</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
