import React, { useState, useEffect } from 'react';
import { GraduationCap, Search, Plus, Building2, Users, CheckCircle, AlertCircle, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { API_BASE_URL } from '../../config/api';

interface CollegeUser {
  id: string;
  email: string;
  firstName: string;
  lastName?: string;
  isVerified: boolean;
}

interface College {
  id: string;
  name: string;
  createdAt: string;
  users: CollegeUser[];
}

export default function AdminColleges() {
  const { token } = useAuth();
  const [colleges, setColleges] = useState<College[]>([]);
  const [standaloneAdmins, setStandaloneAdmins] = useState<CollegeUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [collegeName, setCollegeName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminFirstName, setAdminFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const fetchColleges = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/colleges`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setColleges(data.colleges || []);
        setStandaloneAdmins(data.standaloneAdmins || []);
      }
    } catch (error) {
      console.error('Error fetching colleges:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchColleges();
  }, [token]);

  const handleCreateCollege = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionSuccess(null);
    setActionError(null);

    if (!collegeName.trim() || !adminEmail.trim()) {
      setActionError('College name and Admin email are required.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/colleges`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name: collegeName.trim(),
          adminEmail: adminEmail.trim(),
          adminFirstName: adminFirstName.trim() || collegeName.trim()
        })
      });

      const data = await response.json();

      if (response.ok) {
        setActionSuccess(`College "${collegeName}" onboarded successfully! Default Admin Password: ${data.defaultPassword}`);
        setIsAddModalOpen(false);
        setCollegeName('');
        setAdminEmail('');
        setAdminFirstName('');
        fetchColleges();
      } else {
        setActionError(data.error || 'Failed to onboard college');
      }
    } catch (error) {
      setActionError('Server error while onboarding college.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredColleges = colleges.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.users.some(u => u.email.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-[#FAFAFA] min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Colleges Directory</h1>
          <p className="text-sm text-slate-500 mt-1">View and manage all registered institutions and college admin accounts.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Onboard College
        </button>
      </div>

      {actionSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>{actionSuccess}</span>
          </div>
          <button onClick={() => setActionSuccess(null)} className="text-emerald-800 font-bold ml-4">✕</button>
        </div>
      )}

      {actionError && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span>{actionError}</span>
          </div>
          <button onClick={() => setActionError(null)} className="text-red-800 font-bold ml-4">✕</button>
        </div>
      )}

      {/* Search Filter */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by college name or admin email..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 text-sm text-slate-900 font-medium"
          />
        </div>
      </div>

      {/* Colleges Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full py-12 text-center text-slate-500 font-medium">Loading colleges directory...</div>
        ) : filteredColleges.length === 0 ? (
          <div className="col-span-full py-16 text-center text-slate-500 font-medium bg-white rounded-2xl border border-slate-200">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            No colleges found. Click "Onboard College" to add one.
          </div>
        ) : (
          filteredColleges.map((college) => {
            const adminUser = college.users.find(u => u.role === 'college') || college.users[0];
            const studentCount = college.users.filter(u => u.role === 'student').length;

            return (
              <div key={college.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 text-violet-700 flex items-center justify-center font-bold text-lg">
                    {college.name.charAt(0)}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                    <Users className="w-3.5 h-3.5" /> {studentCount} students
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{college.name}</h3>
                  <p className="text-xs font-medium text-slate-400 mt-0.5">Joined {new Date(college.createdAt).toLocaleDateString()}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">College Admin</p>
                  <p className="text-sm font-semibold text-slate-800">{adminUser?.firstName || 'Admin'}</p>
                  <p className="text-xs text-slate-500 truncate">{adminUser?.email || 'N/A'}</p>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Onboard College Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900">Onboard New College</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCollege} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Institution Name</label>
                <input 
                  type="text" 
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  placeholder="e.g. Oxford University"
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Admin Name</label>
                <input 
                  type="text" 
                  value={adminFirstName}
                  onChange={(e) => setAdminFirstName(e.target.value)}
                  placeholder="e.g. Dr. John Doe"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Admin Email Address</label>
                <input 
                  type="email" 
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  placeholder="admin@college.edu"
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button 
                  type="button" 
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 disabled:opacity-70"
                >
                  {isSubmitting ? 'Creating...' : 'Onboard College'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
