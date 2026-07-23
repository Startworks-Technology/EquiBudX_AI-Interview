import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, Target, ArrowUpRight, Upload, X, CheckCircle, Plus } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { API_BASE_URL } from '../../config/api';

interface Activity {
  id: number;
  type: string;
  studentName: string;
  details: string;
  createdAt: string;
}

interface DashboardStats {
  totalStudents: number;
  assessmentsCompleted: number;
  averageScore: string;
  recentActivity: Activity[];
}

export default function CollegeDashboard() {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<{added: number, skipped: number, defaultPassword?: string} | null>(null);
  
  const [uploadStep, setUploadStep] = useState<number>(0);
  const [rawCsvHeaders, setRawCsvHeaders] = useState<string[]>([]);
  const [rawCsvRows, setRawCsvRows] = useState<string[][]>([]);
  const [columnMap, setColumnMap] = useState<{ firstName: number, lastName: number, email: number }>({ firstName: -1, lastName: -1, email: -1 });

  const [csvPreviewData, setCsvPreviewData] = useState<{email: string, firstName: string, lastName: string, index: number}[]>([]);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/college/dashboard`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Failed to fetch college stats', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchStats();
    }
  }, [token]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadResult(null);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result as string;
      const rows = text.split('\n').map(row => row.trim()).filter(row => row);
      
      if (rows.length < 2) {
        alert("CSV must contain headers and at least one student row.");
        setUploading(false);
        return;
      }

      const headers = rows[0].split(',').map(h => h.trim());
      setRawCsvHeaders(headers);

      const dataRows = [];
      for (let i = 1; i < rows.length; i++) {
        dataRows.push(rows[i].split(',').map(c => c.trim()));
      }
      setRawCsvRows(dataRows);

      const lowerHeaders = headers.map(h => h.toLowerCase());
      const emailIdx = lowerHeaders.findIndex(h => h.includes('email'));
      const firstNameIdx = lowerHeaders.findIndex(h => h.includes('first') || h.includes('name'));
      const lastNameIdx = lowerHeaders.findIndex(h => h.includes('last'));

      setColumnMap({
        firstName: firstNameIdx,
        lastName: lastNameIdx,
        email: emailIdx
      });

      setUploadStep(1);
      setUploading(false);
    };
    reader.readAsText(file);
  };

  const handleGeneratePreview = () => {
    if (columnMap.firstName === -1 || columnMap.email === -1) {
      alert("Please map First Name and Email columns.");
      return;
    }

    const parsedStudents = [];
    for (let i = 0; i < rawCsvRows.length; i++) {
      const cols = rawCsvRows[i];
      if (cols[columnMap.email] && cols[columnMap.firstName]) {
        parsedStudents.push({
          email: cols[columnMap.email],
          firstName: cols[columnMap.firstName],
          lastName: columnMap.lastName !== -1 ? cols[columnMap.lastName] : '',
          index: i
        });
      }
    }

    setCsvPreviewData(parsedStudents);
    setSelectedRows(new Set(parsedStudents.map(s => s.index)));
    setUploadStep(2);
  };

  const handleConfirmImport = async () => {
    const studentsToUpload = csvPreviewData.filter(s => selectedRows.has(s.index));
    if (studentsToUpload.length === 0) return;

    setUploading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/college/add-students`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ students: studentsToUpload })
      });

      if (response.ok) {
        const data = await response.json();
        setUploadResult(data);
        fetchStats(); // Refresh dashboard
      } else {
        alert("Failed to upload students");
      }
    } catch (error) {
      console.error("Upload error", error);
    } finally {
      setUploading(false);
    }
  };

  const statCards = [
    { label: 'Total Students', value: stats?.totalStudents || 0, icon: Users },
    { label: 'Assessments', value: stats?.assessmentsCompleted || 0, icon: BookOpen },
    { label: 'Avg. Score', value: `${stats?.averageScore || 0}%`, icon: Target },
  ];

  if (loading) {
    return <div className="p-10 max-w-7xl mx-auto font-medium text-slate-500">Loading workspace...</div>;
  }

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10 bg-[#FAFAFA] min-h-screen">
      {/* Header Section (ClassroomIO Style) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Welcome back, {user?.firstName}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Here's an overview of your college workspace today.
          </p>
        </div>
        <button 
          onClick={() => setIsInviteModalOpen(true)}
          className="px-4 py-2 bg-black text-white rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Students
        </button>
      </div>

      {/* Flat Clean Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {statCards.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 text-gray-700 flex items-center justify-center">
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-0.5">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity Table (Clean UI) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-gray-900">Recent Activity</h2>
            <button 
              onClick={() => navigate('/college/students')}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              View All
            </button>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {stats?.recentActivity && stats.recentActivity.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {stats.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex flex-shrink-0 items-center justify-center font-semibold text-gray-600 text-sm border border-gray-200">
                      {activity.studentName.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900">{activity.studentName}</p>
                      <p className="text-sm text-gray-500 truncate">{activity.details}</p>
                    </div>
                    <div className="text-xs font-medium text-gray-400">
                      {new Date(activity.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center">
                <p className="text-sm text-gray-500 font-medium">No recent activity found.</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions (ClassroomIO Style) */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-gray-900">Workspace Settings</h2>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Bulk Import</h3>
                  <p className="text-xs text-gray-500 mt-1 mb-2">Import students instantly using a CSV file.</p>
                  <button onClick={() => setIsInviteModalOpen(true)} className="text-sm font-semibold text-blue-600">Import CSV &rarr;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ultra Clean Modal */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 bg-gray-900/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-900">Add Students via CSV</h2>
              <button onClick={() => { setIsInviteModalOpen(false); setUploadResult(null); setUploadStep(0); setRawCsvHeaders([]); setRawCsvRows([]); setColumnMap({firstName:-1, lastName:-1, email:-1}); setCsvPreviewData([]); setSelectedRows(new Set()); }} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {uploadResult ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Import Successful</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Added <strong className="text-gray-900">{uploadResult.added}</strong> new students.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-left">
                    <p className="text-xs text-gray-600">
                      Default assigned password:<br/>
                      <code className="bg-white border border-gray-200 px-2 py-1 rounded mt-1.5 inline-block font-mono text-gray-900">{uploadResult.defaultPassword}</code>
                    </p>
                  </div>
                </div>
              ) : uploadStep === 0 ? (
                <>
                  <p className="text-sm text-gray-500 mb-6">
                    Upload a CSV file containing <strong className="text-gray-800">First Name</strong> and <strong className="text-gray-800">Email</strong> columns.
                  </p>
                  
                  <div className="border border-dashed border-gray-300 rounded-lg p-10 text-center bg-gray-50 hover:bg-gray-100 transition-colors relative cursor-pointer group">
                    <input 
                      type="file" 
                      accept=".csv"
                      onChange={handleFileUpload}
                      disabled={uploading}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                    />
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3 group-hover:text-black transition-colors" />
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      {uploading ? 'Reading file...' : 'Select CSV file'}
                    </p>
                  </div>
                </>
              ) : uploadStep === 1 ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Map Columns</h3>
                    <p className="text-sm text-gray-500">Select which CSV column matches each required field.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name (Required)</label>
                      <select 
                        className="w-full border-gray-300 rounded-md shadow-sm text-sm focus:border-blue-500 focus:ring-blue-500"
                        value={columnMap.firstName}
                        onChange={(e) => setColumnMap({...columnMap, firstName: parseInt(e.target.value)})}
                      >
                        <option value={-1}>-- Select Column --</option>
                        {rawCsvHeaders.map((h, i) => <option key={i} value={i}>{h}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name (Optional)</label>
                      <select 
                        className="w-full border-gray-300 rounded-md shadow-sm text-sm focus:border-blue-500 focus:ring-blue-500"
                        value={columnMap.lastName}
                        onChange={(e) => setColumnMap({...columnMap, lastName: parseInt(e.target.value)})}
                      >
                        <option value={-1}>-- Ignore / Not Provided --</option>
                        {rawCsvHeaders.map((h, i) => <option key={i} value={i}>{h}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (Required)</label>
                      <select 
                        className="w-full border-gray-300 rounded-md shadow-sm text-sm focus:border-blue-500 focus:ring-blue-500"
                        value={columnMap.email}
                        onChange={(e) => setColumnMap({...columnMap, email: parseInt(e.target.value)})}
                      >
                        <option value={-1}>-- Select Column --</option>
                        {rawCsvHeaders.map((h, i) => <option key={i} value={i}>{h}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-gray-100">
                    <button 
                      onClick={() => { setUploadStep(0); setRawCsvHeaders([]); setRawCsvRows([]); }}
                      className="px-4 py-2 border border-gray-200 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button 
                      onClick={handleGeneratePreview}
                      disabled={columnMap.firstName === -1 || columnMap.email === -1}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Generate Preview
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm font-medium text-gray-900">
                    Found {csvPreviewData.length} students. Select the ones you want to import.
                  </p>
                  
                  <div className="max-h-60 overflow-y-auto border border-gray-200 rounded-lg">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 sticky top-0 border-b border-gray-200 z-10">
                        <tr>
                          <th className="px-4 py-3 w-12 text-center">
                            <input 
                              type="checkbox" 
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              checked={selectedRows.size === csvPreviewData.length && csvPreviewData.length > 0}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedRows(new Set(csvPreviewData.map(s => s.index)));
                                } else {
                                  setSelectedRows(new Set());
                                }
                              }}
                            />
                          </th>
                          <th className="px-4 py-3 font-semibold text-gray-700">Name</th>
                          <th className="px-4 py-3 font-semibold text-gray-700">Email</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {csvPreviewData.map((student) => (
                          <tr key={student.index} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-center">
                              <input 
                                type="checkbox" 
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                checked={selectedRows.has(student.index)}
                                onChange={(e) => {
                                  const next = new Set(selectedRows);
                                  if (e.target.checked) next.add(student.index);
                                  else next.delete(student.index);
                                  setSelectedRows(next);
                                }}
                              />
                            </td>
                            <td className="px-4 py-3 text-gray-900">{student.firstName} {student.lastName}</td>
                            <td className="px-4 py-3 text-gray-500 truncate max-w-[150px]">{student.email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex gap-3 justify-end pt-4">
                    <button 
                      onClick={() => { setUploadStep(1); }}
                      className="px-4 py-2 border border-gray-200 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button 
                      onClick={handleConfirmImport}
                      disabled={selectedRows.size === 0 || uploading}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {uploading ? 'Importing...' : `Confirm Import (${selectedRows.size})`}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
