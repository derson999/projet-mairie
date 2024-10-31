import React from 'react';
import './Accueil.css'; // Fichier CSS pour le style
import backgroundImage from './Mairie de.jpg'; // Chemin vers l'image de la mairie
import SearchIcon from '@mui/icons-material/Search';


const Accueil = () => {
  return (
    <div className="accueil" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="accueil-content">
        {/* Barre de recherche */}
        <div className="search-bar">
  
  <input type="text" placeholder="Rechercher..." />
  <SearchIcon style={{ color: 'yellow' }} />
</div><br></br>

        {/* Boutons des services */}
        <div className="services">
          <button className="service-btn">ACCUEIL</button>
          <button className="service-btn">SERVCIE ETAT CIVIL</button>
          <button className="service-btn">SERVICE SOCIAL</button>
          <button className="service-btn">Service TECHNIQUE</button>
          <button className="service-btn">CDQ</button>
          <button className="service-btn">AGENDA</button>
          <button className="service-btn">URBANISME</button>
          <button className="service-btn">GALERIE</button>
        </div>

        {/* Bouton de demande d'audience */}
        <div className="audience-btn-container">
          <a href="https://calendly.com/votre-lien" target="_blank" rel="noopener noreferrer">
            <button className="audience-btn">Demande d'Audience</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
