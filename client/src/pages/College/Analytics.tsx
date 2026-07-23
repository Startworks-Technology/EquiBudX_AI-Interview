import { BarChart3, TrendingUp, Users, Target, Activity } from 'lucide-react';

export default function CollegeAnalytics() {
  const statCards = [
    { label: 'Placement Rate', value: '85%', icon: Users },
    { label: 'Avg. Quant Score', value: '72%', icon: Target },
    { label: 'Avg. Coding Score', value: '88%', icon: BarChart3 },
    { label: 'Total Interviews', value: '1.2k', icon: Activity },
  ];

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-8 bg-[#FAFAFA] min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Analytics Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Deep dive into your students' performance across all assessments.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 text-gray-700 flex items-center justify-center">
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-0.5">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder Charts */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-base font-bold text-gray-900">Performance Over Time</h3>
            <span className="text-sm font-semibold text-green-600 flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md border border-green-100">
              <TrendingUp className="w-3.5 h-3.5"/> +15%
            </span>
          </div>
          <div className="flex-1 flex items-end gap-4 justify-between pt-4">
            {/* Dummy Bar Chart */}
            {[40, 60, 45, 80, 65, 90, 75].map((height, i) => (
              <div key={i} className="w-full bg-gray-100 rounded-t-sm relative group">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gray-800 rounded-t-sm transition-all"
                  style={{ height: `${height}%` }}
                ></div>
                <div className="absolute -bottom-6 left-0 right-0 text-center text-xs font-medium text-gray-400">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center items-center text-center min-h-[400px]">
          <div className="w-48 h-48 rounded-full border-[10px] border-gray-50 flex items-center justify-center relative mb-6">
            <div className="absolute inset-0 rounded-full border-[10px] border-gray-800 border-r-transparent border-b-transparent transform rotate-45"></div>
            <div className="absolute inset-0 rounded-full border-[10px] border-gray-300 border-l-transparent border-t-transparent transform -rotate-45"></div>
            <div>
              <span className="text-3xl font-bold text-gray-900">85%</span>
              <p className="text-xs font-semibold text-gray-500">Pass Rate</p>
            </div>
          </div>
          <h3 className="text-base font-bold text-gray-900">Assessment Breakdown</h3>
          <p className="text-sm text-gray-500 mt-2 max-w-sm">
            Most students are excelling in Technical domains, but struggling with Quantitative reasoning.
          </p>
        </div>
      </div>
    </div>
  );
}
