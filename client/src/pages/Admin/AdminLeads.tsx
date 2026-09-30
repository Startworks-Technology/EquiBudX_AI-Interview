import { useState, useEffect } from 'react';
import { Loader, Search, RefreshCw, Mail, Phone, BookOpen, Inbox } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  collegeName: string | null;
  degree: string | null;
  graduationYear: string | null;
  course: string | null;
  message: string | null;
  source: string | null;
  createdAt: string;
}

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchLeads = async () => {
    setLoading(true);
    try {
      // In a real app, you'd want to add authentication to the /api/leads GET route
      const res = await fetch('http://localhost:5000/api/leads', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      setLeads(data);
    } catch (err) {
      console.error('Failed to fetch leads:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (lead.phone && lead.phone.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="h-full flex flex-col bg-slate-50">
      <div className="px-8 py-8 bg-white border-b border-slate-200 flex-shrink-0 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Marketing Leads</h1>
          <p className="text-slate-500 font-medium">View all inquiries submitted from the Landing Page.</p>
        </div>
        <button 
          onClick={fetchLeads}
          className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2 rounded-xl transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-6 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search leads by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium shadow-sm"
            />
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader className="w-8 h-8 text-indigo-600 animate-spin" />
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900">No leads found</h3>
              <p className="text-slate-500">Wait for users to submit the form on the landing page.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLeads.map(lead => (
                <div key={lead.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow relative overflow-hidden">
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                  
                  <h3 className="text-xl font-black text-slate-900 mb-4 truncate" title={lead.name}>
                    {lead.name}
                  </h3>
                  
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center gap-3 text-slate-600">
                      <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <a href={`mailto:${lead.email}`} className="text-sm font-medium hover:text-indigo-600 truncate">{lead.email}</a>
                    </div>
                    {lead.phone && (
                      <div className="flex items-center gap-3 text-slate-600">
                        <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span className="text-sm font-medium">{lead.phone}</span>
                      </div>
                    )}
                    {lead.collegeName && (
                      <div className="flex items-start gap-3 text-slate-600">
                        <BookOpen className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium leading-tight">
                          {lead.collegeName} {lead.graduationYear ? `(${lead.graduationYear})` : ''}
                        </span>
                      </div>
                    )}
                    {lead.degree && (
                      <div className="flex items-start gap-3 text-slate-600">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5" /> {/* Spacer to align */}
                        <span className="text-xs font-bold text-slate-500 uppercase">{lead.degree}</span>
                      </div>
                    )}
                    {lead.course && (
                      <div className="flex items-start gap-3 text-slate-600">
                        <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {lead.course.replace('-', ' ')}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
                    <span className="bg-slate-100 text-slate-500 px-2 py-1 rounded-md">{lead.source}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
