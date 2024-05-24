import React from 'react';
import Carousel from "react-elastic-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },

      ];

function Clients() {
  return (
    <>
    
    <div className="services">
    <h3>What my clients think about me</h3>
    <h1>What My<span> Clients Says</span></h1>
      <Carousel breakPoints={breakPoints}>
        <div className='client-card'>
            <div className='client-card1'>
            <p>Emma Watson</p>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding</p>
            <p>Learn More<FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
            <div className='mini-circle'></div>
        </div>
        <div className='client-card'>
            <div className='client-card1'>
            <p>Claire Madisson</p>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding</p>
            <p>Learn More<FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
            <div className='mini-circle'></div>
        </div>
        <div className='client-card'>
            <div className='client-card1'>
            <p>Emma Watson</p>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding</p>
            <p>Learn More<FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
            <div className='mini-circle'></div>
        </div>
        <div className='client-card'>
            <div className='client-card1'>
            <p>Claire Madisson</p>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding</p>
            <p>Learn More<FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
            <div className='mini-circle'></div>
        </div>
        <div className='client-card'>
            <div className='client-card1'>
            <p>Emma Watson</p>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding</p>
            <p>Learn More<FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
            <div className='mini-circle'></div>
        </div>
        <div className='client-card'>
            <div className='client-card1'>
            <p>Claire Madisson</p>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding</p>
            <p>Learn More<FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
            <div className='mini-circle'></div>
        </div>
  

         
        
      </Carousel>
    </div>
  </>
  );
}

export default Clients;
