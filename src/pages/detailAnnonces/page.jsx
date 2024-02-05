import React from 'react';
import Header from "../../components/Header"
import ImageSlider from "../../components/detailAnnonce/ImageSlider";
import styles from "./page.module.css";
import Description from "../../components/detailAnnonce/Description";
import Detail from "../../components/detailAnnonce/Detail";
import Tableau from "../../components/detailAnnonce/Table"
import Footer from "../../components/Footer";
const slides = [  
  {url: 'http://localhost:3000/img-1.jpg', title:'sary'},
  {url: 'http://localhost:3000/img-2.jpg', title:'sarykely'},
  {url: 'http://localhost:3000/img-3.jpg', title:'farany'}
];
function Annonces() {
  // const voiture1 = { marque: 'Toyota', modèle: 'Camry', année: 2022, couleur: 'Bleu', prix: 25000 };

  return (
    <div>
      <Header />
      <br />
      <div className={styles.contain}>
        <ImageSlider slides={slides} />
      </div>
      <Description />
      <Detail />
      <Tableau/>
      <br />
      <Footer/>
    </div>
  );
}

export default Annonces;
