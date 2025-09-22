import React, { useState } from 'react';
import { Users, BookOpen, BarChart3, Settings, X, Plus, Eye, Edit, Download, Bell } from 'lucide-react';

interface TeacherDashboardProps {
  onClose: () => void;
}

const TeacherDashboard = ({ onClose }: TeacherDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const classData = {
    totalStudents: 28,
    activeStudents: 24,
    averageProgress: 73,
    completedAssignments: 156,
    pendingAssignments: 12
  };

  const students = [
    { id: 1, name: 'Arjun Patel', level: 15, progress: 85, lastActive: '2 hours ago', status: 'active', needsHelp: false },
    { id: 2, name: 'Priya Sharma', level: 12, progress: 67, lastActive: '5 hours ago', status: 'struggling', needsHelp: true },
    { id: 3, name: 'Ravi Mohan', level: 18, progress: 92, lastActive: '1 hour ago', status: 'active', needsHelp: false },
    { id: 4, name: 'Sneha Kumar', level: 10, progress: 45, lastActive: '1 day ago', status: 'needs_attention', needsHelp: true },
    { id: 5, name: 'Rahul Tiwari', level: 14, progress: 78, lastActive: '3 hours ago', status: 'active', needsHelp: false },
  ];

  const assignments = [
    { id: 1, title: 'Physics - Light Properties', dueDate: '2025-01-15', submitted: 22, total: 28, subject: 'Physics' },
    { id: 2, title: 'Biology - Plant Systems', dueDate: '2025-01-18', submitted: 18, total: 28, subject: 'Biology' },
    { id: 3, title: 'Math - Algebra Basics', dueDate: '2025-01-20', submitted: 25, total: 28, subject: 'Mathematics' },
  ];

  const subjects = [
    { name: 'Physics', students: 28, avgProgress: 75, color: 'from-orange-500 to-red-500' },
    { name: 'Biology', students: 28, avgProgress: 68, color: 'from-green-500 to-teal-500' },
    { name: 'Mathematics', students: 28, avgProgress: 82, color: 'from-purple-500 to-blue-500' },
    { name: 'Chemistry', students: 28, avgProgress: 71, color: 'from-blue-500 to-cyan-500' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/20';
      case 'struggling': return 'text-yellow-400 bg-yellow-400/20';
      case 'needs_attention': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-5 gap-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">{classData.totalStudents}</div>
          <div className="text-sm text-blue-200">Total Students</div>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">{classData.activeStudents}</div>
          <div className="text-sm text-green-200">Active Today</div>
        </div>
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">{classData.averageProgress}%</div>
          <div className="text-sm text-yellow-200">Avg Progress</div>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">{classData.completedAssignments}</div>
          <div className="text-sm text-purple-200">Completed</div>
        </div>
        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">{classData.pendingAssignments}</div>
          <div className="text-sm text-red-200">Pending</div>
        </div>
      </div>

      {/* Subject Progress */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {subjects.map((subject, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-3">{subject.name}</h3>
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Class Average</span>
                <span className="text-white">{subject.avgProgress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${subject.color} h-2 rounded-full`}
                  style={{ width: `${subject.avgProgress}%` }}
                ></div>
              </div>
            </div>
            <div className="text-gray-400 text-sm">{subject.students} students</div>
          </div>
        ))}
      </div>

      {/* Students Needing Attention */}
      <div className="bg-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Bell className="w-6 h-6 text-yellow-400" />
            Students Needing Attention
          </h3>
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
            {students.filter(s => s.needsHelp).length} alerts
          </span>
        </div>
        <div className="space-y-3">
          {students.filter(s => s.needsHelp).map((student) => (
            <div key={student.id} className="bg-gray-700 rounded-lg p-4 border-l-4 border-yellow-400">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">{student.name}</h4>
                  <p className="text-gray-400 text-sm">Level {student.level} • {student.progress}% progress</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-sm">
                    Send Message
                  </button>
                  <button className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded text-sm">
                    Assign Help
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Student Management</h2>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Student
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left p-4 text-gray-300">Student</th>
                <th className="text-left p-4 text-gray-300">Level</th>
                <th className="text-left p-4 text-gray-300">Progress</th>
                <th className="text-left p-4 text-gray-300">Last Active</th>
                <th className="text-left p-4 text-gray-300">Status</th>
                <th className="text-left p-4 text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-700/50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {student.name.charAt(0)}
                      </div>
                      <span className="text-white font-medium">{student.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">{student.level}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full"
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-white text-sm">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">{student.lastActive}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(student.status)}`}>
                      {student.status.replace('_', ' ')}
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

  const renderAssignments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Assignment Management</h2>
        <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Assignment
        </button>
      </div>

      <div className="grid gap-4">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{assignment.title}</h3>
                <p className="text-gray-400">Due: {assignment.dueDate}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">
                  {assignment.submitted}/{assignment.total}
                </div>
                <div className="text-gray-400 text-sm">Submitted</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full"
                  style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${'bg-blue-500/20 text-blue-400'}`}>
                {assignment.subject}
              </span>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm">
                  View Details
                </button>
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-sm">
                  Grade
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded text-sm flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  Export
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'students', name: 'Students', icon: <Users className="w-5 h-5" /> },
    { id: 'assignments', name: 'Assignments', icon: <BookOpen className="w-5 h-5" /> },
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
                <h1 className="text-2xl font-bold text-white">Teacher Portal</h1>
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
            {activeTab === 'students' && renderStudents()}
            {activeTab === 'assignments' && renderAssignments()}
            {activeTab === 'settings' && (
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Settings</h2>
                <p className="text-gray-400">Settings panel coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;