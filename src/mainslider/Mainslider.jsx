import React from 'react'
import Slider from 'react-slick';
import slider1 from '../Assets/Images/slider1.png'
import slider2 from '../Assets/Images/slider2.png'
import slider3 from '../Assets/Images/slider3.png'
import slider4 from '../Assets/Images/slider4.png'




export default function Mainslider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500
  };
  return (
    <>
    <div className='mt-4 pt-4 mx-0 '>
    <Slider {...settings}>
      
      <img src={slider1} alt="Slider1"/>
      <img src={slider2} alt="Slider1"/>      
      <img src={slider3} alt="Slider1"/>
      <img src={slider4} alt="Slider1"/>

      
    </Slider>
    </div>
    </>
  )
}
