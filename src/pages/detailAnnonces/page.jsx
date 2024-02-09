import React, { useState, useEffect } from 'react';
import Header from "../../components/Header"
import ImageSlider from "../../components/detailAnnonce/ImageSlider";
import styles from "./page.module.css";
import Description from "../../components/detailAnnonce/Description";
import Detail from "../../components/detailAnnonce/Detail";
import Tableau from "../../components/detailAnnonce/Table"
import Footer from "../../components/Footer";
import axios from 'axios';
import { toByteArray } from 'base64-js';

function Annonces() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const axiosConfig = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    };

    axios.get(`${process.env.REACT_APP_API}/api/v1/pictures/1`, axiosConfig)  
      .then(response => {
        const { listPicture } = response.data;
        const slidesData = listPicture.map(picture => {
          // const byteArray = toByteArray(picture.imagebyte);
          // const base64String = byteArray.reduce((data, byte) => data + String.fromCharCode(byte), '');
          return {
            url: `data:image/jpeg;base64,${picture.imagebyte}`,
            titre: 'hiii'
          };
        });
        setSlides(slidesData);
        console.log(slides);
        console.log(slides[0].url);
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
