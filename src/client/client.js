import React from 'react'
import './client.css'
import c1 from './img/client-1.png'
import c2 from './img/client-2.png'
import c3 from './img/client-3.png'
import c4 from './img/client-4.png'
import c5 from './img/client-5.png'
import c6 from './img/client-6.png'

export const Client = () => {
  const content =[c1,c2,c3,c4,c5,c6]
  return (
    <section className='client-sec'>
      <div className='container'>
        <div className='row'> 
         {content.map((e,i) => <div key={i} className='col'>
            <img src={e}/>
          </div>)

         }
          {/* <div className='col'>
            <img src={c1}/>
          </div>
          <div className='col'>
             <img src={c2}/>
          </div>
          <div className='col'>
              <img src={c3}/>
          </div>
          <div className='col'>
          <img src={c4}/>
          </div>
          <div className='col'>
          <img src={c5}/>
          </div>
          <div className='col'>
          <img src={c6}/>
          </div> */}
        </div>
      </div>
    </section>
  )
}
