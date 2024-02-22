import React from 'react'
import Image1 from '../../assets/images/Immediate-authentic.png';
import Image2 from '../../assets/images/Social-interactive.png';
import Image3 from '../../assets/images/Connect-grow.png';
import Image4 from '../../assets/images/CS2-live-background.jpg';
import "../../styles/Livestreams.css";
import "../../styles/LivestreamsMediaQueries.css";
import { Link } from 'react-router-dom';
const Livestreams = () => {
  return (
    <div className="livestreams-container">
    <div className="watch-live-container">  
    <div className="livestreams-background">
    <img src={ Image4 } alt="Immediate and authentic" />
    </div>
    <div className="watch-live-content">
      <h1>Counter-Strike 2 Legacy</h1>
     <br /> 
    <p>A powerful way to connect
    with your community in real time</p>
    <br />
    <Link to='https://www.twitch.tv/directory/category/counter-strike' target="_blank">
      <button>Watch Live Now&rarr;</button>
      </Link>
      </div>
    </div>

    <div className="experience-container-header">Live Stream Experience</div>
    <div className="experience-container">
      <div className="immediate-father">
      
      <div className="experience-container-image">
      <img src={ Image1 } alt="Immediate and authentic" />
      </div>
    <div className="experience-container-subheader">
    Immediate and authentic
    </div>
    <div className="experience-container-paragraph">
    Experience the adrenaline rush as you dive straight
    into the heart of CS2 action. These livestreams bring you
    authentic gameplay and instant immersion,
    keeping you on the edge of your seat.
    </div>
    </div>

    <div className="social-father">
    <div className="experience-container-image">
      <img src={ Image2 } alt="Social and interactive" />
      </div>
    <div className="experience-container-subheader">
    Social and interactive
    </div>
    <div className="experience-container-paragraph">
    Join vibrant community of CS2 enthusiasts for a 
    livestream experience like no other.
    Engage in lively discussions,
    team up with fellow viewers,
    and compete in friendly matches for bragging rights.
    </div>
    </div>

    <div className="connect-father">
    <div className="experience-container-image">
      <img src={ Image3 } alt="Connect and grow" />
      </div>
    <div className="experience-container-subheader">
    Connect and grow
    </div>
    <div className="experience-container-paragraph">
    Level up your CS2 experience! Join the 
    Live streaming community of dedicated players 
    to enhance skills and connect with like-minded 
    enthusiasts. Let&apos;s dominate in thrilling matches!
    </div>
    </div>

    </div>
    </div>
  )
}

export default Livestreams
