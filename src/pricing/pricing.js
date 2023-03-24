import React from 'react'
import './pricing.css'

export const Pricing = () => {
  return (
    <section className='pricing-sec'>
     <div className='price-container'>
     <div class="section-title">
          <span>Pricing</span>
          <h2>Pricing</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>
        <div className='price-row'>
            <div className='col'>
                <div className="box">
                    <h3>Free</h3>
                    <h4><sup>$</sup>0<span> / month</span></h4>
                    <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li class="na">Pharetra massa</li>
                        <li class="na">Massa ultricies mi</li>
                    </ul>
                    <div className="btn-wrap">
                        <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                </div>
            </div>
            <div className='col'>
            <div className="box featured">
                    <h3>Business</h3>
                    <h4><sup>$</sup>19<span> / month</span></h4>
                    <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li class="na">Massa ultricies mi</li>
                    </ul>
                    <div className="btn-wrap">
                        <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                </div>  
            </div>
            <div className='col'>
            <div className="box">
                    <h3>Developer</h3>
                    <h4><sup>$</sup>29<span> / month</span></h4>
                    <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li>Massa ultricies mi</li>
                    </ul>
                    <div className="btn-wrap">
                        <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                </div> 
            </div>
        </div>
     </div>
    </section>
  )
}
