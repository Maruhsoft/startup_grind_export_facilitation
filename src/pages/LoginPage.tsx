import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import GoogleSignInButton from '../components/GoogleSignInButton';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
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
      // In a real app, this would authenticate the user
      alert('Login successful!');
    }
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-600">
          You can only Sign in with your Email & Password
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

        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
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
          Sign In
        </Button>

        <div className="text-center">
          <button
            type="button"
            onClick={() => navigate('/forgot-password')}
            className="text-orange-600 hover:text-orange-700 font-medium text-sm"
          >
            Forgot Password?
          </button>
        </div>

        <div className="text-center">
          <span className="text-gray-500 text-sm">Or</span>
        </div>

        <GoogleSignInButton text="Sign in with Google" />
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/')}
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            Join Us
          </button>
        </p>
      </div>
    </Layout>
  );
};

export default LoginPage;