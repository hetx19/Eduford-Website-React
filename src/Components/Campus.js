import React from 'react'
import London from './Images/london.png'
import NewYork from './Images/newyork.png'
import Washington from './Images/washington.png'

const Campus = () => {
    return (
        <>
            <div className="campus">
                <h1>Our Golbal Campus</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="row">
                    <div className="camp">
                        <img src={London} alt='' />
                        <div className="layer">
                            <h3>London</h3>
                        </div>
                    </div>

                    <div className="camp">
                        <img src={NewYork} alt='' />
                        <div className="layer">
                            <h3>New York</h3>
                        </div>
                    </div>

                    <div className="camp">
                        <img src={Washington} alt="" />
                        <div className="layer">
                            <h3>Washington</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Campus
