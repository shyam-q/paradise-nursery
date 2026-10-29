import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

function Navbar() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="navbar">
      <Link className="brand" to="/">🌿 Paradise Nursery</Link>
      <nav aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-link">Cart <span className="cart-count">{totalItems}</span></Link>
      </nav>
    </header>
  );
}

function LandingPage() {
  return (
    <main className="hero">
      <div className="hero-shade" />
      <section className="hero-content">
        <p className="eyebrow">GROW A LITTLE HAPPINESS</p>
        <h1>Bring nature<br />into your home.</h1>
        <p className="hero-copy">Thoughtfully selected houseplants to make every corner feel alive.</p>
        <Link className="button button-light" to="/plants">Get Started</Link>
        <Link className="hero-about" to="/about">Learn about Paradise Nursery →</Link>
      </section>
    </main>
  );
}

function App() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className="app-shell">
      {!isLanding && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<><Navbar /><ProductList /></>} />
        <Route path="/cart" element={<><Navbar /><CartItem /></>} />
        <Route path="*" element={<main className="empty-state"><h2>Page not found</h2><Link className="button" to="/">Return home</Link></main>} />
      </Routes>
      <footer className="site-footer">© {new Date().getFullYear()} Paradise Nursery · Grow something good.</footer>
    </div>
  );
}

export default App;