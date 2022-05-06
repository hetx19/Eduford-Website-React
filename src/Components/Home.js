import React from 'react'
import { Link } from 'react-router-dom/'
import Logo from "./Logo/logo.png"

const Home = () => {
    return (
        <>
            <div className="home">
                <nav>
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>

                    <div className="navLinks" id="menu">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/courses">Course</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="text">
                    <h1>World Biggest University</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia iure cumque explicabo ratione! <br />
                        Cum illo fugiat, voluptas, veniam error rerum aperiam,facere praesentium <br />blanditiis accusamus
                        exercitationem maxime. Nobis, dolor neque?</p>
                    <Link to="/about" className="btn">Visit us to know more</Link>
                </div>
            </div>
        </>
    )
}

export default Home
