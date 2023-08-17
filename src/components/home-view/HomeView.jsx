import React from 'react'
import './HomeView.css'
import bg from '../../assets/ecom-bg.avif'
import NavButton from '../buttons/nav-button/NavButton'

const HomeView = () => {
  return (
    <div className='homeview' style={{ backgroundImage: `url(${bg})` }}>
        
        <div className="homeview__content container">
            
            <h3>Bring AI to Your Data</h3>
            <h1>Dell generative Ai solutions</h1>
            <NavButton> learn more</NavButton>
        </div>
    </div>
  )
}

export default HomeView