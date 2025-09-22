import React, { useState } from 'react';
import { User, Trophy, Target, Download, Play, BookOpen, Star, Clock, Users, ChevronRight, X } from 'lucide-react';

interface StudentDashboardProps {
  onClose: () => void;
  onPlayGame?: (gameId: string) => void;
}

const StudentDashboard = ({ onClose, onPlayGame }: StudentDashboardProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedModule, setSelectedModule] = useState<any>(null);

  const studentData = {
    name: "Arjun Patel",
    level: 15,
    experience: 2450,
    nextLevelXP: 3000,
    totalScore: 8750,
    rank: 3,
    streak: 7,
    badges: 12
  };

  const subjects = [
    {
      id: 'physics',
      name: 'Physics',
      progress: 75,
      level: 8,
      color: 'from-orange-500 to-red-500',
      modules: [
        { id: 1, title: 'Light and Reflection', completed: true, duration: '45 min', downloadable: true },
        { id: 2, title: 'Sound Waves', completed: true, duration: '38 min', downloadable: true },
        { id: 3, title: 'Electricity Basics', completed: false, duration: '52 min', downloadable: true },
      ]
    },
    {
      id: 'biology',
      name: 'Biology',
      progress: 60,
      level: 6,
      color: 'from-green-500 to-teal-500',
      modules: [
        { id: 4, title: 'Plant Life Cycle', completed: true, duration: '40 min', downloadable: true },
        { id: 5, title: 'Animal Kingdom', completed: false, duration: '55 min', downloadable: true },
        { id: 6, title: 'Human Body Systems', completed: false, duration: '48 min', downloadable: true },
      ]
    },
    {
      id: 'math',
      name: 'Mathematics',
      progress: 85,
      level: 12,
      color: 'from-purple-500 to-blue-500',
      modules: [
        { id: 7, title: 'Algebra Fundamentals', completed: true, duration: '35 min', downloadable: true },
        { id: 8, title: 'Geometry Basics', completed: true, duration: '42 min', downloadable: true },
        { id: 9, title: 'Statistics Intro', completed: false, duration: '50 min', downloadable: true },
      ]
    }
  ];

  const recentAchievements = [
    { name: 'Physics Master', icon: '⚡', earned: '2 days ago' },
    { name: 'Quick Learner', icon: '🚀', earned: '1 week ago' },
    { name: 'Problem Solver', icon: '🧩', earned: '1 week ago' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Priya S.', score: 9200, avatar: 'P' },
    { rank: 2, name: 'Ravi M.', score: 8900, avatar: 'R' },
    { rank: 3, name: 'Arjun P.', score: 8750, avatar: 'A', isCurrentUser: true },
    { rank: 4, name: 'Sneha K.', score: 8400, avatar: 'S' },
    { rank: 5, name: 'Rahul T.', score: 8100, avatar: 'R' },
  ];

  const downloadModule = (module: any, subject: any) => {
    // Simulate download
    alert(`Downloading ${module.title} for offline learning...`);
  };

  const playModule = (module: any, subject: any) => {
    setSelectedModule({ ...module, subject });
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold">
              {studentData.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{studentData.name}</h2>
              <p className="text-blue-200">Level {studentData.level} STEM Explorer</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">#{studentData.rank}</div>
            <div className="text-sm text-blue-200">School Rank</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{studentData.experience}</div>
            <div className="text-sm text-blue-200">XP Points</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{studentData.streak}</div>
            <div className="text-sm text-blue-200">Day Streak</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{studentData.badges}</div>
            <div className="text-sm text-blue-200">Badges</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{studentData.totalScore}</div>
            <div className="text-sm text-blue-200">Total Score</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress to Level {studentData.level + 1}</span>
            <span>{studentData.experience}/{studentData.nextLevelXP} XP</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(studentData.experience / studentData.nextLevelXP) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Subject Progress */}
      <div className="grid md:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <div key={subject.id} className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold">{subject.name}</h3>
              <span className="text-sm text-gray-400">Level {subject.level}</span>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Progress</span>
                <span className="text-white">{subject.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${subject.color} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>
            </div>
            <button 
              onClick={() => setActiveTab('modules')}
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Continue Learning
            </button>
          </div>
        ))}
      </div>

      {/* Recent Achievements */}
      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-400" />
          Recent Achievements
        </h3>
        <div className="space-y-3">
          {recentAchievements.map((achievement, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{achievement.icon}</span>
                <span className="text-white font-medium">{achievement.name}</span>
              </div>
              <span className="text-gray-400 text-sm">{achievement.earned}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderModules = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Learning Modules</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">📶 Online</span>
          <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">💾 Offline Ready</span>
        </div>
      </div>

      {subjects.map((subject) => (
        <div key={subject.id} className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className={`w-3 h-3 bg-gradient-to-r ${subject.color} rounded-full`}></div>
            {subject.name}
          </h3>
          
          <div className="space-y-3">
            {subject.modules.map((module) => (
              <div key={module.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-white font-medium mb-1">{module.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </span>
                      {module.completed && (
                        <span className="text-green-400">✓ Completed</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => playModule(module, subject)}
                      className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                      title="Play Module"
                    >
                      <Play className="w-4 h-4" />
                    </button>
                    {subject.id === 'biology' && (
                      <button
                        onClick={() => onPlayGame && onPlayGame('biology')}
                        className="p-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors"
                        title="Play Biology Game"
                      >
                        🎮
                      </button>
                    )}
                    {subject.id === 'physics' && (
                      <button
                        onClick={() => onPlayGame && onPlayGame('physics')}
                        className="p-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-colors"
                        title="Play Physics Game"
                      >
                        🎮
                      </button>
                    )}
                    {subject.id === 'math' && (
                      <button
                        onClick={() => onPlayGame && onPlayGame('chemistry')}
                        className="p-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
                        title="Play Chemistry Game"
                      >
                        🎮
                      </button>
                    )}
                    {module.downloadable && (
                      <button
                        onClick={() => downloadModule(module, subject)}
                        className="p-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors"
                        title="Download for Offline"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderLeaderboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">School Leaderboard</h2>
      
      <div className="bg-gray-800 rounded-xl p-6">
        <div className="space-y-4">
          {leaderboard.map((student) => (
            <div
              key={student.rank}
              className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                student.isCurrentUser 
                  ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50' 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  student.rank === 1 ? 'bg-yellow-400 text-black' :
                  student.rank === 2 ? 'bg-gray-300 text-black' :
                  student.rank === 3 ? 'bg-orange-400 text-black' :
                  'bg-gray-600 text-white'
                }`}>
                  {student.rank}
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                  {student.avatar}
                </div>
                <div>
                  <span className="text-white font-medium">
                    {student.name}
                    {student.isCurrentUser && <span className="ml-2 text-blue-400">(You)</span>}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-bold">{student.score.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">XP Points</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: <User className="w-5 h-5" /> },
    { id: 'modules', name: 'Modules', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'leaderboard', name: 'Leaderboard', icon: <Trophy className="w-5 h-5" /> }
  ];

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-gray-800/50 backdrop-blur-sm border-r border-gray-700 min-h-screen">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-white">Student Portal</h1>
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
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'modules' && renderModules()}
            {activeTab === 'leaderboard' && renderLeaderboard()}
          </div>
        </div>

        {/* Module Player Modal */}
        {selectedModule && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-60 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedModule.title}</h3>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="bg-black rounded-lg aspect-video flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play className="w-16 h-16 text-white mb-4 mx-auto" />
                  <p className="text-white">Video Player Would Load Here</p>
                  <p className="text-gray-400 text-sm">Subject: {selectedModule.subject?.name}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Duration: {selectedModule.duration}</span>
                <button className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg">
                  Mark Complete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;