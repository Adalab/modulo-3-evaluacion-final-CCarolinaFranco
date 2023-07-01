import CharacterNameInput from "../CharacterNameInput/CharacterNameInput";
import SpeciesSelect from "../SpeciesSelect/SpeciesSelect";
function CharacterForm({ searchName, searchSpecies, hadleLifting }) {


    return (
        <form className="">
            <h3>Filtrar por Personajes:</h3>
            <CharacterNameInput
                searchName={searchName}
                hadleLifting={hadleLifting}
            />
            <SpeciesSelect
                searchSpecies={searchSpecies}
                hadleLifting={hadleLifting}
            />

        </form>


    )
}

export default CharacterForm;