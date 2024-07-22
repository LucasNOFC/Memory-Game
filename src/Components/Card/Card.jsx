// eslint-disable-next-line no-unused-vars
import {React, useState} from 'react'
import './Card.css'

// eslint-disable-next-line react/prop-types
const Card = ({bc, image, tittle, funct, objKey}) => {

  const [cardClass, setCardClass] = useState('');

  const handleMouseEnter = () => {

    

  }

  return (
    <div className='card'
    onClick={() => funct(objKey)} 
    onMouseEnter= {handleMouseEnter}>
        <div className="card-top" style={{backgroundColor: `#${bc}`}}>
          <img src={image} alt='' className='card-img'/>
        </div>
        <div className="card-bottom">
          <h5 className='card-name' style={{color: `#${bc}`}} >{tittle}</h5>
        </div>
    </div>
  )
}

export default Card