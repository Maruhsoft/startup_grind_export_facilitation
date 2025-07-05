import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const SetNewPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!newPassword) {
      newErrors.newPassword = 'Password is required';
    } else if (newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, this would update the password
      alert('Password reset successfully!');
      navigate('/login');
    }
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Set New Password
        </h1>
        <p className="text-gray-600">
          Must be at least 6 characters
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="New Password"
          type="password"
          value={newPassword}
          onChange={setNewPassword}
          placeholder="Enter password"
          required
          error={errors.newPassword}
        />

        <FormInput
          label="Confirm New Password"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="Enter password"
          required
          showToggle
          error={errors.confirmPassword}
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

export default SetNewPasswordPage;