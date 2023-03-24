import React from 'react'
import './service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFootball, faFile } from '@fortawesome/free-solid-svg-icons'

export const Service = () => {
    const content = [
        {icon:faFootball, name:'Lorem Ipsum', description:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'},
        {icon:faFile, name:'Sed ut perspiciatis', description:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'},
        {icon:faFootball, name:'Magni Dolores', description:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'},
        {icon:faFootball, name:'Magni Dolores', description:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'},
        {icon:faFootball, name:'Magni Dolores', description:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'},
        {icon:faFootball, name:'Magni Dolores', description:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'},
    ]
  return (
    <section className='service-sec'>
        <div className='container'>
           <div className="section-title">
                <span>Services</span>
                <h2>Services</h2>
                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
           </div>
         <div className='service-row'>
         {content.map((e,i) => {
              return <div key={i} className='col'>
               <div className='service-box'>
                   <div className='icon'>
                       <i><FontAwesomeIcon icon={e.icon} /></i>
                   </div>
                   <h4><a href='#'>{e.name}</a></h4>
                   <p>{e.description}</p>
               </div>
              </div>
         })}
        
           {/* <div className='col'>
            <div className='service-box'>
                <div className='icon'>
                    <i><FontAwesomeIcon icon={faFootball} /></i>
                </div>
                <h4><a href='#'>Lorem Ipsum</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
           </div>
           <div className='col'>
            <div className='service-box'>
                <div className='icon'>
                    <i><FontAwesomeIcon icon={faFile} /></i>
                </div>
                <h4><a href='#'>Sed ut perspiciatis</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
           </div>
           <div className='col'>
            <div className='service-box'>
                <div className='icon'>
                    <i><FontAwesomeIcon icon={faFootball} /></i>
                </div>
                <h4><a href='#'>Magni Dolores</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
           </div>
           <div className='col'>
            <div className='service-box'>
                <div className='icon'>
                    <i><FontAwesomeIcon icon={faFootball} /></i>
                </div>
                <h4><a href='#'>Nemo Enim</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
           </div>
           <div className='col'>
            <div className='service-box'>
                <div className='icon'>
                    <i><FontAwesomeIcon icon={faFootball} /></i>
                </div>
                <h4><a href='#'>Divera don</a></h4>
                <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
           </div>
           <div className='col'>
            <div className='service-box'>
                <div className='icon'>
                    <i><FontAwesomeIcon icon={faFootball} /></i>
                </div>
                <h4><a href='#'>Dele cardo</a></h4>
                <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
           </div> */}
         </div>
        </div>
    </section>
  )
}
