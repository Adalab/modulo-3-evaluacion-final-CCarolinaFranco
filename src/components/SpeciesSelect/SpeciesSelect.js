function SpeciesSelect(searchSpecies, hadleLifting) {

    return (
        <label className="" htmlFor="">
            Especie:
            <select className="" name="" id="" value={searchSpecies} onChange={(env) => hadleLifting('species', env.target.value)}>
                <option value="all">Todos</option>
                <option value="Human">Humana</option>
                <option value="Alien">Alien</option>

            </select>
        </label>

    );

}
export default SpeciesSelect ;