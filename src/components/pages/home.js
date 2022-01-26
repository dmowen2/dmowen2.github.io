import React from 'react'
import homeheadimg from '../resources/hometopimg.png'
import Helmet from 'react-helmet'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dmowen | Home</title>
            </Helmet>
            <div className='page-header'>
            <div className = 'page-header-content'>
                <h1>Home</h1>
            </div>
            </div>
            <div className='page-title-box'>
            <h1>Welcome</h1>
            </div>
               
            <img src = {homeheadimg} className='heading-img'/>

            <div className='hello-box'>
                <h1>Hello, I'm Derian</h1>
            </div>
            <div className='home-text-box'>
            <p> Welcome to my personal website and blog dedicated to documenting my experiences working on my programming projects and documenting anything I happen to learn within the fields of Data Science and Computer Science. </p>
            </div>
            <div className='bottom-spacer'>
            </div>
        </div>
        
    )
}

export default Home
