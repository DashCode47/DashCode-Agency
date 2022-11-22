import React from "react";
import "./Services.css";
import { MdDesignServices } from "react-icons/md";
import { BsTerminal } from "react-icons/bs";
import { SiMarketo } from "react-icons/si";
const Services = () => {
  return (
    <div className="services-container" id="Services">
      <div className="srv-title">Nuestros servicios </div>
      <div className="srv-title">te proveen:</div>
      <div className="type-services-container">
        <div className="services">
          <MdDesignServices size={55} color="white" />
          <h1>Diseno</h1>
          <p>
            La cara visible y usable del proyecto, una parte vital para atraer
            usuarios a la aplicación y aumentar las descargas. Cuando recibe el
            visto bueno del cliente, empezamos a trabajar los elementos
            multimedia, hacemos tests de usabilidad, creamos gráficos,
            prototipos y todo lo necesario para tener la aplicación a punto.
          </p>
        </div>
        <div className="services">
          <BsTerminal size={55} color="white" />
          <h1>Desarrollo</h1>
          <p>
            De la teoría a la acción. Implementamos funcionalidades para que la
            aplicación móvil funcione correctamente. Pensamos en el rendimiento,
            seguimos estándares de accesibilidad. Esos que nos servirán después
            para definir una lista de tareas a desarrollar por el equipo de
            programación. Te mostramos cada paso hasta completarlo.
          </p>
        </div>
        <div className="services">
          <SiMarketo size={55} color="white" />
          <h1>Mantenimiento</h1>
          <p>
            Un mal mantenimiento es igual al no funcionamiento de la aplicación
            en algunos dispositivos. Como empresa de desarrollo de aplicaciones,
            aseguramos que el sistema está actualizado y que funciona
            correctamente, lo que incluye: corrección de errores, mejora de la
            funcionalidad, garantía de que la aplicación se adapta a los cambios
            en el sistema operativo, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
