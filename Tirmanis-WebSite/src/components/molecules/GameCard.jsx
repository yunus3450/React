import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ href, src, alt, logoSrc, logoAlt }) => (
  <div className="col-sm-4 col-10 custom-col">
    <Link to={href}>
      <img src={src} alt={alt} className="img-fluid" />
    </Link>
    <div className="text-center mt-3">
      <img src={logoSrc} alt={logoAlt} className="img-fluiid mb-2" />
      <div className="d-flex justify-content-center align-items-center">
        <span>Turnuvaları Görüntüle</span>
        <img src='assets/img/icons/long-arrow-right.svg' alt="Arrow" />
      </div>
    </div>
  </div>
);

export default GameCard;
