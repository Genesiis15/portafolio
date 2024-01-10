import { Navbar } from './Navbar/Navbar'
import { Inicio } from './Inicio/Inicio'
import { Proyectos } from './Proyectos/Proyectos'
import { GroupProyects } from './GroupProyects/GroupProyects'
import { Sobremi } from './Sobremi/Sobremi'
import { EmailForm } from './Contacto/Contacto'
import { Footer } from './Footer/Footer'
import './App.css'

function App() {


  return (
    <div className=''>
      <Navbar />
      <Inicio />
      <GroupProyects />
      <Proyectos />
      <Sobremi />
      < EmailForm />
      <Footer />
    </div>
  )
}

export default App
