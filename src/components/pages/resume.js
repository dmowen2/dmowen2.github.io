import React from 'react'
import resume from '../resources/displayresume.pdf'
import Helmet from 'react-helmet'

const Resume = () => {
    return (
        <div>
            <Helmet>
                <title>Dmowen | Resume</title>
            </Helmet>

            <div className='page-header'>
                <div className = 'page-header-content'>
                    <h1>Resume</h1>
                </div>
            </div>
            <div className='resume_div'>
                    <iframe height='600vw' src={resume} width="100%">
                    </iframe>
                </div>
        </div>
    )
}

export default Resume