
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import About from './components/About/About';
import { createContext, useState } from 'react';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Checkout from './components/Checkout/Checkout';
import Blogs from './components/Blogs/Blogs';

export const OrderContext=createContext()
function App() {
  const [order,setOrder]=useState({});
  const sohan='456'
  
  return (

    <div className='App'>
        <OrderContext.Provider value={order}>
  <Header></Header>
  <Routes>
    <Route path='/' element={<Banner setOrder={setOrder}></Banner>}></Route>
    <Route path='/login' element={<Login/>}></Route>
   <Route path='/signup' element={<SignUp/>}></Route>
   <Route path='about' element={<About/>}></Route>
   <Route path='/blogs' element={<Blogs/>}></Route>
   <Route path='/checkout' element={
     <RequireAuth>
       <Checkout order={order}></Checkout>
     </RequireAuth>
   }></Route>
    <Route path='*' element={<NotFound/>}></Route>
  </Routes>
  <Footer></Footer>
  </OrderContext.Provider>
  </div>
 
  );
}

export default App;
