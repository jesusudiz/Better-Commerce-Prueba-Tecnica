'use client'

import React, { useState, Fragment } from "react";
import { FaSearch } from "react-icons/fa";
import { TiThLarge } from "react-icons/ti";
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { filterByName, resetPage, addPersonajes } from "@redux/charactersSlice";
import { getByName, getCharacters } from "@request/getDataApi";
import { useDispatch } from "react-redux";
import { MenuList } from "../dropdown/MenuList";
import Link from "next/link";





export function Sidebar() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("")
    const dispatch = useDispatch();

    const menuClose = () => {
        setOpen(false);
    };

    const menuOpen = () => {
        setOpen(true);
    };
    const viewAll = async () => {
        dispatch(resetPage(1));
        const character = await getCharacters(1)
        dispatch(addPersonajes(character));
    }
    const searchName = async (e) => {
        e.preventDefault();
        const character = await getByName(input);
        if (!character) return;
        dispatch(filterByName(character));
    };


    return (

        <nav className=" flex flex-grow bg-green-200 shadow sticky top-0 z-10 w-full ">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className=" w-20 h-20 relative  sm:top-1">
                    <img className="w-full object-contain " src="images/logo1.png" alt="logo de rick and morty" />
                </div>



                <form onSubmit={searchName} className="relative top-0 flex items-center">
                    <label className="flex items-center bg-white  border borde-8 border-gray-300 rounded-md  px-6 py-2  hover:border-gray-900">
                        <input
                            type="text"
                            value={input}
                            placeholder="Buscar..."
                            className="outline-none bg-white flex-grow"
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <FaSearch className="ml-2 text-gray-600" />
                    </label>
                </form>




                <div className="sm:block" onClick={menuOpen}>
                    <TiThLarge className="text-gray-900 h-full cursor-pointer hover:text-green-300 text-2xl " />
                </div>
                {
                    open &&
                    <Transition.Root show={open} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={setOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-hidden">
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                                            enterFrom="translate-x-full"
                                            enterTo="translate-x-0"
                                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                                            leaveFrom="translate-x-0"
                                            leaveTo="translate-x-full"
                                        >
                                            <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-in-out duration-500"
                                                    enterFrom="opacity-0"
                                                    enterTo="opacity-100"
                                                    leave="ease-in-out duration-500"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                        <button
                                                            type="button"
                                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                            onClick={menuClose}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </Transition.Child>
                                                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                                    <div className="flex justify-center px-4 sm:px-6">
                                                        <div className="absolute w-20 h-20 overflow-hidden ">
                                                            <img className="w-full object-contain " src="images/logo2.png" alt="logo de rick and morty" />
                                                        </div>
                                                    </div>
                                                    <div className="relative mt-8 flex-1 px-4 sm:px-6 ">
                                                        <div className="flex flex-col items-center gap-6 mt-16">
                                                            <Link href="/">
                                                                <span className="bg-gray-900 rounded-md w-max p-2 px-10 text-green-300 mt-10" onClick={viewAll}>Ver Todo</span>
                                                            </Link>
                                                            <Link href="/regions">
                                                                <span className="bg-gray-900 rounded-md w-max p-2 px-10  text-green-300 mb-4">
                                                                    Prueba API
                                                                </span>
                                                            </Link>
                                                            <MenuList />


                                                        </div>


                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root>
                }
            </div>

        </nav>


    );
}
