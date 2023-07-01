//import "../styles/App.scss";
import '../styles/App.css';
import { useEffect, useState } from "react";
import fetchDataApi from "./services/Api";
import CharacterList from "./CharactersList/CharacterList";
import localStorage from "./services/localStorage.js"
function App() {

  const [charactersListado, setCharactersListado] = useState( []); 
  
  {/*localStorage.get ('CharactersData',[]) 
 if(localStorage.getItem('CharactersData')=== null ){
      
    }*/}

  useEffect(() => {
   
    fetchDataApi()
      .then((cleanData) => {
        setCharactersListado(cleanData);
        localStorage.set ('CharactersData',cleanData )
      })
  }, []);



  return (
    <div>
      <header className="header">
        <h1 className="">Rick Morty</h1>
      </header>
      <main>
        <form className="">
          <h3>Filtrar por Personajes:</h3>
          <section className="">
            <CharacterList
            charactersListadO = {charactersListado}
            />

          </section>

        </form>
      </main>
    </div>
  );
};

export default App;


