import React, { useEffect, useState } from 'react'
import './cart.css'

function Cart({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState(0)
  const [dis,setDis]=useState([])
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.price * item.amount
    })
    setPrice(ans)
  }

  const proceed = () => {
   setDis("Purchased Sucessfully "+price+" RS")
  }
  const close =()=>{
    setDis('')
  }
  const handelRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id)
    setCart(arr)
  }

  useEffect(() => {
    handlePrice();
  })
  return (
    <div>

      <artical>
        {
          cart.map((item) => {
            return (
              <div className='Second_div'>
                <div key={item.id} className='first_div'>
                  <img src={item.url} />
                  <p>{item.name}</p>
                  <p>Price {item.price} Rs</p>
                  <hr></hr>

                  <div>
                    <button onClick={() => handleChange(item, +1)} className='add'>+</button>
                    <button className='values'>{item.amount}</button>
                    <button onClick={() => { handleChange(item, -1) }} className='sub'>-</button>
                  </div>
                  <div>
                    <button onClick={() => handelRemove(item.id)} className='remove'>Remove</button>
                  </div>
                </div>
              </ div>
            )
          })
        }
        <div className='wrap'>

          <span >Total price of Your cart</span>
          <span >RS- {price}</span>
          <button onClick={proceed}>Proceed To Buy </button>

        </div>
      </artical>
      <div class="dailog" onClick={close}>{dis}</div>
    </div>
  )
}

export default Cart
