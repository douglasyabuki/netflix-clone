import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainView from './components/main-view/MainView';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header></Header>
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-netflix-black">
      <MainView></MainView>
      <span className="text-2xl text-neutral-200">Vite + React + TS + TailwindCSS</span>
    </main>
    <Footer></Footer>
  </React.StrictMode>
);
