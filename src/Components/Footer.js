import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <h4>About Us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, possimus iure dolores aperiam
                    numquam
                    voluptatibus at magni rerum, <br /> consequuntur deserunt blanditiis facere? Consequuntur laboriosam
                    tenetur
                    repellendus architecto aspernatur deleniti cum.</p>
                <div className="icons">
                    <Link to="/">
                        <i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa fa-instagram"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa fa-twitter"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa fa-linkedin"></i>
                    </Link>
                </div>
                <p>Made with <i className="fa fa-heart-o"></i> by Harshal Savaliya</p>
            </div>
        </>
    )
}

export default Footer
