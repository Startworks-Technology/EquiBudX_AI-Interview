import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { API_BASE_URL } from '../../config/api';
import { ArrowRight, Lock, Mail, ShieldCheck, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [step, setStep] = useState<'login' | 'verify'>('login');
  
  // Login State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Verification State
  const [otpCode, setOtpCode] = useState('');
  
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 403 && data.requireVerification) {
          // Password was correct, but email is unverified
          setStep('verify');
          return;
        }
        throw new Error(data.error || 'Invalid credentials');
      }

      login(data.user, data.token);
      navigate(`/${data.user.role}/dashboard`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/verify-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: otpCode })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify');
      }

      login(data.user, data.token);
      navigate(`/${data.user.role}/dashboard`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const resendOtp = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/resend-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to resend');
      alert('A new code has been sent to your email.');
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
          <h1 className="text-4xl font-black mb-6 leading-tight">Welcome back to MockMate.</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Log in to continue your journey. Practice technical interviews, upskill, and get hired.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <div className="w-full max-w-sm mx-auto">
          <Link to="/" className="text-2xl font-black tracking-tighter text-primary mb-12 block md:hidden">MockMate.</Link>
          
          {step === 'login' ? (
            <>
              <h2 className="text-3xl font-bold text-foreground mb-2">Log In</h2>
              <p className="text-muted-foreground mb-8">Enter your credentials to access your account.</p>

              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm mb-6 border border-red-100 font-medium">
                  {error}
                </div>
              )}

              <form onSubmit={handleLoginSubmit} className="space-y-5">
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

                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-foreground">Password</label>
                    <Link to="/forgot-password" className="text-sm font-medium text-primary hover:underline">Forgot password?</Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="••••••••"
                      required
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
                  disabled={isLoading}
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 mt-4"
                >
                  {isLoading ? 'Logging in...' : 'Log In'} <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-muted-foreground">
                Don't have an account? <Link to="/register" className="font-semibold text-primary hover:underline">Sign up</Link>
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Verify Email</h2>
              <p className="text-muted-foreground mb-8">We noticed your email isn't verified yet. We sent a new 6-digit code to <span className="font-bold text-slate-800">{email}</span></p>

              {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-200">{error}</div>}

              <form onSubmit={handleVerifySubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-foreground">Verification Code</label>
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

                <button 
                  type="submit" 
                  disabled={isLoading || otpCode.length !== 6}
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 mt-6"
                >
                  {isLoading ? 'Verifying...' : 'Verify Email'}
                </button>
              </form>
              
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Didn't receive the code? <button onClick={resendOtp} disabled={isLoading} className="font-semibold text-primary hover:underline disabled:opacity-50">Click to resend</button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
