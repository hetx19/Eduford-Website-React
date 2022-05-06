import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './Logo/logo.png';

const SubHome = (props) => {
    let { title } = props;

    return (
        <>
            <div className="sub-home">
                <nav className="navLinks" id="nav-links">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/course">Course</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact us</Link>
                        </li>
                    </ul>
                </nav>
                <div className="text">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}

export default SubHome
