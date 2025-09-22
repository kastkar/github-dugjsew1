import React, { useState } from 'react';
import { Users, BookOpen, BarChart3, Settings, Database, Shield, X, Plus, Edit, Trash2, Eye } from 'lucide-react';

interface AdminDashboardProps {
  onClose: () => void;
}

const AdminDashboard = ({ onClose }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const systemStats = {
    totalUsers: 1247,
    totalTeachers: 52,
    totalStudents: 1195,
    totalSchools: 8,
    activeToday: 342,
    totalContent: 450
  };

  const schools = [
    { id: 1, name: 'Govt. High School Bhubaneswar', students: 180, teachers: 8, active: true },
    { id: 2, name: 'Kendriya Vidyalaya Cuttack', students: 220, teachers: 12, active: true },
    { id: 3, name: 'DAV Public School Rourkela', students: 165, teachers: 7, active: true },
    { id: 4, name: 'Saraswati Sishu Vidya Mandir', students: 140, teachers: 6, active: false },
  ];

  const contentModules = [
    { id: 1, title: 'Physics - Light Properties', subject: 'Physics', grade: '8', downloads: 145, status: 'published' },
    { id: 2, title: 'Biology - Plant Systems', subject: 'Biology', grade: '7', downloads: 98, status: 'published' },
    { id: 3, title: 'Math - Algebra Basics', subject: 'Math', grade: '9', downloads: 203, status: 'draft' },
    { id: 4, title: 'Chemistry - Periodic Table', subject: 'Chemistry', grade: '10', downloads: 167, status: 'published' },
  ];

  const recentActivity = [
    { type: 'user_join', message: 'New teacher joined: Priya Sharma', time: '2 hours ago', school: 'KV Cuttack' },
    { type: 'content_upload', message: 'New content uploaded: Physics Module', time: '4 hours ago', school: 'Admin' },
    { type: 'school_register', message: 'New school registered: Saraswati Vidyalaya', time: '1 day ago', school: 'System' },
    { type: 'issue_report', message: 'Bug report: Download issue', time: '2 days ago', school: 'Govt. HS BBB' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'text-green-400 bg-green-400/20';
      case 'draft': return 'text-yellow-400 bg-yellow-400/20';
      case 'review': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user_join': return '👤';
      case 'content_upload': return '📚';
      case 'school_register': return '🏫';
      case 'issue_report': return '🐛';
      default: return '📝';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">{systemStats.totalUsers.toLocaleString()}</div>
          <div className="text-sm text-blue-200">Total Users</div>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">{systemStats.totalStudents.toLocaleString()}</div>
          <div className="text-sm text-green-200">Students</div>
        </div>
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">{systemStats.totalTeachers}</div>
          <div className="text-sm text-yellow-200">Teachers</div>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">{systemStats.totalSchools}</div>
          <div className="text-sm text-purple-200">Schools</div>
        </div>
        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">{systemStats.activeToday}</div>
          <div className="text-sm text-red-200">Active Today</div>
        </div>
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">{systemStats.totalContent}</div>
          <div className="text-sm text-indigo-200">Content Items</div>
        </div>
      </div>

      {/* Schools Overview */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">School Performance</h3>
          <div className="space-y-4">
            {schools.map((school) => (
              <div key={school.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">{school.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    school.active ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {school.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>{school.students} Students</span>
                  <span>{school.teachers} Teachers</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-xl">{getActivityIcon(activity.type)}</span>
                <div className="flex-1">
                  <p className="text-white text-sm">{activity.message}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                    <span>{activity.time}</span>
                    <span>•</span>
                    <span>{activity.school}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSchools = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">School Management</h2>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add School
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left p-4 text-gray-300">School Name</th>
                <th className="text-left p-4 text-gray-300">Students</th>
                <th className="text-left p-4 text-gray-300">Teachers</th>
                <th className="text-left p-4 text-gray-300">Status</th>
                <th className="text-left p-4 text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {schools.map((school) => (
                <tr key={school.id} className="hover:bg-gray-700/50">
                  <td className="p-4 text-white font-medium">{school.name}</td>
                  <td className="p-4 text-gray-300">{school.students}</td>
                  <td className="p-4 text-gray-300">{school.teachers}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      school.active ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {school.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-400 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Content Management</h2>
        <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Upload Content
        </button>
      </div>

      <div className="grid gap-4">
        {contentModules.map((module) => (
          <div key={module.id} className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">{module.title}</h3>
                <p className="text-gray-400">Grade {module.grade} • {module.subject}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-xl font-bold text-white">{module.downloads}</div>
                  <div className="text-gray-400 text-sm">Downloads</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(module.status)}`}>
                  {module.status}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-sm">
                  Preview
                </button>
                <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm">
                  Edit
                </button>
                {module.status === 'draft' && (
                  <button className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded text-sm">
                    Publish
                  </button>
                )}
              </div>
              <div className="text-gray-400 text-sm">
                Subject: {module.subject}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'schools', name: 'Schools', icon: <Users className="w-5 h-5" /> },
    { id: 'content', name: 'Content', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'database', name: 'Database', icon: <Database className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'settings', name: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-gray-800/50 backdrop-blur-sm border-r border-gray-700 min-h-screen">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
                <button onClick={onClose} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'schools' && renderSchools()}
            {activeTab === 'content' && renderContent()}
            {(activeTab === 'database' || activeTab === 'security' || activeTab === 'settings') && (
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-4 capitalize">{activeTab}</h2>
                <p className="text-gray-400">{activeTab} panel coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;