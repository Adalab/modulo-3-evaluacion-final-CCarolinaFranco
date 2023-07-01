//import "../styles/App.scss";
import '../styles/App.css';
import { useEffect, useState } from "react";
import fetchDataApi from "./services/Api";
import CharacterList from "./CharactersList/CharacterList";
import localStorage from "./services/localStorage.js"
import CharacterForm from './CharacterForm/CharacterForm';
function App() {

  const [charactersListado, setCharactersListado] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpecies, setSearchSpecies] = useState('all');


  ///localStorage.get ('CharactersData',[]) 
  //if(localStorage.getItem('CharactersData')=== null ){
  //  }





  useEffect(() => {

    fetchDataApi()
      .then((cleanData) => {
        setCharactersListado(cleanData);
        localStorage.set('CharactersData', cleanData)
      })
  }, []);



  ///funcion lifting los filters

  const hadleLifting = (param1, value) => {
    console.log(param1, value)
    if (param1 === 'name') setSearchName(value)
    else if (param1 === 'species') setSearchSpecies(value)

  }

  //const handleSearchName = value => setSearchName(value)

  //const handleSearchSpecies = value => setSearchName(value)

  // filtros para species/name

  const filteredcharactersListado = charactersListado
    .filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchName.toLowerCase()))
    .filter((eachSpecie) => {
      if (searchSpecies === 'all') {
        return true
      } else {

        return eachSpecie.species === searchSpecies;
      }

    }

    )
  //return del App
  return (
    <div>
      <header className="header">
        <h1 className="">Rick  and Morty</h1>
      </header>
      <main>
        <CharacterForm
          searchName={searchName}
          searchSpecies={searchSpecies}
          hadleLifting={hadleLifting}
        />

        <section className="">
          <CharacterList
            charactersListadO={filteredcharactersListado}
          />
        </section>


      </main>
    </div>
  );
};

export default App;


