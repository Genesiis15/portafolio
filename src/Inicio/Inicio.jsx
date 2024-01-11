import { FaGithub, FaLinkedin } from "react-icons/fa";
import gene from '../assets/gene.png'
import cv from '../assets/cv.pdf'
export const Inicio = () => {
    return <>

        <div id="inicio" className=" mt-24  max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:shrink-0 bg-gray-200">
                    <img className="mx-auto max-w-[15rem]  w-full object-cover md:h-full md:w-48" src={gene} alt="Modern building architecture" />
                </div>
                <div className="p-8">
                    <a href="#" className="block mt-1 text-5xl leading-tight font-medium text-gray hover:underline">Génesis Rojas</a>
                    <a href="#" className="block mt-1 text-4xl leading-tight font-medium text-pink-300 hover:underline">Front end Developer</a>
                    <p className="mt-4 text-slate-950 text-base leading-7"> Apasionada en todo lo que hago, dispuesta a enfrentar desafíos, amante de todo lo que indique <span className="text-pink-300">transformación digital</span> y <spam className="text-pink-300">accesibilidad</spam> para lograr una verdadera inclusión. La versatilidad es lo que me ha impulsado para adaptarme a los entornos de trabajos.</p>

                    <div className="flex items-center gap-4">
                        <a href={cv} download='Genesis-Rojas' className="my-5 px-4 py-1 text-sm  font-semibold rounded-full border border-pink-300 hover:text-white hover:bg-pink-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Dercargar CV  </a>
                        <a href="https://github.com/Genesiis15" target="_blank" rel="noreferrer">
                            <FaGithub size={40} className=" cursor-pointer text-lg hover:text-white hover:text-pink-300 hover:border-transparent" />
                        </a>
                        <a href="https://www.linkedin.com/in/genesis-rojas-a185012a9/" target="_blank" rel="noreferrer" >
                            <FaLinkedin size={40} className=" cursor-pointer hover:text-white hover:text-pink-300 hover:border-transparent" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}