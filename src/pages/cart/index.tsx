import { CartList } from "../../components/cartList";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { StyledCart } from "./style";
import { useContext } from "react";
import { CartContext } from "../../contexts/contextcart";

export const Cart = () => {
  const { cartSumTotal } = useContext(CartContext);
  const sum = cartSumTotal();
  return (
    <StyledCart>
      <Header />
      <div className="cart-container">
        <div className="cart-list-container">
          <CartList />
        </div>
        <div className="container-buy-button">
          <div className="byu-value">
            <h3>Total da compra</h3>
            <h4>R$ {sum.toFixed(2)}</h4>
          </div>
          <button className="cart-buy-button">Finalizar compra</button>
        </div>
      </div>
      <Footer />
    </StyledCart>
  );
};
