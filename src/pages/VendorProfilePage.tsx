import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, ArrowRight, Calendar, Link, Bold, Italic, Underline, Strikethrough, List, ListOrdered } from 'lucide-react';
import Layout from '../components/Layout';
import FormInput from '../components/FormInput';
import Select from '../components/Select';
import Button from '../components/Button';
import { useUser } from '../context/UserContext';

interface VendorData {
  companyName: string;
  cacFile: File | null;
  identificationFile: File | null;
  organizationType: string;
  industryType: string;
  teamSize: string;
  yearEstablished: string;
  website: string;
  companyVision: string;
  mapLocation: string;
  phone: string;
  email: string;
}

const VendorProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { userData } = useUser();
  const [activeTab, setActiveTab] = useState('business');
  const [vendorData, setVendorData] = useState<VendorData>({
    companyName: '',
    cacFile: null,
    identificationFile: null,
    organizationType: '',
    industryType: '',
    teamSize: '',
    yearEstablished: '',
    website: '',
    companyVision: '',
    mapLocation: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const tabs = [
    { id: 'business', label: 'Business Info', icon: '👤' },
    { id: 'founding', label: 'Founding Info', icon: '🏢' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  const organizationOptions = [
    { value: 'corporation', label: 'Corporation' },
    { value: 'llc', label: 'Limited Liability Company' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'sole-proprietorship', label: 'Sole Proprietorship' }
  ];

  const industryOptions = [
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'retail', label: 'Retail' }
  ];

  const teamSizeOptions = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '500+', label: '500+ employees' }
  ];

  const handleFileUpload = (type: 'cac' | 'identification', file: File) => {
    if (type === 'cac') {
      setVendorData(prev => ({ ...prev, cacFile: file }));
    } else {
      setVendorData(prev => ({ ...prev, identificationFile: file }));
    }
  };

  const validateCurrentTab = () => {
    const newErrors: {[key: string]: string} = {};

    if (activeTab === 'business') {
      if (!vendorData.companyName.trim()) {
        newErrors.companyName = 'Company name is required';
      }
      if (!vendorData.cacFile) {
        newErrors.cacFile = 'CAC document is required';
      }
      if (!vendorData.identificationFile) {
        newErrors.identificationFile = 'Identification document is required';
      }
    } else if (activeTab === 'founding') {
      if (!vendorData.organizationType) {
        newErrors.organizationType = 'Organization type is required';
      }
      if (!vendorData.industryType) {
        newErrors.industryType = 'Industry type is required';
      }
      if (!vendorData.teamSize) {
        newErrors.teamSize = 'Team size is required';
      }
    } else if (activeTab === 'contact') {
      if (!vendorData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      }
      if (!vendorData.email.trim()) {
        newErrors.email = 'Email is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentTab()) {
      if (activeTab === 'business') {
        setActiveTab('founding');
      } else if (activeTab === 'founding') {
        setActiveTab('contact');
      } else {
        navigate('/verification-code');
      }
    }
  };

  const handlePrevious = () => {
    if (activeTab === 'founding') {
      setActiveTab('business');
    } else if (activeTab === 'contact') {
      setActiveTab('founding');
    }
  };

  const FileUploadArea: React.FC<{
    title: string;
    type: 'cac' | 'identification';
    file: File | null;
    error?: string;
  }> = ({ title, type, file, error }) => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {title}
      </label>
      <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
        error ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
      }`}>
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              handleFileUpload(type, selectedFile);
            }
          }}
          className="hidden"
          id={`${type}-upload`}
        />
        <label htmlFor={`${type}-upload`} className="cursor-pointer">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600 mb-1">
            {file ? file.name : 'Browse files or drop here'}
          </p>
          <p className="text-xs text-gray-500">
            Supported file types: PDF, JPEG, PNG. Max file size: 5 MB.
          </p>
          <p className="text-xs text-gray-500">
            Recommended format: PDF. Ensure files are clear and properly labeled.
          </p>
        </label>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );

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
            <span className="text-green-600 text-lg">🌿</span>
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
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>← Back</span>
            </button>
            <div className="text-right">
              <p className="text-sm text-gray-500">STEP 02/03</p>
              <p className="text-sm font-medium text-gray-900">Residency Info.</p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Complete Your Profile!
              </h1>
              <p className="text-gray-600">
                For the purpose of industry regulation, your details are required.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex space-x-8 mb-8 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 pb-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'business' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Identification & CAC
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <FileUploadArea
                      title="Upload CAC"
                      type="cac"
                      file={vendorData.cacFile}
                      error={errors.cacFile}
                    />
                    
                    <FileUploadArea
                      title="Upload Identification"
                      type="identification"
                      file={vendorData.identificationFile}
                      error={errors.identificationFile}
                    />
                  </div>

                  <FormInput
                    label="Company name"
                    value={vendorData.companyName}
                    onChange={(value) => setVendorData(prev => ({ ...prev, companyName: value }))}
                    placeholder="Enter company name"
                    required
                    error={errors.companyName}
                  />
                </div>
              </div>
            )}

            {activeTab === 'founding' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select
                    label="Organization Type"
                    value={vendorData.organizationType}
                    onChange={(value) => setVendorData(prev => ({ ...prev, organizationType: value }))}
                    options={organizationOptions}
                    placeholder="Select..."
                    required
                  />
                  {errors.organizationType && <p className="text-sm text-red-500 -mt-4">{errors.organizationType}</p>}

                  <Select
                    label="Industry Types"
                    value={vendorData.industryType}
                    onChange={(value) => setVendorData(prev => ({ ...prev, industryType: value }))}
                    options={industryOptions}
                    placeholder="Select..."
                    required
                  />
                  {errors.industryType && <p className="text-sm text-red-500 -mt-4">{errors.industryType}</p>}

                  <Select
                    label="Team Size"
                    value={vendorData.teamSize}
                    onChange={(value) => setVendorData(prev => ({ ...prev, teamSize: value }))}
                    options={teamSizeOptions}
                    placeholder="Select..."
                    required
                  />
                  {errors.teamSize && <p className="text-sm text-red-500 -mt-4">{errors.teamSize}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year of Establishment
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={vendorData.yearEstablished}
                        onChange={(e) => setVendorData(prev => ({ ...prev, yearEstablished: e.target.value }))}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="dd/mm/yyyy"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Website
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        value={vendorData.website}
                        onChange={(e) => setVendorData(prev => ({ ...prev, website: e.target.value }))}
                        className="w-full px-3 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Website url..."
                      />
                      <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Vision
                  </label>
                  <div className="border border-gray-300 rounded-lg">
                    <div className="flex items-center space-x-2 p-3 border-b border-gray-200">
                      <button type="button" className="p-1 hover:bg-gray-100 rounded">
                        <Bold className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-100 rounded">
                        <Italic className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-100 rounded">
                        <Underline className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-100 rounded">
                        <Strikethrough className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-100 rounded">
                        <Link className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-100 rounded">
                        <List className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-100 rounded">
                        <ListOrdered className="w-4 h-4" />
                      </button>
                    </div>
                    <textarea
                      value={vendorData.companyVision}
                      onChange={(e) => setVendorData(prev => ({ ...prev, companyVision: e.target.value }))}
                      className="w-full p-3 min-h-[120px] focus:outline-none resize-none"
                      placeholder="Tell us about your company vision..."
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Map Location
                  </label>
                  <div className="w-full h-32 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Map integration placeholder</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="flex">
                    <div className="flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                      <div className="w-6 h-4 bg-red-600 rounded-sm mr-2"></div>
                      <span className="text-sm font-medium text-gray-700">+880</span>
                    </div>
                    <input
                      type="tel"
                      value={vendorData.phone}
                      onChange={(e) => setVendorData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Phone number.."
                      className="flex-1 px-3 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={vendorData.email}
                      onChange={(e) => setVendorData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Email address"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">@</span>
                    </div>
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="secondary"
                onClick={handlePrevious}
                className={activeTab === 'business' ? 'invisible' : ''}
              >
                Previous
              </Button>
              
              <Button
                type="button"
                onClick={handleNext}
                className="bg-green-600 hover:bg-green-700 flex items-center space-x-2"
              >
                <span>{activeTab === 'contact' ? 'Finish Editing' : 'Save & Next'}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfilePage;