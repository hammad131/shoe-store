import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo1 from './logo1.png'

function Header() {
    return (
        <header>
            <Link className="logo" to='/'>
                <img src={logo1} alt=''></img>
            </Link>
            <nav>
                <ul>
                    <Link className='tags' to="/">Home</Link>
                    <Link className='tags' to="products">Products</Link>
                    <Link className='tags' to="contact">Contact Us</Link>
                    
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;

<nav>
            <Link className='tags' to="/">Home</Link> 
            <Link className='tags' to="products">Products</Link>
        </nav>