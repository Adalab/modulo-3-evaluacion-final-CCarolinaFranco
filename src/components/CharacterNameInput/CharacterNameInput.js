function CharacterNameInput ({searchName, hadleLifting} ){

    return(
        <label className="" htmlFor="search_name">
        Nombre:
        <input className=""
          type="text" name=""
          id="search_name"
          value={searchName}
          onInput={(env)=>hadleLifting('name' , env.target.value)} />
      </label>

    )
}
export default CharacterNameInput;