
import React from "react";
import Hero from "../components/Hero";
import ClubIntro from "../components/ClubIntro";
import "../styles/home.css";
import "../index.css";

const Home = () => {
  return (
    <main className="home-page">

      {/* Hero Section with Lighthouse Effect */}
      <div className="lighthouse">
        <Hero />
      </div>

      {/* Club Introduction Section */}
      <div className="lighthouse">
        <ClubIntro />
      </div>

    </main>
  );
};

export default Home;