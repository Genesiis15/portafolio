import { FaGithub, FaFacebook } from "react-icons/fa";
import React from 'react';

import cv from '../assets/cv.pdf'

export const Footer = () => {
    return <>
        <div className="">


            <footer className="bg-gray-200 text-black mt-4 p-4">
                <div className="container mx-auto text-center">
                    <div className="flex justify-center space-x-4 mt-4 hidden sm:block md:block">
                        <a href="#inicio" className=" text-black hover:bg-pink-200 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Inicio</a>
                        <a href="#proyectos" className="text-black  hover:bg-pink-200 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Proyectos</a>
                        <a href="#habilidades" className=" text-black hover:bg-pink-200 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Habilidades</a>
                        <a href="#sobre mi" className="text-black  hover:bg-pink-200 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sobre mí</a>
                        <a href="#contacto" className=" text-black hover:bg-pink-200 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contacto</a>
                    </div>
                    <div className="flex justify-content-center items-center gap-4">
                        <a href={cv} download='Genesis-Rojas' className="my-5 px-4 py-1 text-sm  font-semibold rounded-full border border-pink-300 hover:text-white hover:bg-pink-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Dercargar CV  </a>
                        <a href="https://github.com/Genesiis15" target="_blank" rel="noreferrer">
                            <FaGithub size={40} className=" cursor-pointer text-lg hover:text-white hover:text-pink-300 hover:border-transparent" />
                        </a>
                        <FaFacebook size={40} className=" cursor-pointer hover:text-white hover:text-pink-300 hover:border-transparent" />
                    </div>
                    <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div >
    </>
}