import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, MapPin, Calendar, Clock, ChevronRight, Truck } from 'lucide-react';

const MOCK_BOOKINGS = [
  {
    id: 'BK-20261001-0001',
    vehicle: 'Tata Ace',
    vehicleNumber: 'TN57AB1234',
    route: 'Dindigul → Point 1',
    date: '01 Oct 2026',
    time: '10:30 AM',
    amount: '₹10,000',
    status: 'Confirmed',
    type: 'upcoming'
  },
  {
    id: 'BK-20260928-0042',
    vehicle: 'Mini Truck',
    vehicleNumber: 'TN57CD5678',
    route: 'Madurai → Chennai',
    date: '28 Sep 2026',
    time: '08:00 AM',
    amount: '₹4,500',
    status: 'Completed',
    type: 'completed'
  }
];

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredBookings = MOCK_BOOKINGS.filter(b => b.type === activeTab);

  return (
    <div className="section bg-gray-50 min-h-screen">
      <div className="container">
        <h1 className="h2 mb-6">My Bookings</h1>
        
        {/* Tabs */}
        <div className="tabs flex gap-4 mb-8 overflow-x-auto pb-2">
          {['upcoming', 'active', 'completed', 'cancelled'].map(tab => (
            <button 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="bookings-list grid gap-4">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking, index) => (
              <motion.div 
                key={booking.id}
                className="card booking-list-card flex flex-col md:flex-row md:items-center justify-between gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="icon-box bg-gray-100 p-3 rounded-lg">
                    <Truck className="text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold">{booking.id}</span>
                      <span className={`badge ${booking.status === 'Confirmed' ? 'badge-info' : 'bg-gray-200 text-gray-700'}`}>
                        {booking.status}
                      </span>
                    </div>
                    <h3 className="h3 text-lg mb-2">{booking.vehicle}</h3>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} /> {booking.route}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} /> {booking.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} /> {booking.time}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 mt-4 md:mt-0">
                  <div className="text-xl font-bold text-primary mb-2">{booking.amount}</div>
                  <button className="btn btn-outline text-sm">View Details</button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="empty-state card text-center py-12">
              <FileText size={48} className="text-muted mx-auto mb-4" />
              <h3 className="h3 mb-2">No {activeTab} bookings</h3>
              <p className="text-muted mb-6">Your next journey starts here.</p>
              <button className="btn btn-primary">Book a Vehicle</button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .min-h-screen { min-height: 100vh; }
        .bg-gray-50 { background-color: var(--color-bg); }
        .bg-gray-100 { background-color: #F3F4F6; }
        .bg-gray-200 { background-color: #E5E7EB; }
        .text-gray-700 { color: #374151; }
        .rounded-lg { border-radius: var(--radius-lg); }
        .p-3 { padding: 0.75rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .mb-1 { margin-bottom: 0.25rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mt-4 { margin-top: 1rem; }
        .pt-4 { padding-top: 1rem; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .gap-x-6 { column-gap: 1.5rem; }
        .gap-y-2 { row-gap: 0.5rem; }
        
        .tab-btn {
          padding: 0.5rem 1.5rem;
          border: none;
          background: transparent;
          color: var(--color-text-muted);
          font-weight: 500;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: var(--transition);
          white-space: nowrap;
        }
        .tab-btn:hover {
          color: var(--color-primary);
        }
        .tab-btn.active {
          color: var(--color-secondary);
          border-bottom-color: var(--color-secondary);
        }

        .tabs {
          scrollbar-width: none;
        }
        .tabs::-webkit-scrollbar {
          display: none;
        }

        @media (min-width: 768px) {
          .md\\:flex-row { flex-direction: row; }
          .md\\:flex-col { flex-direction: column; }
          .md\\:items-center { align-items: center; }
          .md\\:items-end { align-items: flex-end; }
          .md\\:border-t-0 { border-top: none; }
          .md\\:pt-0 { padding-top: 0; }
          .md\\:mt-0 { margin-top: 0; }
        }
      `}</style>
    </div>
  );
}
