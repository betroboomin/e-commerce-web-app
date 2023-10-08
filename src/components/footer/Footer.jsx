import React from 'react';
import "./Footer.css"
import facebook from '../../assets/socials-image/facebook.png'
import instagram from '../../assets/socials-image/instagram.png'
import github from '../../assets/socials-image/github.png'
import twitter from '../../assets/socials-image/twitter.png'
import mail from '../../assets/socials-image/google mail.png'

const Footer = () => {
  return (
    <div className='footer'>
      
     <div className="footer-content container">
     <div className="footer-box footer-socials">
          <span className="logo-title">
    <span className='green-color'>B</span>ETRO Technologies
          </span>
          <div className="socials-avater">
            <img src={facebook} alt="" className="facebook" />
            <img src={instagram} alt="" className="instagram" />
            <img src={github} alt="" className="github" />
            <img src={twitter} alt="" className="twitter" />
            <img src={mail} alt="" className="mail" />
          </div>
        <span className="textbox">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum accusamus, quisquam corporis distinctio temporibus pariatur odit modi ab! Fugiat repellendus laborum 
        </span>
          
      </div>
      <div className="footer-box footer-links">
       <div className="link-sec column1">
        hello
       </div>
       <div className="link-sec column2">

       </div>
       <div className="link-sec column3">

       </div>
      </div>
     </div>
      
      
      </div>
  );
}

export default Footer;