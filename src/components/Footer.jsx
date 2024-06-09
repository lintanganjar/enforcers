import React from 'react'
import  '../style/Style.css'
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'

export default function Footer(){
    return (
            <div class="footer">
           <hr/>
            <div class="footer-content">
                <div class="product">
                    <p>Hak Cipta © 2023 GrihaHub</p>
                </div>
            <div class="iconsosial">
                <a href=""><img src={icon1} alt=""/></a>
                <a href=""><img src={icon2} alt=""/></a>
                <a href=""><img src={icon3} alt=""/></a>
            </div>
            <div class="footernav">
                <a href="">Kebijakan Privasi</a>
                <a href="">Cookie</a>
                <a href="">Syarat dan Ketentuan</a>   
            </div>
            </div>
            </div>
        
    )
}