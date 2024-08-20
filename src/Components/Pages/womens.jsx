import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Card from './card.jsx'
import product_1 from '../Assets/product_1.png'
import product_2 from '../Assets/product_2.png'
import product_5 from '../Assets/product_5.png'
import product_6 from '../Assets/product_6.png'
import product_9 from '../Assets/product_9.png'
import product_10 from '../Assets/product_10.png'
import Footer from '../Footer/fotter.jsx'


const Womens = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='parent-div'>
            <Card
               name='Wollen Jacket'
               img={product_1}
               des='Girls Winter Wollen Jacket'
               price='1999'
               rating='4.5'
               color='Green,Blue,Black'
               sizes='S,M,L'
            /> 
            <Card
               name='Plain T-Shirt'
               img={product_2}
               des='Women Simple T-Shirt'
               price='499'
               rating='4.2'
               color='Pink,Purple'
               sizes='M,L'
            />
            <Card
               name='Designed T-Shirt'
               img={product_5}
               des='Women Party Wear T-Shirt'
               price='999'
               rating='4.0'
               color='White,Pink,Blue'
               sizes='M,L,XL,XXL'

            />
            <Card
               name='Wollen T-Shirt'
               img={product_6}
               des='Womens Winter T-Shirt'
               price='899'
               rating='3.5'
               color='Yellow,Orange'
               sizes='M,L,XL'
            />
            <Card
               name='Punjabi Dress'
               img={product_9}
               des='Women Formal Punjabi Kurtha'
               price='699'
               rating='4.2'
               color='White,Black,Red'
               sizes='M,L,XL,XXL,XXXL'
            />
            <Card
               name='Full Hands Hoodie'
               img={product_10}
               des='Women Solid Red Hoodie'
               price='1499'
               rating='4.2'
               color='Red'
               sizes='M,L,XL'
            />  
        </div> 
        <div>
         <Footer/>
         </div>  
    </div>
  )
}

export default Womens
