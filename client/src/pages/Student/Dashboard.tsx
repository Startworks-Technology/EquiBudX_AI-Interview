import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, GraduationCap, ChevronRight, AlertCircle, Loader, BookOpen } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { coursesData } from '../../data/courses';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [application, setApplication] = useState<{
    hasApplied: boolean;
    trackId?: string;
    trackTitle?: string;
    status?: string;
  }>({ hasApplied: false });

  const activeCourse = application.trackId ? coursesData.find(c => c.id === application.trackId) : null;

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/bootcamp/status', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await res.json();
        setApplication(data);
      } catch (err) {
        console.error('Failed to fetch status', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStatus();
  }, []);

  if (loading) {
    return (
      <div className="h-full bg-slate-50 flex items-center justify-center">
        <Loader className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <main className="h-full bg-slate-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-8 py-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
          Welcome back, {user?.firstName || 'Applicant'}!
        </h1>
        <p className="text-slate-500 font-medium text-lg">
          Track your application progress and next steps.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {!application.hasApplied ? (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left side: Welcome & Call to Action */}
            <div className="flex-1 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden w-full">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                <GraduationCap className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-sm mb-6 border border-indigo-500/30">
                  New Application
                </span>
                <h2 className="text-4xl font-black mb-6 tracking-tight">Ready to launch your tech career?</h2>
                <p className="text-indigo-100 max-w-md mb-10 text-lg leading-relaxed">
                  You haven't applied to any bootcamps yet. Explore our tracks and start your application to secure your spot.
                </p>
                <button 
                  onClick={() => navigate('/bootcamps')}
                  className="bg-white text-indigo-900 font-bold py-4 px-10 rounded-xl hover:bg-indigo-50 transition-colors shadow-xl hover:shadow-indigo-500/20 inline-flex items-center gap-2 group"
                >
                  Explore Bootcamps <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right side: Fixed Progress Tracker */}
            <div className="w-full lg:w-[400px] bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl flex-shrink-0 sticky top-8">
              <h3 className="text-xl font-black text-slate-900 mb-8">Your Path to Success</h3>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute top-6 bottom-6 left-[22px] w-1 bg-slate-100 rounded-full" />
                
                <div className="space-y-8 relative z-10">
                  {/* Step 1 */}
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shadow-lg shadow-blue-600/30 ring-8 ring-white flex-shrink-0 relative z-10">
                      1
                    </div>
                    <div className="pt-2">
                      <h4 className="font-bold text-slate-900 text-lg leading-none mb-1">Explore & Apply</h4>
                      <p className="text-sm text-slate-500">Choose a track that fits your goals.</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold ring-8 ring-white flex-shrink-0 relative z-10 border-2 border-slate-200">
                      2
                    </div>
                    <div className="pt-2">
                      <h4 className="font-bold text-slate-900 text-lg leading-none mb-1">Pre-Screening</h4>
                      <p className="text-sm text-slate-500">Take a quick skills assessment test.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold ring-8 ring-white flex-shrink-0 relative z-10 border-2 border-slate-200">
                      3
                    </div>
                    <div className="pt-2">
                      <h4 className="font-bold text-slate-900 text-lg leading-none mb-1">AI Interview</h4>
                      <p className="text-sm text-slate-500">Showcase your problem-solving skills.</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold ring-8 ring-white flex-shrink-0 relative z-10 border-2 border-slate-200">
                      4
                    </div>
                    <div className="pt-2">
                      <h4 className="font-bold text-slate-900 text-lg leading-none mb-1">Enrollment</h4>
                      <p className="text-sm text-slate-500">Start learning and get job ready.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900">Your Active Application</h2>
            
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg relative overflow-hidden">
              {/* Status Banner */}
              {application.status === 'PENDING_TEST' && (
                <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-yellow-900 py-2 px-4 text-center text-sm font-bold flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Action Required: Pre-Screening Test Pending
                </div>
              )}
              
              <div className={`pt-${application.status === 'PENDING_TEST' ? '8' : '0'}`}>
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Track</h3>
                    <p className="text-2xl font-black text-slate-900">{application.trackTitle}</p>
                  </div>
                  <span className="bg-slate-100 text-slate-700 font-bold px-4 py-2 rounded-lg text-sm border border-slate-200">
                    Application ID: #APP-84920
                  </span>
                </div>

                {/* Progress Tracker */}
                <div className="relative mb-12">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 z-0" />
                  <div className="absolute top-1/2 left-0 w-1/3 h-1 bg-green-500 -translate-y-1/2 z-0" />
                  
                  <div className="relative z-10 flex justify-between">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-900">Applied</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-white border-4 border-yellow-400 text-yellow-500 flex items-center justify-center shadow-md">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-900">Pre-Screening</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-200 text-slate-400 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-slate-300" />
                      </div>
                      <span className="text-xs font-bold text-slate-400">Review</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-200 text-slate-400 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-slate-300" />
                      </div>
                      <span className="text-xs font-bold text-slate-400">Decision</span>
                    </div>
                  </div>
                </div>

                {/* Call to action based on status */}
                {application.status === 'PENDING_TEST' && (
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Take the Eligibility Test</h4>
                      <p className="text-sm text-slate-500 font-medium">You must score at least 70% to proceed to the review phase.</p>
                    </div>
                    <button 
                      onClick={() => navigate('/student/assignments')}
                      className="bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      Start Test <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {application.status === 'SELECTED' && (
                  <div className="bg-green-50 rounded-2xl p-6 border border-green-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-green-900 mb-1">Congratulations! You're In!</h4>
                      <p className="text-sm text-green-700 font-medium">You have been selected for the {application.trackTitle} bootcamp.</p>
                    </div>
                    <button 
                      onClick={() => navigate(`/student/course/${application.trackId}`)}
                      className="bg-green-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2 shadow-lg shadow-green-600/30"
                    >
                      Access Curriculum <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
