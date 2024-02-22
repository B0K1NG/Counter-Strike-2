import React from 'react'
import VideoBG from '../../assets/videos/maps_flythrough.mp4';
import SmokesBG from '../../assets/videos/smokes_vid.mp4';
import SmokesBG1 from '../../assets/videos/smokes_vid1.mp4';
import SmokesBG2 from '../../assets/videos/smokes_vid3.mp4';
import Source2 from '../../assets/videos/map_s2tools.webm';
import Items from '../../assets/videos/weapons.webm';
import Blood from '../../assets/videos/blood_hit_fx.mp4';
import Explosions from '../../assets/videos/explosions.mp4';
import UI from '../../assets/videos/UI.mp4';
import Audio from '../../assets/images/Audio.png';
import "../../styles/News.css";
import "../../styles/NewsMediaQueries.css";

const Community = () => {
  return (
    <div className="news-container">
      <div className="video-father">
      <div className="top-fade"></div>
      <div className="bottom-fade"></div>
      <div className="video-container-text">
        <div className="video-container-text-header">
          <h1>Maps are getting a new look</h1>
        </div>
          <div className="video-container-text-paragraph">
           <p>From upgrades to overhauls, maps are <br /> cleaner, brighter, better.</p>
          </div>
      </div>
      <div className="video-container-background">
      <video src={ VideoBG } autoPlay loop muted />
      </div>
      </div>

      <div className="game-changer-father">
      <div className="game-changer-header">
      <h1>Game changer</h1>
    </div>
    <div className="game-changer-paragraph">
    Smoke Grenades are now dynamic volumetric objects that interact with 
    the environment, and react to lighting, gunfire, 
    and explosions.
    </div>

    <div className="game-changer-box">
    <video src={ SmokesBG } autoPlay loop muted />
  <div className="game-changer-box-subIntro">
    <div className="game-changer-box-subIntro-header">Gameplay</div>
    <div className="game-changer-box-subIntro-paragraph">Smoke now has the ability 
    to interact with other gameplay events, creating new opportunities.
    Billets and HE grenades can push smoke to briefly clear sightlines
    or expand occlusion.</div>
  </div>
    </div>


    <div className="game-changer-box-invert">
    <video src={ SmokesBG1 } autoPlay loop muted />
  <div className="game-changer-box-subIntro-invert">
    <div className="game-changer-box-subIntro-header">Expands to fill spaces naturally</div>
    <div className="game-changer-box-subIntro-paragraph">Now the smoke will 
    seep out of opened doorways and broken windows, go down and up stairs,
     as well as expand in long corridors and combine with other smokes.</div>
  </div>
  </div>

    <div className="game-changer-box">
    <video src={ SmokesBG2 } autoPlay loop muted />
  <div className="game-changer-box-subIntro">
    <div className="game-changer-box-subIntro-header">Reacts to Lighting</div>
    <div className="game-changer-box-subIntro-paragraph">In Counter-Strike 2
     smoke particles work with 
    the unified lighting system allowing for more realistic light and color.</div>
  </div>
    </div>
    </div>
      
      <div className="Source-2-box">
    <div className="Source-2-header">
      <h1>Source 2 Tools</h1>
    </div>
    <div className="Source-2-paragraph">
    The Source 2 tools and rendering features are 
    available for community map makers and artists, 
    making it easier than ever to build, experiment, 
    and iterate.We can&apos;t wait to see what you 
    come up with next.
    </div>
    <div className="Source-2-video">
    <video src={ Source2 } autoPlay loop muted />
    </div>
    </div>

    <div className="items-box">
    <div className="items-header">Your Items in a whole new light</div>
    <div className="items-paragraph">Bring your entire
     CS:GO inventory with you to Counter-Strike 2. 
     Not only will you keep every item you&apos;ve collected over the years, but they’ll 
    all benefit from Source 2 lighting and materials.
    <br />
    <br />
    In addition to supporting legacy models and 
    finishes, all stock weapons have been upgraded 
    with high-resolution models, and some 
    weapon finishes take advantage of these new models.</div>
    <div className="items-video">
    <video src={ Items } autoPlay loop muted />
    </div>
    </div>

    <div className="game-changer-father">
    <div className="game-changer-header">
      <h1>Hi-Def VFX</h1>
    </div>
    <div className="game-changer-paragraph">
    All of the visual effects have been updated in 
    Counter-Strike 2. With Source 2 lighting and 
    particle systems, there&apos;s an all-new look and 
    behavior for water, explosions, fire, smoke, 
    muzzle flashes, bullet tracers, impact effects, 
    and more.
    </div>

    <div className="game-changer-box">
    <video src={ Blood } autoPlay loop muted />
  <div className="game-changer-box-subIntro">
    <div className="game-changer-box-subIntro-header">Gameplay Visuals</div>
    <div className="game-changer-box-subIntro-paragraph">In
    Counter-Strike 2 the most critical gameplay visuals
    have been redesigned with readability in mind. Bullet
    impacts can be easily viewed at a distance, and directional
    blood impacts (that fade over time) give you more information
    as you move through the world.</div>
  </div>
    </div>


    <div className="game-changer-box-invert">
    <video src={ Explosions } autoPlay loop muted />
    <div className="game-changer-box-subIntro-invert">
    <div className="game-changer-box-subIntro-header">Environment Effects</div>
    <div className="game-changer-box-subIntro-paragraph">Experience 
    completely reauthored explosions, fire, C4 lighting,
    and more. Leveraging the Source 2 Engine and modern hardware,
    environmental effects in Counter-Strike 2 feature improved visual
    fidelity and greater consistency.</div>
  </div>
    </div>

    <div className="game-changer-box">
    <video src={ UI } autoPlay loop muted />
  <div className="game-changer-box-subIntro">
    <div className="game-changer-box-subIntro-header">UI Enhancements</div>
    <div className="game-changer-box-subIntro-paragraph">The UI
    in Counter-Strike 2 has gotten a complete overhaul,
    including fresh visual effects throughout the HUD. Not
    only do these improvements look nice, they also communicate
    important game state.</div>
  </div>
    </div>
    </div>

    <div className="items-box">
    <div className="items-header">Accurate Audio</div>
    <div className="items-subheader">Reworked, Rebalanced, Reverbed</div>
    <div className="items-paragraph">Counter-Strike 2 sounds
    have been reworked to better reflect the physical environment,
    be more distinct, and express more game state. They have also
    been rebalanced for a more comfortable listening experience.</div>
    <div className="items-image">
    <img src={ Audio } alt="Your Time is Now" />
    </div>
    </div>

    <div className="cs2-here-box">
      <div className="here-subbox">
      <div className="cs2-here-header">COUNTER-STRIKE 2 IS HERE</div>
      <div className="cs2-here-paragraph">The Counter-Strike community
       spent months playing the CS2 Limited Test and providing
       feedback to help shape the game ahead of its debut.
       Come join the millions of players who are honing their
       skills and rising through the ranks. Welcome to
       Counter-Strike 2.</div>
       </div>
    </div>

    </div>
  )
}

export default Community
