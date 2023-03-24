import React from 'react'
import './whyus.css'

export const Whyus = () => {
  const content =[
    {id:'01', name:'Lorem ipsum', description:'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat'},
    {id:'02', name:'Repellat Nihil', description:'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat'},
    {id:'03', name:'Ad ad velit qui', description:'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat'}  
  ]
  return (
    <section className='why-us'>
      <div className='container'>
       <div className='row'>
        {content.map((item,index) => <div key={index} className='col'>
          <div className='box'>
            <span>{item.id}</span>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        </div>)}
        {/* <div className='col'>
          <div className='box'>
            <span>01</span>
            <h4>Lorem ipsum</h4>
            <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
          </div>
        </div>
        <div className='col'>
          <div className='box'>
            <span>02</span>
            <h4>Repellat Nihil</h4>
            <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
          </div>
        </div>
        <div className='col'>
          <div className='box'>
            <span>03</span>
            <h4>Ad ad velit qui</h4>
            <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
          </div>
        </div> */}
       </div>
      </div>
    </section>
  )
}

