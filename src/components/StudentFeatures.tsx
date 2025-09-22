import React from 'react';
import { Trophy, Gift, Users, Star, Crown, Target, Gamepad2, Download } from 'lucide-react';

const StudentFeatures = () => {
  const features = [
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Climb the Leaderboard!",
      description: "Compete with friends and become the #1 STEM Champion in your school.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Earn Epic Loot!",
      description: "Unlock rare badges, certificates, and new skins for your robot mascot.",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Form Your Guild!",
      description: "Team up with classmates in a 'study guild' to defeat special 'Boss Challenges' (aka exams).",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  const achievements = [
    { name: "Physics Master", icon: "⚡", rarity: "Legendary", color: "text-yellow-400" },
    { name: "Biology Explorer", icon: "🌿", rarity: "Epic", color: "text-purple-400" },
    { name: "Math Wizard", icon: "🔢", rarity: "Rare", color: "text-blue-400" },
    { name: "Chemistry Alchemist", icon: "⚗️", rarity: "Epic", color: "text-green-400" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            Gear Up. Level Up!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every quest completed, every lesson mastered brings epic rewards and recognition
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${feature.bgColor} p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105`}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 bg-gradient-to-r ${feature.color} text-black rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-8 left-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Showcase */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-3xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
              <Crown className="w-8 h-8 text-yellow-400" />
              Achievement Gallery
            </h3>
            <p className="text-gray-300">Collect rare achievements and show off your expertise</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-gray-600 hover:border-yellow-400/50"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="text-white font-semibold mb-2">{achievement.name}</h4>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${achievement.color} bg-current/20`}>
                  {achievement.rarity}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Feature */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-blue-500/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                <Download className="w-8 h-8 text-blue-400" />
                Offline Learning Mode
              </h3>
              <p className="text-gray-300 text-lg">
                Download video lectures and modules for offline learning. Perfect for areas with limited internet connectivity.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Modules
              </button>
              <div className="text-center text-sm text-gray-400">
                🔋 Works offline • 📱 Any device
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group relative px-12 py-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white font-bold text-xl rounded-full hover:scale-110 transition-all duration-300 animate-pulse">
            <Gamepad2 className="inline w-6 h-6 mr-3" />
            Start Your Journey
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"></div>
          </button>
          <p className="text-gray-400 mt-4">Join thousands of students already on their STEM adventure!</p>
        </div>
      </div>
    </section>
  );
};

export default StudentFeatures;