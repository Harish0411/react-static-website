import React from 'react'
import './team.css'
import img1 from './img/team-1.jpg'
import img2 from './img/team-2.jpg'
import img3 from './img/team-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile, faEarthAfrica, faList } from '@fortawesome/free-solid-svg-icons'

export const Team = () => {
  return (
    <section className='team-sec'>
      <div className='container'>
      <div class="section-title">
          <span>Team</span>
          <h2>Team</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>
        <div className='team-row'>
            <div className='team-col'>
              <div className='team-box'>
                <img src={img1}/>
                <h3>walter white</h3>
                <span>cheif executive officer</span>
                <p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>
                <div className='social-team'>
                <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                </div>
              </div>
            </div>
            <div className='team-col'>
              <div className='team-box'>
                <img src={img2}/>
                <h3>walter white</h3>
                <span>cheif executive officer</span>
                <p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>
                <div className='social-team'>
                <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                </div>
              </div>
            </div>
            <div className='team-col'>
              <div className='team-box'>
                <img src={img3}/>
                <h3>walter white</h3>
                <span>cheif executive officer</span>
                <p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>
                <div className='social-team'>
                <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                <a href='#'><i><FontAwesomeIcon icon={faEarthAfrica} /></i></a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
