import React from 'react'
import User1 from "./Images/user1.jpg"
import User2 from "./Images/user2.jpg"

const Student = () => {
    return (
        <>
            <div className="students">
                <h1>What our Students Says</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div className="row">
                    <div className="student-con">
                        <img src={User1} alt="" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum est quo sequi eum aspernatur
                            eveniet quis porro illum sint quaerat?</p>
                        <h3>Christina</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>

                    <div className="student-con">
                        <img src={User2} alt="" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum est quo sequi eum aspernatur
                            eveniet quis porro illum sint quaerat?</p>
                        <br />
                        <h3>David</h3>
                        <br />
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Student
