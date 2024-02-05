import sty from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function table(){
    return(
        <div className={sty.containerTable}>
            <div>
                <div className={sty.entete}>Carrosserie et habitacle</div>
                <div className={sty.tab}>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <td>Classe du véhicule</td>
                                <td>Berline</td>
                                <td>Couleur</td>
                                <td>Gris</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Portes</td>
                                <td>5</td>
                                <td>Sellerie</td>
                                <td>Tissu (Sellerie d'origine)</td>
                            </tr>
                            <tr>
                                <td>Nombre de places</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
            </div>
            <br />
            <div>
                <div className={sty.entete}>Moteur, transmission et consommation</div>
                <div className={sty.tab}>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <td>Transmission</td>
                                <td>Traction</td>
                                <td>Classe d'émission</td>
                                <td>EURO 5</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cylindrée</td>
                                <td>1461 ccm</td>
                                <td>Certificat qualité de l'air</td>
                                <td>Crit'Air 2</td>
                            </tr>
                            <tr>
                                <td>Consommation</td>
                                <td>
                                    <p>4.3 l/100 km (En ville)</p>
                                    <p>3.7 l/100 km (Combiné)</p>
                                    <p>3.4 l/100 km (hors ville)</p>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
            </div>
        </div>
    );
}
export default table;