import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Annonce from "../../components/Annonces"
import styles from "./page.module.css"
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress'; // Importez le composant CircularProgress
import Footer from '../../components/Footer';

function ListeAnnonce() {
  const [annonces, setAnnonces] = useState([]);
  const [loading, setLoading] = useState(true); // Nouvel état pour indiquer le chargement
  const [page, setPage] = useState(1);
  const annoncesPerPage = 5;

  useEffect(() => {
    const token = localStorage.getItem('token');
    const axiosConfig = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    };

    axios.get(`${ process.env.REACT_APP_API }/api/v1/announces`, axiosConfig)
      .then(response => {
        setAnnonces(response.data.listAnnounces);
        setLoading(false); // Mettez à jour l'état pour indiquer que le chargement est terminé
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des annonces', error);
        setLoading(false); // Assurez-vous de mettre à jour l'état même en cas d'erreur
      });
  }, []);


  const handleValidation = (annonceId) => {

};

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * annoncesPerPage;
  const endIndex = startIndex + annoncesPerPage;
  const displayedAnnonces = annonces.slice(startIndex, endIndex);

  return (
    <div className={styles.c}>
      <Header />
      <div className={styles.container}>
        {loading ? (
          <CircularProgress sx={{ alignSelf: 'center', marginTop: 2 }} /> // Affichez le spinner de chargement
        ) : (
          <>
            {displayedAnnonces.map((annonce, index) => (
              <Annonce key={index} annonce={annonce}  onValidation={handleValidation} />
            ))}
            <div className={styles.pagination}>
              <Pagination
                color="primary"
                count={Math.ceil(annonces.length / annoncesPerPage)}
                page={page}
                onChange={handleChangePage}
                sx={{ marginTop: 2, alignSelf: 'center', paddingBottom: '50px' }}
              />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ListeAnnonce;
