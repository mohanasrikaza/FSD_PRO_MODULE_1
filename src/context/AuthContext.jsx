import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // on mount, attempt to restore user from localStorage
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored user', e);
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    // persist user to localStorage so login survives refresh/close
    try {
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (e) {
      console.error('Failed to save user to localStorage', e);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
