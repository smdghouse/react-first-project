import React from 'react'
import { Carousel } from 'react-responsive-carousel' 
import img1 from "../img/3.jpg"
import img2 from "../img/4.jpg"
import   "react-responsive-carousel/lib/styles/carousel.min.css"

function Service() {
  return (
    <div className='service'>
      <Carousel 
      infiniteLoop
      autoPlay
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      interval={2300}

      >
      
        <div>
          <img src={img1} alt="item1"/>
          <p className='legend'>we provide best service</p>
        </div>
        <div>
          <img src={img2} />
          <p className='legend'>we provide best service</p>
        </div>
      </Carousel >
    </div>

  )
}

export default Service