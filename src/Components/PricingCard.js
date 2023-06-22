import React from 'react'
import "./PricingCradStyles.css"
import { Link } from 'react-router-dom'

function PricingCard() {
  return (
    <div className='pricing'>
     <div className='card-container'>
        <div className='card'>
            <h3>- Basic -</h3>
            <span className='bar'></span>
            <p className='btc'>$5</p>
            <p>3 Days</p>
            <p>3 Pages </p>
            <p>- Featured -</p>
            <p>- Resposive Design -</p>
            <Link to="/contact" className='btn'>PURCHASE NOW</Link>
        </div>

        <div className='card'>
            <h3>- Premium -</h3>
            <span className='bar'></span>
            <p className='btc'>$15</p>
            <p>10 Days</p>
            <p>6 Pages </p>
            <p>- Featured -</p>
            <p>- Resposive Design -</p>
            <Link to="/contact" className='btn'>PURCHASE NOW</Link>
        </div>

        <div className='card'>
            <h3>- Business -</h3>
            <span className='bar'></span>
            <p className='btc'>$10</p>
            <p>6 Days</p>
            <p>5 Pages </p>
            <p>- Featured -</p>
            <p>- Resposive Design -</p>
            <Link to="/contact" className='btn'>PURCHASE NOW</Link>
        </div>
     </div>
    </div>
  )
}

export default PricingCard
