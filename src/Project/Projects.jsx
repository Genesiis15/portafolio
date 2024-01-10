

export const Projects = ({ title, description, img, img2, img3, id, url }) => {
    return (
        <div className="card mt-5 md:mt-6 max-w-md mx-auto bg-white rounded-xl  overflow-hidden md:max-w-2xl" >

            <div className="card-body">
                <div className='container'>
                    <h5 className="card-title font-bold flex gap-2 text-orange-300 text-sm md:text-4xl items-center text-blue">{title} </h5>
                </div>
                <div id={id} className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        <div className="carousel-item active h-80">
                            <img src={img} className="d-block object-contain w-full h-full" alt="..." />
                        </div>
                        <div className="carousel-item  h-80">
                            <img src={img2} className="d-block object-contain w-full h-full" alt="..." />
                        </div>
                        {img3 && <div className="carousel-item  h-80">
                            <img src={img3} className="d-block object-contain w-full h-full" alt="..." />
                        </div>}
                    </div>
                    <button className="carousel-control-prev   "
                        type="button "
                        data-bs-target={`#${id}`}
                        data-bs-slide="prev ">
                        <span className="carousel-control-prev-icon  text-bg-secondary p-3 opacity-25" aria-hidden="true"></span>
                        <span className="visually-hidden    ">Previous</span>
                    </button>
                    <button className="carousel-control-next " type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon text-bg-secondary p-3 opacity-25" aria-hidden="true"></span>
                        <span className="visually-hidden ">Next</span>
                    </button>
                </div>
                <p className="card-text mt-4 text-slate-950 text-base leading-7 mb-5">
                    {description}
                </p>
                <a target="_blank" rel="noreferrer" href={url} className="my-5 px-4 py-1 text-sm  font-semibold rounded-full border border-pink-300 hover:text-pink-200 hover:bg-pink-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Ver proyecto</a>
            </div>
        </div>
    )
}
