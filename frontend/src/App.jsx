import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Toaster} from 'react-hot-toast';
import Home from './Pages/Home';
import Success from './Pages/Success';
import NotFound from './Pages/NotFound';
import React from 'react'
import Menu from './Pages/Menu';
import OrderOnline from './Pages/OrderOnline';
import CartContent from './Pages/Cart'
import Checkout from './Pages/CheckOut';
import SuccessPayment from './Pages/SuccessPayment'
import Signup from './Pages/Signup';
import Login from './Pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderonline" element={<OrderOnline/>}/>
        <Route path="/cart" element={<CartContent/>}/>
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/successfullpayment" element={<SuccessPayment/>} /> 
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App