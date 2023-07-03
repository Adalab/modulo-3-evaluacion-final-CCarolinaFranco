//import "../styles/App.scss";
import '../styles/App.css';
import { useEffect, useState } from "react";
import fetchDataApi from "./services/Api";
import CharacterList from "./CharactersList/CharacterList";
import localStorage from "./services/localStorage.js"
import CharacterForm from './CharacterForm/CharacterForm';
import CardDetails from './CardDetails/CardDetails';
import { Routes, Route } from 'react-router-dom';
import {useLocation, matchPath} from 'react-router';





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
    );


 /// routes  para cards
const {pathname}= useLocation();
//console.log(pathname)
const routeData = matchPath('/card/:cardId', pathname);
//console.log(routeData);
const cardId = routeData !== null ? routeData.params.cardId : '';
const cardData = charactersListado.find((card)=>card.id === parseInt(cardId));
//console.log(cardData)
//console.log(cardId)

 

  //return del App
  return (
    <div>
      <header className="header">
        <h1 className="">Rick  and Morty</h1>
      </header>
      <main>

        <Routes>
          <Route path='/' element={
            <><CharacterForm
              searchName={searchName}
              searchSpecies={searchSpecies}
              hadleLifting={hadleLifting}
            />

              <section className="">
                <CharacterList
                  charactersListadO={filteredcharactersListado}
                />
              </section>
            </>} />
          <Route
            path='/card/:cardId'
            element={<CardDetails cardData={cardData}/>} />

        </Routes>




      </main>
    </div>
  );
};

export default App;


