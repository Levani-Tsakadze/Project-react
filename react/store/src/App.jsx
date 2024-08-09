import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Man from './components/Man';
import Women from './components/Women';
import Electronics from './components/Electronics';
import All from './components/All';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Man" element={<Man />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/All" element={<All />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
