import React from 'react'
import LOGO from '../../Images/LOGO1.png'
import './nav.css'
function Cartnavi({size, setShow}) {
  return (
    <div className='nav2'>
      <nav className='d-flex justify-content-between'>
        <div onClick={()=>setShow(true)} className='ImgName'>
          <img src={LOGO} width={"30px"}/>
          <span className='second_heading'>Online Medical</span>
        </div>
        <div className='cartt' onClick={()=>setShow(false)}>
        <i className="fa fa-cart-plus"></i>
        <span>{size}</span>
        </div>
      </nav>
    </div>
  )
}

export default Cartnavi
