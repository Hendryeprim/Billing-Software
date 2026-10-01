import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, Truck } from 'lucide-react';

const MOCK_VEHICLES = [
  {
    id: 1,
    name: 'Tata Ace',
    type: 'Small commercial vehicle',
    capacity: '750 KG',
    image: '/images/tata_ace.jpg',
    suitable: ['Small goods', 'Local delivery', 'Business transportation'],
    features: ['Reliable', 'Compact', 'Business friendly', 'Suitable for local transportation'],
    prices: [
      { range: '0–10 KM', price: '₹1,000' },
      { range: '10–20 KM', price: '₹1,500' },
      { range: '20–30 KM', price: '₹2,000' },
      { range: '30–50 KM', price: '₹3,000' }
    ]
  },
  {
    id: 2,
    name: 'Mini Truck',
    type: 'Medium commercial vehicle',
    capacity: '1.5 Ton',
    image: '/images/mini_truck.jpg',
    suitable: ['Medium goods', 'Business transportation', 'Inter-city transport'],
    features: ['Spacious', 'Secure', 'Weather resistant'],
    prices: [
      { range: '0–10 KM', price: '₹1,800' },
      { range: '10–20 KM', price: '₹2,500' },
      { range: '20–30 KM', price: '₹3,200' },
      { range: '30–50 KM', price: '₹4,500' }
    ]
  },
  {
    id: 3,
    name: 'Large Truck',
    type: 'Heavy commercial vehicle',
    capacity: '5 Ton',
    image: '/images/large_truck.jpg',
    suitable: ['Heavy goods', 'Long-distance transport', 'Industrial loads'],
    features: ['High capacity', 'Nationwide permit', 'GPS Tracked'],
    prices: [
      { range: '0–50 KM', price: '₹5,000' },
      { range: '50–100 KM', price: '₹8,500' },
      { range: '100–200 KM', price: '₹15,000' }
    ]
  }
];

export default function VehiclesPage() {
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="h2 mb-4">Find the right vehicle for your journey</h1>
          <p className="text-muted max-w-2xl mx-auto">Explore our premium fleet of vehicles suitable for any transport requirement. From local deliveries to long-distance hauling.</p>
        </div>

        <div className="vehicles-grid">
          {MOCK_VEHICLES.map((vehicle, index) => (
            <motion.div 
              key={vehicle.id}
              className="card vehicle-card flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="vehicle-image-wrapper">
                <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
              </div>
              <div className="vehicle-content flex-1">
                <h3 className="h3 mb-2">{vehicle.name}</h3>
                <p className="text-muted text-sm mb-4">{vehicle.type}</p>
                
                <div className="capacity-badge mb-4">
                  <span className="font-semibold text-primary">Capacity:</span> {vehicle.capacity}
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold mb-2 text-primary">Suitable for:</div>
                  <ul className="feature-list">
                    {vehicle.suitable.map((item, i) => (
                      <li key={i}><Check size={16} className="text-secondary" /> {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="pricing-preview mb-6">
                  <div className="text-sm font-semibold mb-2 text-primary">Distance Pricing Preview:</div>
                  <div className="price-tags flex gap-2 overflow-x-auto pb-2">
                    {vehicle.prices.slice(0, 3).map((price, i) => (
                      <div key={i} className="price-tag">
                        <div className="price-range text-xs text-muted">{price.range}</div>
                        <div className="price-amount font-semibold">{price.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <button 
                className="btn btn-outline w-full mt-auto"
                onClick={() => navigate('/book')}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .mb-12 { margin-bottom: 3rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-2xl { max-width: 42rem; }
        .flex-1 { flex: 1; }
        .w-full { width: 100%; }
        .mt-auto { margin-top: auto; }
        
        .vehicles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .vehicle-card {
          display: flex;
          height: 100%;
        }

        .vehicle-image-wrapper {
          height: 200px;
          background: var(--color-bg);
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vehicle-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .vehicle-card:hover .vehicle-image {
          transform: scale(1.05);
        }

        .capacity-badge {
          display: inline-block;
          background: #DBEAFE;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
          color: var(--color-text-muted);
        }

        .price-tags {
          display: flex;
          flex-wrap: wrap;
        }
        .price-tag {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.5rem;
          min-width: 80px;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .vehicles-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .vehicles-grid { grid-template-columns: 1fr; gap: 1.5rem; }
        }
      `}</style>
    </div>
  );
}
