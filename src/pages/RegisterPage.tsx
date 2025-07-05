import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import GoogleSignInButton from '../components/GoogleSignInButton';
import { useUser } from '../context/UserContext';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!userData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!userData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!userData.password) {
      newErrors.password = 'Password is required';
    } else if (userData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!agreedToTerms) {
      newErrors.terms = 'Please agree to terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (userData.accountType === 'vendor') {
        navigate('/vendor-profile');
      } else {
        navigate('/profile');
      }
    }
  };

  const getTitle = () => {
    return userData.accountType === 'vendor' 
      ? 'Register vendor Account!' 
      : 'Register Individual Account!';
  };

  const getSubtitle = () => {
    return userData.accountType === 'vendor'
      ? 'For the purpose of industry regulation, your details are required.'
      : '';
  };

  return (
    <Layout 
      showBack={true} 
      step="STEP 01/03" 
      stepTitle="Personal Info."
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {getTitle()}
        </h1>
        {getSubtitle() && (
          <p className="text-gray-600">
            {getSubtitle()}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Your fullname"
          value={userData.fullName}
          onChange={(value) => updateUserData({ fullName: value })}
          placeholder="Invictus Innocent"
          required
          error={errors.fullName}
        />

        <FormInput
          label="Email address"
          type="email"
          value={userData.email}
          onChange={(value) => updateUserData({ email: value })}
          placeholder="Enter email address"
          required
          error={errors.email}
        />

        <FormInput
          label="Create password"
          type="password"
          value={userData.password}
          onChange={(value) => updateUserData({ password: value })}
          placeholder="Enter password"
          required
          showToggle
          error={errors.password}
        />

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree to terms & conditions
          </label>
        </div>
        {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}

        <Button type="submit">
          Register Account
        </Button>

        <div className="text-center">
          <span className="text-gray-500 text-sm">Or</span>
        </div>

        <GoogleSignInButton text="Register with Google" />
      </form>
    </Layout>
  );
};

export default RegisterPage;