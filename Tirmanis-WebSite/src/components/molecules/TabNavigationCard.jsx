import React from 'react';
import TabButton from '../atoms/TabButton';

const TabNavigationCard = ({  handleTabChange }) => {
  return (
    <ul className="nav nav-tabs" >
      <TabButton
        game="valo"
        onClick={handleTabChange}
        imgSrc="assets/img/valorant-tab-logo.svg"
        altText="Valorant Logo"
      />
      <TabButton
        game="lol"
        onClick={handleTabChange}
        imgSrc="assets/img/lol-tab-logo.svg"
        altText="LoL Logo"
      />
      <TabButton
        game="wr"
        onClick={handleTabChange}
        imgSrc="assets/img/wild-rift-tab-logo.svg"
        altText="Wild Rift Logo"
      />
    </ul>
  );
};

export default TabNavigationCard;
