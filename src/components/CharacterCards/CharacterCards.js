
import { Link } from "react-router-dom";


function CharacterCards({ eachCharacteR }) {
  //console.log(eachCharacteR)

  return (
    <Link to= {"/card/"+eachCharacteR.id}>
      <div >
        <img src={eachCharacteR.image} alt={'imagen del personaje'} />
        <h4>{eachCharacteR.name}</h4>
        <p>{eachCharacteR.species}</p>

      </div>
    </Link>


  );
}
export default CharacterCards;