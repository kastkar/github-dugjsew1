import React, { useState } from 'react';
import LanguageToggle from './components/LanguageToggle';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import GameWorlds from './components/GameWorlds';
import TeacherSection from './components/TeacherSection';
import StudentFeatures from './components/StudentFeatures';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import StudentDashboard from './components/dashboards/StudentDashboard';
import TeacherDashboard from './components/dashboards/TeacherDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';
import BiologyGame from './components/games/BiologyGame';
import PhysicsGame from './components/games/PhysicsGame';
import ChemistryGame from './components/games/ChemistryGame';

function App() {
  const [loginModal, setLoginModal] = useState({ isOpen: false, role: '' });
  const [activeDashboard, setActiveDashboard] = useState<string | null>(null);
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const handleOpenLogin = (role: string) => {
    setLoginModal({ isOpen: true, role });
  };

  const handleCloseLogin = () => {
    setLoginModal({ isOpen: false, role: '' });
  };

  const handleLogin = (role: string, credentials: any) => {
    console.log('Login:', role, credentials);
    setLoginModal({ isOpen: false, role: '' });
    setActiveDashboard(role);
  };

  const handleCloseDashboard = () => {
    setActiveDashboard(null);
  };

  const handlePlayGame = (gameId: string) => {
    setActiveGame(gameId);
  };

  const handleCloseGame = () => {
    setActiveGame(null);
  };

  return (
    <div className="min-h-screen bg-black">
      <LanguageToggle />
      
      {/* Main Website */}
      {!activeDashboard && !activeGame && (
        <>
          <Hero onOpenLogin={handleOpenLogin} />
          <ProblemSection />
          <GameWorlds onPlayGame={handlePlayGame} />
          <TeacherSection />
          <StudentFeatures />
          <Footer />
        </>
      )}

      {/* Modals and Dashboards */}
      <LoginModal
        isOpen={loginModal.isOpen}
        onClose={handleCloseLogin}
        defaultRole={loginModal.role}
        onLogin={handleLogin}
      />

      {activeDashboard === 'student' && (
        <StudentDashboard onClose={handleCloseDashboard} onPlayGame={handlePlayGame} />
      )}
      
      {activeDashboard === 'teacher' && (
        <TeacherDashboard onClose={handleCloseDashboard} />
      )}
      
      {activeDashboard === 'admin' && (
        <AdminDashboard onClose={handleCloseDashboard} />
      )}

      {/* Games */}
      {activeGame === 'biology' && (
        <BiologyGame onClose={handleCloseGame} />
      )}
      
      {activeGame === 'physics' && (
        <PhysicsGame onClose={handleCloseGame} />
      )}
      
      {activeGame === 'chemistry' && (
        <ChemistryGame onClose={handleCloseGame} />
      )}
    </div>
  );
}

export default App;