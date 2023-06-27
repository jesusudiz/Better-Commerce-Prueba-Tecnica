export const getCharacters = async (currentPage=1) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
      if (!response.ok) {
        throw new Error('No se logró obtener los datos');
      }
      const data = await response.json();
      const formatoData = data.results.map(item => ({
        id: item.id,
        name: item.name,
        status: item.status,
        species: item.species,
        gender: item.gender,
        origin: item.origin.name,
        image: item.image,
      }));
      console.log([data.info,formatoData])
      return [data.info,formatoData];
    } catch (error) {
      console.error(`Error al obtener los datos: ${error.message}`);
      return null;
    }
  };
  
  export const getByName = async (name) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`);
      if (!response.ok) {
        throw new Error('No se logró obtener los datos');
      }
      const data = await response.json();
      const formatoData = data.results.map(item => ({
        id: item.id,
        name: item.name,
        status: item.status,
        species: item.species,
        gender: item.gender,
        origin: item.origin.name,
        image: item.image,
      }));
      console.log([data.info,formatoData])
      return [data.info,formatoData];
    } catch (error) {
      console.error(`Error al obtener los datos: ${error.message}`);
      return null;
    }
  };
  export const getByStatus = async (currentPage=1,statusName) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}&status=${statusName}`);
      if (!response.ok) {
        throw new Error('No se logró obtener los datos');
      }
      const data = await response.json();
      const formatoData = data.results.map(item => ({
        id: item.id,
        name: item.name,
        status: item.status,
        species: item.species,
        gender: item.gender,
        origin: item.origin.name,
        image: item.image,
      }));
      console.log([data.info,formatoData])
      return [data.info,formatoData];
    } catch (error) {
      console.error(`Error al obtener los datos: ${error.message}`);
      return null;
    }
  };

  export const getByGender = async (currentPage=1,genderName) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}&gender=${genderName}`);
      if (!response.ok) {
        throw new Error('No se logró obtener los datos');
      }
      const data = await response.json();
      const formatoData = data.results.map(item => ({
        id: item.id,
        name: item.name,
        status: item.status,
        species: item.species,
        gender: item.gender,
        origin: item.origin.name,
        image: item.image,
      }));
      console.log([data.info,formatoData])
      return [data.info,formatoData];
    } catch (error) {
      console.error(`Error al obtener los datos: ${error.message}`);
      return null;
    }
  };

  export const getByID = async (id) => {
    
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    
      const data = await response.json();
      const formatoData ={
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        gender: data.gender,
        origin: data.origin.name,
        image: data.image,
      };
    
      return formatoData;
  
  };
  

