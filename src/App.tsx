import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainView from './components/main-view/MainView';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header></Header>
    <main className="font-sans flex h-screen w-screen flex-col items-center justify-center bg-slate-400">
      <MainView></MainView>
    </main>
    <Footer></Footer>
  </React.StrictMode>
);
