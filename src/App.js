import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from './pages/user/Login';
import { Signup } from './pages/user/Signup';
import './assets/css/bootstrap.min.css'
// import './assets/css/fontawesome.min.css'
// import './assets/fonts/flaticon.css'
import './assets/css/animate.css'
// import './assets/css/owl.carousel.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './App.css';
import { NavBar } from './components/user/NavBar';
import { Footer } from './components/user/Footer';
import { Home } from './pages/user/Home';
import { Premium } from './pages/user/Premium';
import { Contact } from './pages/user/Contact';
import { Blog } from './pages/user/Blog';
import { NBA } from './pages/user/NBA';
import { NCAAF } from './pages/user/NCAAF';
import { NCAAB } from './pages/user/NCAAB';
import { NFL } from './pages/user/NFL';
import { PlayerGallery } from './pages/user/PlayerGallery';
import Delete from './components/user/Delete';

function App() {
  return (
    // <Delete/>
    <Router>
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/premium' element={<Premium/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/NBA' element={<NBA/>}/>
        <Route path='/NCAAF' element={<NCAAF/>}/>
        <Route path='/NCAAB' element={<NCAAB/>}/>
        <Route path='/NFL' element={<NFL/>}/>
        <Route path='/playerGallery' element={<PlayerGallery/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
