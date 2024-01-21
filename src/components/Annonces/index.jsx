import React, { Component } from "react";
import './module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

class Annonce extends Component {

    handleValidation = () => {
      const { onValidation, annonce } = this.props;
      onValidation(annonce.id);
    }



  render() {
    const { annonce } = this.props;

    
  
    return (
      <div className="car-ad">
          <div className="image">

          </div>
          <div className="ngezabe">
            <div className="aligner">
              <div className="titre">
                  {annonce.idCarAnnounce.idCar.idModel.brand.brand +" "+annonce.idCarAnnounce.idCar.idModel.model +" "+annonce.idCarAnnounce.idCar.idModel.category.category }
              </div>
              <div className="sup" onClick={this.handleValidation}>
                <i className="fas fa-trash-alt"></i>
              </div>
            </div>

                <div className="description">{annonce.idCarAnnounce.manufacturingYear +" | "+ annonce.idCarAnnounce.mileAge +" Km "} </div>
                <div className="phrase">{annonce.description}</div>
                <div className="price">
                  <div className="prix">
                    {annonce.sellingPrice + " £"}
                  </div>  
                </div>
          </div>
      </div>
    );
  }
}
export default Annonce;
