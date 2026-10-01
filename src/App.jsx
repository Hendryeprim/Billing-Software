import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Compass, FileText, User, CreditCard } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';

// Pages
import HomePage from './pages/HomePage';
import VehiclesPage from './pages/VehiclesPage';
import BookingsPage from './pages/BookingsPage';
import InvoicesPage from './pages/InvoicesPage';
import ProfilePage from './pages/ProfilePage';
import BookingProcess from './pages/BookingProcess';

function Navigation() {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/vehicles', label: 'Vehicles', icon: <Compass size={20} /> },
    { path: '/bookings', label: 'Bookings', icon: <FileText size={20} /> },
    { path: '/invoices', label: 'Invoices', icon: <CreditCard size={20} /> },
    { path: '/profile', label: 'Profile', icon: <User size={20} /> }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <div className="container flex justify-between items-center h-full">
          <Link to="/" className="logo h3 flex items-center gap-2">
            <img src="/images/logo.jpg" alt="Stranz Logo" style={{ height: '32px', borderRadius: '4px' }} />
            Stranz
          </Link>
          <div className="nav-links flex gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link to="/book" className="btn btn-primary">Book Now</Link>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav">
        <div className="mobile-nav-inner">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`mobile-nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <style>{`
        .desktop-nav {
          background: var(--color-bg-card);
          height: 72px;
          border-bottom: 1px solid var(--color-border);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-item {
          font-weight: 500;
          color: var(--color-text-muted);
          transition: var(--transition);
        }
        .nav-item:hover, .nav-item.active {
          color: var(--color-primary);
        }
        .logo { font-weight: 800; letter-spacing: -0.05em; }
        
        .mobile-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--color-bg-card);
          border-top: 1px solid var(--color-border);
          padding-bottom: env(safe-area-inset-bottom);
          z-index: 100;
        }
        .mobile-nav-inner {
          display: flex;
          justify-content: space-around;
          padding: 0.5rem;
        }
        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          padding: 0.5rem;
        }
        .mobile-nav-item.active {
          color: var(--color-secondary);
        }
        @media (max-width: 768px) {
          .desktop-nav .nav-links, .desktop-nav .btn { display: none; }
          .mobile-nav { display: block; }
        }
      `}</style>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vehicles" element={<VehiclesPage />} />
            <Route path="/book" element={<BookingProcess />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/invoices" element={<InvoicesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
      <style>{`
        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
          padding-bottom: 80px; /* Space for mobile nav */
        }
        @media (min-width: 769px) {
          .main-content { padding-bottom: 0; }
        }
      `}</style>
    </Router>
  );
}

export default App;
