import React from 'react'
import './pages.css'
import Helmet from 'react-helmet'

const About = () => {
    return (
    <div> 
        <Helmet>
            <title>Dmowen | About Me</title>
        </Helmet>
        <div className='page-header'>
            <div className = 'page-header-content'>
                <h1>About Me</h1>
            </div>
        </div>
        
    </div>
    )
}
// <img src={dmopic} alt="dmopic"/>
/*
<div className='ourteam-container'>
<div className='ourteam-header'>
   <h1>Team</h1>
</div>

<div className='ourteam-content'>
  <div className='ourteam-imgblock'>
        <img src = {dmopic} height = {250} width = {250} />
  </div>
  <div className='ourteam-textbox'>
      <p>Name: Derian Mowen</p> 
      <p>Position: Founder</p>
      <p>Email: dmowen@trinity.edu</p>
  </div>
</div>
</div>
*/

export default About