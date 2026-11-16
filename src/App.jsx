
import { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">Paradise Nursery</h2>

        <div className="nav-links">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('plants')}>Plants</button>
          <button onClick={() => setPage('cart')}>Cart</button>
        </div>
      </nav>

      {page === 'home' && (
        <>
          <section className="hero">
            <h1>Welcome to Paradise Nursery</h1>
            <p>Bring nature home with our beautiful plants.</p>
            <button onClick={() => setPage('plants')}>
              Get Started
            </button>
          </section>
          <AboutUs />
        </>
      )}

      {page === 'plants' && <ProductList />}

      {page === 'cart' && (
        <CartItem onContinueShopping={() => setPage('plants')} />
      )}
    </div>
  );
}

export default App;
