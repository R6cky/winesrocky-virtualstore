import { createContext, useEffect } from "react";
import { api } from "../services/api";

export const RegisterContext = createContext({});

export const RegisterProvider = ({ children }: any) => {
  interface iDataRegister {
    mail: string;
    password: string;
    name: string;
    lastName: string;
  }

  async function registerApp(data: iDataRegister) {
    try {
      const responseJson = await api.post("/register", data);
      console.log(responseJson);
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
