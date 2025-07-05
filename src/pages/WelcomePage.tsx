import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCheck, Building2, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import { useUser } from '../context/UserContext';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const { updateUserData } = useUser();

  const handleAccountTypeSelect = (type: 'buyer' | 'vendor') => {
    updateUserData({ accountType: type });
    navigate('/register');
  };

  return (
    <Layout>
      <div className="text-center mb-8">
        <p className="text-gray-500 text-sm mb-2">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            Sign In
          </button>
        </p>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Join Us!</h1>
        <p className="text-gray-600">
          To begin this journey, tell us what type of account you'd be opening.
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => handleAccountTypeSelect('buyer')}
          className="w-full p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-all group"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-gray-900">Buyer</h3>
              <p className="text-sm text-gray-600">
                Explore, connect, and import authentic products from Nigeria
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
          </div>
        </button>

        <button
          onClick={() => handleAccountTypeSelect('vendor')}
          className="w-full p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-all group"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <Building2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-gray-900">Vendor</h3>
              <p className="text-sm text-gray-600">
                List your export-ready products and connect with trusted global buyers
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
          </div>
        </button>
      </div>
    </Layout>
  );
};

export default WelcomePage;