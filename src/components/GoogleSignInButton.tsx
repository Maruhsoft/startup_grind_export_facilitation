import React from 'react';

interface GoogleSignInButtonProps {
  text: string;
  onClick?: () => void;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="w-5 h-5 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">G</span>
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </button>
  );
};

export default GoogleSignInButton;