
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import About from './components/About/About';

function App() {
  return (
  <div className='App'>
  <Header></Header>
  <Routes>
    <Route path='/' element={<Banner/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
   <Route path='/signup' element={<SignUp/>}></Route>
   <Route path='about' element={<About/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
  </Routes>
  <Footer></Footer>
  </div>
  );
}

export default App;
