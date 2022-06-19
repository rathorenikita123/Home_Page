import React from 'react';
import './Footer.css';
import Facebook from './facebook.png';
import Instagram from './instagram.png';
import Twitter from './twitter.png';
import Logo from './logo.png';


const Footer = () => {
    return(
        <div className='footer' id='contact'>
        <div className='footer_container'>
            <div className='note'>
                <h2>Welcome to our store!!</h2>
                <p>Choose anything from our Wardrobe</p>
            </div>
            <div className='item1'>
                <div className='company'>
                    <img src={Logo} alt="logo" width={30} height={30} className='logo'/>
                    <h3>Business</h3>
                </div>
            </div>
            <div className='item2'>
                <h3>Contact</h3>
                <p className='text2'>0123456789</p>
                <a target="_blank" rel="noreferrer" href="#twitter">
                    <img src={Twitter} alt="git" width={34} height={32} className='image' />
                </a>
                <a target="_blank" rel="noreferrer" href="#facebook">
                    <img src={Facebook} alt="linkedin" width={32} height={28} className='image'/>
                </a>
                <a target="_blank" rel="noreferrer" href="#instagram">
                    <img src={Instagram} alt="mail" width={30} height={30} className='image'/>
                </a>
            </div>
            <div className='item3'>
                <h3>Address</h3>
                <p className='text2'>Street 
                    <br/>
                        Stata, Country
                    <br/>
                        zip code
                </p>
            </div>
        </div>
    </div>
    )
}

export default Footer;