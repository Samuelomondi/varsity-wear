import React from 'react'
import './main.scss'
import Card from './card'
import Dresses from '../../assets/dresses.jpg'
import CardData from './card-data'



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
        </ul>
      </div>

      <div className="items">
        { CardData.map((val, ind) => {
            return (
              <Card 
                key={ind}
                picture={val.picture}
                name={val.name}
                description={val.description}
                price={val.price}/>
            )
          })
        }
      </div>

      <hr />
    </main>
  )
}

export default Main