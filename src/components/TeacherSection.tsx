import React, { useState } from 'react';
import { Users, Brain, Trophy, BarChart3, Bell, CheckSquare, Target, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TeacherSection = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);

  const teacherFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t('teacher.feature1'),
      description: t('teacher.feature1.desc')
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: t('teacher.feature2'),
      description: t('teacher.feature2.desc')
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: t('teacher.feature3'),
      description: t('teacher.feature3.desc')
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('teacher.feature4'),
      description: t('teacher.feature4.desc')
    }
  ];

  const mockDashboard = {
    students: [
      { name: "Arjun P.", level: 15, subject: "Physics", progress: 85, status: "excelling" },
      { name: "Priya S.", level: 12, subject: "Biology", progress: 67, status: "struggling" },
      { name: "Ravi M.", level: 18, subject: "Math", progress: 92, status: "excelling" },
      { name: "Sneha K.", level: 10, subject: "Chemistry", progress: 45, status: "needs_help" },
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excelling': return 'text-green-400 bg-green-400/20';
      case 'struggling': return 'text-yellow-400 bg-yellow-400/20';
      case 'needs_help': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            {t('teacher.title')}
          </h2>
          <h3 className="text-2xl text-gray-300 mb-4">{t('teacher.subtitle')}</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('teacher.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Features */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-400" />
              {t('teacher.powerUps')}
            </h3>
            
            {teacherFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400' 
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    activeFeature === index ? 'bg-yellow-400 text-black' : 'bg-white/20 text-white'
                  } transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                  <div className={`w-2 h-2 rounded-full transition-all ${
                    activeFeature === index ? 'bg-yellow-400 animate-pulse' : 'bg-gray-600'
                  }`}></div>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl border border-green-400/30">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                {t('teacher.bestPart')}
              </h4>
              <p className="text-gray-300 text-sm">
                {t('teacher.bestPartDesc')}
              </p>
            </div>
          </div>

          {/* Right Column - Mock Dashboard */}
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{t('teacher.dashboard')}</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">{t('teacher.live')}</span>
                </div>
              </div>

              {/* Student Cards */}
              <div className="space-y-4">
                {mockDashboard.students.map((student, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700/70 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{student.name}</h4>
                          <span className="text-gray-400 text-sm">Level {student.level} • {student.subject}</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(student.status)}`}>
                        {student.status.replace('_', ' ')}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-white text-sm font-semibold">{student.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-600">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">28</div>
                  <div className="text-gray-400 text-xs">{t('teacher.activeStudents')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">15</div>
                  <div className="text-gray-400 text-xs">{t('teacher.avgLevel')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">73%</div>
                  <div className="text-gray-400 text-xs">{t('teacher.classProgress')}</div>
                </div>
              </div>
            </div>

            {/* Floating Alert */}
            <div className="absolute -right-4 top-20 bg-red-500 text-white p-3 rounded-lg shadow-lg animate-bounce">
              <div className="flex items-center gap-2 text-sm">
                <Bell className="w-4 h-4" />
                Sneha {t('teacher.needsHelp')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;