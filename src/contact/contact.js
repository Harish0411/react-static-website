import React, { Component } from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile, faLocationDot, faList, faLocation } from '@fortawesome/free-solid-svg-icons'

export class Contact extends Component {
  render() {
    return (
       <section className='contact-sec'>
        <div className='container'>
           <div class="section-title">
                <span>Contact</span>
                <h2>Contact</h2>
                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
             </div>
            <div className='contact-row'>
               <div className='col-1'>
                  <div className='contact-box'>
                  <div className='ico'><a href='#'><i><FontAwesomeIcon icon={faLocationDot} /></i></a></div>
                  <h3>our address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
               </div>
               <div className='col-2'>
               <div className='contact-box'>
                  <div className='ico'><a href='#'><i><FontAwesomeIcon icon={faLocationDot} /></i></a></div>
                  <h3>our address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
               </div>
               <div className='col-2'>
               <div className='contact-box'>
                  <div className='ico'><a href='#'><i><FontAwesomeIcon icon={faLocationDot} /></i></a></div>
                  <h3>our address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
               </div>
            </div>
            <div className='contact-row2'>
                <div className='col frame'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.70230157853!2d77.29696875560971!3d8.964058288211808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429c15ac547f7%3A0x9a707276cd8ae327!2sTenkasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1679391606837!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='col'>
                   <form>
                    <div className='form-row'>
                        <div className='col'>
                            <input type='text' placeholder='Your Name'required/>
                        </div>
                        <div className='col'>
                            <input type='email' placeholder='Your Email'required/>
                        </div>
                    </div>
                    <div className='rows'>
                        <input type='text' placeholder='Subject'required/>
                    </div>
                    <div className='row'>
                        <textarea placeholder='Message' rows='5' required></textarea>
                    </div>
                    <div className='btn-form'>
                        <button type='submit'>Sent Message</button>
                    </div>
                   </form>
                </div>
            </div>
        </div>
       </section>
    )
  }
}

export default Contact