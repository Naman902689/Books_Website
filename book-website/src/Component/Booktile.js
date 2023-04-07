import React from 'react'
import './Booktile.css';
import { useNavigate } from 'react-router';

function Booktile(props) {
  const navi = useNavigate();
  console.log(props)
  function handleClick(){
    navi("/NewBookTile", {state : {title :props.title,imgscr:props.imgscr,description:props.des}});
    

  }
  return (
    <div className='book' onClick={() => handleClick()}>
      <div className='card' style={{width: '18rem',marginTop:'10px',padding:'10px'}}>
      
      <div>
      <h3 className='heading'>{props.title}</h3>
        <img className='container-fluid img-book' src={props.imgscr} />
        <div className='container-fluid'>
          <p>{props.des}</p>
        </div>
      </div>
      </div>
        


    </div>
  )
}

export default Booktile

