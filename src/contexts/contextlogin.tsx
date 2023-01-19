import { Children, createContext } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }: any) => {
  const navigate = useNavigate();

  interface idataLogin {
    email: string;
    password: string;
  }

  const loginApp = async (data: idataLogin) => {
    try {
      const responseJson = await api.post("/login", data);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <LoginContext.Provider value={{ loginApp }}>
      {children}
    </LoginContext.Provider>
  );
};
