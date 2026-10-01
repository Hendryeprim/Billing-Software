import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const MOCK_INVOICES = [
  {
    id: 'INV-2026-00021',
    date: '01 Oct 2026',
    amount: '₹10,000',
    status: 'Paid',
    bookingId: 'BK-20261001-0001'
  },
  {
    id: 'INV-2026-00020',
    date: '28 Sep 2026',
    amount: '₹4,500',
    status: 'Pending',
    bookingId: 'BK-20260928-0042'
  }
];

export default function InvoicesPage() {
  return (
    <div className="section bg-gray-50 min-h-screen">
      <div className="container">
        
        {/* Outstanding Summary */}
        <div className="card outstanding-card mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="summary-item">
              <div className="text-sm opacity-80 mb-1">Total Outstanding</div>
              <div className="text-3xl font-bold">₹4,500</div>
            </div>
            <div className="summary-item">
              <div className="text-sm opacity-80 mb-1">Due Invoices</div>
              <div className="text-3xl font-bold">1</div>
            </div>
            <div className="summary-item flex items-center justify-start md:justify-end">
              <button className="btn btn-outline border-white text-white hover-bg-white hover-text-primary">
                Make Payment
              </button>
            </div>
          </div>
        </div>

        <h2 className="h2 mb-6">My Invoices</h2>
        
        <div className="grid gap-4">
          {MOCK_INVOICES.map((invoice, index) => (
            <motion.div 
              key={invoice.id}
              className="card flex flex-col md:flex-row justify-between md:items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${invoice.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  <FileText size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold">{invoice.id}</span>
                    <span className={`badge ${invoice.status === 'Paid' ? 'badge-success' : 'bg-yellow-100 text-yellow-800'}`}>
                      {invoice.status}
                    </span>
                  </div>
                  <div className="text-sm text-muted">
                    Date: {invoice.date} • Booking: {invoice.bookingId}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0">
                <div className="text-xl font-bold text-primary">{invoice.amount}</div>
                <div className="flex gap-2">
                  <button className="btn btn-outline btn-sm">View</button>
                  <button className="btn btn-outline btn-sm flex items-center gap-1">
                    <Download size={14} /> PDF
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .min-h-screen { min-height: 100vh; }
        .bg-gray-50 { background-color: var(--color-bg); }
        .mb-1 { margin-bottom: 0.25rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mt-4 { margin-top: 1rem; }
        .pt-4 { padding-top: 1rem; }
        .p-3 { padding: 0.75rem; }
        .text-3xl { font-size: 1.875rem; }
        .text-xl { font-size: 1.25rem; }
        .opacity-80 { opacity: 0.8; }
        .rounded-full { border-radius: 9999px; }
        .w-full { width: 100%; }
        
        .outstanding-card {
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          border: none;
        }
        
        .hover-bg-white:hover { background-color: white; }
        .hover-text-primary:hover { color: var(--color-primary); }

        .bg-green-100 { background-color: #D1FAE5; }
        .text-green-600 { color: #059669; }
        .bg-yellow-100 { background-color: #FEF3C7; }
        .text-yellow-600 { color: #D97706; }
        .text-yellow-800 { color: #92400E; }
        
        .btn-sm {
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
        }

        @media (min-width: 768px) {
          .md\\:flex-row { flex-direction: row; }
          .md\\:items-center { align-items: center; }
          .md\\:justify-end { justify-content: flex-end; }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
          .md\\:w-auto { width: auto; }
          .md\\:mt-0 { margin-top: 0; }
          .md\\:pt-0 { padding-top: 0; }
          .md\\:border-t-0 { border-top: none; }
        }
      `}</style>
    </div>
  );
}
