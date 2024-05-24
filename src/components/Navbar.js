import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    return(
        <nav className="navbar">
      <div className="navbar-brand">Kayrenn<span className='name'>Smetha</span></div>
      <ul className="navbar-nav">
        <li><a href="#home">Home <FontAwesomeIcon icon={faAngleDown} /></a></li>
        <li><a href="#about">About <FontAwesomeIcon icon={faAngleDown} /></a></li>
        <li><a href="#services">Services <FontAwesomeIcon icon={faAngleDown} /></a></li>
        <li><a href="#portfolio">Portfolio <FontAwesomeIcon icon={faAngleDown} /></a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="btn btn-download">Download CV </button>
        <button className="btn btn-contact">Contact</button>
      </div>
    </nav>

  
    );
}
export default Navbar;

