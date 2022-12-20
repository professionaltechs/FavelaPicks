import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from './pages/user/Login';
import { AdminLogin } from './pages/admin/Login';
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
import { HomeDelete } from './pages/user/HomeDelete';
import { AuthProvider } from './authContext/AuthProvider';
import Index from './components/user/stripe/Index';
import { Success } from './pages/user/Success';
import { UserProfile } from './pages/user/UserProfile';
import { AdminDashboard } from './pages/admin/AdminDashboard';

function App() {
  return (
    // <Delete/>
    // <Index/>
    <AuthProvider>
      <Router>
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
          <Route path='/UserProfile' element={<UserProfile/>}/>
          <Route path='/playerGallery' element={<PlayerGallery/>}/>
          <Route path='/success' element={<Success/>}/>

          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/admindashboard' element={<AdminDashboard/>}/>
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
