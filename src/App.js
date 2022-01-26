import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
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
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/bookrec' element={<Bookrec/>}/>
        <Route path='/projects' element = {<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>  

      </Routes>

    </HashRouter>
    </div>
    <Footer />
    </div>
  );
}

export default App;

