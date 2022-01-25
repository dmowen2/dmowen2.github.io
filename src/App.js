import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/home'
import About from './components/pages/about'
import Blog from './components/pages/blog';
import Resume from './components/pages/resume';
import Bookrec from './components/pages/bookrec';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className='page-container'>
    <div className='content-wrapper'>
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' exact component={<Home/>}/>
        <Route path='/home' exact component={<Home/>}/>
        <Route path='/about' exact component={<About/>}/>
        <Route path='/blog' exact component={<Blog/>}/>
        <Route path='/bookrec' exact component={<Bookrec/>}/>
        <Route path='/projects' exact component = {<Projects/>}/>
        <Route path='/resume' exact component={<Resume/>}/>
        <Route path='/contact' exact component={<Contact/>}/>  

      </Routes>

    </Router>
    </div>
    <Footer />
    </div>
  );
}

export default App;

