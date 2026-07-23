import React, { useState, useEffect, useRef } from 'react';
import { Users, Search, MoreVertical, ShieldCheck, Clock, Key, UserX, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { API_BASE_URL } from '../../config/api';

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  isVerified: boolean;
}

export default function CollegeStudents() {
  const { token } = useAuth();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/college/students`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchStudents();
  }, [token]);

  // Close open dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResetPassword = async (studentId: string, studentName: string) => {
    setActiveMenuId(null);
    setActionSuccess(null);
    setActionError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/college/students/${studentId}/reset-password`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });

      const data = await response.json();
      if (response.ok) {
        setActionSuccess(`Password for ${studentName} reset to default: ${data.defaultPassword}`);
      } else {
        setActionError(data.error || 'Failed to reset password');
      }
    } catch (error) {
      setActionError('Server error while resetting password.');
    }
  };

  const handleRemoveStudent = async (studentId: string, studentName: string) => {
    setActiveMenuId(null);
    setActionSuccess(null);
    setActionError(null);

    if (!window.confirm(`Are you sure you want to remove ${studentName} from your college roster?`)) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/college/students/${studentId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });

      const data = await response.json();
      if (response.ok) {
        setActionSuccess(`${studentName} has been removed from your college roster.`);
        setStudents(prev => prev.filter(s => s.id !== studentId));
      } else {
        setActionError(data.error || 'Failed to remove student');
      }
    } catch (error) {
      setActionError('Server error while removing student.');
    }
  };

  const filteredStudents = students.filter(s => 
    `${s.firstName} ${s.lastName}`.toLowerCase().includes(search.toLowerCase()) || 
    s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-8 bg-[#FAFAFA] min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Student Roster</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and view all students enrolled in your college.</p>
        </div>
      </div>

      {actionSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span>{actionSuccess}</span>
          </div>
          <button onClick={() => setActionSuccess(null)} className="text-green-800 hover:text-green-950 font-bold ml-4">✕</button>
        </div>
      )}

      {actionError && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span>{actionError}</span>
          </div>
          <button onClick={() => setActionError(null)} className="text-red-800 hover:text-red-950 font-bold ml-4">✕</button>
        </div>
      )}

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm text-gray-900 font-medium"
          />
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto min-h-[300px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500">
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Joined Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-sm font-medium text-gray-500">
                    Loading students...
                  </td>
                </tr>
              ) : filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-sm font-medium text-gray-500">
                    <Users className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                    No students found.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                          {student.firstName.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{student.firstName} {student.lastName}</p>
                          <p className="text-xs font-medium text-gray-500">{student.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {student.isVerified ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                          <ShieldCheck className="w-3.5 h-3.5" /> Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                          <Clock className="w-3.5 h-3.5" /> Pending
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-gray-600">
                        {new Date(student.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-right relative">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenuId(activeMenuId === student.id ? null : student.id);
                        }}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>

                      {/* Dropdown Action Menu */}
                      {activeMenuId === student.id && (
                        <div 
                          ref={menuRef}
                          className="absolute right-6 top-12 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-30 py-1 text-left animate-in fade-in zoom-in-95 duration-100"
                        >
                          <button
                            onClick={() => handleResetPassword(student.id, student.firstName)}
                            className="w-full px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
                          >
                            <Key className="w-3.5 h-3.5 text-blue-600" />
                            Reset Password
                          </button>
                          <button
                            onClick={() => handleRemoveStudent(student.id, student.firstName)}
                            className="w-full px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors border-t border-gray-100"
                          >
                            <UserX className="w-3.5 h-3.5 text-red-600" />
                            Remove Student
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
