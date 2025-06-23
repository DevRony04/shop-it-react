
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import ProductDetailPage from './ProductDetailPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import ProfilePage from './ProfilePage';
import LoginPage from './auth/LoginPage';
import SignupPage from './auth/SignupPage';

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
