import React from 'react'
import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';
import './Banner.css';
function banner() {
  return (
    <div className="relative">
    <Slider autoplay={true} autoplaySpeed={'3000'} pauseOnHover={true}>
     <div className="slide"><img
       className="home_image"
       src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
       alt=""
     /></div>
     <div className="slide"><img
       className="home_image"
       src="https://i.postimg.cc/43hHsB0t/Image1.jpg"
       alt=""
     /></div>
     <div className="slide"><img
       className="home_image"
       src="https://i.postimg.cc/qvqCZkX1/Image2.jpg"
       alt=""
     /></div>
     <div className="slide"><img
       className="home_image"
       src="https://i.postimg.cc/HsBy2J5J/Image3.jpg"
       alt=""
     /></div>
 </Slider>
 </div>
  )
}

export default banner
