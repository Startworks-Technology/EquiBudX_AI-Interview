import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Mail, Lock, ShieldCheck, KeyRound, Eye, EyeOff } from 'lucide-react';
import { API_BASE_URL } from '../../config/api';

export default function ForgotPassword() {
  const [step, setStep] = useState<'email' | 'reset'>('email');
  
  // State
  const [email, setEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  
  const navigate = useNavigate();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process request.');
      }

      setStep('reset');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: otpCode, newPassword })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to reset password');
      }

      setSuccessMsg('Your password has been successfully reset! You will be redirected to login...');
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-background">
      {/* Left Side - Visual */}
      <div className="hidden md:flex flex-col justify-center items-center bg-slate-900 text-white p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl font-black mb-6 leading-tight">Recover your account.</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Don't worry, it happens to the best of us. Let's get you back into EquiBudX.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <div className="w-full max-w-sm mx-auto">
          <Link to="/" className="text-2xl font-black tracking-tighter text-primary mb-12 block md:hidden">EquiBudX.</Link>
          
          {successMsg ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Password Reset!</h2>
              <p className="text-slate-600 font-medium">{successMsg}</p>
            </div>
          ) : step === 'email' ? (
            <>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <KeyRound className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Forgot Password?</h2>
              <p className="text-muted-foreground mb-8">Enter the email associated with your account and we'll send you a recovery code.</p>

              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm mb-6 border border-red-100 font-medium">
                  {error}
                </div>
              )}

              <form onSubmit={handleEmailSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-foreground">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 mt-4"
                >
                  {isLoading ? 'Sending...' : 'Send Recovery Code'} <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-muted-foreground">
                Remember your password? <Link to="/login" className="font-semibold text-primary hover:underline">Log in</Link>
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Reset Password</h2>
              <p className="text-muted-foreground mb-8">We sent a 6-digit recovery code to <span className="font-bold text-slate-800">{email}</span></p>

              {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-200">{error}</div>}

              <form onSubmit={handleResetSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-foreground">6-Digit Code</label>
                  <input 
                    type="text" 
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="w-full px-4 py-3 text-center tracking-[1em] font-mono text-2xl rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="------"
                    maxLength={6}
                    required
                  />
                </div>

                <div className="space-y-1 mt-4">
                  <label className="text-sm font-semibold text-foreground">New Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="••••••••"
                      required
                      minLength={6}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading || otpCode.length !== 6 || newPassword.length < 6}
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 mt-6"
                >
                  {isLoading ? 'Resetting...' : 'Reset Password'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
