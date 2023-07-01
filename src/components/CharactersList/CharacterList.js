import CharacterCards from "../CharacterCards/CharacterCards";
import "./CharacterList.css"; 

function CharacterList({charactersListadO}) {
    //console.log(charactersListadO)
    
const ListaDeLi = charactersListadO.map((eachCharacter) => (
<li key= {eachCharacter.id} className="character-list-item">
<CharacterCards
eachCharacteR= {eachCharacter}
/>
</li>

));
    
    return (

        <ul className="character-list">
            {ListaDeLi}
        </ul>

    )
}
export default CharacterList;
