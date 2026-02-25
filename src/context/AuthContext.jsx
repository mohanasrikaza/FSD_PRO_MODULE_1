import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Check if user is already logged in (fetch from localStorage or API)
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    // TODO: Save token to localStorage
  };

  const logout = () => {
    setUser(null);
    // TODO: Clear token from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
