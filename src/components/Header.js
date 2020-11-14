import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">Home</Link> {"  |  "}
            <Link to="products">Products</Link>
        </nav>
    )
}

export default Header;