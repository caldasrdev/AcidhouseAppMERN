import React from "react";
import Card from "./Card";

import image1 from "../../assets/img/1 (4).jpeg";
import image2 from '../../assets/img/1 (5).jpeg';
import image3 from '../../assets/img/1 (7).jpeg';
import image4 from '../../assets/img/1 (8).jpeg';
import image5 from '../../assets/img/1 (12).jpeg';
import image6 from '../../assets/img/1 (13).jpeg';
import image7 from '../../assets/img/1 (23).jpeg';
import image8 from '../../assets/img/1 (24).jpeg';

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
  {
    id: 5,
    title: "Titulo de producto 5",
    price: "$XX.XXX COP",
    text: "Descripción del producto",
    image: image5,
    url: "/product",
  },
  {
    id: 6,
    title: "Titulo de producto 6",
    price: "$XX.XXX COP",
    text: "Descripción del producto",
    image: image6,
    url: "/product",
  },
  {
    id: 7,
    title: "Titulo de producto 7",
    price: "$XX.XXX COP",
    text: "Descripción del producto",
    image: image7,
    url: "/product",
  },
  {
    id: 8,
    title: "Titulo de producto 8",
    price: "$XX.XXX COP",
    text: "Descripción del producto",
    image: image8,
    url: "/product",
  },
];

function CardsMen() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, price, text }) => (
          <div className="col-md-3" key={id}>
            <Card imageSource={image} title={title} price={price} url={url} text={text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsMen;
