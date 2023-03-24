import React from 'react'
import './portfolio.css'
import p1 from './img/portfolio-1.jpg'
import p2 from './img/portfolio-2.jpg'
import p3 from './img/portfolio-3.jpg'
import p4 from './img/portfolio-4.jpg'
import p5 from './img/portfolio-5.jpg'
import p6 from './img/portfolio-6.jpg'
import p7 from './img/portfolio-7.jpg'
import p8 from './img/portfolio-8.jpg'
import p9 from './img/portfolio-9.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug, faLink } from '@fortawesome/free-solid-svg-icons'

export const Portfolio = () => {
  const content =[
    

  ]
  return (
   <section className='port-sec'>
     <div className='container'>
       <div class="section-title">
          <span>Portfolio</span>
          <h2>Portfolio</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>
        <div className='nav-row'>
            <div className='nav-col'>
                <ul className='filter'>
                    <li className='active'> All</li>
                    <li>App</li>
                    <li>Card</li>
                    <li>Web</li>
                </ul>
            </div>
        </div>
        <div className='port-row'>

            <div className='col'>
               <div className='port-card'>
                 <img src={p1}/>
                 <div className='port-info'>
                   <div className='text'>
                      <h4>APP1</h4>
                      <p>App</p>
                   </div>
                   <div className='icon'>
                     <i><FontAwesomeIcon icon={faPlug} /></i>
                     <i><FontAwesomeIcon icon={faLink} /></i>
                   </div>
                 </div>
              </div> 
              <div className='port-card'>
                 <img src={p6}/>
                 <div className='port-info'>
                   <div className='text'>
                      <h4>APP1</h4>
                      <p>App</p>
                   </div>
                   <div className='icon'>
                     <i><FontAwesomeIcon icon={faPlug} /></i>
                     <i><FontAwesomeIcon icon={faLink} /></i>
                   </div>
                 </div>
              </div> 
            </div>
            <div className='col'>
               <div className='port-card'>
                 <img src={p2}/>
                 <div className='port-info'>
                   <div className='text'>
                      <h4>APP1</h4>
                      <p>App</p>
                   </div>
                   <div className='icon'>
                     <i><FontAwesomeIcon icon={faPlug} /></i>
                     <i><FontAwesomeIcon icon={faLink} /></i>
                   </div>
                 </div>
              </div> 
              <div className='port-card'>
                 <img src={p5}/>
                 <div className='port-info'>
                   <div className='text'>
                      <h4>APP1</h4>
                      <p>App</p>
                   </div>
                   <div className='icon'>
                     <i><FontAwesomeIcon icon={faPlug} /></i>
                     <i><FontAwesomeIcon icon={faLink} /></i>
                   </div>
                 </div>
              </div>
              <div className='port-card'>
                 <img src={p9}/>
                 <div className='port-info'>
                   <div className='text'>
                      <h4>APP1</h4>
                      <p>App</p>
                   </div>
                   <div className='icon'>
                     <i><FontAwesomeIcon icon={faPlug} /></i>
                     <i><FontAwesomeIcon icon={faLink} /></i>
                   </div>
                 </div>
              </div>  
            </div>
            <div className='col'>
               <div className='port-card'>
                 <img src={p3}/>
                 <div className='port-info'>
                   <div className='text'>
                      <h4>APP1</h4>
                      <p>App</p>
                   </div>
                   <div className='icon'>
                     <i><FontAwesomeIcon icon={faPlug} /></i>
                     <i><FontAwesomeIcon icon={faLink} /></i>
                   </div>
                 </div>
              </div> 
              <div className='port-card'>
                 <img src={p4}/>
                 <div className='port-info'>
                   <div className='text'>
                      <h4>APP1</h4>
                      <p>App</p>
                   </div>
                   <div className='icon'>
                     <i><FontAwesomeIcon icon={faPlug} /></i>
                     <i><FontAwesomeIcon icon={faLink} /></i>
                   </div>
                 </div>
              </div> 
              <div className='port-card'>
                 <img src={p7}/>
                 <div className='port-info'>
                   <div className='text'>
                      <h4>APP1</h4>
                      <p>App</p>
                   </div>
                   <div className='icon'>
                     <i><FontAwesomeIcon icon={faPlug} /></i>
                     <i><FontAwesomeIcon icon={faLink} /></i>
                   </div>
                 </div>
              </div> 
              <div className='port-card'>
                 <img src={p8}/>
                 <div className='port-info'>
                   <div className='text'>
                      <h4>APP1</h4>
                      <p>App</p>
                   </div>
                   <div className='icon'>
                     <i><FontAwesomeIcon icon={faPlug} /></i>
                     <i><FontAwesomeIcon icon={faLink} /></i>
                   </div>
                 </div>
              </div> 
            </div>
        </div>
     </div>
   </section>
  )
}
