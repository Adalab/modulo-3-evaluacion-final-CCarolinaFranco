function fetchDataApi  () {
return(
    fetch('https://rickandmortyapi.com/api/character')
     .then(response => response.json())
     .then(data => {
      console.log(data.results)
    

const cleanData = data.results.map((objectApi)=>{
  return{
    id: objectApi.id,
    name: objectApi.name,
    image: objectApi.image,
    species: objectApi.species,
  }
});
console.log (cleanData); 
return cleanData; 
}))


};

export default fetchDataApi;