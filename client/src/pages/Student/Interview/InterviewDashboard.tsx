import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Mic, PlayCircle, Clock, ChevronRight, Star, Code, Server, Database, Network, FileType, Atom, CheckCircle, XCircle, Cpu, LayoutTemplate, BarChart, Trash2 } from 'lucide-react';
import { interviewModules } from '../../../data/interviews';
import type { InterviewModule } from '../../../data/interviews';
import { InterviewSetupModal } from './InterviewSetupModal';
import { API_BASE_URL } from '../../../config/api';

export interface InterviewRecord {
  id: string;
  roleType: string;
  roleTitle: string;
  mode: 'conversational' | 'structured';
  date: string;
  questionCount: number;
  score?: number;
  correctAnswers?: number;
  wrongAnswers?: number;
  report: string;
  qaPairs: { question: string; answer: string }[];
}

export function saveInterviewRecord(record: any) {
  try {
    const existing = JSON.parse(localStorage.getItem('EquiBudX_interview_history') || '[]');
    existing.unshift(record);
    localStorage.setItem('EquiBudX_interview_history', JSON.stringify(existing));
  } catch (e) {
    console.error('Failed to save interview record', e);
  }
}

const IconMap: Record<string, any> = {
  'file-type': <FileType className="w-8 h-8 text-yellow-500" />,
  'atom': <Atom className="w-8 h-8 text-blue-500" />,
  'server': <Server className="w-8 h-8 text-emerald-500" />,
  'database': <Database className="w-8 h-8 text-purple-500" />,
  'network': <Network className="w-8 h-8 text-indigo-500" />,
  'code': <Code className="w-8 h-8 text-slate-500" />,
  'cpu': <Cpu className="w-8 h-8 text-emerald-500" />,
  'layout-template': <LayoutTemplate className="w-8 h-8 text-purple-500" />,
  'bar-chart': <BarChart className="w-8 h-8 text-amber-500" />
};

const BRANCH_TABS: { id: string; label: string }[] = [
  { id: 'All', label: 'All Branches' },
  { id: 'general', label: '🌟 General & HR' },
  { id: 'cs_it', label: '💻 CSE & IT' },
  { id: 'ece', label: '⚡ Electronics & ECE' },
  { id: 'ai_ds', label: '🤖 AI & Data Science' },
  { id: 'business', label: '👔 Business & Product' },
  { id: 'recent', label: '📜 Recent Interviews' }
];


