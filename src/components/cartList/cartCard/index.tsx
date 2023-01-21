import { CartContext } from "../../../contexts/contextcart";
import { StyledCartCard } from "./style";
import { useContext } from "react";

export const CartCard = () => {
  const { listCart, removeItemOfCart } = useContext(CartContext);

  return (
    <>
      {listCart.map((elem: any) => {
        return (
          <StyledCartCard className="item-li" key={elem.id}>
            <div className="area-image">
              <img src="" alt="Imagem" />
            </div>
            <div className="area-content-right">
              <div className="content-title">
                <h3>{elem.title}</h3>
              </div>
              <div className="content-button-total">
                <div className="quant-container">
                  <h4>Quantidade</h4>
                  <div className="cart-counter">
                    <span className="counter-signal">-</span>
                    <h4 className="counter-number">1</h4>
                    <span className="counter-signal">+</span>
                  </div>
                </div>
                <div className="quant-total">
                  <h4>Total</h4>
                  <span className="buy-total">R$ {elem.price}</span>
                </div>
              </div>
              <h5
                className="cart-btn-remove"
                onClick={() => removeItemOfCart(elem.id)}
              >
                Remover
              </h5>
            </div>
          </StyledCartCard>
        );
      })}
    </>
  );
};
