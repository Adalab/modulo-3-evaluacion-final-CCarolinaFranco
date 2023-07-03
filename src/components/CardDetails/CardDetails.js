
import { Link } from "react-router-dom";
import "./cardDetails.css";

function CardDetails({ cardData }) {
    
  
  
    if (cardData){
    return (
        <>
            <section>
                <h2 className="">Detalles del personaje</h2>
                <p>Nombre: {cardData.name}</p>
                <p>Especie: {cardData.species}</p>
                <Link to='/'className="volver">Volver</Link>
            </section>
            <img src={cardData.image} alt={'imagen del personaje'} />
        </>
    );}
    else{
        return(

            <di>
                <p className="noExiste">Este personaje no existe</p>
                <Link to='/'className="back">Volver</Link>
            </di>
        )
    }
}
export default CardDetails;
