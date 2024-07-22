// eslint-disable-next-line no-unused-vars
import {React, useState, useEffect} from 'react'
import './Game.css'
import FlippedCard from '../FlippedCard/FlippedCard'
import Card from '../Card/Card';
import assets from '../../Assets/Json/assets.json';

const Game = () => {

  const [cardStatus, setCardStatus] = useState({
    card1:false,
    card2:false,
    card3:false,
    card4:false,
    card5:false,
    card6:false,
    card7:false,
    card8:false,
  });

  const handleClick = (objKey) => {

    cardStatus[objKey] ? cardStatus[objKey] = false : cardStatus[objKey] = true;     
    setCardStatus( prev => ({
      ...prev,
      objKey: !cardStatus[objKey]})
    );
  }  
 
  const assetsValues = Object.values(assets);
  return (
    <div className='game-square'>
        {assetsValues.map((value, key) => {
          return(
            Object.values(cardStatus)[key] ? <Card
            funct = {handleClick}
            image={value.image}
            bc={value.color}
            tittle={value.tittle}
            key={key} 
            objKey={Object.keys(cardStatus)[key]} 
            id={value.id}     
          /> : 
          <FlippedCard
          id={value.id}
          funct={handleClick}
          tittle={value.tittle}
          objKey={Object.keys(cardStatus)[key]}
          key={key}/>)
        })}
    </div>
  )
}

export default Game