export default function InterviewDashboard() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [history, setHistory] = useState<InterviewRecord[]>([]);
  const [setupModalModule, setSetupModalModule] = useState<InterviewModule | null>(null);

  const selectedBranch = searchParams.get('branch') || "All";

  const setSelectedBranch = (branch: string) => {
    const newParams: Record<string, string> = {};
    if (branch !== "All") newParams.branch = branch;
    setSearchParams(newParams);
  };

  useEffect(() => {
    const localRecords: InterviewRecord[] = (() => {
      try {
        return JSON.parse(localStorage.getItem('EquiBudX_interview_history') || '[]');
      } catch (e) {
        return [];
      }
    })();

    fetch(`${API_BASE_URL}/api/interview/records`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('EquiBudX_token') || localStorage.getItem('token')}` }
    })
    .then(res => {
      if (!res.ok) return [];
      return res.json().catch(() => []);
    })
    .then(data => {
      let serverMapped: InterviewRecord[] = [];
      if (Array.isArray(data) && data.length > 0) {
        serverMapped = data.map((d: any) => {
          const mod = interviewModules.find(m => m.id === String(d.roleType).toLowerCase() || String(d.roleType).toLowerCase().includes(m.id));
          const niceTitle = mod ? mod.title : d.roleType;
          return {
            id: d.id || Math.random().toString(),
            roleType: d.roleType || 'Software Engineer',
            roleTitle: niceTitle,
            mode: 'structured' as const,
            date: d.createdAt || new Date().toISOString(),
            questionCount: Array.isArray(d.qaPairs) ? d.qaPairs.length : 0,
            score: d.score,
            correctAnswers: d.correctAnswers,
            wrongAnswers: d.wrongAnswers,
            report: d.feedbackReport || '',
            qaPairs: Array.isArray(d.qaPairs) ? d.qaPairs : []
          };
        });
        setHistory(serverMapped);
      } else if (localRecords.length > 0) {
        setHistory(localRecords);
      }
    })
    .catch(() => {
      setHistory(localRecords);
    });
  }, []);

  const handleStartInterviewFromModal = (config: {
    roundType: string;
    experienceLevel: string;
    inputMethod: 'voice' | 'text';
    candidateBio?: string;
  }) => {
    if (!setupModalModule) return;
    const modId = setupModalModule.id;
    setSetupModalModule(null);
    navigate(`/student/interview/practice/${modId}?round=${config.roundType}&level=${config.experienceLevel}&bio=${encodeURIComponent(config.candidateBio || '')}`);
  };

  const handleDelete = (id: string) => {
    setHistory(prev => prev.filter(h => h.id !== id));
    try {
      const localRecords: InterviewRecord[] = JSON.parse(localStorage.getItem('EquiBudX_interview_history') || '[]');
      const filtered = localRecords.filter(h => h.id !== id);
      localStorage.setItem('EquiBudX_interview_history', JSON.stringify(filtered));
    } catch (e) {
      console.error("Failed to delete local record", e);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-4 flex items-center gap-3">
          <Mic className="w-8 h-8 text-primary" />
          Student Campus Placement AI Interview Hub
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Prepare for real campus placement drives with role-based AI interviews. Select your academic branch below to practice HR recruiter screening, technical domain rounds, and managerial behavioral STAR rounds.
        </p>
      </div>

      {/* Top Navigation Bar */}
      <div className="flex flex-wrap gap-3 mb-10">
        {BRANCH_TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedBranch(tab.id)}
            className={`px-5 py-3 rounded-2xl font-extrabold text-sm transition-all shadow-sm flex items-center gap-2 ${
              selectedBranch === tab.id
                ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
            }`}
          >
            {tab.label}
            {tab.id === 'recent' && history.length > 0 && (
              <span className={`px-2 py-0.5 rounded-full text-xs font-black ${
                selectedBranch === 'recent' ? 'bg-white text-primary' : 'bg-primary text-white'
              }`}>
                {history.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Main View: Recent Interviews Tab vs Modules Grid */}
      {selectedBranch === 'recent' ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm animate-in fade-in duration-300">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-2xl font-black text-slate-900">Your Past AI Interview History</h3>
              <p className="text-slate-500 text-sm mt-1">Review past scores, correct answers, and AI interviewer feedback reports.</p>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs">
              {history.length} Recorded Sessions
            </span>
          </div>

          {history.length === 0 ? (
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-12 text-center border-dashed">
              <p className="text-slate-600 font-bold text-lg">No interviews completed yet.</p>
              <p className="mt-2 text-sm text-slate-400">Select any module tab above to start your first live mock interview.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {history.map((record) => (
                <div 
                  key={record.id} 
                  className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row gap-4 md:items-center justify-between"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold text-slate-900">{record.roleTitle} Interview</h4>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                        record.mode === 'structured' 
                          ? 'bg-amber-100 text-amber-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {record.mode === 'structured' ? 'Structured' : 'Conversational'}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 mt-2">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-slate-400" />
                        {(() => {
                          try {
                            const d = new Date(record.date);
                            if (isNaN(d.getTime())) return 'Recent';
                            return d.toLocaleDateString(undefined, { 
                              weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
                            });
                          } catch (e) {
                            return 'Recent';
                          }
                        })()}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-slate-400" />
                        {record.questionCount} Questions
                      </span>
                      {record.score !== undefined && (
                        <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                          Score: {record.score}/100
                        </span>
                      )}
                      {record.correctAnswers !== undefined && (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                          <CheckCircle className="w-3.5 h-3.5" /> {record.correctAnswers} Correct
                        </span>
                      )}
                      {record.wrongAnswers !== undefined && (
                        <span className="flex items-center gap-1 text-xs font-bold text-red-500 bg-red-50 px-2.5 py-0.5 rounded-lg border border-red-200">
                          <XCircle className="w-3.5 h-3.5" /> {record.wrongAnswers} Wrong
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                      onClick={() => navigate(`/student/interview/${record.roleType}/feedback`, { 
                        state: { 
                          report: record.report, 
                          qaPairs: record.qaPairs,
                          score: record.score,
                          correct: record.correctAnswers,
                          wrong: record.wrongAnswers,
                          roleTitle: record.roleTitle
                        } 
                      })}
                      className="px-5 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2 text-sm"
                    >
                      View Report <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(record.id)}
                      className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                      title="Delete Record"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Role Modules Grid View */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
          {interviewModules
            .filter(module => selectedBranch === "All" || module.branch === selectedBranch)
            .map((module) => (
            <div 
              key={module.id}
              className={`rounded-3xl border-2 p-8 transition-all duration-300 flex flex-col hover:shadow-xl ${module.color}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-white w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center border border-slate-100">
                  {IconMap[module.icon] || IconMap['code']}
                </div>
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-white/80 text-slate-700 uppercase tracking-wider border border-slate-200/60 shadow-xs">
                  {module.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-2">{module.title}</h3>
              <p className="text-slate-600 text-sm mb-8 flex-1 leading-relaxed">{module.description}</p>
              
              <button 
                onClick={() => setSetupModalModule(module)}
                className="w-full bg-slate-900 text-white font-extrabold py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-md group text-sm"
              >
                <PlayCircle className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                Configure & Start Interview
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Interactive Setup Modal */}
      {setupModalModule && (
        <InterviewSetupModal
          module={setupModalModule}
          onClose={() => setSetupModalModule(null)}
          onStart={handleStartInterviewFromModal}
        />
      )}
    </div>
  );
}

