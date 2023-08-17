import React from 'react';
import '../css/Home.css'
import HomeView from '../components/home-view/HomeView';
import Technologies from '../components/technologies/Technologies';
import HomeViewSection from '../components/home-view-section/HomeViewSection';
import HomeViewSectionI from '../components/home-view-section/HomeViewSection-i';
import HomeSupport from '../components/home-support/HomeSupport';


// images
import backtoschool from '../assets/dellimagebacktoschool.avif'
import monitor from '../assets/dellhomesectionmonitor.avif'
import HomeViewSectionSmall from '../components/home-view-section/homeviewsmall';
import laptop from '../assets/dellhomelaptop.avif'
import smallmonitor from '../assets/dellhomedesktop.avif'
import { WidthFull } from '@mui/icons-material';


const Home = () => {
  return (
    <div className='home'>
      <HomeView />
      <h1 className='heading'>explore dell technologies</h1>
      <Technologies />

      <HomeViewSection 
      src={backtoschool} 
      h3='back to school' 
      h1='invest in your game. invest in others'
      p="with each eligible purchase, Dell will donate to UNICEF to help connect 
      schools to the internet. Includes accidental damage service to protect your pc
      "
      link1="PC Deals"
      link2="Learn More"
      />
      
      <HomeViewSectionI />
      <HomeSupport />
      <HomeViewSection 
      src={monitor} 
      h3='gaming monitors' 
      h1='best-in-Class visuals'
      p="Dell Rewards members receive an additional 2,500 points back on all monitors until August 25th."
      link1="Shop now"
      link2="learn more"
      />
      <div className='whitebg '>
        <div className="whitebg-content container">
        <HomeViewSectionSmall 
      src={laptop} 
      h3='Ultimate gaming' 
      h1='Limited-Time Savings on Gaming'
      p="Reach new worlds with savings on epic PCs."
      link1="PC Deals"
      />
      <div className='line'></div>
      <HomeViewSectionSmall 
      src={smallmonitor} 
      h3='Ultimate gaming' 
      h1='Legendary performance. Limited-time savings.'
      p="Power hungry? Devour savings on Alienware monitors & accessories."
      link1="Monitor Deals"
      />
        </div>
      
      </div>
      
            
    </div>
  );
}

export default Home;
