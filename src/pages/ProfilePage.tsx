import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import Layout from '../components/Layout';
import PhoneInput from '../components/PhoneInput';
import FormInput from '../components/FormInput';
import Select from '../components/Select';
import Button from '../components/Button';
import { useUser } from '../context/UserContext';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const countryOptions = [
    { value: 'nigeria', label: 'Nigeria' },
    { value: 'ghana', label: 'Ghana' },
    { value: 'kenya', label: 'Kenya' },
    { value: 'south-africa', label: 'South Africa' },
    { value: 'usa', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'canada', label: 'Canada' }
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!userData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!userData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!userData.country) {
      newErrors.country = 'Country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/bank-verification');
    }
  };

  return (
    <Layout 
      showBack={true} 
      step="STEP 02/03" 
      stepTitle="Residency Info."
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
        <PhoneInput
          value={userData.phone}
          onChange={(value) => updateUserData({ phone: value })}
          countryCode={userData.countryCode}
          onCountryCodeChange={(code) => updateUserData({ countryCode: code })}
        />
        {errors.phone && <p className="text-sm text-red-500 -mt-4">{errors.phone}</p>}

        <FormInput
          label="Your address"
          value={userData.address}
          onChange={(value) => updateUserData({ address: value })}
          placeholder="Please enter address"
          required
          error={errors.address}
        />

        <Select
          label="Country of residence"
          value={userData.country}
          onChange={(value) => updateUserData({ country: value })}
          options={countryOptions}
          required
        />
        {errors.country && <p className="text-sm text-red-500 -mt-4">{errors.country}</p>}

        <Button type="submit">
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

export default ProfilePage;