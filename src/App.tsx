import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-neutral-900">
      <span className="text-2xl text-neutral-200">Vite + React + TS + TailwindCSS</span>
    </main>
  </React.StrictMode>
);
