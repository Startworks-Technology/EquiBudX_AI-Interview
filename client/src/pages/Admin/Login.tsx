import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { API_BASE_URL } from '../../config/api';
import { ShieldAlert, ArrowRight, Loader } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Make the actual API request to authenticate
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Invalid credentials');
      }

      // 2. Check if the user is an admin
      if (data.user.role !== 'admin') {
        throw new Error('Unauthorized: Admin access required.');
      }

      // 3. Call the AuthContext login function with the correct arguments (User object and token)
      login(data.user, data.token);
      
      // 4. Navigate to admin dashboard
      navigate('/admin/dashboard');

    } catch (err: any) {
      setError(err.message || 'Invalid admin credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 selection:bg-indigo-500/30">
      <div className="w-full max-w-md">
        
        {/* Admin Branding */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-indigo-100">
            <ShieldAlert className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Startworks Learning Admin</h1>
          <p className="text-slate-500 font-medium">Secure Staff Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-6 text-sm font-bold text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Admin Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium"
                placeholder="admin@equibudx.in"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Master Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 mt-4 shadow-lg shadow-indigo-600/30"
            >
              {loading ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                <>Secure Login <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>
        
        <p className="text-center text-slate-500 text-sm font-medium mt-8">
          Not an admin? <a href="/login" className="text-indigo-600 hover:text-indigo-700 transition-colors font-bold">Go to Student Portal</a>
        </p>

      </div>
    </div>
  );
}
