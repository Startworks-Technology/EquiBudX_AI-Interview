import { useState, useEffect } from 'react';
import { Loader, User, Search, RefreshCw, CheckCircle, XCircle, Clock } from 'lucide-react';

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

export default function AdminApplicants() {
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
      setApplicants(data);
    } catch (err) {
      console.error('Failed to fetch applicants:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/bootcamps/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      
      if (res.ok) {
        // Update local state
        setApplicants(applicants.map(app => 
          app.id === id ? { ...app, status: newStatus } : app
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
    app.user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.track.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'SELECTED':
        return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><CheckCircle className="w-3 h-3"/> Selected</span>;
      case 'PENDING_TEST':
        return <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><Clock className="w-3 h-3"/> Pending Test</span>;
      case 'UNDER_REVIEW':
        return <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><Clock className="w-3 h-3"/> Under Review</span>;
      case 'REJECTED':
        return <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><XCircle className="w-3 h-3"/> Rejected</span>;
      default:
        return <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">{status}</span>;
    }
  };

  return (
    <div className="h-full flex flex-col bg-slate-50">
      <div className="px-8 py-8 bg-white border-b border-slate-200 flex-shrink-0 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Bootcamp Applicants</h1>
          <p className="text-slate-500 font-medium">Manage and review bootcamp applications across all tracks.</p>
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
              placeholder="Search by name, email, or track..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-medium shadow-sm"
            />
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader className="w-8 h-8 text-primary animate-spin" />
            </div>
          ) : filteredApplicants.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <User className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900">No applicants found</h3>
              <p className="text-slate-500">Wait for students to start applying to the bootcamps.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-500">
                  <tr>
                    <th className="px-6 py-4">Applicant</th>
                    <th className="px-6 py-4">Track</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Test Score</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredApplicants.map(app => (
                    <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-900">{app.user.firstName} {app.user.lastName}</div>
                        <div className="text-sm text-slate-500">{app.user.email}</div>
                        <div className="text-xs text-slate-400 mt-1 capitalize">{app.educationBackground.replace('-', ' ')} • {app.experienceLevel}</div>
                      </td>
                      <td className="px-6 py-4 font-bold text-slate-700 capitalize">
                        {app.track.replace('-', ' ')}
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(app.status)}
                      </td>
                      <td className="px-6 py-4 font-bold text-slate-900">
                        {app.testScore !== null ? `${app.testScore}%` : '-'}
                      </td>
                      <td className="px-6 py-4">
                        <select 
                          value={app.status}
                          onChange={(e) => handleStatusChange(app.id, e.target.value)}
                          className="bg-white border border-slate-200 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
                        >
                          <option value="PENDING_TEST">Pending Test</option>
                          <option value="UNDER_REVIEW">Under Review</option>
                          <option value="SELECTED">Selected</option>
                          <option value="WAITLISTED">Waitlisted</option>
                          <option value="REJECTED">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
