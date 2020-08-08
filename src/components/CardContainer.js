import React, { useState } from 'react';
import './CardContainer.css';

// images
import {
  rootBeer1,
  rootBeer2,
  rootBeer3,
  rootBeer4,
  rootBeer5
} from '../images/index'

// components
import Card from './Card';

const CardContainer = () => {
  const [cardNum, setCardNum] = useState(1)


  return (
    <div className="CardContainer center-box">
        <div className="arrow-container center-box">
          <div className="arrow left"></div>
          <div className="arrow right"></div>
        </div>
      <Card imgSrc={rootBeer1}/>
      <Card imgSrc={rootBeer2}/>
      <Card imgSrc={rootBeer3}/>
      <Card imgSrc={rootBeer4}/>
      <Card imgSrc={rootBeer5}/>

 


    </div>
  );
}

export default CardContainer;