// Import
import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Armazena usuário no local storage e mantendo logado
  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    // Recupera usuário
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password);

    //API criar uma session
    const loggedUser = response.data.user;
    const token = response.data.token;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    setUser(loggedUser);
    navigate("/");
  };

  // Function de logout
  const logout = () => {
    // console.log("logout");
    // Quando estiver deslogado remove usuário de local storage e volta pra home
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };

  return (
    // Export
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
