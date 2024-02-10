import sty from "./page.module.css";

function description(props){
    const { marque, modele, prix, description } = props;
    return(
        <div className={sty.container}>
            <div className={sty.marque}> {marque} {modele}</div>
            <br />
            {/* <div>160 CDI Business 7G-DCT</div> */}
            <div className={sty.marque}>{prix} €</div>     
            <br />    
            <div className={sty.description}> {description} </div>
        </div>
    );
}
export default description;