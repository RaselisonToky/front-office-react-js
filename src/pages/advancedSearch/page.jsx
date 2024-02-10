import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import InputMinMax from '../../components/InputMinMax';
import MySelect from '../../components/MySelect';
import MyInput from '../../components/MyInput';
import { Form, Button } from 'react-bootstrap';
import styles from "./page.module.css";
import axios from 'axios';

function AdvancedSearch() {
    const [loading, setLoading] = useState(false);

    const [brands, setBrands] = useState([]);
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/brand/all`);
                setBrands(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des marques :', error);
                setLoading(false);
            }
        };
        fetchBrands();
    }, []);

    const [models, setModels] = useState([]);
    useEffect(() => {
        const fetchModel = async () => {
            try {
                const response = await axios.get(`${ process.env.REACT_APP_API }/api/v1/models/all`);
                setModels(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des modeles :', error);
                setLoading(false);
            }
        };
        fetchModel();
    }, []);

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${ process.env.REACT_APP_API }/api/v1/categories/all`);
                setCategories(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des categories :', error);
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    const [prixMin, setPrixMin] = useState();
    const [prixMax, setPrixMax] = useState();

    const [kmMin, setKmMin] = useState();
    const [kmMax, setKmMax] = useState();

    const [puissMin, setPuissMin] = useState();
    const [puissMax, setPuissMax] = useState();

    const [dateMin, setDateMin] = useState();
    const [dateMax, setDateMax] = useState();

    const [motCle, setMotCle] = useState();

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (newOption) => {
        console.log('Option sélectionnée :', newOption);
        setSelectedOption(newOption);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log("Min:", min);
        // console.log("Max:", max);
    };

    return (
        <div>
            <Header />
            <div className="container" style={{ backgroundColor: 'rgb(221, 221, 221)', marginTop: '1%', padding: '1%' }}>
                <div className={styles.head}>
                    <div>
                        <a href="/">Retour</a>
                    </div>
                    <div id={styles.titre}>Recherche detaillée</div>
                </div>
                <br />
                <Form onSubmit={onSubmit}>
                    <div className={styles.bigSection}>
                        <div className="title">Annonce</div>
                        <hr />
                        <div className={styles.section}>
                            <div id={styles.input}>
                                <InputMinMax
                                    title={""}
                                    label={"Date d'annonce"}
                                    idMin={"dateMin"}
                                    idMax={"dateMax"}
                                    onChangeMin={(e) => setDateMin(e.target.value)}
                                    onChangeMax={(e) => setDateMax(e.target.value)}
                                    designation={"OK"}
                                    loading={loading}
                                    min={dateMin}
                                    max={dateMax}
                                />
                            </div>
                            <br />
                            <div id={styles.myInput}>
                                <InputMinMax
                                    title={""}
                                    label={"Prix"}
                                    idMin={"prixMin"}
                                    idMax={"prixMax"}
                                    onChangeMin={(e) => setPrixMin(e.target.value)}
                                    onChangeMax={(e) => setPrixMax(e.target.value)}
                                    designation={"OK"}
                                    loading={loading}
                                    min={prixMin}
                                    max={prixMax}
                                />
                            </div>
                            <div id={styles.myInput}>
                                <MyInput
                                    label={"Mot cle"}
                                    value={(e) => setMotCle(e.target.value)}
                                    onChange={handleSelectChange}
                                    placeholder={"Entrer quelque chose"}
                                    loading={loading}
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className={styles.bigSection}>
                        <div className="title">Véhicule</div>
                        <hr />
                        <div className={styles.section}>
                            <div>
                                <MySelect
                                    label={"Marque"}
                                    options={brands.map(brand => ({
                                        value: brand.id_brand,
                                        label: brand.brand
                                      }))}
                                    onChange={handleSelectChange}
                                    selectedValue={selectedOption}
                                    loading={loading}
                                />
                            </div>
                            <div className={styles.selects2}>
                                <MySelect
                                    label={"Modele"}
                                    options={models.map(model => ({
                                        value: model.id_model,
                                        label: model.model
                                      }))}
                                    onChange={handleSelectChange}
                                    selectedValue={selectedOption}
                                    loading={loading}
                                />
                            </div>
                            <div className={styles.selects2}>
                                <MySelect
                                    label={"Category"}
                                    options={categories.map(categorie => ({
                                        value: categorie.id_category,
                                        label: categorie.category
                                      }))}
                                    onChange={handleSelectChange}
                                    selectedValue={selectedOption}
                                    loading={loading}
                                />
                            </div>
                            <div className={styles.selects2} id={styles.myInput}>
                                <InputMinMax
                                    title={""}
                                    label={"Kilometrage"}
                                    idMin={"kmMin"}
                                    idMax={"kmMax"}
                                    onChangeMin={(e) => setKmMin(e.target.value)}
                                    onChangeMax={(e) => setKmMax(e.target.value)}
                                    designation={"OK"}
                                    loading={loading}
                                    min={kmMin}
                                    max={kmMax}
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className={styles.bigSection}>
                        <div className="title">Moteur</div>
                        <hr />
                        <div className={styles.section}>
                            <div id={styles.input}>
                                <InputMinMax
                                    title={""}
                                    label={"Puissance du moteur"}
                                    idMin={"puissMin"}
                                    idMax={"puissMax"}
                                    onChangeMin={(e) => setPuissMin(e.target.value)}
                                    onChangeMax={(e) => setPuissMax(e.target.value)}
                                    designation={"OK"}
                                    loading={loading}
                                    min={puissMin}
                                    max={puissMax}
                                />
                            </div>
                            {/* <div className={styles.selects}>
                                <MySelect
                                    label={"Transmission"}
                                    options={options}
                                    onChange={handleSelectChange}
                                    selectedValue={selectedOption}
                                    loading={loading}
                                />
                            </div>
                            <div className={styles.selects}>
                                <MySelect
                                    label={"Type de carburant"}
                                    options={options}
                                    onChange={handleSelectChange}
                                    selectedValue={selectedOption}
                                    loading={loading}
                                />
                            </div> */}
                        </div>
                    </div>
                </Form>
                <br />
                <div className={styles.search}>
                    <Button
                        type="submit"
                        style={{
                            backgroundColor: '#e87524',
                            color: 'white',
                            border: 'none',
                            borderRadius: '3px'
                        }}
                        disabled={loading}>
                        {"RECHERCHER"}
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default AdvancedSearch;
