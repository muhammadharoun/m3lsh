import React, { useState } from 'react'
import {  Link } from "react-router-dom";
import './style.css'

const images = [
    { id: 1, src: require('./images/1.gif') },
    { id: 2, src: require('./images/2.gif') },
    { id: 3, src: require('./images/3.gif') },
    { id: 4, src: require('./images/4.gif') },
    { id: 5, src: require('./images/5.gif') },
    { id: 6, src: require('./images/6.gif') },
    { id: 7, src: require('./images/7.gif') },
    { id: 8, src: require('./images/8.gif') },
  ];
function Hug() {
    const [counter, setCounter] = useState(0)
    return (
        <div className='hug_container'>   
        {
            counter < images.length ?(
                <div className='buttons'>
                <button onClick={() => setCounter(counter + 1)} className='btn'>
                    another one plz
                </button>
                <Link to="/" className='btn btn-colored'>
                    return to home
                </Link>
            </div>
            ):(
                ''
            )

        }
 
        {counter < images.length ? (
    <img src={images[counter].src} alt="hug" />
) : (
    <div className='hug_container'>
        <h1>
            We're done, go back to your work
        </h1>
        <Link to="/" className='btn btn-colored'>
            return to home
        </Link>
    </div>
)}
            {/* <img src={images[counter].src} alt="" /> */}
      


        </div>
    )
}

export default Hug


