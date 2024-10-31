import React from "react";
import Carousel from 'react-bootstrap/Carousel'; // Correction de l'import
import './App.css';


function App() {
  return (
    <div className="App">
      <Carousel className="base">
        <Carousel.Item className="image">
          <img
            className="d-block w-100"
            src="img/image ac 1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3> 𝗦𝗘𝗔𝗡𝗖𝗘 𝗗𝗘 𝗧𝗥𝗔𝗩𝗔𝗜𝗟 </h3>
            <p>Une importante séance de travail s’est déroulée à la Mairie du 2ème Arrondissement, rassemblant 𝙡𝙚𝙨 𝘿𝙚́𝙡𝙚́𝙜𝙪𝙚́𝙨 𝙎𝙥𝙚́𝙘𝙞𝙖𝙪𝙭, 𝙡𝙚𝙨 𝘾𝙝𝙚𝙛𝙨 𝙙𝙚 𝙌𝙪𝙖𝙧𝙩𝙞𝙚𝙧 𝙚𝙩 𝙡𝙚𝙨 𝘾𝘿𝙌.
               Cette rencontre avait pour objectif de discuter de trois points essentiels pour le développement et l’implication citoyenne.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="image">
          <img
            className="d-block w-100"
            src="img/image ac 3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>📖 𝑶𝑼𝑽𝑹𝑨𝑮𝑬</h3>
            <p>Les Délégués Spéciaux du 2e Arrondissement de Port-Gentil ont eu l'honneur de recevoir l'ouvrage 
              𝑳'𝑬𝑵𝑪𝑹𝑬 𝑫𝑼 𝑪𝑶𝑼𝑹𝑨𝑮𝑬 de Monsieur 𝑱𝒆𝒂𝒏-𝑭𝒊𝒅𝒆̀𝒍𝒆 𝑶𝑻𝑨𝑵𝑫𝑨𝑼𝑳𝑻.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="image">
          <img
            className="d-block w-100"
            src="/img/image ac2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>CIVILITÉS</h3>
            <p>Aujourd'hui, le Ministère du Pétrole, du Gaz et des Mines, via la Direction Générale des
               Études et Laboratoires, a présenté ses civilités aux Délégués Spéciaux du 2e Arrondissement 💼.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;