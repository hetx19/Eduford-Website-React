import React from 'react'
import Certificate from "./Images/certificate.jpg"

const BlogLeft = () => {
    return (
        <>
            <div className="l">
                <img src={Certificate} alt="" />
                <h2>Our Certification & Online Programs for 2021</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, error eum corporis perferendis
                    provident porro laboriosam qui minus! Dolor animi vitae sequi, culpa corporis doloremque cumque
                    optio in vel alias.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, error eum corporis perferendis
                    provident porro laboriosam qui minus! Dolor animi vitae sequi, culpa corporis doloremque cumque
                    optio in vel alias.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, error eum corporis perferendis
                    provident porro laboriosam qui minus! Dolor animi vitae sequi, culpa corporis doloremque cumque
                    optio in vel alias.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, error eum corporis perferendis
                    provident porro laboriosam qui minus! Dolor animi vitae sequi, culpa corporis doloremque cumque
                    optio in vel alias.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, error eum corporis perferendis
                    provident porro laboriosam qui minus! Dolor animi vitae sequi, culpa corporis doloremque cumque
                    optio in vel alias.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, error eum corporis perferendis
                    provident porro laboriosam qui minus! Dolor animi vitae sequi, culpa corporis doloremque cumque
                    optio in vel alias.</p>

                <div className="box">
                    <h3>Write A Comment</h3>
                    <form className="form">
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="email" placeholder="Enter Your Email Address" />
                        <textarea rows="10" placeholder="Your Comment"></textarea>
                        <button type="submit" className="btn btn-2">Post Comment</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BlogLeft
