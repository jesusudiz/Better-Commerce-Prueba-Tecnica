'use client'
import { useState, useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi2';
import { getByGender, getByStatus, getCharacters } from '@request/getDataApi.js';
import { useSelector, useDispatch } from 'react-redux';
import { filterByEstado, filterByGenero, resetPage, addPersonajes, deleteFilter } from '@redux/charactersSlice';

const status = ['Alive', 'Dead', 'Unknown'];
const gender = ['Female', 'Male', 'Genderless', 'Unknown'];

export function MenuList() {
  const currentPage= useSelector((state) => state.currentPages);
  const dispatch = useDispatch();
  const [list, setList] = useState(false);
  const [list2, setList2] = useState(false);
  
  const[charatersFilter,setcharactersFilter]=useState("")
 


  const openList = () => {
    setList(!list);
  };

  const openList2 = () => {
    setList2(!list2);
  };

  const handleFilterStatus = async (page=1,status) => {
   // try {
      const data = await getByStatus(page, status);
      dispatch(filterByEstado(data));
      setcharactersFilter(status)

    // } catch (error) {
    //   console.error(`Error al obtener los personajes filtrados por estado: ${error.message}`);
    // }
  };

  const handleFilterGender = async (page=1,gender) => {
    //try {
      const data = await getByGender(page, gender);
      dispatch(filterByGenero(data));
      setcharactersFilter(gender)

    // } catch (error) {
    //   console.error(`Error al obtener los personajes filtrados por género: ${error.message}`);
    // }
  };

  return (
    <div className="flex flex-col justify-center gap-2 p-2 cursor-pointer">
      <div className="flex justify-between items-center w-full mb-4" onClick={openList}>
        <span className="mr-24 font-medium text-gray-700" >Estado</span>
        <HiOutlinePlus className="" />
      </div>

      {list &&
        status.map((statusItem) => (
          <div
            key={statusItem}
            className="grid grid-cols-2 items-center gap-2"
            onClick={() => handleFilterStatus(currentPage,statusItem)}
          >
            <span className="text-gray-500 hover:text-green-300">{statusItem}</span>
          </div>
        ))}

      <div className="flex justify-between items-center w-full mb-4 mt-2" onClick={openList2}>
        <span className="mr-24 font-medium text-gray-700 ">Género</span>
        <HiOutlinePlus />
      </div>

      {list2 &&
        gender.map((genderItem) => (
          <div
            key={genderItem}
            className="grid grid-cols-2 items-center gap-2"
            onClick={() => handleFilterGender(currentPage,genderItem)}
          >
            <span className="text-gray-500  hover:text-green-300">{genderItem}</span>
          </div>
        ))}
    </div>
  );
}
