import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="Con-us">
                <div className="row">
                    <div className="con-con">
                        <div>
                            <i className="fa fa-home"></i>
                            <span>
                                <h5>XYZ Road, ABC Building</h5>
                                <p>Ahmedabad, Gujarat, India</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-phone"></i>
                            <span>
                                <h5>+1 9999982626</h5>
                                <p>Monday To Saturday 10 A.m 6 P.m</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <span>
                                <h5>harshal.savaliya@eduford.com</h5>
                                <p>Email us</p>
                            </span>
                        </div>
                    </div>
                    <div className="con-con">
                        <form action="">
                            <input type="text" placeholder="Enter your Name" required />
                            <input type="email" placeholder="Enter your Email Id" required />
                            <input type="text" placeholder="Enter your Subject" required />
                            <textarea rows="8" placeholder="Message" required></textarea>
                            <button className="btn btn-2">Sent Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
