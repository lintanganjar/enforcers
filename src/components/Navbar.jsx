import {Link} from 'react-router-dom';
import React from 'react';
import  '../style/Style.css'
import img from '../img/logo.svg'
import img1 from '../img/donwload.png'

function Navbar(){
    return(
        <nav class="navbar">
        <img class="navbar-logo" src={img} />
        <div class="navbar-nav">
          <ul>
            <li>
              <Link to="/" className='custom-link'>Home</Link>
            </li>
            <li>
              <Link to="/blog" className='custom-link'>Blog</Link>
            </li>
            <li>
              <Link to="/mitra" className='custom-link'>Mitra</Link>
            </li>
          </ul>
        </div>
        <div class="navbar-extra">
          <a href="">
            <img src={img1} alt="" />
          </a>
        </div>
             </nav>  
    )
}
export default Navbar