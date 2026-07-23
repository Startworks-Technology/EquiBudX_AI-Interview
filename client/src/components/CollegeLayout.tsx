import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, BarChart3, Briefcase, Settings, LogOut, Menu } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function CollegeLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Persistent Sidebar */}
      <aside className={`absolute md:relative h-full transition-all duration-300 ease-in-out overflow-hidden flex-shrink-0 bg-white border-r border-slate-200 z-50 shadow-xl md:shadow-sm ${isSidebarOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full md:w-0 md:translate-x-0 border-r-0'}`}>
        <div className="w-64 h-full flex flex-col">
          <div className="h-16 flex items-center px-6 border-b border-slate-100 flex-shrink-0">
            <h1 className="text-2xl font-black text-primary tracking-tight">MockMate.</h1>
            <span className="ml-2 text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded-md">COLLEGE</span>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3 mt-4">
              Overview
            </div>
            
            <NavLink 
              to="/college/dashboard" 
              end
              className={({ isActive }) => 
                `flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </NavLink>
            
            <NavLink 
              to="/college/students" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              <Users className="w-5 h-5" />
              Student Roster
            </NavLink>

            {/* Analytics hidden for now */}



            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3 mt-8">
              Account
            </div>

            <NavLink 
              to="/college/settings" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              <Settings className="w-5 h-5" />
              Settings
            </NavLink>
          </nav>

          {/* User Profile Footer */}
          <div className="p-4 border-t border-slate-100 flex-shrink-0">
            <div className="flex items-center gap-3 px-3 py-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0">
                {user?.firstName?.[0] || 'C'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">{user?.firstName} {user?.lastName}</p>
                <p className="text-xs font-medium text-slate-500 truncate">College Admin</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative bg-slate-50">
        {/* Top Header & Breadcrumbs */}
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 flex-shrink-0 z-10 shadow-sm gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              className="p-2 hover:bg-slate-100 rounded-md text-slate-500 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Top Right Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold text-slate-900">{user?.firstName}</span>
              <span className="text-xs font-medium text-slate-500">College Admin</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0 cursor-pointer" onClick={() => navigate('/college/settings')}>
              {user?.firstName?.[0] || 'C'}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
