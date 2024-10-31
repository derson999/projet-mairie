import React from 'react';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import Actualité from './components/Actualité';
import Consulter from './components/Consulter';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Accueil />
      <Actualité />
      <Consulter />
    </div>
  );
}

export default App;
