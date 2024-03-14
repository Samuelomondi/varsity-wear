import React from 'react'
import './main.scss'
import Card from './card'
import Dresses from '../../assets/dresses.jpg'
import Header from '../header/header'


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
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <hr />
    </main>
  )
}

export default Main