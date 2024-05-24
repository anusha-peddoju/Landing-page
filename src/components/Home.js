import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="home-container">
      <div className="left-section">
        <h2>Hi, I'm Kayrenn Smetha</h2>
        <h1>I’m <span>Proffesional</span></h1>
        <h1>Expert Developer.</h1>
        <p className='desc'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
        <button className="btn btn-port">My Portfolio<FontAwesomeIcon icon={faArrowRight} /></button>
        <button className="btn btn-cv">Download CV</button>
        <div className='icon-des'>
            <h3>Find With Me</h3>
            <h3 className='skills'>Best Skills On</h3>
        </div>

        <div className="social-media-icons">
            <div className='set1'>
          <i className="fab fa-facebook-square facebook-icon"></i>
          <i className="fab fa-twitter-square twitter-icon"></i>
          <i className="fab fa-linkedin linkedin-icon"></i>
            </div>
        
            <div className="set2">
            <i className="fab fa-github github-icon"></i>
            <i className="fab fa-figma figma-icon"></i>
    
            </div>
        </div>



      </div>
      <div className="right-section">
            <div className="circles-container">
            <div className="circle base-circle"></div>
            <div className="circle top-circle"></div>
            
            </div>
            <div className="rect">
                <p>330</p>
                <p>Completed<br/>Project</p>
            </div>
            <div className="rect1">
                <p>12+</p>
                <p>Years Of<br/>Experience</p>
            </div>

            <div className="circle1">
                
                <p>Export<br/>Developer</p>
            </div>
            
      </div>
    </div>
  );
};

export default Home;
