import React from 'react';
import './Hero.css';
import nike1 from './5.png';

function Hero() {
    return (
        <>
        <div className='container1'>
            <div className="row">
                <div className="col-2">
                    <h1>NEW NIKE <br />RACT FLYKINT</h1>
                    <p>
                        When words becomes unclear, I shall focus with photographs.<br />When
                        Images becomes inadequate, I shall be content with silence.
                    </p>
                    <button className="btn">Explore Now</button>
                </div>
                <div className="col-2">
                    <img src= {nike1} alt="" />
                </div>
            </div>
            
            
        </div>
        </>
    )
}

export default Hero
