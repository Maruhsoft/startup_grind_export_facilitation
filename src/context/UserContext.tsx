import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  accountType: 'buyer' | 'vendor' | '';
  fullName: string;
  email: string;
  password: string;
  phone: string;
  countryCode: string;
  address: string;
  country: string;
  bvn: string;
  companyName?: string;
  cacFile?: File | null;
  identificationFile?: File | null;
}

interface UserContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
  resetUserData: () => void;
}

const defaultUserData: UserData = {
  accountType: '',
  fullName: '',
  email: '',
  password: '',
  phone: '',
  countryCode: '+234',
  address: '',
  country: '',
  bvn: '',
  companyName: '',
  cacFile: null,
  identificationFile: null
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const resetUserData = () => {
    setUserData(defaultUserData);
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData, resetUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};