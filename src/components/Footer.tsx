import React from 'react';
import { Github, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
              {t('hero.title')}
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">{t('footer.studentPortal')}</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">{t('footer.teacherDashboard')}</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">{t('footer.gameWorlds')}</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">{t('footer.offlineDownloads')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">{t('footer.helpCenter')}</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">{t('footer.technicalIssues')}</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">{t('footer.contentGuidelines')}</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">{t('footer.privacyPolicy')}</a></li>
            </ul>
          </div>
        </div>

        {/* Team Info */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-6 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">{t('footer.builtBy')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.teamDesc')}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Indore, MP</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>kastkar@atomicmail.io</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href="#" className="hover:text-yellow-400 transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <div className="flex items-center gap-8 mb-4 md:mb-0">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">SIH 2025</div>
              <div className="text-xs text-gray-500">Smart India Hackathon</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white">Government of Odisha</div>
              <div className="text-xs text-gray-500">Education Department</div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              {t('footer.tagline')}
            </p>
          </div>
        </div>

        {/* Cultural Elements */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-yellow-400 text-lg">
            <span>🎯</span>
            <span className="font-semibold">{t('footer.mission')}</span>
            <span>🌟</span>
            <span className="font-semibold">{t('footer.vision')}</span>
            <span>🚀</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;