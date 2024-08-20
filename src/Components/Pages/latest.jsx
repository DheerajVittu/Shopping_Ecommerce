import React from 'react'
import Navbar from '../Navbar/Navbar'
import banner_kids from '../Assets/banner_kids.png'
import mens_banner from '../Assets/banner_mens.png'
import womens_banner from '../Assets/banner_women.png'
import { Link } from 'react-router-dom'
import Footer from '../Footer/fotter'

const Latest = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Link to='/kids'><a href=''><img src={banner_kids}alt='kids_bannner'/></a></Link>
        </div>
        <div>
            <Link to='/mens'><a href=''><img src={mens_banner} alt='mens banner'/></a></Link>
        </div>
        <div>
            <Link to='/womens'><a href=''><img src={womens_banner} alt='womens banner'/></a></Link>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )

}

export default Latest