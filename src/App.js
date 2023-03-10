import './App.css';
import './App.scss'
import React from 'react'
import Navbar from './Components/Navbar';
import Auth from './Auth/Auth';
import Home from './Components/Home';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from './Components/Sidebar';


function App() {
  const [sessionToken, setSessionToken] = useState("")
  const [userId, setUserId] = useState("")
  const [firstName, setFirstName] = useState("")
  const [role, setRole] = useState("")
  const [productId, setProductId] = useState("");
  const [products, setProducts] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])
  const [listing, setListing] = useState([])
  const [clickedProduct, setClickedProduct] = useState([])
  const [showDetails, setShowDetails] = useState(false)
  const [selectedGender, setSelectedGender] = useState(null)
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedKids, setSelectedKids] = useState(null)
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
      {/* <Sidebar /> */}

      <Routes>

        <Route path='/auth' element={
          <Auth sessionToken={sessionToken} userId={userId} setSessionToken={setSessionToken} updateToken={updateToken} setUserId={setUserId} />
        } />

        <Route path='/' element={
          <Home shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} productId={productId} setProductId={setProductId} products={products} setProducts={setProducts} clickedProduct={clickedProduct} setClickedProduct={setClickedProduct} showDetails={showDetails} setShowDetails={setShowDetails} />
        } />


      </Routes>
    </>
  );
}

export default App;
