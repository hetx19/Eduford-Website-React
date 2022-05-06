import React from 'react'
import { Link } from 'react-router-dom'
import P1 from './Images/p1.png'
import P2 from './Images/p2.png'
import P3 from './Images/p3.png'
import P4 from './Images/p4.png'
import P5 from './Images/p5.png'
import P6 from './Images/p6.png'
import P7 from './Images/p7.png'

const About = () => {
    return (
        <>
            <div className="about-us">
                <div className="row">
                    <div className="about-con">
                        <h1>We are the world's largest teaching platform</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui atque voluptate explicabo maxime
                            praesentium impedit laudantium temporibus modi alias provident, nobis, expedita iusto voluptatibus
                            cupiditate natus! Id sequi quibusdam et!</p>
                        <Link href="/" className="btn btn-2">Explore Now</Link>
                    </div>
                    <div className="about-con">
                        <img src={P1} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="about-con">
                        <img src={P2} alt="" />
                    </div>
                    <div className="about-con">
                        <h1>Dorm Life: Living on Campus</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui atque voluptate explicabo maxime
                            praesentium impedit laudantium temporibus modi alias provident, nobis, expedita iusto voluptatibus
                            cupiditate natus! Id sequi quibusdam et!</p>
                        <Link href="/" className="btn btn-2">Explore Now</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="about-con">
                        <h1>Clubs and Organizations</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui atque voluptate explicabo maxime
                            praesentium impedit laudantium temporibus modi alias provident, nobis, expedita iusto voluptatibus
                            cupiditate natus! Id sequi quibusdam et!</p>
                        <Link href="/" className="btn btn-2">Explore Now</Link>
                    </div>
                    <div className="about-con">
                        <img src={P3} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="about-con">
                        <img src={P4} alt="" />
                    </div>
                    <div className="about-con">
                        <h1>Faculty-in-Residence</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui atque voluptate explicabo maxime
                            praesentium impedit laudantium temporibus modi alias provident, nobis, expedita iusto voluptatibus
                            cupiditate natus! Id sequi quibusdam et!</p>
                        <Link href="/" className="btn btn-2">Explore Now</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="about-con">
                        <h1>Our Priorities in This Moment</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui atque voluptate explicabo maxime
                            praesentium impedit laudantium temporibus modi alias provident, nobis, expedita iusto voluptatibus
                            cupiditate natus! Id sequi quibusdam et!</p>
                        <Link href="/" className="btn btn-2">Explore Now</Link>
                    </div>
                    <div className="about-con">
                        <img src={P5} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="about-con">
                        <img src={P6} alt="" />
                    </div>
                    <div className="about-con">
                        <h1>Ensuring safe and healthy campuses</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui atque voluptate explicabo maxime
                            praesentium impedit laudantium temporibus modi alias provident, nobis, expedita iusto voluptatibus
                            cupiditate natus! Id sequi quibusdam et!</p>
                        <Link href="/" className="btn btn-2">Explore Now</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="about-con">
                        <h1>Serving others through discovery and impact</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui atque voluptate explicabo maxime
                            praesentium impedit laudantium temporibus modi alias provident, nobis, expedita iusto voluptatibus
                            cupiditate natus! Id sequi quibusdam et!</p>
                        <Link href="/" className="btn btn-2">Explore Now</Link>
                    </div>
                    <div className="about-con">
                        <img src={P7} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
