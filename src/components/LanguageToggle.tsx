import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 flex items-center gap-2">
        <Globe className="w-5 h-5 text-white" />
        <div className="flex bg-black/20 rounded-full p-1">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
              language === 'en'
                ? 'bg-white text-black shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('hi')}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
              language === 'hi'
                ? 'bg-white text-black shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            हिं
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;