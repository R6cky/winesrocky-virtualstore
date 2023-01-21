import { CartCard } from "./cartCard";
import { StyledCartList } from "./style";
import { useContext } from "react";
import { CartContext } from "../../contexts/contextcart";

export const CartList = () => {
  const { listCart } = useContext(CartContext);
  console.log("aqui", listCart);
  return (
    <StyledCartList>
      {listCart.length > 0 ? (
        <CartCard />
      ) : (
        <p className="cart-message">Lista vazia</p>
      )}
    </StyledCartList>
  );
};
