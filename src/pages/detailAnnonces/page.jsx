import React from 'react';
import Header from "../../components/Header"
import styles from "./page.module.css";
import DetailsAnnonce from '../../components/DetailsAnnonce'
import votreImage from './voiture.jpg';

function Annonces() {
  const voiture1 = { marque: 'Toyota', modèle: 'Camry', année: 2022, couleur: 'Bleu', prix: 25000 };
  return (
    <div>
      <Header />
      <div className={styles.back}>
        <div className={styles.image}>
          <img className={styles.sary} src={votreImage} alt='X' />
        </div>
        <div className={styles.details}>
          <DetailsAnnonce {...voiture1} />
        </div>
      </div>
    </div>
  );
}

export default Annonces;
