export const Proyectos = () => {
    return <>
        <div className="mt-5 md:mt-6 max-w-md mx-auto bg-white rounded-xl  overflow-hidden md:max-w-2xl">


            <div className="p-8">
                <h2 id="habilidades" className="text-center block mt-1 text-5xl leading-tight font-medium text-gray hover:underline cursor-pointer">Habilidades</h2>
                <div className="flex gap-4 justify-center items-center mt-5  flex-wrap">
                    <div className="relative group ">
                        <img alt="Git" className="rounded cursor-pointer w-20" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />

                        <span className="absolute text-center right-0 top-0 mb w-10 rounded-md shadow-lg text-sm text-white bg-slate-950 ring-1 ring-black ring-opacity-5 p-2 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                            Git
                        </span>
                    </div>
                    <div className="relative group">
                        <img alt="Html" className="rounded cursor-pointer w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" />

                        <span className="absolute text-center right-0 top-0 mb w-12 rounded-md shadow-lg text-sm text-white bg-slate-950 ring-1 ring-black ring-opacity-5 p-2 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                            Html
                        </span>
                    </div>
                    <div className="relative group">
                        <img alt="Css" className="rounded cursor-pointer w-20" src="https://cdn-icons-png.flaticon.com/512/919/919826.png" />

                        <span className="absolute text-center right-0 top-0 mb w-10 rounded-md shadow-lg text-sm text-white bg-slate-950 ring-1 ring-black ring-opacity-5 p-2 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                            Css
                        </span>
                    </div>
                    <div className="relative group">
                        <img alt="JS" className="rounded cursor-pointer w-20" src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" />

                        <span className="absolute text-center right-0 top-0 mb w-15 rounded-md shadow-lg text-sm text-white bg-slate-950 ring-1 ring-black ring-opacity-5 p-2 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                            JavaScript
                        </span>
                    </div>
                    <div className="relative group">
                        <img alt="GitHub" className="rounded cursor-pointer w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />

                        <span className="absolute text-center right-0 top-0 mb w-12 rounded-md shadow-lg text-sm text-white bg-slate-950 ring-1 ring-black ring-opacity-5 p-2 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                            React
                        </span>
                    </div>
                    <div className="relative group">
                        <img alt="NodeJs" className="rounded cursor-pointer w-20" src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" />

                        <span className="absolute text-center right-0 top-0 mb w-15 rounded-md shadow-lg text-sm text-white bg-slate-950 ring-1 ring-black ring-opacity-5 p-2 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                            NodeJs
                        </span>
                    </div>
                    <div className="relative group">
                        <img alt="Figma" className="rounded cursor-pointer w-20" src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" />

                        <span className="absolute text-center right-0 top-0 mb w-15 rounded-md shadow-lg text-sm text-white bg-slate-950 ring-1 ring-black ring-opacity-5 p-2 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                            Figma
                        </span>
                    </div>

                    <div className="relative group">
                        <img alt="GitHub" className="rounded cursor-pointer w-20" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />

                        <span className="absolute text-center right-0 top-0 mb w-15 rounded-md shadow-lg text-sm text-white bg-slate-950 ring-1 ring-black ring-opacity-5 p-2 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                            GitHub
                        </span>
                    </div>
                    <div className="relative group">
                        <img alt="GitHub" className="rounded cursor-pointer w-20" src="data:image/png;base64,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" />

                        <span className="absolute text-center right-0 top-0 mb w-15 rounded-md shadow-lg text-sm text-white bg-slate-950 ring-1 ring-black ring-opacity-5 p-2 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                            Postman
                        </span>
                    </div>
                    <div className="relative group">
                        <img alt="GitHub" className="rounded cursor-pointer w-20" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png" />

                        <span className="absolute text-center right-0 top-0 mb w-15 rounded-md shadow-lg text-sm text-white bg-slate-950 ring-1 ring-black ring-opacity-5 p-2 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                            Bootstrap
                        </span>
                    </div>

                    <div className="relative group">
                        <img alt="GitHub" className="rounded cursor-pointer w-20" src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png" />

                        <span className="absolute text-center right-0 top-0 mb w-15 rounded-md shadow-lg text-sm text-white bg-slate-950 ring-1 ring-black ring-opacity-5 p-2 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                            Tailwind
                        </span>
                    </div>
                    <div className="relative group">
                        <img alt="GitHub" className="rounded cursor-pointer w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" />

                        <span className="absolute text-center right-0 top-0 mb w-15 rounded-md shadow-lg text-sm text-white bg-slate-950 ring-1 ring-black ring-opacity-5 p-2 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                            Visual Studio Code
                        </span>
                    </div>


                </div>
            </div>
        </div>

    </>
}