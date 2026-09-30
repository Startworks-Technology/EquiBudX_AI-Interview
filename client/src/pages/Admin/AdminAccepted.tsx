import { useState, useEffect } from 'react';
import { Loader, Search, RefreshCw, CheckCircle, GraduationCap } from 'lucide-react';

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

export default function AdminAccepted() {
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
      // Only show students who are fully accepted
      setApplicants(data.filter((a: Applicant) => a.status === 'SELECTED'));
    } catch (err) {
      console.error('Failed to fetch applicants:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  const filteredApplicants = applicants.filter(app => 
    app.user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col bg-slate-50">
      <div className="px-8 py-8 bg-white border-b border-slate-200 flex-shrink-0 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Accepted Cohort</h1>
          <p className="text-slate-500 font-medium">View the final list of students enrolled in the bootcamps.</p>
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
              placeholder="Search accepted students..."
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
              <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900">No students accepted yet</h3>
              <p className="text-slate-500">Review applications and tests to build the cohort.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {filteredApplicants.map(app => (
                <div key={app.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">
                        {app.user.firstName[0]}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">{app.user.firstName} {app.user.lastName}</h3>
                        <div className="text-slate-500 text-sm">{app.user.email}</div>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3"/> Enrolled
                    </span>
                  </div>
                  
                  <div className="mt-auto bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Track</div>
                      <div className="font-bold text-slate-700 capitalize">{app.track.replace('-', ' ')}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Pre-Screen Score</div>
                      <div className="font-black text-indigo-600">{app.testScore}%</div>
                    </div>
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
