import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const ProductContext = createContext({} as any);

export const ProductProvider = ({ children }: any) => {
  const [productWines, setProductWines] = useState([] as any);

  useEffect(() => {
    const getwines = async () => {
      try {
        const responseJson = await api.get("/products");
        const { data } = responseJson;
        setProductWines(data);
      } catch (error) {
        console.log(error);
      }
    };
    getwines();
  }, []);

  return (
    <ProductContext.Provider value={{ productWines }}>
      {children}
    </ProductContext.Provider>
  );
};
