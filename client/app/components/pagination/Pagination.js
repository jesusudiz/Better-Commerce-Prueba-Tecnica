'use client'

// import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPersonajes, nextPage, backPage, } from "@redux/charactersSlice";
import { getCharacters } from "@request/getDataApi";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'




export function Pagination({onPageChange}) {
    const page = useSelector((state) => state.characters.currentPages);
    const total = useSelector((state) => state.characters.totalCharacters);
    const elementosPorpage = useSelector(state => state.characters.totalPorPagina);
    const dispatch = useDispatch();

    const indiceInicial = (page - 1) * elementosPorpage + 1;
    const indiceFinal = Math.min(page * elementosPorpage, total);



    const handleNextPage = async () => {
        dispatch(nextPage(page+1))
        onPageChange(page+1)    
    };

    const handlePreviousPage = async () => {
        dispatch(backPage(page-1))
        onPageChange(page-1)
    };

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-1 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={page === total}
                    className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${page === total ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                        }`}
                >
                    Next
                </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{indiceInicial}</span> to <span className="font-medium">{indiceFinal}</span> of
                        <span className="font-medium">{total}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="pagination">
                        <button
                            onClick={handlePreviousPage}
                            disabled={page === 1}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>

                        <button
                            onClick={handleNextPage}
                            disabled={page === total}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
