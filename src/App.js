import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Auth from './Auth/Auth';
import Home from './Components/Home';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";


function App() {

  const [sessionToken, setSessionToken] = useState("")
  const [userId, setUserId] = useState("")
  const [firstName, setFirstName] = useState("")
  const [role, setRole] = useState("")
  const [productId, setProductId] = useState("")
  const [products, setProducts] = useState([])
  const navigate = useNavigate()


  const updateToken = (newToken, uName, rName) => {
    localStorage.setItem("Authorization", newToken);
    localStorage.setItem("firstname", uName);
    localStorage.setItem("role", rName);
    setSessionToken(newToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    setUserId('')
    navigate('/')
  }


  return (
    <>
      <Navbar />

      <Routes>

        <Route path='/auth' element={
          <Auth sessionToken={sessionToken} userId={userId} setSessionToken={setSessionToken} updateToken={updateToken} setUserId={setUserId} />
        } />

        <Route path='/' element={
          <Home productId={productId} setProductId={setProductId} products={products} setProducts={setProducts} />
        } />
      </Routes>
    </>
  );
}

export default App;
