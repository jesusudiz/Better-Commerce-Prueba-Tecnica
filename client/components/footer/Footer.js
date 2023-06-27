
import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-green-200 text-black p-4 border-t    border-gray-200  w-full">
            <div className="container mx-auto text-center ">
                <p className="text-sm text-black">
                    &copy; {new Date().getFullYear()} Rick and Morty
                </p>
                <div className="flex justify-center mt-4 gap-2
                ">
                    <a
                        href="https://github.com/jesusudiz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black" 
                    >
                        <FaGithub />

                    </a>
                    <a className="text-black" 
                        href="https://www.linkedin.com/in/udiz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />

                    </a>
                    <a href="mailto:jesusgabrieludiz@gmail.com" className="text-black ">
                        <FaEnvelope   />
                    </a>
                </div>
            </div>
        </footer>
    )
};

