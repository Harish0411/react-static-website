import React, { Component } from 'react'
import logo from './logo512.png'
import './FirstClass.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile, faEarthAfrica, faList, faBars, faArrowCircleDown} from '@fortawesome/free-solid-svg-icons'

export class FirstClass extends Component {
  render() {
    return (
      <>
      <section className='topbar'>
        <div className='top-container'>
          <div className='row'>
            <div className='contact-info'>
            <i><FontAwesomeIcon icon={faEnvelope} /></i><a href='#'>info@example.com</a>
            <i><FontAwesomeIcon icon={faMobile} /></i> +1 5589 55488 55  
            </div>
            <div className='social'>
              <a href='#'><FontAwesomeIcon icon={faEarthAfrica} /></a>
              <a href='#'><FontAwesomeIcon icon={faEarthAfrica} /></a>
              <a href='#'><FontAwesomeIcon icon={faEarthAfrica} /></a>
              <a href='#'><FontAwesomeIcon icon={faArrowCircleDown} /></a>

            </div>
          </div>
        </div>
      </section>
      <header>
         <div className='container'>
           <div className='row'>
              <div className='col'>
                <h1 className='logo'>
                  <a href='#'>Day</a>
                </h1>
              </div>
                <div className='col'>
                  <div class="mobile-nav">
					           <i><FontAwesomeIcon icon={faBars} /></i>
					        </div>
                  <ul className='nav'>
                    <li className='active'><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Service</a></li>
                    <li><a href='#'>Portfolio</a></li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>Team</a></li>
                    <li><a href='#'>Dropdown</a></li>
                    <li><a href='#'>Contact</a></li>
                  </ul>
                </div>
              </div>
           </div> 
      </header>
      </>
    )
  }
}

export default FirstClass