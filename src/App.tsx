import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import BankVerificationPage from './pages/BankVerificationPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SetNewPasswordPage from './pages/SetNewPasswordPage';
import VendorProfilePage from './pages/VendorProfilePage';
import VerificationCodePage from './pages/VerificationCodePage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/vendor-profile" element={<VendorProfilePage />} />
            <Route path="/bank-verification" element={<BankVerificationPage />} />
            <Route path="/verification-code" element={<VerificationCodePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/set-new-password" element={<SetNewPasswordPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;