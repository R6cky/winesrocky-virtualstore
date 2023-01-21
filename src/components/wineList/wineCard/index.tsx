import { StyledWineCard } from "./style";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/contextmodals";
import { CartContext } from "../../../contexts/contextcart";

export const WineCard = ({ elem, productWines }: any) => {
  const { controlModalViewProducts } = useContext(ModalContext);
  const { addToCart } = useContext(CartContext);

  return (
    <StyledWineCard className="wine-card">
      <div className="card-image">
        <img src={elem.img} alt="image" />
      </div>
      <div className="card-title">
        <h4 className="title">{elem.title}</h4>
      </div>
      <div className="description">
        <p>{elem.description}</p>
      </div>
      <button onClick={() => controlModalViewProducts(elem.id)}>
        Ver produto
      </button>
      <button onClick={() => addToCart(elem.id)}>Adicionar ao carrinho</button>
    </StyledWineCard>
  );
};
