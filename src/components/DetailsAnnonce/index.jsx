import React from 'react';
import styles from "./page.module.css";

function DetailsAnnonce({ marque, modèle, année, couleur, prix }) {
  return (
    <div className={styles.details}>
      <h2 className={styles.marque}>{marque}</h2>
      <p className={styles.modele}>{modèle}</p>
      <p className={styles.prix}>{prix} €</p>
      <p className={styles.année}>{année}</p>
      <div className={styles.detailP}>
        <div className={styles.d}>
          <i className="fas fa-tachometer-alt ic" ></i> Kilométrage: {couleur} km
        </div>
        <div className={styles.d}>
          <i className="fas fa-bolt"></i> Puissance: {couleur} CV
        </div>
      </div>
    </div>
  );
}

export default DetailsAnnonce;
