import React from 'react'

const myname = "Hariharan"



export const Home = (props) => {
    props.func({myname})
  return (
    <div style={{color:'red'}}>Hello {props.name}
    {props.data.filter((e) => e.duration>50).map((e, i) => <h2 key={i}>{e.name}</h2> )}
  </div>
  )
}
