import './Navbar.css';
import { useState } from 'react';
import { FcMenu } from "react-icons/fc";
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <nav className="bg-white  dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-center sm:justify-between  mx-auto p-4">
                <a href="/" className="flex items-center space-x-3">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white pt-3">GR</span>
                </a>
                <button
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="sr-only">Open main menu</span>
                    <FcMenu />
                </button>
                <div className={`${isOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg bg-gray-50 md:flex-row md:space-x-8">
                        <li><a href="#" className=" text-black hover:bg-pink-200 hover:text-white block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Inicio</a></li>
                        <li><a href="#proyectos" className="text-black hover:bg-pink-200 hover:text-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Proyectos</a></li>
                        <li><a href="#habilidades" className="text-black hover:bg-pink-200 hover:text-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Habilidades</a></li>
                        <li><a href="#sobre mi" className="text-black hover:bg-pink-200 hover:text-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sobre mí</a></li>
                        <li><a href="#contacto" className="text-black hover:bg-pink-200 hover:text-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
}