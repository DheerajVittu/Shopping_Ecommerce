import React from 'react'
import './pages.css'
import product_14 from '../Assets/product_14.png'
import product_17 from '../Assets/product_17.png'
import product_18 from '../Assets/product_18.png'
import product_22 from '../Assets/product_22.png'
import product_21 from '../Assets/product_21.png'
import product_19 from '../Assets/product_19.png'

import Navbar from '../Navbar/Navbar.jsx'
import Card from './card.jsx'
import Footer from '../Footer/fotter.jsx'

const Mens = () => {
  return (
    <div className="men-div">
      <div>
         <Navbar/>
      </div>
        <div className='parent-div'>
            <Card
            id="p1"
               name='Denim Jacket'
               img={product_17}
               des='Boys Self Design Casual Jacket'
               price='1999'
               rating='4.5'
               color='Green,Blue'
               sizes='S,M,L,XL'
            /> 
            <Card
            id="p2"
               name='Leather Jacket'
               img={product_14}
               des='Men Solid Bomber Jacket'
               price='999'
               rating='4.2'
               color='White,Black'
               sizes='M,L'
            />
            <Card
            id="p3"
               name='Sports Jacket'
               img={product_18}
               des='Men Colorblock Sports Jacket'
               price='799'
               rating='4.0'
               color='White,Black,Blue'
               sizes='M,L,XL,XXL'

            />
            <Card
            id="p4"
               name='Hoodie'
               img={product_22}
               des='Mens Cotton Hoodie'
               price='499'
               rating='3.5'
               color='White,Black,Blue,Red'
               sizes='M,L,XL'
            />
            <Card
            id="p5"
               name='Rain Coat'
               img={product_21}
               des='Colorblock Men Raincoat'
               price='999'
               rating='4.2'
               color='White,Black,Red'
               sizes='M,L,XL,XXL,XXXL'
            />
            <Card
            id="p6"
               name='Full Hands T-Shirt'
               img={product_19}
               des='Men Solid Zip Neck Polyester T-Shirt'
               price='1499'
               rating='4.2'
               color='White,Grey'
               sizes='M,L,XL'
            />  
        </div>   
        <div>
           <Footer/>
         </div> 
    </div>
  )
}

export default Mens
