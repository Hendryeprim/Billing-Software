import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Truck, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <motion.h1 
              className="h1 hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Journey. <br />
              Our Vehicle. <br />
              <span style={{ color: 'var(--color-secondary)' }}>One Simple Booking.</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle text-muted"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Book reliable vehicles for local trips, business transportation and long-distance journeys with transparent pricing.
            </motion.p>
            <motion.div 
              className="hero-actions flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button className="btn btn-primary" onClick={() => navigate('/book')}>Book a Vehicle</button>
              <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }} onClick={() => navigate('/vehicles')}>Explore Vehicles</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Booking Widget */}
      <section className="section widget-section">
        <div className="container">
          <div className="card booking-widget">
            <h3 className="h3 mb-4">Quick Price Estimate</h3>
            <div className="widget-grid">
              <div className="form-group">
                <label className="form-label">Pickup Location</label>
                <div className="input-with-icon">
                  <MapPin className="input-icon text-muted" size={18} />
                  <input type="text" className="form-input" placeholder="Enter pickup location" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Drop Location</label>
                <div className="input-with-icon">
                  <MapPin className="input-icon text-muted" size={18} />
                  <input type="text" className="form-input" placeholder="Enter destination" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Date</label>
                <div className="input-with-icon">
                  <Calendar className="input-icon text-muted" size={18} />
                  <input type="date" className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Vehicle Type</label>
                <div className="input-with-icon">
                  <Truck className="input-icon text-muted" size={18} />
                  <select className="form-select">
                    <option value="">Select vehicle</option>
                    <option value="tata-ace">Tata Ace (750 KG)</option>
                    <option value="mini-truck">Mini Truck (1.5 Ton)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="widget-action flex justify-between items-center mt-4 pt-4 border-t">
              <div className="text-sm text-muted">Distance automatically calculated where possible</div>
              <button className="btn btn-primary" onClick={() => navigate('/book')}>Check Price <ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          padding: 8rem 0 6rem;
          background-image: linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.6)), url('/images/hero.jpg');
          background-size: cover;
          background-position: center;
          color: white;
        }
        .hero-title {
          margin-bottom: 1.5rem;
          color: white;
        }
        .hero-subtitle {
          font-size: 1.125rem;
          margin-bottom: 2.5rem;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .widget-section {
          margin-top: -3rem;
          position: relative;
          z-index: 10;
        }
        .booking-widget {
          padding: 2rem;
        }
        .widget-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .input-with-icon {
          position: relative;
        }
        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
        }
        .input-with-icon .form-input, .input-with-icon .form-select {
          padding-left: 2.5rem;
          width: 100%;
        }
        .border-t {
          border-top: 1px solid var(--color-border);
        }
        .mt-4 { margin-top: 1rem; }
        .pt-4 { padding-top: 1rem; }
        .mb-4 { margin-bottom: 1rem; }

        @media (max-width: 1024px) {
          .widget-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .hero-section { padding: 4rem 0 6rem; }
          .widget-grid { grid-template-columns: 1fr; }
          .booking-widget { padding: 1.5rem; }
          .widget-action { flex-direction: column; gap: 1rem; align-items: stretch; }
          .widget-action .btn { width: 100%; }
        }
      `}</style>
    </div>
  );
}
