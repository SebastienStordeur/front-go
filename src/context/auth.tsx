import React, { useState, useContext } from "react";

type ContextProps = {
  children: React.ReactNode;
};

type LoginData = {
  email: string | undefined;
  password: string | undefined;
};

export const AuthContext = React.createContext({
  isAuthenticated: false,
  login: async (
    loginData: LoginData
  ): Promise<
    { error: string | undefined; token: string | undefined } | undefined
  > => {
    try {
      const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        return data; // Return the error message
      }

      return data;
    } catch (err) {
      return;
    }
  },
  useToken: () => {},

  logout: () => {},
});

export const AuthContextProvider = ({ children }: ContextProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { login } = useAuth();

  const useToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  };

  const logout = () => {};

  const defValue = { isAuthenticated, login, useToken, logout };

  return (
    <AuthContext.Provider value={defValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
