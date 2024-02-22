import React from 'react'
import Logo from '../../assets/images/Steam-logo.png'
import Image1 from '../../assets/images/Call-to-arms.webp'
import Image2 from '../../assets/images/2024-service.png'
import "../../styles/Home.css";
import "../../styles/HomeMediaQueries.css";
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const Home = () => {
  return (
    <div className='home-container'>
      <div className="left-content">
        <h1>Counter-Strike</h1>
        <h2 className='right-2'>2</h2>
        <div className="about">
        <h2>About</h2>
        <p>Counter-Strike: 2 is a multiplayer first-person 
          shooter developed by Valve and Hidden Path Entertainment.
          It is the fifth game in the Counter-Strike series.
        </p>
        <Link to="https://store.steampowered.com/app/730/CounterStrike_2/" className="play-now-box">
  <img src={Logo} alt="Steam-Logo" />
 <span>Play on steam</span>
</Link>

      
      <div className="right-content">
      
      <div className="box-players">
      <Link to="../livestreams">
          <button>
            23,565,733
            <br />
            unique players last month
          </button>
          </Link> 
          </div>
         
          </div>
          </div>
          <div className="box-news">
          <div className="box-news-header">
        <h2>Latest updates</h2>
        
          <div className='view-updates'>
          <Link to="../updates" onClick={scrollToTop}>
          <button>View all updates</button>
          </Link>
          </div>
        
        </div>
          <div className="news">
          <div className="news-center-left-box">
            <img src={ Image1 } alt="A Call to Arms" />
              <p>February 7, 2024</p>
              <h2>A Call to Arms</h2>
              <p>Arms Race has returned! Grab your guns and brace
                yourself for a chaotic race to the top.
                Get two kills with each weapon to reach the final... </p>
                < Link to="../updates" onClick={scrollToTop}>
                  <button className='read-more'>READ MORE &rarr;</button>
              </Link>

          </div>
          

          <div className="news-right-box">
          <div className="news-center-right-box">
          <img src= { Image2 } alt="2024 Service Medal" />
              <p>December 14, 2023</p>
              <h2>2024 Service Medal</h2>
              <p>Celebrate your time in CS2 with the all-new 2024
                Service Medal, available starting January 1st!
                To get your service medal, earn XP by... </p>
                <Link to="../updates" onClick={scrollToTop}>
                  <button className='read-more'>READ MORE &rarr;</button>
              </Link>
              </div>
          </div>
          </div>
          <div className="hr"><hr /></div>
        
      </div>
      </div>
      
      <div className="video-container">
        <div className="video-box">
          <h2>
            CS-2 Trailer
          </h2>
          <iframe
            title="CS-2 Trailer"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nSE38xjMLqE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Home
