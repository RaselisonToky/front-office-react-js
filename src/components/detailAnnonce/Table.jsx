import sty from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function table(props){ 
    const{marque,model,categorie,carburant,transmission,kilometrage,puissance,motorisation} = props;
    return(
        <div className={sty.containerTable}>
            <br />
            <div>
                <div className={sty.entete}>Moteur et transmission </div>
                <div className={sty.tab}>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <td>Marque</td>
                                <td>{marque}</td>
                                <td>Model</td>
                                <td>{model}</td>
                            </tr>
                            <tr>
                                <td>Catégorie</td>
                                <td>{categorie}</td>
                                <td>Carburant </td>
                                <td>{carburant}</td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Transmission</td>
                                <td>{transmission}</td>
                                <td>Kilometrage</td>
                                <td>{kilometrage}</td>
                                
                            </tr>
                            <tr>
                                 <td>Puissance </td>
                                <td>{puissance}</td>
                                <td>Motorisation</td>
                                <td>{motorisation}</td>
                                
                            </tr>
                            
                        </tbody>
                        </table>
                    </div>
            </div>
        </div>
    );
}
export default table;