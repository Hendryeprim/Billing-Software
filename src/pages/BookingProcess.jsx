import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, Truck, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BookingProcess() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Mock checking if user is regular with contract
  const isRegularCustomer = true; 

  const handleNext = () => setStep(s => Math.min(4, s + 1));
  const handlePrev = () => setStep(s => Math.max(1, s - 1));

  const renderStep1 = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h3 className="h3 mb-6">Step 1: Journey Details</h3>
      <div className="grid grid-cols-2 gap-6">
        <div className="form-group">
          <label className="form-label">Pickup Location</label>
          <input type="text" className="form-input" placeholder="e.g. Dindigul" defaultValue="Dindigul" />
        </div>
        <div className="form-group">
          <label className="form-label">Drop Location</label>
          <input type="text" className="form-input" placeholder="e.g. Point 1" defaultValue="Point 1" />
        </div>
        <div className="form-group">
          <label className="form-label">Date</label>
          <input type="date" className="form-input" defaultValue="2026-10-01" />
        </div>
        <div className="form-group">
          <label className="form-label">Time</label>
          <input type="time" className="form-input" defaultValue="10:30" />
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h3 className="h3 mb-6">Step 2: Select Vehicle</h3>
      <div className="grid md:grid-cols-1 gap-4">
        {['Tata Ace', 'Mini Truck', 'Large Truck'].map(v => (
          <div key={v} className={`card flex items-center justify-between cursor-pointer ${v === 'Tata Ace' ? 'selected-card' : ''}`}>
            <div className="flex items-center gap-4">
              <Truck className="text-muted" size={32} />
              <div>
                <div className="font-semibold">{v}</div>
                <div className="text-sm text-muted">{v === 'Tata Ace' ? '750 KG Capacity' : '1.5+ Ton Capacity'}</div>
              </div>
            </div>
            <div className="radio-circle">
              {v === 'Tata Ace' && <div className="radio-inner" />}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h3 className="h3 mb-6">Step 3: Price Summary</h3>
      <div className="card price-summary-card">
        <div className="flex justify-between items-center mb-6 pb-4 border-b">
          <div>
            <div className="font-semibold text-lg">Tata Ace</div>
            <div className="text-muted">Dindigul → Point 1 (25 KM)</div>
          </div>
          {isRegularCustomer && (
            <div className="badge badge-info">Contract Pricing</div>
          )}
        </div>
        
        {isRegularCustomer && (
          <div className="contract-notice mb-6">
            <CheckCircle size={16} className="text-secondary" />
            <span className="text-sm text-secondary font-medium">Your contracted rate has been automatically applied.</span>
          </div>
        )}

        <div className="price-breakdown mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-muted">Pricing Type</span>
            <span>{isRegularCustomer ? 'Contract Rate' : 'Distance Slab'}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-muted">Base Amount</span>
            <span>₹10,000</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-muted">Additional Charges</span>
            <span>₹0</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-muted">Tax</span>
            <span>₹0</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <span className="font-bold text-xl">Total</span>
          <span className="font-bold text-xl text-primary">₹10,000</span>
        </div>
      </div>
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
      <div className="success-icon-wrapper mx-auto mb-6">
        <CheckCircle size={64} className="text-secondary" />
      </div>
      <h2 className="h2 mb-4">Booking Confirmed</h2>
      <p className="text-muted mb-8">Your vehicle has been successfully booked.</p>
      
      <div className="card text-left max-w-md mx-auto mb-8 bg-gray-50">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-muted">Booking ID</div>
          <div className="font-semibold text-right">BK-20261001-0001</div>
          <div className="text-muted">Vehicle</div>
          <div className="font-semibold text-right">Tata Ace</div>
          <div className="text-muted">Route</div>
          <div className="font-semibold text-right">Dindigul → Point 1</div>
          <div className="text-muted">Date</div>
          <div className="font-semibold text-right">01 Oct 2026</div>
          <div className="text-muted">Amount</div>
          <div className="font-semibold text-right text-secondary">₹10,000</div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button className="btn btn-primary" onClick={() => navigate('/bookings')}>View Booking</button>
        <button className="btn btn-outline">Download Receipt</button>
      </div>
    </motion.div>
  );

  return (
    <div className="section booking-page">
      <div className="container max-w-4xl mx-auto">
        {step < 4 && (
          <div className="stepper mb-12 flex justify-between relative">
            <div className="stepper-line"></div>
            {[1, 2, 3].map(i => (
              <div key={i} className={`step-indicator flex-col items-center gap-2 ${step >= i ? 'active' : ''}`}>
                <div className="step-circle">{i}</div>
                <div className="step-label text-sm font-medium">{i === 1 ? 'Journey' : i === 2 ? 'Vehicle' : 'Price'}</div>
              </div>
            ))}
          </div>
        )}

        <div className="card booking-content mb-8">
          <AnimatePresence mode="wait">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
            {step === 4 && renderStep4()}
          </AnimatePresence>
        </div>

        {step < 4 && (
          <div className="flex justify-between mt-8">
            <button className={`btn btn-outline ${step === 1 ? 'invisible' : ''}`} onClick={handlePrev}>
              <ArrowLeft size={18} /> Back
            </button>
            <button className="btn btn-primary" onClick={handleNext}>
              {step === 3 ? 'Confirm Booking' : 'Next'} <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .max-w-4xl { max-width: 56rem; }
        .max-w-md { max-width: 28rem; }
        .text-center { text-align: center; }
        .text-left { text-align: left; }
        .text-right { text-align: right; }
        .invisible { visibility: hidden; }
        .cursor-pointer { cursor: pointer; }
        
        .stepper {
          position: relative;
        }
        .stepper-line {
          position: absolute;
          top: 1rem;
          left: 2rem;
          right: 2rem;
          height: 2px;
          background: var(--color-border);
          z-index: 0;
        }
        .step-indicator {
          position: relative;
          z-index: 1;
          display: flex;
          background: var(--color-bg);
          padding: 0 1rem;
        }
        .step-circle {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: var(--color-border);
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: var(--transition);
        }
        .step-indicator.active .step-circle {
          background: var(--color-secondary);
          color: white;
        }
        .step-indicator.active .step-label {
          color: var(--color-secondary);
        }

        .selected-card {
          border-color: var(--color-accent);
          background: rgba(59, 130, 246, 0.05);
        }
        .radio-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .selected-card .radio-circle {
          border-color: var(--color-accent);
        }
        .radio-inner {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-accent);
        }

        .contract-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: #D1FAE5;
          border-radius: var(--radius-md);
        }
        .border-b { border-bottom: 1px solid var(--color-border); }
        .border-t { border-top: 1px solid var(--color-border); }
        .pb-4 { padding-bottom: 1rem; }
        .pt-4 { padding-top: 1rem; }
        
        .success-icon-wrapper {
          display: inline-flex;
          padding: 1.5rem;
          background: #D1FAE5;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
