// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainView from './components/main-view/MainView';

// Styling
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main className=" bg-netflix-black font-sans text-netflix-white-font">
      <Header></Header>
      <MainView></MainView>
      <Footer></Footer>
    </main>
  </React.StrictMode>,
);
