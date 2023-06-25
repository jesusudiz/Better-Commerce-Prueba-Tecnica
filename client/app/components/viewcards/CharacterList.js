'use client'
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Pagination} from "@components/pagination/Pagination";

export  function CharacterList({filter,actions}) {
  const allCharacters = useSelector((state) => state.characters.personaje);
  const page = useSelector((state) => state.characters.currentPage);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(page);
  const getInfo= filter;
  const reduxAction = actions;
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characters = await getInfo(currentPage);
        dispatch(reduxAction(characters));
      } catch (error) {
        console.error(`Error al obtener los personajes: ${error.message}`);
      }
    };

    fetchData();
  }, [currentPage, dispatch]);

  return (
    <div>
      {allCharacters?.map((character) => (
        <div key={character.id}>
          <span>{character.name}</span>
        </div>
      ))}
      <Pagination onPageChange={handlePageChange} />
    </div>
  );
}
