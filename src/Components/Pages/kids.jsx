import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import product_25 from '../Assets/product_25.png'
import product_28 from '../Assets/product_28.png'
import product_30 from '../Assets/product_30.png'
import product_31 from '../Assets/product_31.png'
import product_29 from '../Assets/product_29.png'
import product_35 from '../Assets/product_35.png'
import Card from './card.jsx'
import Footer from '../Footer/fotter.jsx'
const Kids = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='parent-div'>
            <Card
               name='Cotton Hoodie'
               img={product_25}
               des='Hoodie for Kids'
               price='499'
               rating='4.5'
               color='Blue,Red'
               sizes='5yrs to 8yrs'
            /> 
            <Card
               name='Full Hands Plain T-Shirt'
               img={product_28}
               des='Kids Full Handed T-Shirt'
               price='699'
               rating='4.2'
               color='Green,Purple'
               sizes='8yrs to 12yrs'
            />
            <Card
               name='Wollen Jacket'
               img={product_30}
               des='Winter Wollen Jacket for Kids'
               price='899'
               rating='4.0'
               color='Green,Yellow'
               sizes='5yrs to 12yrs'

            />
            <Card
               name='Denim Jacket'
               img={product_31}
               des='Kids Party Wear Denim Jacket'
               price='999'
               rating='3.5'
               color='Blue,Green'
               sizes='8yrs to 12yrs'
            />
            <Card
               name='Bomber Jacket'
               img={product_29}
               des='Kids Bomber Jacket'
               price='699'
               rating='4.2'
               color='White,Black,Green'
               sizes='5yrs to 8yrs'
            />
            <Card
               name='Sports Jacket'
               img={product_35}
               des='Polyster Sports Jacket'
               price='399'
               rating='4.2'
               color='Red,Grey'
               sizes='8yrs to 12yrs'
            />  
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Kids
