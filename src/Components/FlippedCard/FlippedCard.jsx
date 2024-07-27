// eslint-disable-next-line no-unused-vars
import {React, useState, useEffect}  from 'react'
import './FlippedCard.css'

// eslint-disable-next-line react/prop-types
const FlippedCard = ({id, funct, objKey, verifyClick = true, altClass, boardGameStatus}) => {

  const disableClick = () => {

  }

  const verifyTypeOfCard = (altClass, boardGameStatus) => {
    if ((altClass) && (boardGameStatus)) console.log("STARBOY")
  }

  console.log(altClass);

  verifyTypeOfCard(altClass, boardGameStatus);
  
  return (
    <div 
    className={`flipped-card ${altClass ? 'card-blocked' : ''}`} 
    id={id} 
    onClick={verifyClick && verifyTypeOfCard ? () => funct(objKey) : disableClick()}>
      <h1 className='card-mimic'>?</h1>
    </div>
  )
}

export default FlippedCard