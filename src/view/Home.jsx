import React from 'react';
import '../css/Home.css'
import HomeView from '../components/home-view/HomeView';
import Technologies from '../components/technologies/Technologies';
import HomeViewSection from '../components/home-view-section/HomeViewSection';
import HomeViewSectionI from '../components/home-view-section/HomeViewSection-i';
import HomeSupport from '../components/home-support/HomeSupport';

const Home = () => {
  return (
    <div className='home'>
      <HomeView />
      <h1 className='heading'>explore dell technologies</h1>
      <Technologies />
      <HomeViewSection />
      <HomeViewSectionI />
      <HomeSupport />
            
    </div>
  );
}

export default Home;
