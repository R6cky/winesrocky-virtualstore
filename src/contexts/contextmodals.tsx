import { createContext, useState } from "react";

export const ModalContext = createContext({} as any);

export const ModalProvider = ({ children }: any) => {
  const [modalViewProducts, setModalViewProducts] = useState(false);

  const controlModalViewProducts = (id: any) => {
    if (modalViewProducts) {
      setModalViewProducts(false);
    } else {
      setModalViewProducts(true);
    }
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
