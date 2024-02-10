import React, { useState, useEffect } from 'react';
import Header from "../../components/Header"
import ImageSlider from "../../components/detailAnnonce/ImageSlider";
import styles from "./page.module.css";
import Description from "../../components/detailAnnonce/Description";
import Detail from "../../components/detailAnnonce/Detail";
import Tableau from "../../components/detailAnnonce/Table"
import Footer from "../../components/Footer";
import axios from 'axios';

function Annonces() {
  const [slides, setSlides] = useState([]);
  const [announces , setAnnounces] = useState([]);
  const [loading, setLoading] = useState(false);
  // const bb = () => {};
  useEffect(() => {
    const token = localStorage.getItem('token');
    const axiosConfig = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    };

    axios.get(`${process.env.REACT_APP_API}/api/v1/announces/1`, axiosConfig)  
      .then(response => {
        const { annonce } = response.data;
        // console.log(annonce);
        setAnnounces(annonce);
        const slidesData = annonce.pictures.map(picture => {
          return {
            url: `data:image/jpg;base64,${picture.imageByte}`,
            titre: 'hiii'
          };
        });    

        console.log("hello babyy");
        setSlides(slidesData);
        console.log(announces)

        // console.log(slides);
      })
      .catch(error => {
        console.error('Error fetching image URLs:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <br />
      <div className={styles.contain}>
        <ImageSlider slides={slides} />
      </div>
      {loading ? (
          <p>Chargement...</p>
      ) : (
         
        <Description 
          marque={announces.car.brand.brand} 
          model={announces.car.model.model}
          prix={announces.sellingPrice}
          description={announces.description}
          // marque={announces.car.id} 
        />
        )}
      <Detail 
        // carburant = {announces.}
      />
      <Tableau/>
      <br />
      <Footer/>
    </div>
  );
}

export default Annonces;
