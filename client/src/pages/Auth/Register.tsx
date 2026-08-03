import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { API_BASE_URL } from '../../config/api';
import { ArrowRight, Lock, Mail, User as UserIcon, ShieldCheck, CheckCircle2, Building, Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function Register() {
  const [role, setRole] = useState<'student' | 'college'>('student');
  
  // Registration Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password, role })
      });

      const responseText = await response.text();
      let data: any = {};
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        throw new Error(responseText || 'Server error. Please check database connection.');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to register');
      }

      // Instant Auto-Login upon registration
      if (data.token && data.user) {
        login(data.user, data.token);
        navigate(`/${data.user.role}/dashboard`);
      }
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl font-black mb-6 leading-tight">Start your career with EquiBudX.</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Join thousands of students from top degree colleges who are passing their technical rounds.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12">
        <div className="w-full max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <Link to="/" className="text-xl font-black tracking-tighter text-primary">EquiBudX.</Link>
          </div>
          
          <h2 className="text-3xl font-bold text-foreground mb-2">Create Account</h2>
              <p className="text-muted-foreground mb-8">Join the platform to access premium courses.</p>

              {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-200">{error}</div>}

              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-foreground">I am registering as...</label>
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <button
                      type="button"
                      onClick={() => setRole('student')}
                      className={`py-2 rounded-lg text-sm font-semibold transition-all border ${role === 'student' ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-muted'}`}
                    >
                      Student
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('college')}
                      className={`py-2 rounded-lg text-sm font-semibold transition-all border ${role === 'college' ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-muted'}`}
                    >
                      College / Institute
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-foreground">
                      {role === 'college' ? 'College / Institute Name' : 'First Name'}
                    </label>
                    <div className="relative">
                      {role === 'college' ? (
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      ) : (
                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      )}
                      <input 
                        type="text" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder={role === 'college' ? 'National Institute of Tech' : 'John'}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-foreground">
                      {role === 'college' ? 'College Code' : 'Last Name'}
                    </label>
                    <div className="relative">
                      {role === 'college' ? (
                        <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      ) : (
                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      )}
                      <input 
                        type="text" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder={role === 'college' ? 'NIT-2026' : 'Doe'}
                      />
                    </div>
                  </div>
                </div>

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
                  <label className="text-sm font-semibold text-foreground">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="••••••••"
                      minLength={6}
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
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 mt-6"
                >
                  {isLoading ? 'Creating...' : 'Create Account'} <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-muted-foreground">
                Already have an account? <Link to="/login" className="font-semibold text-primary hover:underline">Log in</Link>
              </p>
        </div>
      </div>
    </div>
  );
}
