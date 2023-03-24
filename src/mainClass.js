import React, { Component } from 'react'
import FirstClass from './FirstClass'
import Banner from './Banner'
// import {Home} from './props.js'
import {About} from './about/about'
import {Whyus} from './whyus/whyus.js'
import {Client } from './client/client'
import {Service} from './service/service'
import { Cta } from './cta/cta'
import { Portfolio } from './portfolio/portfolio'
import { Pricing } from './pricing/pricing'
import { Team } from './team/team'
import Contact from './contact/contact'
import Footer from './footer/footer'

function Tick(){
    return <Banner date={new Date()}/>
}
setInterval(Tick, 1000)

const pull_data = (data) => console.log(data);

let obj = {
    name : 'hari',
    age:23
}
let tasks = [
   {name:'hari', duration:60},
   {name:'aravind', duration:100},
   {name:'sekar', duration:20}
]
    


export class MainClass extends Component {
  render() {
    return (
      <>
       <FirstClass />
       <Tick/>
       <About/>
       <Whyus/>
       <Client/>
       <Service/>
       <Cta/>
       <Portfolio/>
       <Pricing/>
       <Team/>
       <Contact/>
       <Footer/>

       {/* <Home name='hari' func={pull_data} data={tasks}/> */}
      </>
    )
  }
}

export default MainClass