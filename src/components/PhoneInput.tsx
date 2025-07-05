import React from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  countryCode,
  onCountryCodeChange
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Phone number
      </label>
      <div className="flex">
        <div className="flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
          <div className="w-6 h-4 bg-green-600 rounded-sm mr-2"></div>
          <select
            value={countryCode}
            onChange={(e) => onCountryCodeChange(e.target.value)}
            className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none"
          >
            <option value="+234">+234</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>
        </div>
        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="090912345567"
          className="flex-1 px-3 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default PhoneInput;