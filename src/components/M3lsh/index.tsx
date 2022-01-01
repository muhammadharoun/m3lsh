import React from 'react'
import {  Link } from "react-router-dom";

import './style.css'
const m3lshVideo = require('../../assets/m3lsh-vid.mp4')
const M3lsh:React.FC = () => {
    return (
        <div className='video-container'>
            <Link to="/" className='btn btn-colored'>
                    return to home
                </Link>
                
            <video className="blueVid" autoPlay={true}>
                <source  src={m3lshVideo} type="video/mp4" />
                video not supported
            </video>
        </div>)
}

export default M3lsh
