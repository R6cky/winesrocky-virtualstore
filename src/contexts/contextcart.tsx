import { createContext, useState } from "react";
import { useContext } from "react";
import { ProductContext } from "./contextproducts";

export const CartContext = createContext({} as any);

export const CartProvider = ({ children }: any) => {
  const [listCart, setListcart] = useState([]);
  const { productWines } = useContext(ProductContext);

  const addToCart = (id: any) => {
    const listFiltered = productWines.filter((elem: any) => {
      return elem.id === id;
    });

    const findProductCart = listCart.find((element: any) => {
      return element.id === id;
    });

    if (!findProductCart) {
      setListcart([...listCart, ...listFiltered] as any);
    }
  };

  const cartSumTotal = (): any => {
    const sum = listCart.reduce((acc: any, currentValue: any) => {
      return acc + currentValue.price;
    }, 0);
    return sum;
  };

  const removeItemOfCart = (id: any) => {
    const removedList = listCart.filter((elem: any) => {
      return elem.id !== id;
    });
    setListcart(removedList);
  };

  return (
    <CartContext.Provider
      value={{
        setListcart,
        listCart,
        addToCart,
        cartSumTotal,
        removeItemOfCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
