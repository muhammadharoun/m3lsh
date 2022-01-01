import React from 'react'
import {  Link } from "react-router-dom";
import './style.css'
const HugImage = require("../../assets/hug.png");
const M3lshImage  = require("../../assets/m3lsh.png");

function Home() {
    return (
            <div className="App">
        <Link to="/hug">
            

            <div className="container">
                <img src={HugImage} alt="hug" className="image" />
                <h2>hug me</h2>
                
            </div>

        </Link>

        <Link to="/m3lsh">

            <div className="container">
                <img src={M3lshImage} alt="M3lsh" className="image" />
                <h2>motivated me</h2>
            </div>
        </Link>

       </div>
    )
}

export default Home
