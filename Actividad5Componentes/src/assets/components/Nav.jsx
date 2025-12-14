
import '../Css/Menu.css'
import { useState } from 'react'

const Navbar = ({ menu, opcion1, opcion2, opcion3, opcion4, opcion5, opcion6}) => {
    const [open, setOpen] = useState(false);
  return (
    <nav >
      <h1 className="text-center">
        Desarrollo <br /> Sistemas Informáticos
      </h1>
      <img src={menu} alt="" onClick={() => setOpen(!open)} />
      <ul className={`nav-list ${open ? "open" : ""}`}>
        <li className="items" onClick={() => setOpen(!open)}><a href="#inicio">{opcion1}</a></li>
        <li className="items" onClick={() => setOpen(!open)}><a href="#nosotros">{opcion2}</a></li>
        <li className="items" onClick={() => setOpen(!open)}><a href="#servicios">{opcion3}</a></li>
        <li className="items" onClick={() => setOpen(!open)}><a href="#proyectos">{opcion4}</a></li>
        <li className="items" onClick={() => setOpen(!open)}><a href="#blog">{opcion5}</a></li>
        <li className="items" onClick={() => setOpen(!open)}><a href="#contacto">{opcion6}</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
