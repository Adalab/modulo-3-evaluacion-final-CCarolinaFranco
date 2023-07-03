import CharacterNameInput from "../CharacterNameInput/CharacterNameInput";
import SpeciesSelect from "../SpeciesSelect/SpeciesSelect";
import "./characterForm.scss"

function CharacterForm({ searchName, searchSpecies, hadleLifting }) {


    return (
        <form className="">
            <h3>Filtrar por Personajes:</h3>
            <CharacterNameInput
                searchName={searchName}
                hadleLifting={hadleLifting}
            />
            <h3>Filtrar por Especie:</h3>
            <SpeciesSelect
                searchSpecies={searchSpecies}
                hadleLifting={hadleLifting}
            />


        </form>


    )
}

export default CharacterForm;