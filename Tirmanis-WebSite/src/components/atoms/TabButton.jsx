import React from 'react';
const TabButton = ({ game, onClick, imgSrc, altText }) => {

    return (
        <li className="nav-item flex-fill text-center">
          <a
            href={`#${game}`}
            onClick={() => onClick(game)}
          >
            <img src={imgSrc} alt={altText} />
          </a>
        </li>
      );
    };

    export default TabButton;
