
import { Link } from "react-router-dom";

function CardDetails({ cardData }) {
    
  
  
    if (cardData){
    return (
        <>
            <section>
                <h2 className="">Detalles del personaje</h2>
                <p>Nombre:{cardData.name}</p>
                <p>Especie :{cardData.species}</p>
                <Link to='/'>Volver</Link>
            </section>
            <img src={cardData.image} alt={'imagen del personaje'} />
        </>
    );}
    else{
        return(

            <di>
                <p>Ese personaje no existe</p>
                <Link to='/'>Volver</Link>
            </di>
        )
    }
}
export default CardDetails;
