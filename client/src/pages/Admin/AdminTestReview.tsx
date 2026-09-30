import { useState, useEffect } from 'react';
import { Loader, Search, RefreshCw, CheckCircle, XCircle, FileText } from 'lucide-react';

interface Applicant {
  id: string;
  userId: string;
  track: string;
  status: string;
  testScore: number | null;
  educationBackground: string;
  experienceLevel: string;
  createdAt: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export default function AdminTestReview() {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchApplicants = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/admin/bootcamps', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      // Only show students who completed the test and are under review
      setApplicants(data.filter((a: Applicant) => a.status === 'UNDER_REVIEW'));
    } catch (err) {
      console.error('Failed to fetch applicants:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  const handleDecision = async (id: string, decision: 'SELECTED' | 'REJECTED') => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/bootcamps/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ status: decision })
      });
      
      if (res.ok) {
        // Remove them from the review list once a decision is made
        setApplicants(applicants.filter(app => app.id !== id));
      } else {
        alert('Failed to submit decision');
      }
    } catch (err) {
      console.error('Error submitting decision:', err);
    }
  };

  const filteredApplicants = applicants.filter(app => 
    app.user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col bg-slate-50">
      <div className="px-8 py-8 bg-white border-b border-slate-200 flex-shrink-0 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Test Review</h1>
          <p className="text-slate-500 font-medium">Review test scores and make final acceptance decisions.</p>
        </div>
        <button 
          onClick={fetchApplicants}
          className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2 rounded-xl transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-6 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search pending reviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium shadow-sm"
            />
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader className="w-8 h-8 text-indigo-600 animate-spin" />
            </div>
          ) : filteredApplicants.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900">No pending reviews</h3>
              <p className="text-slate-500">No students are currently awaiting a decision.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredApplicants.map(app => (
                <div key={app.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-md transition-shadow gap-6">
                  
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{app.user.firstName} {app.user.lastName}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold capitalize">
                        {app.track.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="text-slate-500 text-sm mb-3">{app.user.email}</div>
                  </div>

                  {/* Test Score Highlight */}
                  <div className="bg-indigo-50 rounded-xl p-4 flex flex-col items-center justify-center min-w-[120px] border border-indigo-100">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Test Score</span>
                    <span className={`text-2xl font-black ${app.testScore && app.testScore >= 70 ? 'text-green-600' : 'text-red-500'}`}>
                      {app.testScore !== null ? `${app.testScore}%` : 'N/A'}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <button 
                      onClick={() => handleDecision(app.id, 'REJECTED')}
                      className="flex-1 md:flex-none bg-white border-2 border-red-100 hover:border-red-200 hover:bg-red-50 text-red-600 font-bold py-2.5 px-6 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <XCircle className="w-4 h-4" /> Reject
                    </button>
                    <button 
                      onClick={() => handleDecision(app.id, 'SELECTED')}
                      className="flex-1 md:flex-none bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-6 rounded-xl transition-colors shadow-sm inline-flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" /> Accept
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
