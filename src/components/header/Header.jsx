import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi';
import './Header.css';
import OutsideClickHandler from 'react-outside-click-handler';
const Header = () => {
  const handleOutsideClick=()=>{
    setMenuOpened(false);
  }
  const[menuOpened,setMenuOpened]  = useState(false);
  const getMenuStyles =(menuOpened)=>{
    if(document.documentElement.clientWidth <= 850){
      return{
        right: !menuOpened && '-100%'
      }
    }
    
  }
  return (
    <section className='h-wrapper'>
<div className="flexCenter paddings innerWidth h-container">
  <img src = "logo.png"/>
  <OutsideClickHandler onOutsideClick={handleOutsideClick}>
  <div className="flexCenter h-menu" style = {getMenuStyles(menuOpened)}>
    <a href="#Resedincies">Residencies</a>
   <a href="#Value">Our Value</a>
   <a href="#Contact">Contact Us</a>
    <a href="#GetStarted">Get Started</a>
   <button className='button'><a href="">Contact</a></button>
    
  </div>
  </OutsideClickHandler>
  <div className="menu-icon">
  <BiMenuAltRight size = {30} onClick={()=>{setMenuOpened((prev)=>!prev)}}/>
</div>
</div>

    </section>
   
  )
}

export default Header
