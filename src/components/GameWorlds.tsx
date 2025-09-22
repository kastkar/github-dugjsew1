import React from 'react';
import { Play, Zap, Leaf, Atom, Calculator } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface GameWorldsProps {
  onPlayGame: (gameId: string) => void;
}

const GameWorlds = ({ onPlayGame }: GameWorldsProps) => {
  const { t } = useLanguage();

  const gameWorlds = [
    {
      id: 'biology',
      title: t('games.biology.title'),
      description: t('games.biology.desc'),
      icon: <Leaf className="w-12 h-12" />,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      emoji: '🌿'
    },
    {
      id: 'physics',
      title: t('games.physics.title'),
      description: t('games.physics.desc'),
      icon: <Zap className="w-12 h-12" />,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-900/20 to-red-900/20',
      emoji: '⚡'
    },
    {
      id: 'chemistry',
      title: t('games.chemistry.title'),
      description: t('games.chemistry.desc'),
      icon: <Atom className="w-12 h-12" />,
      color: 'from-purple-500 to-blue-600',
      bgColor: 'from-purple-900/20 to-blue-900/20',
      emoji: '⚗️'
    },
    {
      id: 'math',
      title: t('games.math.title'),
      description: t('games.math.desc'),
      icon: <Calculator className="w-12 h-12" />,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-900/20 to-cyan-900/20',
      emoji: '🔢'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            {t('games.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('games.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gameWorlds.map((world, index) => (
            <div
              key={world.id}
              className={`group relative bg-gradient-to-br ${world.bgColor} backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer`}
              onClick={() => onPlayGame(world.id)}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-r ${world.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {world.icon}
                </div>
                
                {/* Emoji */}
                <div className="text-6xl mb-4 group-hover:animate-bounce">
                  {world.emoji}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
                  {world.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {world.description}
                </p>

                {/* Play Button */}
                <button className={`w-full py-3 bg-gradient-to-r ${world.color} text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2`}>
                  <Play className="w-5 h-5" />
                  {t('games.playNow')}
                </button>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-8 left-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-black font-bold text-lg animate-pulse">
            <Play className="w-6 h-6 mr-3" />
            {t('games.playNow')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameWorlds;