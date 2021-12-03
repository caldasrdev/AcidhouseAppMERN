import React from "react";
import PropTypes from "prop-types";
import "./card.css";

function Card({ imageSource, title, text, url, price }) {
  return (
    <div className="card text-center bg-ligth animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h3 className="card-title">{title}</h3>
        <h3 className="card-price">{price}</h3>
        <p className="card-text text-secondary">
          {text}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          Acceder
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  price: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
