import { CartCardPopUp } from "./cartCardPopUp";
import { StyledCartListPopUp } from "./style";

export const CartListPopUp = () => {
  return (
    <StyledCartListPopUp>
      <ul className="pop-up-list">
        <CartCardPopUp />
        <CartCardPopUp />
        <CartCardPopUp />
      </ul>
      <div className="cart-total">
        <h3 className="total-value">Total R$ 152,00</h3>
        <button className="buy-funaly">Finalizar compra</button>
      </div>
    </StyledCartListPopUp>
  );
};
