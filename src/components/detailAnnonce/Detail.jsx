import style from "./page.module.css";
function detail(){
    return(
        <div className={style.detailC}>
            <div className={style.d}>Détails</div>
            <hr className={style.trait}/>
            <br />
            <div className={style.details}>
                <div className={style.colonne}>
                    <div className={style.cadre}>
                        <i className="fas fa-tachometer-alt" style={{color:"#f37121", fontSize: "27px" , marginTop:"13px"}} ></i>
                        <div className={style.titre}>Kilométrage</div>
                        134 345 km
                    </div>
                    <div className={style.cadre}>
                        <i className="fas fa-gas-pump" style={{color:"#f37121", fontSize: "27px" , marginTop:"13px"}} ></i>
                        <br />
                        <div className={style.titre}>Carburant</div>
                        Diesel
                    </div>
                    <div className={style.cadre}>
                        <i className="fas fa-bolt" style={{color:"#f37121", fontSize: "27px" , marginTop:"13px"}} ></i>
                        <br />
                        <div className={style.titre}>Puissance</div>
                        90 CV / 66 kW
                    </div>
                    <div className={style.cadre}>
                        <i className="fas fa-cogs" style={{color:"#f37121", fontSize: "27px" , marginTop:"13px"}}></i> 
                        <br />
                        <div className={style.titre}>Transmission</div>
                        Automatique
                    </div>
            </div>
            </div>
            
        </div>
    );
}
export default detail;