import { StyledWineCard } from "./style";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/contextmodals";
import { CartContext } from "../../../contexts/contextcart";

export const WineCard = ({ elem, productWines }: any) => {
  const { controlModalViewProducts } = useContext(ModalContext);
  const { addToCart } = useContext(CartContext);

  return (
    <StyledWineCard className="wine-card">
      <div
        className="card-image"
        onClick={() => controlModalViewProducts(elem.id)}
      >
        <img src={elem.img} alt="image" />
      </div>
      <div className="card-title">
        <h4 className="title">{elem.title}</h4>
      </div>
      <div className="description-price">
        <p>{elem.description}</p>
        <p className="price">{elem.price.toFixed(2)}</p>
      </div>
      <button className="button-add-cart" onClick={() => addToCart(elem.id)}>
        Adicionar ao carrinho
      </button>
    </StyledWineCard>
  );
};
