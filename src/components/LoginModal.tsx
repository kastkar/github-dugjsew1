import React, { useState } from 'react';
import { X, User, Users, Shield, Eye, EyeOff, Gamepad2, BookOpen, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole: string;
  onLogin: (role: string, credentials: any) => void;
}

const LoginModal = ({ isOpen, onClose, defaultRole, onLogin }: LoginModalProps) => {
  const { t } = useLanguage();
  const [selectedRole, setSelectedRole] = useState(defaultRole);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    studentId: '',
    schoolCode: ''
  });

  const roles = [
    {
      id: 'student',
      name: t('login.student'),
      icon: <Gamepad2 className="w-8 h-8" />,
      color: 'from-green-500 to-blue-500',
      description: t('login.student.desc')
    },
    {
      id: 'teacher',
      name: t('login.teacher'),
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500',
      description: t('login.teacher.desc')
    },
    {
      id: 'admin',
      name: t('login.admin'),
      icon: <Settings className="w-8 h-8" />,
      color: 'from-purple-500 to-red-500',
      description: t('login.admin.desc')
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedRole, credentials);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 w-full max-w-md border border-gray-700 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">{t('login.title')}</h2>
          <p className="text-gray-400">{t('login.subtitle')}</p>
        </div>

        {/* Role Selection */}
        <div className="space-y-3 mb-8">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedRole === role.id
                  ? 'border-yellow-400 bg-yellow-400/10'
                  : 'border-gray-600 hover:border-gray-500'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 bg-gradient-to-r ${role.color} text-white rounded-lg`}>
                  {role.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold">{role.name}</h3>
                  <p className="text-gray-400 text-sm">{role.description}</p>
                </div>
                <div className={`w-4 h-4 rounded-full border-2 ${
                  selectedRole === role.id ? 'bg-yellow-400 border-yellow-400' : 'border-gray-500'
                }`}>
                  {selectedRole === role.id && (
                    <div className="w-2 h-2 bg-black rounded-full m-0.5"></div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {selectedRole === 'student' && (
            <>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">{t('login.studentId')}</label>
                <input
                  type="text"
                  value={credentials.studentId}
                  onChange={(e) => setCredentials({...credentials, studentId: e.target.value})}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                  placeholder={t('login.enterStudentId')}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">{t('login.schoolCode')}</label>
                <input
                  type="text"
                  value={credentials.schoolCode}
                  onChange={(e) => setCredentials({...credentials, schoolCode: e.target.value})}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                  placeholder={t('login.enterSchoolCode')}
                  required
                />
              </div>
            </>
          )}

          {(selectedRole === 'teacher' || selectedRole === 'admin') && (
            <>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">{t('login.email')}</label>
                <input
                  type="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                  placeholder={t('login.enterEmail')}
                  required
                />
              </div>
              <div className="relative">
                <label className="block text-gray-300 text-sm font-semibold mb-2">{t('login.password')}</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none pr-12"
                  placeholder={t('login.enterPassword')}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:scale-105 transition-transform duration-300"
          >
            {t('login.enterPortal')} {roles.find(r => r.id === selectedRole)?.name}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            {t('login.needHelp')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;