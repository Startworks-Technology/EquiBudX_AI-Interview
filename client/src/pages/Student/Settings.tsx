import { useState } from 'react';
import { ShieldCheck, X, Eye, EyeOff } from 'lucide-react';
import { API_BASE_URL } from '../../config/api';

export default function Settings() {
  
  // Change Password State
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [pwdError, setPwdError] = useState<string|null>(null);
  const [pwdSuccess, setPwdSuccess] = useState<string|null>(null);
  const [isChangingPwd, setIsChangingPwd] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwdError(null);
    setPwdSuccess(null);
    setIsChangingPwd(true);

    try {
      const token = localStorage.getItem('mockmate_token');
      const response = await fetch(`${API_BASE_URL}/api/auth/change-password`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ currentPassword, newPassword })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to change password');
      
      setPwdSuccess(data.message);
      setCurrentPassword('');
      setNewPassword('');
    } catch(err: any) {
      setPwdError(err.message);
    } finally {
      setIsChangingPwd(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-black text-slate-900 mb-8">Account Settings</h1>
      
      <div className="space-y-6">
        {/* Security Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Security</h2>
              <p className="text-sm text-slate-500 font-medium">Manage your password and account protection.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-bold text-slate-900">Change Password</h3>
              <p className="text-sm text-slate-500">Update your password to keep your account secure.</p>
            </div>
            <button 
              onClick={() => setIsPasswordModalOpen(true)}
              className="px-6 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
            >
              Update Password
            </button>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative">
            <button 
              onClick={() => {
                setIsPasswordModalOpen(false);
                setPwdError(null);
                setPwdSuccess(null);
                setCurrentPassword('');
                setNewPassword('');
              }} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Change Password</h2>
              <p className="text-sm text-slate-500 mb-6">Enter your current password and choose a new one.</p>

              {pwdError && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-100">{pwdError}</div>}
              {pwdSuccess && <div className="mb-4 p-3 bg-emerald-50 text-emerald-600 rounded-lg text-sm font-medium border border-emerald-100">{pwdSuccess}</div>}

              <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Current Password</label>
                  <div className="relative">
                    <input 
                      type={showCurrentPassword ? "text" : "password"} 
                      required
                      value={currentPassword}
                      onChange={e => setCurrentPassword(e.target.value)}
                      className="w-full px-4 pr-12 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">New Password</label>
                  <div className="relative">
                    <input 
                      type={showNewPassword ? "text" : "password"} 
                      required
                      minLength={6}
                      value={newPassword}
                      onChange={e => setNewPassword(e.target.value)}
                      className="w-full px-4 pr-12 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={isChangingPwd || !currentPassword || !newPassword}
                  className="w-full mt-2 bg-primary text-white py-2.5 rounded-lg font-bold hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                  {isChangingPwd ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
