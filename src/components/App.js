//import "../styles/App.scss";
import '../styles/App.css';
import { useEffect, useState } from "react";
import fetchDataApi from "./services/Api";
import CharacterList from "./CharactersList/CharacterList";
import localStorage from "./services/localStorage.js"
function App() {

  const [charactersListado, setCharactersListado] = useState( []);
  const [searchName, setSearchName] = useState ('');
  const [searchSpecies, setSearchSpecies] = useState ('all');
  
  
  ///localStorage.get ('CharactersData',[]) 
 //if(localStorage.getItem('CharactersData')=== null ){
      
  //  }

  useEffect(() => {
   
    fetchDataApi()
      .then((cleanData) => {
        setCharactersListado(cleanData);
        localStorage.set ('CharactersData',cleanData )
      })
  }, []);
//funciones para input/select
  const handleSearchName = (ev) =>{
    setSearchName(ev.target.value)
  }
  const handleSearchSpecies = (ev) =>{
    setSearchSpecies(ev.target.value) 
  }

// filtros para species/name

const filteredcharactersListado = charactersListado
.filter((eachCharacter) =>eachCharacter.name.toLowerCase().includes(searchName.toLowerCase()))




  return (
    <div>
      <header className="header">
        <h1 className="">Rick  and Morty</h1>
      </header>
      <main>
        <form className="">
          <h3>Filtrar por Personajes:</h3>
          <label className="" for="search_name">
          Nombre:
          <input className="" 
          type="text" name="" 
          id="search_name" 
          value={searchName}
          onInput={handleSearchName}/>
        </label>
        <label className="" for="">
         Especie:
          <select className="" name="" id="" value={searchSpecies} onChange={handleSearchSpecies}>
            <option value="all">Todos</option>
            <option value="Humana">Humana</option>
            <option value="Alien">Alien</option>
            
          </select>
        </label>
          <section className="">
            <CharacterList
            charactersListadO = {filteredcharactersListado}
            />

          </section>

        </form>
      </main>
    </div>
  );
};

export default App;


