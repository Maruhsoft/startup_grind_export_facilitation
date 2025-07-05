import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, this would send reset instructions
      navigate('/set-new-password');
    }
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Forgot Password?
        </h1>
        <p className="text-gray-600">
          No worries, we will send reset instructions
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Enter email address"
          required
          error={errors.email}
        />

        <Button type="submit">
          Reset Password
        </Button>
      </form>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate('/login')}
          className="text-gray-900 hover:text-gray-700 font-medium"
        >
          Back to Login
        </button>
      </div>
    </Layout>
  );
};

export default ForgotPasswordPage;