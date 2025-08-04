import React from 'react'
import './med.css'
import ggg from '../Images/ggg.jpg'
import { Link, useNavigate } from 'react-router-dom'
function Medicine() {
  var navigate = useNavigate()
  const showerr = () => {
    alert("Please Login to Purchase")
    navigate('/signup')
  }
  return (
    <div>
      <>
        <div className='back'></div>
        <h1 className='heading'>Please Login to Purchase</h1>
        <h3 className='heading1'><Link to="/signup" className='heading2' >Click Here to Signup</Link></h3>
      </>
      < div className='box'>
        <div class="card" style={{ width: "225px" }} >
          <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/MN/CG/LV/136059498/dolo-650-tablet-500x500.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Bolo 650</h5>
            <p class="card-text">Bolo 650 Tablet is a medicine used to relieve pain and reduce fever</p>
            <a href="#" onClick={showerr} class="btn btn-primary">Add </a>
          </div>
        </div>


        <div class="card" style={{ width: "225px" }} >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLWFNJfah2ixSmu12obqXIJsMaivF2dC37Q&s" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Tontel</h5>
            <p class="card-text">Tontel 10 Tablet is a prescription medicine used for asthma prevention</p>
            <a href="#" onClick={showerr} class="btn btn-primary">Add to cart</a>
          </div>
        </div>

        <div class="card" style={{ width: "225px" }} >
          <img src="https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/p52wcgabuwsrs2jqms5p.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">MhestOn Cold</h5>
            <p class="card-text">Montel 10 Tablet is a prescription medicine used for asthma prevention</p>
            <a href="#" onClick={showerr} class="btn btn-primary">Add to cart</a>
          </div>
        </div>


        <div class="card" style={{ width: "225px" }} >
          <img src="https://www.kauverymeds.com/uploads/product/main/1676545958_49186_0.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Kscoril</h5>
            <p class="card-text">Kscoril is a combination medicine of guaifenesin, and levosalbutamol.</p>
            <a href="#" onClick={showerr} class="btn btn-primary">Add to cart</a>
          </div>
        </div>


        <div class="card" style={{ width: "225px" }} >
          <img src="https://himalayawellness.in/cdn/shop/products/Septillin-Tablets_1024x1024.jpg?v=1645079529" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Limalaya Septilin</h5>
            <p class="card-text">This product has a quantity limit.This product is non-returnable.</p>
            <a href="#" onClick={showerr} class="btn btn-primary">Add to cart</a>
          </div>
        </div>


        <div class="card" style={{ width: "225px" }} >
          <img src={ggg} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Good Mecine</h5>
            <p class="card-text">This product has a quantity limit.This product is non-returnable.</p>
            <a href="#" onClick={showerr} class="btn btn-primary">Add to cart</a>
          </div>
        </div>


      </ div>
    </div>
  )
}

export default Medicine
