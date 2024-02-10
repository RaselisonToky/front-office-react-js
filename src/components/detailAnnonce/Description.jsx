import sty from "./page.module.css";

function description(props){
    const { marque, modele, prix, description ,fullDescri} = props;
    return(
        <div className={sty.container}>
            <div className={sty.marque}> {marque} {modele}</div>
            <br />
            <div>{fullDescri}</div>
            <div className={sty.marque}>{prix} €</div>     
            <br />    
            <div className={sty.description}> {description} </div>
        </div>
    );
}
export default description;