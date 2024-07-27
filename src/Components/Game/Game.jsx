// eslint-disable-next-line no-unused-vars
import {React, useState, useEffect} from 'react'
import './Game.css'
import FlippedCard from '../FlippedCard/FlippedCard'
import Card from '../Card/Card';

// eslint-disable-next-line react/prop-types
const Game = ({assetsCard}) => {
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

  const [boardGame, setBoardGame] = useState(false)

  

  const handleClick = (objKey) => {
    
    cardStatus[objKey] ? cardStatus[objKey] = false : cardStatus[objKey] = true;     
    
    setCardStatus( prev => ({
      ...prev,
      objKey: !cardStatus[objKey]})
    );
    
    const arrStatusCard = Object.values(cardStatus);

    if (arrStatusCard) changeBoardType(arrStatusCard)

    /*console.log('=============')
    console.log(`mimic array for values key: ${arrStatusCard.includes(true)}`)
    console.log('=============')
    console.log(cardStatus);
    console.log('=============')
    console.log(`clicked card ${objKey} is ${cardStatus[objKey]}`)
    console.log('=============')
    */
  }

  const changeBoardType = (verifyBoardLogic) => {
    const boardGame = document.querySelectorAll('.game-square');
    if (verifyBoardLogic.includes(true)) {
      boardGame.forEach(() => {
          if (verifyBoardLogic.includes(true)) {
            setBoardGame(true);
          } else {
            setBoardGame(false);
          }
      });
    } else {
      boardGame.forEach(() => {
        setBoardGame(false);
      })
    }
  }


  
  const assetsValues = Object.values(assetsCard);
  
  return (
    
    
    <div className={`game-square ${boardGame ? 'board-selected' : ''}`}>
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
          /> 
          : 
          <FlippedCard
          id={value.id}
          funct={handleClick}
          tittle={value.tittle}
          objKey={Object.keys(cardStatus)[key]}
          boardGameStatus = {boardGame}
          altClass={boardGame ? true : false}
          key={key}/>)
        })}
    </div>
  )
}

export default Game