
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<{
  state: AuthState;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
} | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('ecommerce-user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setState({
          user,
          isLoading: false,
          isAuthenticated: true
        });
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
        setState(prev => ({ ...prev, isLoading: false }));
      }
    } else {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setState(prev => ({ ...prev, isLoading: true }));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - in real app, this would be an API call
      if (email && password) {
        const user = {
          id: '1',
          email,
          name: email.split('@')[0]
        };
        
        localStorage.setItem('ecommerce-user', JSON.stringify(user));
        setState({
          user,
          isLoading: false,
          isAuthenticated: true
        });
        return true;
      }
      
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      setState(prev => ({ ...prev, isLoading: true }));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock registration - in real app, this would be an API call
      if (email && password && name) {
        const user = {
          id: Date.now().toString(),
          email,
          name
        };
        
        localStorage.setItem('ecommerce-user', JSON.stringify(user));
        setState({
          user,
          isLoading: false,
          isAuthenticated: true
        });
        return true;
      }
      
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('ecommerce-user');
    setState({
      user: null,
      isLoading: false,
      isAuthenticated: false
    });
  };

  return (
    <AuthContext.Provider value={{ state, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
