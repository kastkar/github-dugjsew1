import React from 'react';
import { Github, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
              SPARKSTEM
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Transforming rural education in Odisha through gamified STEM learning. 
              Making quality education accessible, engaging, and culturally relevant.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Teacher Dashboard</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Game Worlds</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Offline Downloads</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Technical Issues</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Content Guidelines</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Team Info */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-6 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Built by Team Kastkar</h3>
            <p className="text-gray-400 mb-4">
              A passionate team of developers, designers, and educators working to revolutionize rural education in India.
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
              © 2025 SparkSTEM. Made with ❤️ by Team Kastkar for rural India.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Empowering minds, preserving culture, building futures.
            </p>
          </div>
        </div>

        {/* Cultural Elements */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-yellow-400 text-lg">
            <span>🎯</span>
            <span className="font-semibold">Mission: Digital Inclusion</span>
            <span>🌟</span>
            <span className="font-semibold">Vision: Educated Odisha</span>
            <span>🚀</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;