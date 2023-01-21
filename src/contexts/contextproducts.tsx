import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const ProductContext = createContext({} as any);

export const ProductProvider = ({ children }: any) => {
  const [productWines, setProductWines] = useState([] as any);
  const [productDataView, setProductDataView] = useState({});

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

  const viewProduct = (id: any) => {
    const product = productWines.filter((elem: any) => {
      return elem.id === id;
    });
    console.log(product);
    setProductDataView(product);
  };

  return (
    <ProductContext.Provider
      value={{ productWines, viewProduct, productDataView }}
    >
      {children}
    </ProductContext.Provider>
  );
};
