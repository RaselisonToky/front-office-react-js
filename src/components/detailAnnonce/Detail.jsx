import style from "./page.module.css";
function detail(props){
    const {kilometrage,carburant,puissance,transmission} = props;
    return(
        <div className={style.detailC}>
            <div className={style.d}>Détails</div>
            <hr className={style.trait}/>
            <br />
            <div className={style.details}>
                <div className={style.colonne}>
                    <div className={style.cadre}>
                    <i class="bi bi-speedometer" style={{color:"#f37121", fontSize: "27px" , marginTop:"13px"}} ></i>                        <div className={style.titre}>Kilométrage</div>
                    {kilometrage} km
                    </div>
                    <div className={style.cadre}>
                    <i class="bi bi-fuel-pump-fill" style={{color:"#f37121", fontSize: "27px" , marginTop:"13px"}} ></i>                        <br />
                        <div className={style.titre}>Carburant</div>
                        {carburant}
                    </div>
                    <div className={style.cadre}>
                    <i class="bi bi-lightning-charge-fill" style={{color:"#f37121", fontSize: "27px" , marginTop:"13px"}} ></i>                        <br />
                        <div className={style.titre}>Puissance</div>
                        {puissance}
                    </div>
                    <div className={style.cadre}>
                    <i class="bi bi-ev-front-fill" style={{color:"#f37121", fontSize: "27px" , marginTop:"13px"}}></i>                         <br />
                        <div className={style.titre}>Transmission</div>
                        {transmission}
                    </div>
            </div>
            </div>
            
        </div>
    );
}
export default detail;