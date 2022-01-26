import React from 'react'
import Helmet from 'react-helmet'

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Dmowen | Blog</title>
            </Helmet>   

            <div className='page-header'>
                <div className = 'page-header-content'>
                    <h1>Blog</h1>
                </div>
            </div>
        </div>
    )
}

export default Blog