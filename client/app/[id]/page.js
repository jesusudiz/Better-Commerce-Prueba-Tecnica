
import React from "react";
import { Card } from "@components/card/Card"


const getDataByID = async (id) => {

  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  const data = await response.json();
  const formatoData = {
    id: data.id,
    name: data.name,
    status: data.status,
    species: data.species,
    gender: data.gender,
    origin: data.origin.name,
    image: data.image,
  };

  return formatoData;
}

async function Character({ params }) {
  const { id } = params;
  const character = await getDataByID(id)





  return (
    <div className="flex justify-center bg-black">
      
      <div className="grid grid-cols-1 justify-center  p-8 bg-black" style={{ minHeight: '700px', maxHeight: '100%' }}>
        <div className="flex justify-center">
          <Card character={character} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-start">

          <div className="flex flex-col justify-center gap-4">
            <span className="text-3xl">Estado </span>
            <span className="text-2xl text-green-500">{character.status}</span>
            <span className="text-3xl">Especie </span>
            <span className="text-2xl text-green-500">{character.species}</span>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <span className="text-3xl">Genero</span>
            <span className="text-2xl text-green-500">{character.gender}</span>
            <span className="text-3xl" >Origen</span>
            <span className="text-2xl text-green-500"> {character.origin}</span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Character;