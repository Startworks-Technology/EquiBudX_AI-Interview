import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockAssignments, type Assignment } from '../../data/assignments';
import { 
  ArrowLeft,
  Terminal,
  Database,
  Server,
  Code2,
  ChevronRight,
  BookOpen,
  Search,
  ExternalLink
} from 'lucide-react';

export default function Resources() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedModule = searchParams.get('module');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSelectModule = (modName: string | null) => {
    if (modName) {
      setSearchParams({ module: modName });
    } else {
      setSearchParams({});
    }
  };
  
  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(mockAssignments.map(a => a.category).filter(Boolean)))];
  
  // Extract unique modules based on selected category
  const modules = Array.from(
    new Set(
      mockAssignments
        .filter(a => selectedCategory === 'All' || a.category === selectedCategory)
        .map(a => a.module)
    )
  );
  
  // Filter modules based on search query
  const filteredModules = modules.filter(mod => 
    mod.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getModuleIcon = (moduleName: string | null) => {
    if (!moduleName) return <Terminal className="w-8 h-8 text-slate-500" />;
    const name = moduleName.toLowerCase();
    if (name.includes('react') || name.includes('frontend')) return <Code2 className="w-8 h-8 text-blue-500" />;
    if (name.includes('node') || name.includes('backend')) return <Server className="w-8 h-8 text-emerald-500" />;
    if (name.includes('database') || name.includes('sql')) return <Database className="w-8 h-8 text-purple-500" />;
    return <Terminal className="w-8 h-8 text-slate-500" />;
  };

  const getModuleTotal = (moduleName: string) => {
    return mockAssignments.filter(a => a.module === moduleName).length;
  };

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <div className="px-8 py-8 bg-white border-b border-slate-200 flex-shrink-0 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Resources</h1>
          <p className="text-slate-500 font-medium">
            {selectedModule ? `Viewing resources for ${selectedModule}` : 'Select a module to view its resources.'}
          </p>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        
        {/* SIDEBAR FILTER */}
        {!selectedModule && (
          <div className="w-72 bg-white border-r border-slate-200 flex flex-col overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="font-bold text-slate-800 mb-4">Filter Modules</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search topics..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium text-slate-700"
                />
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Categories</h3>
              <div className="flex flex-col gap-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat as string)}
                    className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === cat 
                        ? 'bg-primary/10 text-primary font-bold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-8">
          {!selectedModule ? (
            /* MODULE GRID VIEW */
            <div className="max-w-7xl mx-auto">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-bold text-slate-700 text-lg">
                  {filteredModules.length} Modules Found
                </h3>
              </div>
              
              {filteredModules.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-500 font-medium text-lg">No modules found matching "{searchQuery}"</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredModules.map(mod => {
              const total = getModuleTotal(mod);
              return (
                <div 
                  key={mod}
                  onClick={() => handleSelectModule(mod)}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                      {getModuleIcon(mod)}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{mod}</h2>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1.5 text-sm font-bold text-slate-500">
                      <BookOpen className="w-4 h-4 text-primary" /> {total} Resources
                    </span>
                  </div>
                </div>
              );
            })}
              </div>
            )}
          </div>
        ) : (
          /* MODULE DETAIL VIEW */
          <div className="max-w-5xl mx-auto">
            <button 
              onClick={() => handleSelectModule(null)}
              className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Modules
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                {getModuleIcon(selectedModule)}
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900">{selectedModule} Resources</h2>
                <p className="text-slate-500 font-medium mt-1">Review these resources to master {selectedModule}.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {mockAssignments
                .filter(a => a.module === selectedModule)
                .map((assignment: Assignment) => {
                  
                  // Try to extract URL if it was generated by our script
                  let url = '#';
                  let desc = assignment.description;
                  if (desc.includes('interviews: ')) {
                    const parts = desc.split('interviews: ');
                    url = parts[1].trim();
                    desc = 'A curated list of questions and answers to prepare you for this topic.';
                  } else if (desc.includes('http')) {
                    const match = desc.match(/(https?:\/\/[^\s]+)/g);
                    if (match && match.length > 0) {
                      url = match[0];
                      desc = desc.replace(url, '').trim();
                    }
                  }

                  return (
                <div 
                  key={assignment.id} 
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{assignment.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                  
                  <div className="flex flex-col md:items-end justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 min-w-[200px]">
                    
                    <a 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto px-6 py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-md shadow-primary/20"
                    >
                      <ExternalLink className="w-4 h-4" /> Open Resource
                    </a>
                  </div>
                </div>
              )})}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
