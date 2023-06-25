'use client'
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPersonajes } from "@redux/charactersSlice";
import { getCharacters } from "@request/getDataApi";
import {CharacterList} from "@components/viewcards/CharacterList";
export default function CharactersList() {
  // const allCharacters = useSelector((state) => state.characters.personaje);
  // const page = useSelector((state) => state.characters.currentPage);
  // const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(page);
const Characters = getCharacters ;
const sendAction = addPersonajes ;
  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const characters = await getCharacters(currentPage);
  //       dispatch(addPersonajes(characters));
  //     } catch (error) {
  //       console.error(`Error al obtener los personajes: ${error.message}`);
  //     }
  //   };

  //   fetchData();
  // }, [currentPage, dispatch]);

  return (
    <>
    <CharacterList  filter={Characters} actions={sendAction } />
    </>
    // <div>
    //   {allCharacters?.map((character) => (
    //     <div key={character.id}>
    //       <span>{character.name}</span>
    //     </div>
    //   ))}
    //   <Pagination onPageChange={handlePageChange} />
    //}} </div>
  );
}
