import { useState, useEffect } from 'react';
import { Camera, MapPin, GraduationCap, Github, Linkedin, Link as LinkIcon, Plus, X, Phone, Globe, Edit2 } from 'lucide-react';
import { Country, State } from 'country-state-city';
import Select from 'react-select';
import { useAuth } from '../../contexts/AuthContext';
import { API_BASE_URL } from '../../config/api';

export default function Profile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  
  const [profileData, setProfileData] = useState({
    phone: "",
    state: "",
    country: "",
    education: "",
    githubUrl: "",
    linkedinUrl: "",
    portfolioUrl: "",
    otherLinks: [] as { title: string, url: string }[],
    skills: [] as string[]
  });

  const [newSkill, setNewSkill] = useState("");
  const [newLinkTitle, setNewLinkTitle] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [isAddingLink, setIsAddingLink] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('mockmate_token');
        const res = await fetch(`${API_BASE_URL}/api/user/profile`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          if (data.profile) {
            setProfileData({
              phone: data.profile.phone || "",
              state: data.profile.state || "",
              country: data.profile.country || "",
              education: data.profile.education || "",
              githubUrl: data.profile.githubUrl || "",
              linkedinUrl: data.profile.linkedinUrl || "",
              portfolioUrl: data.profile.portfolioUrl || "",
              otherLinks: data.profile.otherLinks || [],
              skills: data.profile.skills || []
            });
          }
        }
      } catch (err) {
        console.error('Failed to fetch profile', err);
      }
    };
    fetchProfile();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const token = localStorage.getItem('mockmate_token');
      const res = await fetch(`${API_BASE_URL}/api/user/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(profileData)
      });
      if (res.ok) {
        setIsEditing(false);
      } else {
        alert('Failed to save profile');
      }
    } catch (err) {
      console.error('Failed to save profile', err);
      alert('An error occurred while saving.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newSkill.trim()) {
      if (!profileData.skills.includes(newSkill.trim())) {
        setProfileData({
          ...profileData,
          skills: [...profileData.skills, newSkill.trim()]
        });
      }
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter(s => s !== skillToRemove)
    });
  };

  const handleAddOtherLink = () => {
    if (newLinkTitle.trim() && newLinkUrl.trim()) {
      setProfileData({
        ...profileData,
        otherLinks: [...profileData.otherLinks, { title: newLinkTitle.trim(), url: newLinkUrl.trim() }]
      });
      setNewLinkTitle("");
      setNewLinkUrl("");
      setIsAddingLink(false);
    }
  };

  const handleRemoveOtherLink = (indexToRemove: number) => {
    setProfileData({
      ...profileData,
      otherLinks: profileData.otherLinks.filter((_, i) => i !== indexToRemove)
    });
  };

  return (
    <div className="min-h-full bg-slate-50 py-10 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Top Card: Personal Details */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative">
          
          {/* Edit Button */}
          <div className="absolute top-6 right-6 z-10">
            {isEditing ? (
              <div className="flex gap-3">
                <button onClick={() => setIsEditing(false)} className="px-5 py-2 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors">
                  Cancel
                </button>
                <button onClick={handleSave} disabled={isSaving} className="px-5 py-2 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50">
                  {isSaving ? 'Saving...' : 'Save'}
                </button>
              </div>
            ) : (
              <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </button>
            )}
          </div>

          <div className="p-10 flex flex-col items-center">
            {/* Centered Avatar */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-50 bg-slate-100 shadow-md relative overflow-hidden group mb-6">
              <div className="w-full h-full flex items-center justify-center text-5xl font-black text-slate-400">
                {user?.firstName?.[0] || 'S'}
              </div>
              {isEditing && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-sm">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              )}
            </div>

            {/* Core Info */}
            <div className="text-center space-y-2 mb-8 w-full max-w-lg">
              <h1 className="text-3xl font-black text-slate-900">{user?.firstName} {user?.lastName}</h1>
              <p className="text-slate-500 font-medium">{user?.email}</p>
            </div>

            {/* Additional Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl bg-slate-50 p-6 rounded-2xl border border-slate-100">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Number</p>
                  {isEditing ? (
                    <input 
                      type="text" 
                      placeholder="+1 (555) 000-0000"
                      value={profileData.phone}
                      onChange={e => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    />
                  ) : (
                    <p className={`text-sm font-semibold ${profileData.phone ? 'text-slate-900' : 'text-slate-400 italic'}`}>
                      {profileData.phone || 'Add phone number'}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                  {isEditing ? (
                    <div className="flex gap-2">
                      <div className="w-1/2">
                        <Select
                          options={Country.getAllCountries().map(c => ({ value: c.name, label: c.name, isoCode: c.isoCode }))}
                          value={profileData.country ? { value: profileData.country, label: profileData.country } : null}
                          onChange={(selected: any) => setProfileData({...profileData, country: selected?.value || '', state: ''})}
                          placeholder="Select Country"
                          menuPlacement="bottom"
                          styles={{
                            control: (base) => ({
                              ...base,
                              padding: '2px',
                              borderRadius: '0.5rem',
                              borderColor: '#e2e8f0',
                              boxShadow: 'none',
                              '&:hover': { borderColor: '#e2e8f0' }
                            })
                          }}
                        />
                      </div>
                      <div className="w-1/2">
                        <Select
                          options={profileData.country 
                            ? State.getStatesOfCountry(Country.getAllCountries().find(c => c.name === profileData.country)?.isoCode || "").map(s => ({ value: s.name, label: s.name }))
                            : []
                          }
                          value={profileData.state ? { value: profileData.state, label: profileData.state } : null}
                          onChange={(selected: any) => setProfileData({...profileData, state: selected?.value || ''})}
                          placeholder={profileData.country ? "Select State" : "Select Country first"}
                          isDisabled={!profileData.country}
                          menuPlacement="bottom"
                          styles={{
                            control: (base) => ({
                              ...base,
                              padding: '2px',
                              borderRadius: '0.5rem',
                              borderColor: '#e2e8f0',
                              boxShadow: 'none',
                              '&:hover': { borderColor: '#e2e8f0' }
                            })
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <p className={`text-sm font-semibold ${profileData.state || profileData.country ? 'text-slate-900' : 'text-slate-400 italic'}`}>
                      {profileData.state || profileData.country ? `${profileData.state}${profileData.state && profileData.country ? ', ' : ''}${profileData.country}` : 'Add location'}
                    </p>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Links Section */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <LinkIcon className="w-6 h-6 text-primary" />
              Links & Socials
            </h3>
            
            <div className="space-y-5">
              {/* GitHub */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 flex-shrink-0">
                  <Github className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 mb-1">GitHub</p>
                  {isEditing ? (
                    <input type="url" placeholder="https://github.com/username" value={profileData.githubUrl} onChange={e => setProfileData({...profileData, githubUrl: e.target.value})} className="w-full text-sm p-2 border border-slate-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                  ) : (
                    <p className={`text-sm truncate ${profileData.githubUrl ? 'text-primary hover:underline cursor-pointer' : 'text-slate-400 italic'}`}>
                      {profileData.githubUrl || 'Add GitHub profile'}
                    </p>
                  )}
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 mb-1">LinkedIn</p>
                  {isEditing ? (
                    <input type="url" placeholder="https://linkedin.com/in/username" value={profileData.linkedinUrl} onChange={e => setProfileData({...profileData, linkedinUrl: e.target.value})} className="w-full text-sm p-2 border border-slate-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                  ) : (
                    <p className={`text-sm truncate ${profileData.linkedinUrl ? 'text-primary hover:underline cursor-pointer' : 'text-slate-400 italic'}`}>
                      {profileData.linkedinUrl || 'Add LinkedIn profile'}
                    </p>
                  )}
                </div>
              </div>

              {/* Portfolio */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 mb-1">Portfolio</p>
                  {isEditing ? (
                    <input type="url" placeholder="https://yourwebsite.com" value={profileData.portfolioUrl} onChange={e => setProfileData({...profileData, portfolioUrl: e.target.value})} className="w-full text-sm p-2 border border-slate-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                  ) : (
                    <p className={`text-sm truncate ${profileData.portfolioUrl ? 'text-primary hover:underline cursor-pointer' : 'text-slate-400 italic'}`}>
                      {profileData.portfolioUrl || 'Add Portfolio website'}
                    </p>
                  )}
                </div>
              </div>

              {/* Other Links */}
              {profileData.otherLinks.map((link, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                    <LinkIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 mb-1">{link.title}</p>
                    <p className="text-sm text-primary hover:underline cursor-pointer truncate">{link.url}</p>
                  </div>
                  {isEditing && (
                    <button onClick={() => handleRemoveOtherLink(idx)} className="p-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}

              {/* Add Other Link Form */}
              {isEditing && (
                <div className="pt-4 mt-4 border-t border-slate-100">
                  {isAddingLink ? (
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                      <input 
                        type="text" 
                        placeholder="Link Title (e.g. Twitter)" 
                        value={newLinkTitle} 
                        onChange={e => setNewLinkTitle(e.target.value)} 
                        className="w-full text-sm p-2 border border-slate-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                      <input 
                        type="url" 
                        placeholder="https://..." 
                        value={newLinkUrl} 
                        onChange={e => setNewLinkUrl(e.target.value)} 
                        className="w-full text-sm p-2 border border-slate-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                      <div className="flex gap-2">
                        <button onClick={handleAddOtherLink} className="flex-1 bg-primary text-white font-bold py-2 rounded-lg text-sm hover:bg-primary/90">Add</button>
                        <button onClick={() => setIsAddingLink(false)} className="flex-1 bg-white border border-slate-200 text-slate-700 font-bold py-2 rounded-lg text-sm hover:bg-slate-50">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <button onClick={() => setIsAddingLink(true)} className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                      <Plus className="w-4 h-4" /> Add another link
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            {/* Education Section */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 h-fit">
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                Education Details
              </h3>

              <div className="flex-1">
                {isEditing ? (
                  <textarea 
                    placeholder="e.g. B.S. Computer Science at State University, Class of 2025"
                    value={profileData.education}
                    onChange={e => setProfileData({...profileData, education: e.target.value})}
                    className="w-full text-sm font-medium text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none min-h-[80px] resize-none"
                  />
                ) : (
                  <p className={`text-sm font-semibold leading-relaxed ${profileData.education ? 'text-slate-900' : 'text-slate-400 italic'}`}>
                    {profileData.education || 'Add education details'}
                  </p>
                )}
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 h-fit">
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                  <MapPin className="w-4 h-4 hidden" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"/><path d="M3 21v-3l9-9"/><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"/></svg>
                </div>
                Skills & Expertise
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {profileData.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold flex items-center gap-2 group">
                    {skill}
                    {isEditing && (
                      <button onClick={() => handleRemoveSkill(skill)} className="text-slate-400 hover:text-red-500 transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </span>
                ))}
                {!isEditing && profileData.skills.length === 0 && (
                  <p className="text-slate-400 italic text-sm">No skills added yet.</p>
                )}
              </div>

              {isEditing && (
                <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <Plus className="w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={handleAddSkill}
                    placeholder="Type a skill and press Enter..."
                    className="flex-1 outline-none text-sm font-medium bg-transparent text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
