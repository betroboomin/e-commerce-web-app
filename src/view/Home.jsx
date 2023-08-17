import React from 'react';
import '../css/Home.css'
import HomeView from '../components/home-view/HomeView';
import Technologies from '../components/technologies/Technologies';

const Home = () => {
  return (
    <div className='home'>
      <HomeView />
      <h1 className='heading'>explore dell technologies</h1>
      <Technologies />
            
    </div>
  );
}

export default Home;