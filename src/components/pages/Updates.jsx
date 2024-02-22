import React from 'react'
import Image1 from '../../assets/images/Call-to-arms.webp'
import Image2 from '../../assets/images/2024-service.png'
import Image3 from '../../assets/images/The-maps-workshop.png'
import Image4 from '../../assets/images/Welcome-home.png'
import Image5 from '../../assets/images/Major-champions.png'
import Image6 from '../../assets/images/Grand-finale.png'
import Image7 from '../../assets/images/Champions-stage.png'
import Image8 from '../../assets/images/The-legends.png'
import Image9 from '../../assets/images/Paris-major.png'
import Image10 from '../../assets/images/Anubis-collection.png'
import Image11 from '../../assets/images/Oh-my.png'
import Image12 from '../../assets/images/Your-time.jpg'
import "../../styles/Updates.css";
import "../../styles/UpdatesMediaQueries.css";
import { Link } from 'react-router-dom';

const Updates = () => {
  return (
    <div className="container">
      <div className='top-HR'><hr /></div>
      <div className="container-child">
        <div className="container-image">
          <img src={ Image1 } alt="A Call To Arms" />
        </div>
        <div className="container-info">
          <div className="container-info-date">
            February 7, 2024
          </div>
          <div className="container-info-header">
            <h1>A Call to Arms</h1>
          </div>
          <div className="container-info-paragraph">
          <p>Arms Race has returned! Grab your guns 
              and brace yourself for a chaotic race to the top. 
              Get two kills with each weapon to reach the final stage, 
              or steal your opponents progress...</p>
          </div>
          <div className="container-info-read-more">
          <Link to="https://www.counter-strike.net/newsentry/4064004264605245458">
          <button>READ MORE &rarr;</button>
          </Link>
          
          </div>
        </div>
        </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image2 } alt="2024 Service Medal" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          December 14, 2023
        </div>
        <div className="container-info-header">
          <h1>2024 Service Medal</h1>
        </div>
        <div className="container-info-paragraph">
        <p>Celebrate your time in CS2 with the all-new 2024 Service Medal, 
          available starting January 1st! To get your service medal, 
          earn XP by playing in official game modes and rank up...</p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/6107508076983703492">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image3 } alt="The Maps Workshop" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          November 3, 2023
        </div>
        <div className="container-info-header">
          <h1>The Maps Workshop</h1>
        </div>
        <div className="container-info-paragraph">
        <p>The Maps workshop is now open for business. Community map makers can 
          start uploading their maps to the workshop, and 
          community servers can host those maps.</p>
          </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/3787024475483064536">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image4 } alt="Welcome Home" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          Septemer 28, 2023
        </div>
        <div className="container-info-header">
          <h1>Welcome Home</h1>
        </div>
        <div className="container-info-paragraph">
        <p>Counter-Strike 2 is here. Come take a look around. 
          Counter-Strike 2 is the largest technical 
leap forward in Counter-Strike&apos;s history, supporting new features 
today and updates...</p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/3747614808335282785">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image12 } alt="Your Time is Now" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          September 1, 2023
        </div>
        <div className="container-info-header">
          <h1>Your Time is Now</h1>
        </div>
        <div className="container-info-paragraph">
        <p>Today we&apos;re updating the CS2 Limited Test with a new map
          (Inferno!) and the all new CS Rating. Your CS Rating is a visible measurement of your 
          Counter-Strike performance, and it...</p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/3644028846252008595">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image12 } alt="A Level Playing Field" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          August 3, 2023
        </div>
        <div className="container-info-header">
          <h1>A Level Playing Field</h1>
        </div>
        <div className="container-info-paragraph">
        <p>Counter-Strike is at its best when teams compete on a level
           playing field and when ability 
          is the only limit to their success. </p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/3677802763035982969">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image12 } alt="Goodbye Wheel" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          June 7, 2023
        </div>
        <div className="container-info-header">
          <h1>Goodbye Wheel</h1>
        </div>
        <div className="container-info-paragraph">
        <p>Today we&apos;re shipping the first major update to the CS2 Limited
           Test. You can check out the release notes to see 
          what&apos;s new, but here are some of the big changes 
          in today&apos;s update:...</p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/3702568031467132888">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image5 } alt="Team Vitality - Major Champions!" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          June 1, 2023
        </div>
        <div className="container-info-header">
          <h1>Team Vitality - Major Champions!</h1>
        </div>
        <div className="container-info-paragraph">
        <p>Congratulations to Team Vitality, champions of the BLAST.TV 
          Paris Major! They defeated GamerLegion and completed 
          a dominating performance, sailing through the event without losing...</p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/3702568031445748803">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image6 } alt="The Grand Finale" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          May 20, 2023
        </div>
        <div className="container-info-header">
          <h1>The Grand Finale</h1>
        </div>
        <div className="container-info-paragraph">
        <p>The BLAST.tv Paris Major began with 24 teams and 2 finalists remain:
           GamerLegion and Team Vitality.
          The Champions Stage saw GamerLegion defeat Monte 2-0 and Heroic 2-1 
          on their...</p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/3686804163583320073">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image7 } alt="On to the Finals" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          May 16, 2023
        </div>
        <div className="container-info-header">
          <h1>On to the Finals</h1>
        </div>
        <div className="container-info-paragraph">
        <p>The Legends Stage of the BLAST.tv Paris Major has concluded 
          and the Champions Stage is set. The following teams will 
          compete to become Major Champions of the final CS:GO Major:...</p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/5448836977171499668">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image8 } alt="Enter The Legends" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          May 12, 2023
        </div>
        <div className="container-info-header">
          <h1>Enter The Legends</h1>
        </div>
        <div className="container-info-paragraph">
        <p>The Challengers Stage of the BLAST.tv Paris Major has concluded 
          and 8 teams have advanced to the Legends Stage.</p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/5448836977153818924">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image9 } alt="The Paris 2023 Major" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          May 5, 2023
        </div>
        <div className="container-info-header">
          <h1>The Paris 2023 Major</h1>
        </div>
        <div className="container-info-paragraph">
        <p>The BLAST.TV Paris Major begins May 8th. Who will become the champion of 
          CS:GO&apos;s final Major?...</p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/3717202192664258501">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image10 } alt="The Anubis Collection" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          April 25, 2023
        </div>
        <div className="container-info-header">
          <h1>The Anubis Collection</h1>
        </div>
        <div className="container-info-paragraph">
        <p>Since November, players have been peeking mid and rushing through 
          the waters of Anubis.
          Today we&apos;re introducing the Anubis Collection, featuring 19 
          weapon finishes themed around...</p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/3729585915985023882">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image12 } alt="The Next Era of Counter-Strike" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          March 22, 2023
        </div>
        <div className="container-info-header">
          <h1>The Next Era of Counter-Strike</h1>
        </div>
        <div className="container-info-paragraph">
        <p>Counter-Strike 2 is the largest technical leap forward in 
          Counter-Strike&apos;s history, ensuring new 
          features and updates for years to come.</p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/3716071937633222892">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      <hr />
      <div className="container-child">
      <div className="container-image">
        <img src={ Image11 } alt="Case, Capsule, Kit, Oh My!" />
      </div>
      <div className="container-info">
        <div className="container-info-date">
          February 10, 2023
        </div>
        <div className="container-info-header">
          <h1>Case, Capsule, Kit, Oh My!</h1>
        </div>
        <div className="container-info-paragraph">
        <p>Today we&apos;re excited to ship the Revolution Case, featuring 17 weapon finishes from community 
          artists and the gloves from the Clutch Case as rare special items.</p>
        </div>
        <div className="container-info-read-more">
        <Link to="https://www.counter-strike.net/newsentry/3673284490064181315">
        <button>READ MORE &rarr;</button>
        </Link>
        
        </div>
      </div>
      </div>

      
    </div>
  )
}

export default Updates
