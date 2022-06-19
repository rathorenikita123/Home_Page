import React from 'react';
import './Home.css';
import banner from './banner.jpg';

const Home = () => {
    return(
        <div className='section' id='home'>
            <div className='t_text'>
                <h2>Business</h2>
                <p>Some text</p>
            </div>
            <div >
            <img className="banner" src={banner} alt="img" />
            </div>
        </div>
    );
}

export default Home;