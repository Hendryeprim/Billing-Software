import React from 'react';
import { motion } from 'framer-motion';
import { User, Building, MapPin, Phone, Mail, FileText, CheckCircle } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="section bg-gray-50 min-h-screen">
      <div className="container max-w-4xl mx-auto">
        <h1 className="h2 mb-6">Profile & Settings</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Sidebar */}
          <div className="md:col-span-1">
            <motion.div className="card mb-6 text-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <div className="profile-avatar mb-4 mx-auto">
                <User size={48} className="text-white" />
              </div>
              <h3 className="h3">ABC Hotel</h3>
              <p className="text-muted text-sm mb-4">Regular Customer</p>
              <div className="badge badge-success mb-2">Active Contract</div>
            </motion.div>
            
            <div className="card menu-card hidden md:block">
              <div className="menu-item active">Personal Information</div>
              <div className="menu-item">Business Information</div>
              <div className="menu-item">My Contracts</div>
              <div className="menu-item">Security</div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-2">
            
            {/* Active Contract Card */}
            <motion.div className="card mb-6 border-l-4 border-secondary" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="text-secondary" />
                <h3 className="h3 m-0">Active Contract</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
                <div className="text-muted">Vehicle</div>
                <div className="font-semibold text-right">Tata Ace</div>
                <div className="text-muted">Route</div>
                <div className="font-semibold text-right">Dindigul → Point 1</div>
                <div className="text-muted">Fixed Daily Rate</div>
                <div className="font-semibold text-right text-primary">₹10,000 / Day</div>
                <div className="text-muted">Valid Until</div>
                <div className="font-semibold text-right">31 Dec 2026</div>
              </div>
            </motion.div>
            
            {/* Business Information */}
            <motion.div className="card mb-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="h3 mb-6 pb-2 border-b">Business Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <div className="input-with-icon">
                    <Building className="input-icon text-muted" size={18} />
                    <input type="text" className="form-input" defaultValue="ABC Hotel" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">GST Number</label>
                  <div className="input-with-icon">
                    <FileText className="input-icon text-muted" size={18} />
                    <input type="text" className="form-input" defaultValue="33AAZCA1234Z1Z9" />
                  </div>
                </div>
                <div className="form-group md:col-span-2">
                  <label className="form-label">Business Address</label>
                  <div className="input-with-icon">
                    <MapPin className="input-icon text-muted" size={18} />
                    <input type="text" className="form-input" defaultValue="123 Main Street, Dindigul, Tamil Nadu" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div className="card mb-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="h3 mb-6 pb-2 border-b">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <div className="input-with-icon">
                    <Mail className="input-icon text-muted" size={18} />
                    <input type="email" className="form-input" defaultValue="contact@abchotel.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <div className="input-with-icon">
                    <Phone className="input-icon text-muted" size={18} />
                    <input type="text" className="form-input" defaultValue="+91 98765 43210" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>

      <style>{`
        .min-h-screen { min-height: 100vh; }
        .bg-gray-50 { background-color: var(--color-bg); }
        .max-w-4xl { max-width: 56rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mt-6 { margin-top: 1.5rem; }
        .pb-2 { padding-bottom: 0.5rem; }
        .p-4 { padding-top: 1rem; padding-bottom: 1rem; padding-left: 1rem; padding-right: 1rem; }
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .border-b { border-bottom: 1px solid var(--color-border); }
        .rounded-lg { border-radius: var(--radius-lg); }
        .m-0 { margin: 0; }
        
        .profile-avatar {
          width: 96px;
          height: 96px;
          background: var(--color-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
        }
        
        .border-l-4 { border-left-width: 4px; border-left-style: solid; }
        .border-secondary { border-left-color: var(--color-secondary); }
        
        .menu-card { padding: 0.5rem 0; }
        .menu-item {
          padding: 0.75rem 1.5rem;
          color: var(--color-text-muted);
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
        }
        .menu-item:hover {
          background: var(--color-bg);
          color: var(--color-primary);
        }
        .menu-item.active {
          color: var(--color-secondary);
          border-left: 3px solid var(--color-secondary);
          background: #f0fdf4; /* Light green tint */
        }
        
        .input-with-icon { position: relative; }
        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
        }
        .input-with-icon .form-input { padding-left: 2.5rem; width: 100%; }

        @media (min-width: 768px) {
          .md\\:col-span-1 { grid-column: span 1 / span 1; }
          .md\\:col-span-2 { grid-column: span 2 / span 2; }
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
          .hidden { display: none; }
          .md\\:block { display: block; }
        }
      `}</style>
    </div>
  );
}
