import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Lock } from 'lucide-react';
import Layout from '../components/Layout';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { useUser } from '../context/UserContext';

const BankVerificationPage: React.FC = () => {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [isVerified, setIsVerified] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateBVN = (bvn: string) => {
    // Simple BVN validation (11 digits)
    return /^\d{11}$/.test(bvn);
  };

  const handleBVNChange = (value: string) => {
    updateUserData({ bvn: value });
    if (validateBVN(value)) {
      setIsVerified(true);
      setErrors({});
    } else {
      setIsVerified(false);
      if (value.length > 0) {
        setErrors({ bvn: 'BVN must be 11 digits' });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isVerified) {
      // Navigate to verification code page instead of login
      navigate('/verification-code');
    }
  };

  return (
    <Layout 
      showBack={true} 
      step="STEP 03/03" 
      stepTitle="Bank Verification"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Complete Your Profile!
        </h1>
        <p className="text-gray-600">
          For the purpose of industry regulation, your details are required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bank verification number (BVN)
          </label>
          <div className="relative">
            <input
              type="text"
              value={userData.bvn}
              onChange={(e) => handleBVNChange(e.target.value)}
              placeholder="090912345567"
              className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                errors.bvn ? 'border-red-500' : isVerified ? 'border-green-500' : 'border-gray-300'
              }`}
              maxLength={11}
            />
            {isVerified && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
            )}
          </div>
          {errors.bvn && <p className="mt-1 text-sm text-red-500">{errors.bvn}</p>}
        </div>

        <Button type="submit" disabled={!isVerified}>
          Save & Continue
        </Button>

        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <Lock className="w-4 h-4" />
          <span>Your info is safely secured</span>
        </div>
      </form>
    </Layout>
  );
};

export default BankVerificationPage;