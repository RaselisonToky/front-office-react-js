import React, { useState, useEffect } from 'react';
import Header from "../../components/Header"
import ImageSlider from "../../components/detailAnnonce/ImageSlider";
import styles from "./page.module.css";
import Description from "../../components/detailAnnonce/Description";
import Detail from "../../components/detailAnnonce/Detail";
import Tableau from "../../components/detailAnnonce/Table"
import Footer from "../../components/Footer";
import axios from 'axios';
// const slides = [  
//   {url: 'http://localhost:3000/img-1.jpg', title:'sary'},
//   {url: 'http://localhost:3000/img-2.jpg', title:'sarykely'},
//   {url: 'http://localhost:3000/img-3.jpg', title:'farany'}
// ];
function Annonces() {
  // const [imageUrls, setImageUrls] = useState([]);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/pictures/1`)  
      .then(response => {
        const { listPicture } = response.data;
        const slidesData = listPicture.map(picture => ({
          url: `data:image/jpeg;base64,${btoa(new Uint8Array(picture.imagebyte).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`,
          title: 'Titre de l\'image'
        }));
        setSlides(slidesData); // Set slidesData instead of slides
      })
      .catch(error => {
        console.error('Error fetching image URLs:', error);
      });
  }, []);
  
  return (
    <div>
      <Header />
      <br />
      <div className={styles.contain}>
        {/* Check if slides is defined before passing it to ImageSlider */}
        {slides && <ImageSlider slides={slides} />}
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
