import dogi1 from '../assets/dogi1.png'
import dogi2 from '../assets/dogi2.png'
import dogi3 from '../assets/dogi3.png'
import login1 from '../assets/login1.png'
import login2 from '../assets/login2.png'
import login3 from '../assets/login3.png'
import ip from '../assets/ip.png'
import ip2 from '../assets/ip2.png'
import ip3 from '../assets/ip3.png'
import frenchie from '../assets/frenchie.png'
import frenchie1 from '../assets/frenchie1.png'
import frenchie2 from '../assets/frenchie2.png'
import alexa1 from '../assets/Screenshot 2024-01-04 152009.png'
import alexa2 from '../assets/Screenshot 2024-01-04 152029.png'
import alexa3 from '../assets/Screenshot 2024-01-04 152120.png'
import us22 from '../assets/us22.png'
import us1 from '../assets/us1.png'
import { FaDog, FaPeopleArrows, FaWifi, FaCat, FaHome } from "react-icons/fa";
import { Projects } from '../Project/Projects'

export const GroupProyects = () => {
    return <>

        <h2 id='proyectos' className="text-center block mt-24 text-5xl leading-tight font-medium text-gray hover:underline cursor-pointer">Proyectos</h2>

        <p className="mt-4 text-slate-950 text-center text-base">Todo lo que puedes <span className="text-pink-300 hover:text-pink-800">imaginar,</span>lo podrás <span className="text-pink-300 hover:text-pink-800">programar</span></p>


        <Projects
            title={<>Dogi <FaDog /></>}
            description={"Somos una empresa con más de 30 años de experiencia, nos dedicamos especialmente al adiestramiento de perros desde cachorros hasta adultos"}
            img={dogi1}
            img2={dogi2}
            img3={dogi3}
            id={"dogi"}
            url={"https://6578d3cfd10a990008d2863e--sunny-tapioca-828ecd.netlify.app/"}
        />
        <Projects
            title={<>Smart Home <FaHome /></>}
            description={"MS una APP creada con la finalidad de poder entregar presupuestos en PDF de manera rápida y fácil, agregango al carro de compras los artículos, para asi poder obtener nuestro presupuesto a la fecha correspondiente del día."}
            img={alexa1}
            img2={alexa2}
            img3={alexa3}
            id={"alexa"}
            url={"https://659e0a0ff353370008ede441--delightful-kashata-0f75cc.netlify.app/"}
        />
        <Projects
            title={<>Working Frenchie <FaPeopleArrows /></>}
            description={"Working Frenchie una aplicación de base de datos, dónde se pueden registrar usuarios, se ve el listado de personas registradas, cumple la función de editar cualquier información que se requiera cambiar, eliminar y actualizar.  "}
            img={login1}
            img2={login2}
            img3={login3}
            id={"frenchie"}
            url={'https://659ea2c2ea575c0008f2de68--tourmaline-banoffee-9b4784.netlify.app/'}
        />
        <Projects
            title={<>Dirección IP <FaWifi /></>}
            description={"Tratar de conseguir tu IP puede resultar ser un problema, con Dirección IP lo obtienes con un solo click. Más alla de solo conseguir tu IP obtienes datos importantes entre ellos la ubicación."}
            img={ip}
            img2={ip2}
            img3={ip3}
            id={"Ip"}
            url={'https://659ea254083747000826430d--benevolent-starship-c97bf0.netlify.app/'}
        />
        <Projects
            title={<>Frenchie Lovers <FaCat /></>}
            description={"Frenchie Lovers es una APP de tienda de mascotas, en la página principal encontramos su ubicación, podemos agregar al carrito, eliminar y completar la compra de manera online. "}
            img={frenchie}
            img2={frenchie1}
            img3={frenchie2}
            id={"Frenchie"}
            url={'https://659e0c12bf3e5500085f9406--incandescent-madeleine-0b9172.netlify.app/'}
        />

        <Projects
            title={<>Usuario IP <FaHome /></>}
            description={"Tratar de conseguir tu IP puede resultar ser un problema, con Dirección IP lo obtienes con un solo click."}
            img={us1}
            img2={us22}
            url={"https://659e0dc699eb910008ea0726--zesty-salamander-23a516.netlify.app/"}

            id={"Us"}
        />
    </>

}