// eslint-disable-next-line no-unused-vars
import React from 'react'

import './FlippedCard.css'

// eslint-disable-next-line react/prop-types
const FlippedCard = ({id, funct, objKey}) => {
  
  return (
    <div className='flipped-card' id={id} onClick={() => funct(objKey)}>
      <h1 className='card-mimic'>?</h1>
    </div>
  )
}

export default FlippedCard