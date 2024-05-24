import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function About(){
    return (
        <div className="about-container">
          <div className="about-left">
                <div class="container">
                    <div class="box"></div>
                    <div class="box-overlay"></div>
                </div>
          </div>
          <div className="about-right">
            <h3>Services|Offer to my clients</h3>
            <h1>Kayrenn <span>Smetha</span></h1>
            <p>Hello! I’m Kayreen Smetha. Web Developer with over 8 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong background in management and leadership.</p>
            <div className="about-details">
            <div className="details">
                <p>Birthday</p>
                <p>Age</p>
                <p>Address</p>
            </div>
            <div>
                <p>01-07-1998</p>
                <p>24 Years</p>
                <p>Ave 11,Newyork</p>
            </div>
            <div className="details">
                <p>Email</p>
                <p>Whatsapp</p>
                <p>Freelance</p>
            </div>
            <div>
                <p>mail@gmail.com</p>
                <p>+91777546389</p>
                <p>Available</p>
            </div>
            </div>
            <button className="btn">Learn More<FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
          
        </div>
      );
}
export default About;