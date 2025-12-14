📦 Componentes UI – Vite + React + Bootstrap 5

Este proyecto contiene una colección de componentes reutilizables construidos con Vite + React + Bootstrap 5, siguiendo un enfoque SDE (Simple, Dinámico y Elegante).

Los componentes están pensados para ser:

Reutilizables

Responsivos

Fáciles de mantener

Adaptables a proyectos académicos y profesionales

🚀 Tecnologías utilizadas

Vite

React

Bootstrap 5

Instalación
npm install bootstrap bootstrap-icons

En el archivo main.jsx:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

🧭 Navbar

Componente de navegación con menú desplegable controlado por useState.

Características

Menú responsive

Apertura y cierre dinámico

Uso
<!-- <Navbar
menu={iconMenu}
opcion1="Inicio"
opcion2="Nosotros"
opcion3="Servicios"
opcion4="Proyectos"
opcion5="Blog"
opcion6="Contacto"
/> -->

Botones

Conjunto de botones SDE con estilos Bootstrap.

Tipos incluidos

Botón primario

Botón secundario (outline)

Botón minimal
Botón deshabilitado

Badges

Badges para estados, contadores y etiquetas.

Usos comunes

Estados (Activo, Pendiente, Error)

Contadores

Etiquetas informativas

Cards (Tarjetas de contenido)

Tarjetas para mostrar información de forma clara y visual.

Tipos disponibles

Card básica

Card con imagen

Card informativa con icono

Alertas

Alertas Bootstrap para mostrar mensajes al usuario.

Tipos incluidos

Success

Info

Warning


Accordion (Acordeón)

Componente para mostrar contenido colapsable, ideal para FAQs.

Implementación

Controlado con React (useState)

Sin dependencias JS externas

