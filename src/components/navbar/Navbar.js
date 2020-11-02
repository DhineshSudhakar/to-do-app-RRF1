import React from 'react'
import { Link } from 'react-router-dom'
import NavbarItems from './NavbarItems'

function Navbar() {
    return (
        <div className="navbar navbar-light bg-light d-flex justify-content-center">
            <Link to="/" className="navbar-brand">
                <h3>To do app</h3>
            </Link>
            <NavbarItems />
        </div>
    )
}

export default Navbar
