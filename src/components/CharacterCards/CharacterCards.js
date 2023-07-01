function CharacterCards ({eachCharacteR}) {
    //console.log(eachCharacteR)
    
    return(
       <div>
         <img src={eachCharacteR.image} alt={'imagen del personaje'}/>
         <h4>{eachCharacteR.name}</h4>
         <p>{eachCharacteR.species}</p>

       </div>


);
}
export default CharacterCards;