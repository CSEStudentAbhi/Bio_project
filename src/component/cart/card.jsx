import React from 'react';
import './card.css'

const Cards = ({item, handleClick}) => {
    const {name, des, price, url} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={url} alt="Image" />
        </div>
        <div className="details">
            <p>{name}</p>
            <p>{des}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards