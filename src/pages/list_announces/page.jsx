import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../components/Header";
import DropdownInputMinMax from '../../components/DropdownInputMinMax';
import DropdownSelectSearch from '../../components/DropdownSelectSearch';
import SelectSearch from '../../components/SelectSearch';
import OneAnnounce from '../../components/OneAnnounce';
import Sort from '../../components/Sort';
import styles from "./page.module.css"
import Footer from "../../components/Footer"


function List_announces() {
    const [announces, setAnnounces] = useState([]);

    const [min, setMin] = useState();
    const [max, setMax] = useState();
    const [loading, setLoading] = useState(false);
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (newOption) => {
        console.log('Option sélectionnée :', newOption);
        setSelectedOption(newOption);
    };


    useEffect(() => {
        const fetchAnnounces = async () => {
            try {
                const response = await axios.get(`${ process.env.REACT_APP_API }/api/v1/announces`);
                setAnnounces(response.data.listAnnounces);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des annonces :', error);
                setLoading(false);
            }
        };

        fetchAnnounces();
    }, []);


    return (
        <div className={styles.c}>
            <Header />
            <div className={styles.container} style={{ backgroundColor: 'white', marginTop: '1%' }}>
                <div className="row">
                    <div className="col-md-3">
                        <div className={styles.favoris} >
                            <div id={styles.fav}>
                                <svg id="coeur" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg>
                                <span> Mes favoris (0) </span>
                                <div id={styles.chevron}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <br />

                        <div style={{
                            backgroundColor: 'rgb(242, 241, 241)',
                            paddingBottom: '5%'
                        }}
                        >
                            <SelectSearch
                                label={"Marque"}
                                options={options}
                                onChange={handleSelectChange}
                                selectedValue={selectedOption}
                                loading={loading}
                            />
                            <SelectSearch
                                label={"Modele"}
                                options={options}
                                onChange={handleSelectChange}
                                selectedValue={selectedOption}
                                loading={loading}
                            />
                            <SelectSearch
                                label={"Categorie"}
                                options={options}
                                onChange={handleSelectChange}
                                selectedValue={selectedOption}
                                loading={loading}
                            />
                            <hr />
                            <DropdownInputMinMax
                                title={""}
                                label={"Prix"}
                                idMin={"prixMin"}
                                idMax={"prixMax"}
                                onChangeMin={(e) => setMin(e.target.value)}
                                onChangeMax={(e) => setMax(e.target.value)}
                                designation={"OK"}
                                loading={loading}
                                min={min}
                                max={max}
                            />
                            <br />
                            <DropdownInputMinMax
                                title={""}
                                label={"Mile age"}
                                idMin={"prixMin"}
                                idMax={"prixMax"}
                                onChangeMin={(e) => setMin(e.target.value)}
                                onChangeMax={(e) => setMax(e.target.value)}
                                designation={"OK"}
                                loading={loading}
                                min={min}
                                max={max}
                            />
                            <br />
                            <DropdownInputMinMax
                                title={""}
                                label={"Engine power"}
                                idMin={"prixMin"}
                                idMax={"prixMax"}
                                onChangeMin={(e) => setMin(e.target.value)}
                                onChangeMax={(e) => setMax(e.target.value)}
                                designation={"OK"}
                                loading={loading}
                                min={min}
                                max={max}
                            />
                            <br />
                            <DropdownInputMinMax
                                title={""}
                                label={"Date annonce"}
                                idMin={"prixMin"}
                                idMax={"prixMax"}
                                onChangeMin={(e) => setMin(e.target.value)}
                                onChangeMax={(e) => setMax(e.target.value)}
                                designation={"OK"}
                                loading={loading}
                                min={min}
                                max={max}
                            />
                            <hr />
                            <DropdownSelectSearch
                                label={"Transmission"}
                                options={options}
                                onChange={handleSelectChange}
                                selectedValue={selectedOption}
                                loading={loading}
                            />
                            <br />
                            <DropdownSelectSearch
                                label={"Type de carburant"}
                                options={options}
                                onChange={handleSelectChange}
                                selectedValue={selectedOption}
                                loading={loading}
                            />
                            <hr />
                            <a href="/AdvancedSearch">
                                <button
                                    style={{
                                        width: '90%',
                                        border: 'solid 1px #0d4f78',
                                        backgroundColor: 'transparent',
                                        borderRadius: '3px',
                                        height: '35px',
                                        color: '#0d4f78',

                                    }}
                                >
                                    Recheche detaillee
                                </button>
                            </a>
                        </div>


                    </div>
                    <div className="col-md-9" id={styles.announces}>
                        <Sort
                            options={options}
                            onChange={handleSelectChange}
                            selectedValue={selectedOption}
                            loading={loading}
                        />
                        {loading ? (
                            <p>Chargement...</p>
                        ) : (
                            announces.map((announce, index) => (
                                <OneAnnounce
                                    key={index}
                                    photo={announce.pictures.length > 0 ? announce.pictures[0].image : ""}
                                    brand={announce.car.brand.brand}
                                    model={announce.car.model.model}
                                    category={announce.car.category.category}
                                    mileAge={announce.car.mileAge}
                                    transmission={announce.car.transmission.name}
                                    fuelType={announce.car.fuelType.label}
                                    enginePower={announce.car.motorisation.enginePower}
                                    date={announce.dateAnnounces}
                                    price={announce.sellingPrice}
                                    status={announce.status_intitule}
                                    statusCss={announce.status_css}
                                />
                            ))
                        )}

                    </div>
                </div>
            </div> 
            <Footer />
        </div>
    );
}

export default List_announces;
