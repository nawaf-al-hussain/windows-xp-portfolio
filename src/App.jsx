import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import Desktop from './components/Desktop';
import BSOD from './components/BSOD';

export default function App() {
  // screen: 'loading' | 'login' | 'desktop' | 'bsod'
  const [screen, setScreen] = useState('loading');

  useEffect(() => {
    if (screen === 'loading') {
      const timer = setTimeout(() => setScreen('login'), 3800);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  return (
    <div className="w-full h-full overflow-hidden bg-black relative">
      <AnimatePresence mode="wait">
        {screen === 'loading' && <LoadingScreen key="loading" />}
        {screen === 'login' && (
          <LoginScreen key="login" onLogin={() => setScreen('desktop')} />
        )}
        {screen === 'desktop' && <Desktop key="desktop" onShutdown={() => setScreen('bsod')} />}
        {screen === 'bsod' && <BSOD key="bsod" onRestart={() => setScreen('loading')} />}
      </AnimatePresence>
    </div>
  );
}
