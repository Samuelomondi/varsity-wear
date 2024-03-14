import React from 'react'
import './main.scss'
import Card from './card'
import Dresses from '../../assets/dresses.jpg'



const Main = () => {
  return (
    <main>
      <div className="intro">
        <img src={Dresses} alt="Dresses" className='intro-img'/>

        <div className="intro-content">
          <h1>Varsity Wear</h1>
          <p>You Want It. We Got It</p>
        </div>
      </div>

      <div className='categories'>
        <ul>
          <li><a href="">New</a></li>
          <li><a href="">Sale</a></li>
          <li><a href="">Women</a></li>
          <li><a href="">Men</a></li>
          <li><a href="">Kids</a></li>
        </ul>
      </div>

      <div className="items">
        <Card 
          card_image="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          card_name="Fashion Nova"
          card_description="Lauren and the Blue Dress"
          card_price="$100.00"
          />
      </div>

      <hr />
    </main>
  )
}

export default Main