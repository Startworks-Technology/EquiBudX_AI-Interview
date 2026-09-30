import { useState } from 'react';
import { Send, CheckCircle, Loader } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    collegeName: '',
    degree: '',
    graduationYear: '',
    course: 'full-stack'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', collegeName: '', degree: '', graduationYear: '', course: 'full-stack' });
      } else {
        const data = await res.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="py-24 bg-slate-900 relative overflow-hidden" id="apply">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-4xl font-black text-white mb-4">Request Received!</h2>
          <p className="text-xl text-slate-400">
            Thank you for your interest. Our admissions team will be in touch with you shortly with more information about the bootcamps.
          </p>
          <button 
            onClick={() => setSuccess(false)}
            className="mt-8 text-indigo-400 hover:text-indigo-300 font-bold"
          >
            Submit another inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" id="apply">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-4 block">Take the Next Step</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to accelerate your tech career?
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Join thousands of students who have transformed their careers through our AI-powered bootcamps. Drop your details and our team will get in touch to help you choose the right path.
            </p>
            
            <ul className="space-y-4">
              {['100% Placement Assistance', 'AI-Powered Interview Practice', 'Industry Expert Mentorship', 'Real-world Projects'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 lg:p-10 border border-slate-700 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Request Information</h3>
            
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl mb-6 text-sm font-bold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-slate-400 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold text-slate-400 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold text-slate-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">College / University Name</label>
                <input
                  type="text"
                  value={formData.collegeName}
                  onChange={(e) => setFormData({...formData, collegeName: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="E.g., Stanford University"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold text-slate-400 mb-2">Degree & Branch</label>
                  <input
                    type="text"
                    value={formData.degree}
                    onChange={(e) => setFormData({...formData, degree: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="B.Tech Computer Science"
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold text-slate-400 mb-2">Passing Year</label>
                  <select
                    value={formData.graduationYear}
                    onChange={(e) => setFormData({...formData, graduationYear: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors appearance-none"
                  >
                    <option value="">Select Year</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Track of Interest</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors appearance-none"
                >
                  <option value="full-stack">Full Stack Web Development</option>
                  <option value="data-engineering">Data Engineering</option>
                  <option value="solutions-architecture">Solutions Architecture</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4"
              >
                {loading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <>Get Free Consultation <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
