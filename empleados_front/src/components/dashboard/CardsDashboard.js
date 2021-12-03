import React from "react";
import Card from "./CardDashboard";

import image1 from '../assets/img/1 (4).jpeg';
import image2 from '../assets/img/1 (5).jpeg';
import image3 from '../assets/img/1 (7).jpeg';


const cards = [
  {
    id: 1,
    title: "Clientes",
    image: image1,
    url: "/clientes",
  },
  {
    id: 2,
    title: "Proveedores",
    image: image2,
    url: "/proveedores",
  },
  {
    id: 3,
    title: "Empleados",
    image: image3,
    url: "/empleados",
  }
];

function CardsDashboard() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-3" key={id}>
            <Card imageSource={image} title={title}  url={url}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsDashboard;
