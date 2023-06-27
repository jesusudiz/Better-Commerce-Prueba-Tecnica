'use client'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "../pagination/Pagination";
import { Card } from "../card/Card";

export function CharacterList({ filter, actions }) {
    const allCharacters = useSelector((state) => state.characters.personaje);
    const page = useSelector((state) => state.characters.currentPage);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(page);
    const getInfo = filter;
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
        <main className="grid justify-center pt-12 bg-black h-5/6 style={{ minHeight: '700px', maxHeight: '100%' }}">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4">
                {allCharacters?.map((character) => (
                    <Card key={character.id} character={character} />

                ))}
            </section>
            <Pagination onPageChange={handlePageChange} />

        </main>

    );
}
