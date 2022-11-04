import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to='/' className="nav-link" style={{ color: 'white' }}>
                            Movie List
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/favourites' className="nav-link" style={{ color: 'white' }}>
                            Favourites
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;