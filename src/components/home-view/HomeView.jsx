import React from 'react'
import './HomeView.css'
import bg from '../../assets/dellbg.avif'
import NavButton from '../buttons/nav-button/NavButton'

const HomeView = () => {
  return (
    <div className='homeview' style={{ backgroundImage: `url(${bg})` }}>
        
        <div className="homeview__content container">
            
            <h3>AlienWare Aurora R16</h3>
            <h1>Optimised for gamers</h1>
            <div className="btn-sec">
            <NavButton> learn more</NavButton>
            <NavButton className="second-btn"> Shop now</NavButton>
            </div>
           
        </div>
    </div>
  )
}

export default HomeView