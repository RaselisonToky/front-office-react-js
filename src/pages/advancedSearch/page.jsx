import React, { useState } from 'react';
import Header from "../../components/Header";
import InputMinMax from '../../components/InputMinMax';
import MySelect from '../../components/MySelect';
import MyInput from '../../components/MyInput';
import { Form, Button } from 'react-bootstrap';
import styles from "./page.module.css"

function AdvancedSearch() {
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

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Min:", min);
        console.log("Max:", max);
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
                                    idMin={"prixMin"}
                                    idMaPrix={"prixMax"}
                                    onChangeMin={(e) => setMin(e.target.value)}
                                    onChangeMax={(e) => setMax(e.target.value)}
                                    designation={"OK"}
                                    loading={loading}
                                    min={min}
                                    max={max}
                                />
                            </div>
                            <br />
                            <div id={styles.myInput}>
                                <InputMinMax
                                    title={""}
                                    label={"Prix"}
                                    idMin={"prixMin"}
                                    idMaPrix={"prixMax"}
                                    onChangeMin={(e) => setMin(e.target.value)}
                                    onChangeMax={(e) => setMax(e.target.value)}
                                    designation={"OK"}
                                    loading={loading}
                                    min={min}
                                    max={max}
                                />
                            </div>
                            <div id={styles.myInput}>
                                <MyInput
                                    label={"Mot cle"}
                                    value={(e) => setMin(e.target.value)}
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
                                    options={options}
                                    onChange={handleSelectChange}
                                    selectedValue={selectedOption}
                                    loading={loading}
                                />
                            </div>
                            <div className={styles.selects2}>
                                <MySelect
                                    label={"Modele"}
                                    options={options}
                                    onChange={handleSelectChange}
                                    selectedValue={selectedOption}
                                    loading={loading}
                                />
                            </div>
                            <div className={styles.selects2}>
                                <MySelect
                                    label={"Category"}
                                    options={options}
                                    onChange={handleSelectChange}
                                    selectedValue={selectedOption}
                                    loading={loading}
                                />
                            </div>
                            <div className={styles.selects2} id={styles.myInput}>
                                <InputMinMax
                                    title={""}
                                    label={"Kilometrage"}
                                    idMin={"prixMin"}
                                    idMaPrix={"prixMax"}
                                    onChangeMin={(e) => setMin(e.target.value)}
                                    onChangeMax={(e) => setMax(e.target.value)}
                                    designation={"OK"}
                                    loading={loading}
                                    min={min}
                                    max={max}
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
                                    label={"Puissance"}
                                    idMin={"prixMin"}
                                    idMaPrix={"prixMax"}
                                    onChangeMin={(e) => setMin(e.target.value)}
                                    onChangeMax={(e) => setMax(e.target.value)}
                                    designation={"OK"}
                                    loading={loading}
                                    min={min}
                                    max={max}
                                />
                            </div>
                            <div className={styles.selects}>
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
                            </div>
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
