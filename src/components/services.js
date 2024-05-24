import React from 'react';
import Carousel from "react-elastic-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3 },

      ];

function Services() {
  return (
    <>
    
    <div className="services">
    <h3>Services|Offer to my clients</h3>
    <h1>My Best <span>Services</span></h1>
      <Carousel breakPoints={breakPoints}>
        <div className='card'>
            <p>Web development</p>
            <h3>Web Design & Logo</h3>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <h3>See Pricing <FontAwesomeIcon icon={faArrowRight} /></h3>
        </div>

        <div className='card'>
            <p>Apps development</p>
            <h3>iOS & Android</h3>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <h3>See Pricing <FontAwesomeIcon icon={faArrowRight} /></h3>
        </div>

        <div className='card'>
            <p>Game development</p>
            <h3>Unity & Unreal Engine</h3>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <h3>See Pricing <FontAwesomeIcon icon={faArrowRight} /></h3>
        </div>       

        <div className='card'>
            <p>Game development</p>
            <h3>Unity & Unreal Engine</h3>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <h3>See Pricing <FontAwesomeIcon icon={faArrowRight} /></h3>
        </div>     

        <div className='card'>
            <p>Web development</p>
            <h3>Web Design & Logo</h3>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <h3>See Pricing <FontAwesomeIcon icon={faArrowRight} /></h3>
        </div>

        <div className='card'>
            <p>Apps development</p>
            <h3>iOS & Android</h3>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <h3>See Pricing <FontAwesomeIcon icon={faArrowRight} /></h3>
        </div>

        <div className='card'>
            <p>Game development</p>
            <h3>Unity & Unreal Engine</h3>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <h3>See Pricing <FontAwesomeIcon icon={faArrowRight} /></h3>
        </div>       

        <div className='card'>
            <p>Game development</p>
            <h3>Unity & Unreal Engine</h3>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <h3>See Pricing <FontAwesomeIcon icon={faArrowRight} /></h3>
        </div>   

        <div className='card'>
            <p>Web development</p>
            <h3>Web Design & Logo</h3>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <h3>See Pricing <FontAwesomeIcon icon={faArrowRight} /></h3>
        </div>

        <div className='card'>
            <p>Apps development</p>
            <h3>iOS & Android</h3>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <h3>See Pricing <FontAwesomeIcon icon={faArrowRight} /></h3>
        </div>

        <div className='card'>
            <p>Game development</p>
            <h3>Unity & Unreal Engine</h3>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <h3>See Pricing <FontAwesomeIcon icon={faArrowRight} /></h3>
        </div>       

        <div className='card'>
            <p>Game development</p>
            <h3>Unity & Unreal Engine</h3>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <h3>See Pricing <FontAwesomeIcon icon={faArrowRight} /></h3>
        </div>       
        
      </Carousel>
    </div>
  </>
  );
}

export default Services;
