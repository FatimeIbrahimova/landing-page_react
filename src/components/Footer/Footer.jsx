import React from 'react'
import Logo from "./images/footerlogo.svg"
import "./Footer.css"
import facebook from "./images/facebook.svg"
import twitter from "./images/twitter.svg"
import instagram from "./images/instagram.svg"

const Footer = () => {
  return (
    <>
  <div className='footer'>
  <div className='footer-top'>
     <div>
       <img src={Logo} alt="logo"/>
     </div>
     <div>
        <h2>Menu</h2>
        <ul className='list'>
            <li>About</li>
            <li>Sercives</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
     </div>
     <div>
        <h2>Service</h2>
        <ul className='list'>
            <li>Planning</li>
            <li>Managment</li>
            <li>Strategy</li>
            <li>Market</li>
        </ul>
     </div>
     <div>
         <ul style={{display:"flex",marginRight:20}} className="footer-icon">
            <li><img src={facebook} alt="facebook"/></li>
            <li><img src={twitter} alt="twitter"/></li>
            <li><img src={instagram} alt="instagram"/></li>
         </ul>
     </div>
   </div>
   <hr className='line'/>
            <div className='footer-bottom' style={{paddingTop:30,paddingBottom:30}}>
            <div className='footer-bottom_leftside' style={{marginLeft:50}}>
                <span>Copyright © 2022 Quizbaj. All Rights Reserved.</span>
            </div>
            <div className='footer-bottom_rightside'>
              <span style={{marginRight:30}}>Privacy Policy</span>
              <span>Terms of Use</span>
            </div>
            </div>
  </div>
    </>
  )
}

export default Footer