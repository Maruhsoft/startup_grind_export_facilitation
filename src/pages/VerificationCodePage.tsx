import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const VerificationCodePage: React.FC = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '']);
  const [countdown, setCountdown] = useState(5);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join('');
    if (verificationCode.length === 4) {
      // In a real app, this would verify the code
      navigate('/home');
    }
  };

  const handleResendCode = () => {
    setCountdown(5);
    setCanResend(false);
    // In a real app, this would resend the verification code
  };

  return (
    <Layout 
      showBack={true} 
      step="STEP 01/03" 
      stepTitle="Personal Info."
    >
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Verification Code
        </h1>
        <p className="text-gray-600">
          <span className="font-medium">We have sent a verification code</span> to johndoemax@gmail.com.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center space-x-4 mb-8">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              maxLength={1}
            />
          ))}
        </div>

        <Button 
          type="submit" 
          disabled={code.join('').length !== 4}
          className="bg-green-600 hover:bg-green-700"
        >
          Proceed
        </Button>

        <div className="text-center text-sm text-gray-600">
          <p className="mb-2">
            Didn't receive the verification code? It could take a bit of time.
          </p>
          <p>
            Request new code in <span className="font-medium">{countdown} seconds</span>
          </p>
        </div>

        {canResend && (
          <div className="text-center">
            <button
              type="button"
              onClick={handleResendCode}
              className="text-gray-900 hover:text-gray-700 font-medium"
            >
              Resend Code
            </button>
          </div>
        )}
      </form>
    </Layout>
  );
};

export default VerificationCodePage;