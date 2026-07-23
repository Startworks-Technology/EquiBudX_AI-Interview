import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import type { InterviewModule, InterviewRoundType, ExperienceLevel } from '../../../data/interviews/types';

interface InterviewSetupModalProps {
  module: InterviewModule | null;
  onClose: () => void;
  onStart: (config: {
    roundType: InterviewRoundType;
    experienceLevel: ExperienceLevel;
    inputMethod: 'voice' | 'text';
    candidateBio?: string;
  }) => void;
}

export const InterviewSetupModal: React.FC<InterviewSetupModalProps> = ({ module, onClose, onStart }) => {
  const [selectedRound, setSelectedRound] = useState<InterviewRoundType>('hr_screen');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>('fresher');
  const [candidateBio, setCandidateBio] = useState('');

  if (!module) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart({
      roundType: selectedRound,
      experienceLevel,
      inputMethod: 'voice',
      candidateBio
    });
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 md:p-8 bg-slate-900 text-white flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-bold mb-2 border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> AI Mock Interview Setup
            </div>
            <h3 className="text-2xl md:text-3xl font-black">{module.title}</h3>
            <p className="text-slate-400 text-sm mt-1">{module.description}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors relative z-10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          
          {/* 1. Experience Level */}
          <div>
            <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              1. Candidate Experience Level
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'fresher', label: 'Fresher / Student', sub: '0-1 yrs (Campus)' },
                { id: 'junior', label: 'Junior Engineer', sub: '1-3 yrs experience' },
                { id: 'senior', label: 'Senior / Lead', sub: '3+ yrs experience' }
              ].map((lvl) => (
                <button
                  type="button"
                  key={lvl.id}
                  onClick={() => setExperienceLevel(lvl.id as ExperienceLevel)}
                  className={`p-3.5 rounded-2xl border text-left transition-all relative ${
                    experienceLevel === lvl.id
                      ? 'border-primary bg-primary/5 text-primary shadow-sm ring-2 ring-primary/20'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  {experienceLevel === lvl.id && (
                    <CheckCircle2 className="w-4 h-4 text-primary absolute top-3 right-3" />
                  )}
                  <p className="font-bold text-sm">{lvl.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{lvl.sub}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Recruiter Perspective & Interview Round */}
          <div>
            <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              2. Interview Round & Perspective
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  id: 'hr_screen',
                  title: '👔 Recruiter HR Screening',
                  badge: 'Recruiter Perspective',
                  desc: 'HR background pitch, self-intro, resume narrative & soft skills fit.'
                },
                {
                  id: 'tech_domain',
                  title: '💻 Technical Domain Round',
                  badge: 'Tech Lead Focus',
                  desc: 'Deep-dive domain questions tailored to your academic branch & role.'
                },
                {
                  id: 'managerial',
                  title: '🏗️ Behavioral & STAR Round',
                  badge: 'Manager Perspective',
                  desc: 'Situational scenarios, problem-solving, teamwork & STAR framework.'
                },
                {
                  id: 'full_drive',
                  title: '🏆 Full Placement Drive',
                  badge: 'End-to-End Mode',
                  desc: 'Simulate a complete 3-round recruitment pipeline back-to-back.'
                }
              ].map((rnd) => (
                <button
                  type="button"
                  key={rnd.id}
                  onClick={() => setSelectedRound(rnd.id as InterviewRoundType)}
                  className={`p-4 rounded-2xl border text-left transition-all relative ${
                    selectedRound === rnd.id
                      ? 'border-primary bg-primary/5 shadow-sm ring-2 ring-primary/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 text-sm">{rnd.title}</span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {rnd.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{rnd.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Optional Resume / Bio snippet */}
          <div>
            <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-slate-500" /> 3. Resume / Profile Bio (Optional)</span>
              <span className="text-xs font-normal text-slate-400">Helps AI tailor questions</span>
            </label>
            <textarea
              value={candidateBio}
              onChange={(e) => setCandidateBio(e.target.value)}
              placeholder="e.g. 4th year CSE student skilled in React & Node.js with a project on E-commerce microservices..."
              rows={2}
              className="w-full p-3 rounded-2xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
            />
          </div>


          {/* Footer Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-primary hover:bg-primary-dark text-white font-extrabold text-base shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 group"
            >
              Start Live AI Mock Interview
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
