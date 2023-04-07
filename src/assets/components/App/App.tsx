import React from 'react';
import './css/App.css';
import { Footer } from '../Footer/Footer';
import { Header } from "../Header/Header";
import { MainContent } from '../MainContent/MainContent';

// Приложение
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
