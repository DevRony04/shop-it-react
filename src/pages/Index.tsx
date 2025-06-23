
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';
import AppRoutes from '../components/AppRoutes';

const Index = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <AppRoutes />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default Index;
