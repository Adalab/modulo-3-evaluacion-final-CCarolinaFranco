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
            {/*<label className="" htmlFor="">
            Especie:
            <select className="" name="" id="" 
            value={searchSpecies} 
            onChange={(env) => hadleLifting('species', env.target.value)}>
                <option value="all">Todos</option>
                <option value="Human">Humana</option>
                <option value="Alien">Alien</option>

            </select>
        </label>*/}

        </form>


    )
}

export default CharacterForm;