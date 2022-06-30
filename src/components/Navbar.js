import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/solutions"}>Solutions</Link>
                <Link to={"/contact"}>Contact</Link>
            </li>
        </ul>
    )
}

export default Navbar