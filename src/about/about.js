import React from 'react'
import './about.css'
import img from './about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


export const About = () => {
  return (
    <section className='about-sec'>
        <div className='container'>
            <div className='about-row'>
                <div className='about-col'>
                   <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                   <p className='italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   <ul>
                    <i><FontAwesomeIcon icon={faCheck} /></i><li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <i><FontAwesomeIcon icon={faCheck} /></i><li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <i><FontAwesomeIcon icon={faCheck} /></i><li> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                   </ul>
                   <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className='about-col'>
                    <img src={img}/>
                </div>
            </div>
        </div>
    </section>
  )
}
