import React from 'react'
import './home.css'
import img1 from '../Images/medical.jpg'
import main from '../Images/main.jpg'
import img3 from '../Images/medicine/02.png'
import img4 from '../Images/medicine/04.webp'
import img5 from '../Images/medicine/05.avif'
function Home() {
  return (
    <div className='primary_body'>
      <div className='space'>
        <div className='imgtext'>
          <h1 >Online Medical</h1>
          <p>Good health is a multifaceted state of well-being that encompasses physical, mental, and social aspects of life.<p> It involves maintaining a balanced diet, regular physical activity, adequate sleep, and effective stress management. </p><p>Mental health is equally important, requiring mindfulness, emotional regulation, and healthy relationships.</p></p>
        </div>
        <div>
          <img src={main} className='mainimg' width={"100%"} />
        </div>
      </div>
      <hr color='blue' />
      <div>
        <div className='backaa'>
          <div className="row">
            <div className="card cdimg">
              <img src={main} />
              <div className="card-body">
                <p className="card-text">Medicine is not about conquering diseases and death, but about the
                  alleviation of suffering, minimising harm, smoothing the painful journey of man to the
                  grave.</p>
              </div>
            </div>


            <div className="card cdimg">
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">The practice of medicine is an art, not a trade; a calling, not a business;
                  a calling in which your heart will be exercised equally with your head.</p>
              </div>
            </div>


            <div className="card cdimg">
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">The person who takes medicine must recover twice, once from the disease and
                  once from the medicine.</p>
              </div>
            </div>

            <div className="card cdimg">
              <img src={img5} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">The highest ideal of cure is the speedy, gentle, and enduring restoration
                  of health by the most trustworthy and least harmful way.</p>
              </div>
            </div>

          </div>
        </div>






      </div>
      
    </div>
  )
}

export default Home
