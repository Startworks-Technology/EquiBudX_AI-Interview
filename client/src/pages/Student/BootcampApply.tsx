import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronRight, ArrowLeft, CheckCircle, GraduationCap, Briefcase } from 'lucide-react';

export default function BootcampApply() {
  const [searchParams] = useSearchParams();
  const trackParam = searchParams.get('track') || 'full-stack';
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    track: trackParam,
    educationBackground: '',
    experienceLevel: ''
  });

  const handleNext = () => setStep(2);
  
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/bootcamp/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust depending on Auth setup
        },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Failed to submit');
      setStep(3);
    } catch (err) {
      console.error(err);
      alert('Error submitting application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const tracks = [
    { id: 'full-stack', title: 'Full Stack Development', color: 'blue' },
    { id: 'data-engineering', title: 'Data Engineering', color: 'emerald' },
    { id: 'solutions-architecture', title: 'Solutions Architecture', color: 'purple' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm z-10">
        <button 
          onClick={() => navigate('/student/dashboard')}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Bootcamp Application</h1>
        <div className="w-24"></div> {/* Spacer for centering */}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          
          {/* Progress Indicators */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-slate-200'}`} />
            <div className={`w-8 h-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}`} />
            <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}`} />
            <div className={`w-8 h-1 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-slate-200'}`} />
            <div className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-slate-200'}`} />
          </div>

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Select Your Track</h2>
              <p className="text-slate-500 mb-8 font-medium">Which intensive program are you applying for?</p>
              
              <div className="space-y-4">
                {tracks.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setFormData({...formData, track: t.id})}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between ${
                      formData.track === t.id 
                        ? `border-${t.color}-500 bg-${t.color}-50 shadow-md shadow-${t.color}-500/10` 
                        : 'border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <span className={`font-bold ${formData.track === t.id ? `text-${t.color}-700` : 'text-slate-700'}`}>
                      {t.title}
                    </span>
                    {formData.track === t.id && <CheckCircle className={`w-5 h-5 text-${t.color}-500`} />}
                  </button>
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="w-full mt-10 bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-2"
              >
                Continue <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Your Background</h2>
              <p className="text-slate-500 mb-8 font-medium">Help us understand your current experience level.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <GraduationCap className="w-4 h-4 text-slate-400" /> Education Background
                  </label>
                  <select 
                    required
                    value={formData.educationBackground}
                    onChange={e => setFormData({...formData, educationBackground: e.target.value})}
                    className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-700"
                  >
                    <option value="">Select your highest degree</option>
                    <option value="high-school">High School</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <Briefcase className="w-4 h-4 text-slate-400" /> Programming Experience
                  </label>
                  <select 
                    required
                    value={formData.experienceLevel}
                    onChange={e => setFormData({...formData, experienceLevel: e.target.value})}
                    className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-700"
                  >
                    <option value="">Select your experience level</option>
                    <option value="none">No prior experience</option>
                    <option value="beginner">Beginner (1-6 months)</option>
                    <option value="intermediate">Intermediate (6 months - 2 years)</option>
                    <option value="advanced">Advanced (2+ years)</option>
                  </select>
                </div>

                <div className="flex gap-4 mt-10">
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 bg-slate-100 text-slate-600 font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-2/3 bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-primary transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in zoom-in duration-500 text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Application Saved!</h2>
              <p className="text-slate-500 mb-8 font-medium leading-relaxed max-w-sm mx-auto">
                Your profile has been recorded. The next mandatory step is to pass the Pre-Screening Eligibility Test.
              </p>
              <button 
                onClick={() => navigate('/student/assignments')}
                className="bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-primary/30"
              >
                Proceed to Pre-Screening Test
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
