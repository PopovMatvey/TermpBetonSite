import React from 'react';
import '../css/App.css';
import { Footer } from './Footer';
import { Header } from "./Header";
import { MainContent } from './MainContent';

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
