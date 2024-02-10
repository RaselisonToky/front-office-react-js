import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import ImageSlider from "../../components/detailAnnonce/ImageSlider";
import styles from "./page.module.css";
import Description from "../../components/detailAnnonce/Description";
import Detail from "../../components/detailAnnonce/Detail";
import Tableau from "../../components/detailAnnonce/Table";
import Footer from "../../components/Footer";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Annonces() {
  const [slides, setSlides] = useState([]);
  const [announces, setAnnounces] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchAnnounce = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        const axiosConfig = {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        };
        const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/announces/${id}`, axiosConfig);
        const { annonce } = response.data;
        setAnnounces(annonce);
        const slidesData = annonce.pictures.map(picture => ({
          url: `data:image/jpg;base64,${picture.imageByte}`,
          titre: 'hiii'
        }));
        setSlides(slidesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching image URLs:', error);
        setLoading(false);
      }
    };

    fetchAnnounce();
  }, [id]);

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
        <>
          <Description
            marque={announces?.car?.brand?.brand}
            modele={announces?.car?.model?.model}
            prix={announces?.sellingPrice}
            description={announces?.description}
            fullDescri={announces?.car?.motorisation?.fullDescription}
          />
          <Detail
            kilometrage={announces?.car?.mileAge}
            puissance={announces?.car?.motorisation?.enginePower}
            carburant={announces?.car?.fuelType?.label}
            transmission={announces?.car?.transmission?.name}
          />
          <Tableau
            marque={announces?.car?.brand?.brand}
            motorisation={announces?.car?.motorisation?.fullDescription}
            categorie={announces?.car?.category?.category}
            kilometrage={announces?.car?.mileAge}
            puissance={announces?.car?.motorisation?.enginePower}
            carburant={announces?.car?.fuelType?.label}
            transmission={announces?.car?.transmission?.name}
          />
        </>
      )}
      <br />
      <Footer />
    </div>
  );
}

export default Annonces;
