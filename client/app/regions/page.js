"use client"
import React, { useEffect, useState } from "react";
import { TiLocationOutline} from "react-icons/ti";


const Regions = () => {
    const [allRegions, setAllRegions] = useState([]);
    const [selectedRegionId, setSelectedRegionId] = useState(null);
    const [comunas, setComunas] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3001/api/regions");
          if (response.ok) {
            const data = await response.json();
            setAllRegions(data);
          } else {
            throw new Error("Error en la petición");
          }
        } catch (error) {
          console.error("Error al obtener las regiones:", error);
        }
      };
  
      fetchData();
    }, []);
  
    const buscarComunas = async (regionId) => {
      try {
        const response = await fetch(`http://localhost:3001/api/communes/${regionId}`);
        if (response.ok) {
          const data = await response.json();
          setComunas(data);
          setSelectedRegionId(regionId);
        } else {
          throw new Error("Error durante la petición");
        }
      } catch (error) {
        console.error("Error al obtener las comunas:", error);
      }
    };
  
    return (
      <section className="grid-cols-1 justify-center items-center  w-full h-screen pt-8 bg-black">
        <div className="flex flex-col items-center w-full "> 
        <select
                    value={selectedRegionId}
                    onChange={(e) => buscarComunas(e.target.value)}
                    className="font-bold w-max mt-4 mb-6"
                >
                    <option value="">Selecciona una región</option>
                    {allRegions.map((reg) => (
                        <option key={reg.id} value={reg.id}>{reg.region}</option>
                    ))}
                </select>
       
        <div className="grid grid-cols-3 justify-center">
          {comunas.map((co) => (
            <div className="flex mr-1">
           < TiLocationOutline className="text-green-500"/>
            <span key={co.id}>{co.commune}</span>
            </div>
          ))}
        </div>
        </div>
      </section>
    );
  };
export default Regions;
