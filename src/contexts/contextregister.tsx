import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const RegisterContext = createContext({});

export const RegisterProvider = ({ children }: any) => {
  interface iDataRegister {
    mail: string;
    password: string;
    name: string;
    lastName: string;
  }
  const navigate = useNavigate();

  async function registerApp(data: iDataRegister) {
    try {
      const responseJson = await api.post("/register", data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <RegisterContext.Provider value={{ registerApp }}>
      {children}
    </RegisterContext.Provider>
  );
};
