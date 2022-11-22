import React from "react";
import "./Products.css";
import { MdWeb, MdOutlineDeveloperMode } from "react-icons/md";
import { GrCloudComputer } from "react-icons/gr";

import Card from "../../../Card/Card";
const Products = () => {
  const text1 =
    "Lanza tu primera aplicación o mejora la que ya tienes para ofrecer una experiencia más personalizada y orientada a tu marca.";
  const text2 =
    "Contabilidad, inventario, facturación, soporte… Puede que estas tareas no estén directamente relacionadas con tus clientes, pero son decisivas para que tu negocio funcione. Optimiza";
  const text3 =
    "Escala tu negocio con un sistema intuitivo que se ejecuta en distintos navegadores y dispositivos. Gana eficiencia y productividad. ";
  return (
    <div className="products-container" id="Nosotros">
      <Card title={"Desarrollo Android"} back={text1}>
        <MdOutlineDeveloperMode size={90} color="rgb(11, 11, 63)" />
      </Card>

      <Card title={"Desarrollo de BackOffice"} back={text2}>
        <GrCloudComputer size={90} color="rgb(11, 11, 63)" />
      </Card>

      <Card title={"Desarrollo Web"} back={text3}>
        <MdWeb size={90} color="rgb(11, 11, 63)" />
      </Card>
    </div>
  );
};

export default Products;
