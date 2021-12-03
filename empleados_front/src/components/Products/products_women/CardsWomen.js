import React from "react";
import Card from "./Card";

import image1 from "../../assets/img/1 (11).jpeg";
import image2 from '../../assets/img/1 (15).jpeg'
import image3 from '../../assets/img/1 (18).jpeg'
import image4 from '../../assets/img/1 (20).jpeg'

const cards = [
  {
    id: 1,
    title: "Titulo de producto 1",
    price: "$XX.XXX COP",
    text: "Descripción del producto",
    image: image1,
    url: "/product",
  },
  {
    id: 2,
    title: "Titulo de producto 2",
    price: "$XX.XXX COP",
    text: "Descripción del producto",
    image: image2,
    url: "/product",
  },
  {
    id: 3,
    title: "Titulo de producto 3",
    price: "$XX.XXX COP",
    text: "Descripción del producto",
    image: image3,
    url: "/product",
  },
  {
    id: 4,
    title: "Titulo de producto 4",
    price: "$XX.XXX COP",
    text: "Descripción del producto",
    image: image4,
    url: "/product",
  },
];

function CardsWomen() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, text, price }) => (
          <div className="col-md-3" key={id}>
            <Card imageSource={image} title={title} url={url} text={text} price={price} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsWomen;
