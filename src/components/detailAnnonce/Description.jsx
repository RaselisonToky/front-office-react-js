import sty from "./page.module.css";

function description(){
    return(
        <div className={sty.container}>
            <div className={sty.marque}> Mercedes-Benz Classe A</div>
            <br />
            <div>160 CDI Business 7G-DCT</div>
            <div className={sty.marque}>14 090 €</div>    
            <br />    
            <div className={sty.description}> La Mercedes-Benz Classe A est une voiture compacte de luxe produite par le constructeur automobile allemand Mercedes-Benz. La version 160 CDI Business 7G-DCT est équipée d'un moteur diesel et d'une boîte de vitesses automatique à 7 rapports.
            </div>
        </div>
    );
}
export default description;