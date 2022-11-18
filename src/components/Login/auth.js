import { useState, useContext, createContext } from "react";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // User for Authorization Page
  const [user, setUser] = useState(null);
  // local Storage name and img
  const profileUsername = window.localStorage.getItem("userName");
  const profileImg = window.localStorage.getItem("profileImg");

  // Login function
  const login = (user) => {
    setUser(user);
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, profileUsername, profileImg }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
