import React from 'react'
import './Booktile.css';
import { useLocation } from 'react-router'

function NewBookTile(props) {
  const location = useLocation();
  console.log({ location, props })
  console.log(location.state);
  return (
    <div>

      <div className='contain'>
        <h3 className='heading'>{location.state.title}</h3>
        <br></br>
        <img className='img-book' src={location.state.imgscr} />
        <br></br>
        <p>{location.state.description}</p>
      </div>
    </div>
  )
}

export default NewBookTile
