import React, { useState, useEffect } from 'react';
import { Wifi, BookOpen, Smartphone, Languages, WifiOff, Gamepad2 } from 'lucide-react';

const ProblemSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-card') || '0');
            setVisibleCards(prev => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('[data-card]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: <WifiOff className="w-16 h-16" />,
      title: "Hate Bad Internet?",
      description: "Our game is 100% OFFLINE. No lag, no loading, ever.",
      color: "from-red-500 to-orange-500",
      delay: 0
    },
    {
      icon: <Languages className="w-16 h-16" />,
      title: "Complex Concepts?",
      description: "We break down difficult topics into simple, digestible lessons.",
      color: "from-blue-500 to-purple-500",
      delay: 200
    },
    {
      icon: <Gamepad2 className="w-16 h-16" />,
      title: "Need More Engagement?",
      description: "Our platform is more engaging with interactive quests and challenges.",
      color: "from-green-500 to-teal-500",
      delay: 400
    },
    {
      icon: <Smartphone className="w-16 h-16" />,
      title: "Slow Phone?",
      description: "This game is super-light and runs on ANY device, fast.",
      color: "from-yellow-500 to-red-500",
      delay: 600
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Studying STEM becomes so exciting with our platform!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've created engaging solutions to make learning more effective and fun!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              data-card={index}
              className={`group relative bg-gradient-to-br ${problem.color} p-6 rounded-2xl transform hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-pointer ${
                visibleCards.includes(index) ? 'animate-bounce-in' : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: `${problem.delay}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full">
                <div className="text-white mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {problem.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  {problem.title}
                </h3>
                
                <p className="text-white/90 text-sm leading-relaxed">
                  {problem.description}
                </p>

                {/* Interactive particles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping group-hover:animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse group-hover:animate-ping"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold animate-pulse">
            <Gamepad2 className="w-5 h-5 mr-2" />
            Ready to turn learning into an adventure?
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% { opacity: 0; transform: translateY(60px) scale(0.8); }
          60% { opacity: 1; transform: translateY(-10px) scale(1.05); }
          100% { opacity: 1; transform: translateY(0px) scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;