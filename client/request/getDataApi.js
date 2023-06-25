export const getCharacters = async (currentPage) => {
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
  