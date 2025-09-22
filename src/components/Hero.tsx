import React, { useState, useEffect } from 'react';
import { Play, Users, Shield, Sparkles, Zap, BookOpen, Globe } from 'lucide-react';

interface HeroProps {
  onOpenLogin: (role: string) => void;
}

const Hero = ({ onOpenLogin }: HeroProps) => {
  const [portalOpen, setPortalOpen] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState<Array<{id: number, x: number, y: number, icon: string}>>([]);

  useEffect(() => {
    // Trigger portal animation after component mounts
    const timer = setTimeout(() => {
      setPortalOpen(true);
      // Generate floating STEM icons
      const icons = ['⚛️', '🧬', '⚡', '🔬', '🌟', '🚀', '💡', '🔭'];
      const newFloatingIcons = icons.map((icon, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        icon
      }));
      setFloatingIcons(newFloatingIcons);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-400 rotate-45 animate-spin opacity-20" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 border-2 border-green-400 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 transform rotate-12 animate-pulse opacity-25"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-6xl mx-auto">
          
          {/* Portal Animation */}
          <div className="relative mb-8">
            <div className="relative inline-block">
              {/* Student with phone */}
              <div className="text-8xl mb-4 animate-bounce">📱</div>
              
              {/* Portal Effect */}
              <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                portalOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}>
                <div className="relative">
                  {/* Portal ring */}
                  <div className="w-32 h-32 border-4 border-yellow-400 rounded-full animate-spin" style={{ animationDuration: '3s' }}>
                    <div className="absolute inset-2 border-2 border-blue-400 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
                  </div>
                  
                  {/* Robot mascot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl animate-pulse">
                    🤖
                  </div>
                </div>
              </div>
            </div>

            {/* Floating STEM Icons */}
            {floatingIcons.map((item) => (
              <div
                key={item.id}
                className="absolute text-3xl animate-bounce opacity-80"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  animationDelay: `${item.id * 0.2}s`,
                  animationDuration: '2s'
                }}
              >
                {item.icon}
              </div>
            ))}
          </div>

          {/* Main Headline with Animation */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl mb-4 animate-pulse">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>S</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>p</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>a</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>r</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>k</span>
              <span className="inline-block animate-bounce mx-4" style={{ animationDelay: '0.5s' }}>⚡</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>S</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>T</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>E</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>M</span>
            </h1>
          </div>

          {/* Sub-headlines */}
          <div className="mb-8 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white animate-fade-in-up">
              Start Studying and Playing Together!
            </h2>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={() => onOpenLogin('student')}
              className="group relative px-12 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-xl rounded-full hover:scale-110 transition-all duration-300 animate-pulse shadow-2xl"
            >
              <Play className="inline w-6 h-6 mr-3" />
              PLAY NOW
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"></div>
            </button>
            
            <button 
              onClick={() => onOpenLogin('teacher')}
              className="group px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold text-lg rounded-full hover:bg-blue-400 hover:text-black transition-all duration-300"
            >
              <BookOpen className="inline w-5 h-5 mr-2" />
              Teacher's Lounge
            </button>
            
            <button 
              onClick={() => onOpenLogin('admin')}
              className="group px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold text-lg rounded-full hover:bg-purple-400 hover:text-black transition-all duration-300"
            >
              <Shield className="inline w-5 h-5 mr-2" />
              Admin Portal
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4 group-hover:animate-spin">🌐</div>
              <h3 className="text-xl font-bold text-white mb-2">100% Offline</h3>
              <p className="text-gray-300">No internet? No problem! Play anywhere, anytime.</p>
            </div>
            
            <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4 group-hover:animate-bounce">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Interactive Learning</h3>
              <p className="text-gray-300">Engaging content that makes learning fun and effective.</p>
            </div>
            
            <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4 group-hover:animate-pulse">🎮</div>
              <h3 className="text-xl font-bold text-white mb-2">Epic Quests</h3>
              <p className="text-gray-300">Turn boring lessons into thrilling adventures.</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;