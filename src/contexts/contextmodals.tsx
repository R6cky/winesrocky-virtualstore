import { createContext, useContext, useState } from "react";
import { ProductContext } from "./contextproducts";

export const ModalContext = createContext({} as any);

export const ModalProvider = ({ children }: any) => {
  const [modalViewProducts, setModalViewProducts] = useState(false);
  const { viewProduct } = useContext(ProductContext);

  const controlModalViewProducts = (id: any) => {
    if (modalViewProducts) {
      setModalViewProducts(false);
    } else {
      setModalViewProducts(true);
    }

    viewProduct(id);
  };

  return (
    <ModalContext.Provider
      value={{
        setModalViewProducts,
        modalViewProducts,
        controlModalViewProducts,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
