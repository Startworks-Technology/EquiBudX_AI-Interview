import { useState, useEffect } from 'react';
import { Loader, Search, RefreshCw, ChevronRight, User } from 'lucide-react';

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

export default function AdminApplied() {
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
      // Only show newly applied students
      setApplicants(data.filter((a: Applicant) => a.status === 'APPLIED' || a.status === 'PENDING_TEST'));
    } catch (err) {
      console.error('Failed to fetch applicants:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  const handleSelectForTest = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/bootcamps/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ status: 'PENDING_TEST' })
      });
      
      if (res.ok) {
        setApplicants(applicants.map(app => 
          app.id === id ? { ...app, status: 'PENDING_TEST' } : app
        ));
      } else {
        alert('Failed to update status');
      }
    } catch (err) {
      console.error('Error updating status:', err);
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
          <h1 className="text-3xl font-black text-slate-900 mb-2">Applied Users</h1>
          <p className="text-slate-500 font-medium">Review new candidates and select them for pre-screening.</p>
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
              placeholder="Search new applicants..."
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
              <User className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900">No new applications</h3>
              <p className="text-slate-500">All caught up!</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredApplicants.map(app => (
                <div key={app.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex items-center justify-between hover:shadow-md transition-shadow">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{app.user.firstName} {app.user.lastName}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold capitalize">
                        {app.track.replace('-', ' ')}
                      </span>
                      {app.status === 'PENDING_TEST' && (
                        <span className="px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold">
                          Invited to Test
                        </span>
                      )}
                    </div>
                    <div className="text-slate-500 text-sm mb-3">{app.user.email}</div>
                    
                    {/* Details section */}
                    <div className="flex gap-6 text-sm">
                      <div>
                        <span className="text-slate-400 font-medium">Education:</span>
                        <span className="ml-2 font-bold text-slate-700 capitalize">{app.educationBackground.replace('-', ' ')}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium">Experience:</span>
                        <span className="ml-2 font-bold text-slate-700 capitalize">{app.experienceLevel}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    {app.status !== 'PENDING_TEST' ? (
                      <button 
                        onClick={() => handleSelectForTest(app.id)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-xl transition-colors shadow-sm inline-flex items-center gap-2"
                      >
                        Select for Test <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button disabled className="bg-slate-100 text-slate-400 font-bold py-2.5 px-6 rounded-xl cursor-not-allowed">
                        Test Pending
                      </button>
                    )}
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
