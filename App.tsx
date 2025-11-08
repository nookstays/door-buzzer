import React from 'react';
import { BuzzerButton } from './components/BuzzerButton';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4 font-sans antialiased">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight">SEAM HQ</h1>
        <p className="text-lg text-gray-400 mt-2">Front Door Access</p>
      </header>

      <main className="w-full max-w-sm">
        <BuzzerButton />
      </main>

      <footer className="absolute bottom-4 text-center text-gray-600 text-sm">
        <p className="mt-1">Powered by Modern Access Solutions</p>
      </footer>
    </div>
  );
};

export default App;
