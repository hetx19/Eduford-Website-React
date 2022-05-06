import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
    return (
        <>
            <div className="cta">
                <h1>Enroll For Our Various Online Courses <br /> Anywhere From The World</h1>
                <Link to="/contact" className="btn">Contact us</Link>
            </div>
        </>
    )
}

export default Cta
