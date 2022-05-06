import React from 'react'
import Library from './Images/library.png'
import Basketball from './Images/basketball.png'
import Cafeteria from './Images/cafeteria.png'

const Facilities = () => {
    return (
        <>
            <div className="facilities">
                <h1>Our Facilities</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div className="row">
                    <div className="facility-con">
                        <img src={Library} alt='' />
                        <h3>World Class Library</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dolore voluptatum unde praesentium!
                            Reprehenderit</p>
                    </div>
                    <div className="facility-con">
                        <img src={Basketball} alt='' />
                        <h3>Largest Play Court</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dolore voluptatum unde praesentium!
                            Reprehenderit</p>
                    </div>
                    <div className="facility-con">
                        <img src={Cafeteria} alt='' />
                        <h3>Healthy and Tasty Campus Cafeteria</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dolore voluptatum unde praesentium!
                            Reprehenderit</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Facilities
