import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import { useCart } from '../contexts/CartContext';

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Logo</Link>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/Man" className="nav-link">Man</Link></li>
            <li className="nav-item"><Link to="/Women" className="nav-link">Women</Link></li>
            <li className="nav-item"><Link to="/Electronics" className="nav-link">Electronics</Link></li>
            <li className="nav-item"><Link to="/All" className="nav-link">All</Link></li>
            <li className="nav-item"><Link to="/Cart" className="nav-link">Cart ({totalItems})</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
