import React from 'react'
import './Home.css';
import Product from './Product';
import Banner from'./Banner';
function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <Banner/>
        <div className='home_row'>
        <Product className='products_item'
             id="12321341"
            title="
            Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1' (2.8 cm) AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity..."
            price={1799.0}
            rating={5}
            image="https://i.postimg.cc/NGK7LkrN/Item1.jpg"
          />
            <Product className='products_item'
             id="49538094"
            title="boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours Playtime, Cozy Padded Earcups and Bluetooth v5.0(Buoyant Black)"
            price={899.0}
            rating={4}
            image="https://i.postimg.cc/hjSTS9R0/Item2.jpg"
          />
           <Product className='products_item'
             id="49538094"
            title="Mi Pad 5 2.5K Resolution, 120Hz Refresh Rate, Dci-P3, 27.81Cm Dolby Vision Display 6Gb Ram 128Gb Storage Quad Speaker Dolby Atmos Wi-Fi Tablet, Cosmic Gray"
            price={27999.0}
            rating={5}
            image="https://i.postimg.cc/JtwhhLBW/Item3.jpg"
          />
        </div>
        <div className='home_row'>
        <Product className='products_item'
            id="4903850"
            title="T.M. HANDICRAFTS Round Shape Stylish Decorative Table Modern Table Top"
            price={3399.0}
            rating={3}
            image="https://i.postimg.cc/QtytR58C/Item4.jpg"
          />
          <Product className='products_item'
            id="23445930"
            title="Litleo Set of 4 Mini Decorative, Home Office or Gift Wild Artificial Plant with Pot Green"
            price={284.0}
            rating={4}
            image="https://i.postimg.cc/FFwbSkyh/Item5.jpg"
          />
          <Product className='products_item'
            id="3254354345"
            title="Indianara Set of 3 Gautam Buddha MDF Art Painting (2096 FL) without glass"
            price={216.0}
            rating={5}
            image="https://i.postimg.cc/cCtHZHCm/Item6.jpg"
          />
          <Product className='products_item'
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={89999.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className='home_row'>
        <Product className='products_item'
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={28499.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product className='products_item'
            id="90829332"
            title="Life's Amazing Secrets: How to Find Balance and Purpose in Your Life | Inspirational Zen book on motivation, self-development & healthy living"
            price={153.0}
            rating={5}
            image="https://i.postimg.cc/633qjzNF/Item9.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home

