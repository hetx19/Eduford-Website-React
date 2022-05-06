import React from 'react'
import BlogLeft from "./BlogLeft"
import BlogRight from "./BlogRight"

const Blog = () => {
    return (
        <>
            <div className="blog">
                <div className="row">
                    <BlogLeft />
                    <BlogRight />
                </div>
            </div>
        </>
    )
}

export default Blog
