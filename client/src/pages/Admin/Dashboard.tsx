import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, BookOpen, ArrowUpRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { API_BASE_URL } from '../../config/api';

interface Stats {
  totalStudents: number;
  totalColleges: number;
  totalAssessments: number;
  recentColleges: Array<{ id: string; name: string; createdAt: string; _count: { users: number } }>;
  recentStudents: Array<{ id: string; firstName: string; lastName: string; email: string; createdAt: string; isVerified: boolean; college?: { name: string } }>;
}

export default function AdminDashboard() {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminStats = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/admin/stats`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Failed to fetch admin stats', error);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchAdminStats();
  }, [token]);

  if (loading) {
    return <div className="p-8 max-w-7xl mx-auto text-slate-500 font-medium">Loading platform overview...</div>;
  }

  const statCards = [
    { label: 'Total Colleges', value: stats?.totalColleges || 0, icon: GraduationCap, path: '/admin/colleges', color: 'violet' },
    { label: 'Total Students', value: stats?.totalStudents || 0, icon: Users, path: '/admin/students', color: 'blue' },
    { label: 'Assessments Taken', value: stats?.totalAssessments || 0, icon: BookOpen, path: '#', color: 'emerald' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-end border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-1">
            Super Admin Overview
          </h1>
          <p className="text-slate-500 font-medium">
            Welcome back, {user?.firstName}. Global system overview and performance.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {statCards.map((stat, i) => (
          <div 
            key={i} 
            onClick={() => stat.path !== '#' && navigate(stat.path)}
            className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-900 text-white font-bold`}>
                <stat.icon className="w-6 h-6" />
              </div>
              {stat.path !== '#' && (
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
              )}
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h3>
            <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Colleges */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">Registered Colleges</h2>
            <button onClick={() => navigate('/admin/colleges')} className="text-xs font-bold text-violet-600 hover:text-violet-800">
              View All &rarr;
            </button>
          </div>

          <div className="space-y-3">
            {stats?.recentColleges && stats.recentColleges.length > 0 ? (
              stats.recentColleges.map((college) => (
                <div key={college.id} className="flex items-center gap-4 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-base flex-shrink-0">
                    {college.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900">{college.name}</p>
                    <p className="text-xs font-medium text-slate-500">Registered {new Date(college.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-md">
                    {college._count.users} students
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-400 py-6 text-center">No colleges registered yet.</p>
            )}
          </div>
        </div>

        {/* Recent Student Activity */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">Recent Student Enrolments</h2>
            <button onClick={() => navigate('/admin/students')} className="text-xs font-bold text-violet-600 hover:text-violet-800">
              View Directory &rarr;
            </button>
          </div>

          <div className="space-y-3">
            {stats?.recentStudents && stats.recentStudents.length > 0 ? (
              stats.recentStudents.map((student) => (
                <div key={student.id} className="flex items-center gap-4 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {student.firstName.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900">{student.firstName} {student.lastName}</p>
                    <p className="text-xs font-medium text-slate-500 truncate">{student.email}</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    {student.college?.name || 'Unassigned'}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-400 py-6 text-center">No students registered yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
