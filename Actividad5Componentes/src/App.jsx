import Navbar from './assets/components/Nav.jsx'
import BtnPrimary from './assets/components/BtnPrimary.jsx'
import BtnSecondary from './assets/components/BtnSecondary.jsx'
import BtnMinimal from './assets/components/BtnMinimal.jsx'
import CardImage from './assets/components/Card.jsx'
import Alert from './assets/components/Alert.jsx'
import Badges from './assets/components/Badges.jsx'
import Acordeon from './assets/components/Acordeon.jsx'

import ImgCard from './assets/img/tarjeta1.avif'

import './App.css'


//IMAGENES
import Menu from './assets/img/menu.svg'

function App() {
  

  return (
    <>
    <div className="container-fluid p-0">
      <div className="row nav me-0">
        <div className="container">
          <Navbar
          menu={Menu}
          opcion1="Inicio"
          opcion2="Nosotros"
          opcion3="Servicios"
          opcion4="Proyectos"
          opcion5="Blog"
          opcion6="Contacto"
          />  
        </div>
      </div>
      <div className="row me-0">
        <div className="container d-flex gap-5">
          <div className="col-2 mt-3 d-grid gap-3 align-items-start">
            <h2 className='mt-4'>Botones</h2>
            <BtnPrimary text="BtnPrimary"/>
            <BtnSecondary text="BtnSecondary" />
            <BtnMinimal text="BtnDeshabilitado" /> 
          </div>
          <div className="col-5 mt-3">
            <h2 className='mt-4'>Tarjeta de presentacion</h2>
            <CardImage
            img={ImgCard}
            title="Tarjeta de presentacion"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet voluptates ab accusantium praesentium natus ipsum tenetur exercitationem magnam officia? Animi"
            />
          </div>
          <div className="col-5 mt-3">
            <h2 className='mt-4'>Tarjeta de presentacion</h2>
            <CardImage
            img={ImgCard}
            title="Tarjeta de presentacion"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet voluptates ab accusantium praesentium natus ipsum tenetur exercitationem magnam officia? Animi"
            />
          </div>
        </div>
      </div>
      <div className="row me-0">
        <div className="container d-flex gap-5">
          <div className="col-4 mt-3">
            <h2 className='mt-5'>Alertas</h2>
            <Alert/>
          </div>
          <div className="col-3 mt-3">
            <h2 className='mt-5'>Badges</h2>
            <Badges/>
          </div>
          <div className="col-5 mt-3">
            <h2 className="mt-5">Acordeon</h2>
            <Acordeon/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
