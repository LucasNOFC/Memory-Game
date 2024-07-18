import React from 'react'
import './Card.css'
import gem1 from '../../Assets/Images/gem1.png'; 


const Card = () => {
  return (
    <div className='card'>
        <div className="card-top">
          <img src={gem1} alt='' className='card-img'/>
        </div>
        <div className="card-bottom">
          <h5 className='card-name'>{'Tittle Card'}</h5>
        </div>
    </div>
  )
}

export default Card