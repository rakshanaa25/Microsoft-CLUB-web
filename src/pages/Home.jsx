
import React from 'react';
import Hero from '../components/Hero';
import ClubIntro from '../components/ClubIntro';
import '../styles/home.css';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <ClubIntro />
    </main>
  );
};

export default Home;
