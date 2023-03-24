import React, { Component } from 'react'
import './Banner.css'


export class Banner extends Component {
    constructor(){
        super()
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    
  render() {
    return (
      <section className='banner-sec'>
        <div className='banner-container'>
            <h1 className='title'>Welcome to day</h1>
            {/* <h2 className='clock'>It is {this.state.date.toLocaleTimeString()}</h2> */}
            <h2>We are team of talented designers making websites with Bootstrap</h2>
            <a href='#' className='btn-started'>Get started</a> 
         </div>
      </section>
    )
  }
}


export default Banner