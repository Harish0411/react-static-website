import React, { Component } from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile, faEarthAfrica, faArrowRight, faList } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer-top'>
           <div className='footer-container'>
            <div className='row'>
                <div className='col1'>
                    <div className='footer-info'>
                        <h3>Day</h3>
                        <p>
                            <span>A108 Adam Street </span>
                            <span>NY 535022, USA</span>
                        </p>
                        <p>
                            <span><strong>Phone:</strong> +1 5589 55488 55</span>
                            <span><strong>Email:</strong> info@example.com</span>
                        </p>  
                        <div className='footer-icons'>
                        <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                        <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                        <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                        <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                        </div>
                    </div>
                </div>
                <div className='col2'>
                    <h4>Usefull links</h4>
                    <ul>
                        <li><i><FontAwesomeIcon icon={faArrowRight} /></i> <a href="#">Home</a></li>
                        <li><i><FontAwesomeIcon icon={faArrowRight} /></i> <a href="#">About us</a></li>
                        <li><i><FontAwesomeIcon icon={faArrowRight} /></i> <a href="#">Services</a></li>
                        <li><i><FontAwesomeIcon icon={faArrowRight} /></i> <a href="#">Terms of service</a></li>
                        <li><i><FontAwesomeIcon icon={faArrowRight} /></i> <a href="#">Privacy policy</a></li>
                    </ul>
                </div>
                <div className='col2'>
                <h4>Usefull links</h4>
                    <ul>
                        <li><i><FontAwesomeIcon icon={faArrowRight} /></i> <a href="#">Home</a></li>
                        <li><i><FontAwesomeIcon icon={faArrowRight} /></i> <a href="#">About us</a></li>
                        <li><i><FontAwesomeIcon icon={faArrowRight} /></i> <a href="#">Services</a></li>
                        <li><i><FontAwesomeIcon icon={faArrowRight} /></i> <a href="#">Terms of service</a></li>
                        <li><i><FontAwesomeIcon icon={faArrowRight} /></i> <a href="#">Privacy policy</a></li>
                    </ul>
                </div>
                <div className='col4'>
                    <h4>our newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <div className='footer-form'>
                        <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                    </div>
                </div>
            </div>
           </div>
        </div>
        <div className='footer-bottom'>
            <div className='copy'>
              © Copyright <strong><span>Day</span></strong>. All rights reserved
            </div>
            <div className='credit'>
                Designed by <a href='#'>Hariharan R</a>
            </div>
        </div>
      </footer>
    )
  }
}
