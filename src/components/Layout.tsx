import React from 'react';
import { Leaf, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  showBack?: boolean;
  step?: string;
  stepTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, showBack = false, step, stepTitle }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      {/* Left side - Background image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
          }}
        >
          <div className="absolute inset-0 bg-green-900/30"></div>
        </div>
        
        {/* Logo */}
        <div className="absolute top-8 left-8 flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Leaf className="w-5 h-5 text-green-600" />
          </div>
          <span className="text-white text-xl font-semibold">Oasis.</span>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-8 left-8">
          <div className="w-16 h-16 bg-white/20 rounded-lg"></div>
        </div>
      </div>

      {/* Right side - Form content */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Mobile header */}
        <div className="lg:hidden p-4 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-900 text-xl font-semibold">Oasis.</span>
            </div>
            {step && (
              <div className="text-right">
                <p className="text-sm text-gray-500">{step}</p>
                <p className="text-sm font-medium text-gray-900">{stepTitle}</p>
              </div>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md mx-auto">
            {/* Header with back button and step info */}
            <div className="hidden lg:block mb-8">
              <div className="flex items-center justify-between">
                {showBack && (
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                  </button>
                )}
                {step && (
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{step}</p>
                    <p className="text-sm font-medium text-gray-900">{stepTitle}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;