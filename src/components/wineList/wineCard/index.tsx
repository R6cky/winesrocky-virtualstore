import { StyledWineCard } from "./style";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/contextmodals";

export const WineCard = ({ elem }: any) => {
  const { modalViewProducts, setModalViewProducts, controlModalViewProducts } =
    useContext(ModalContext);

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
      <button onClick={() => controlModalViewProducts()}>
        Adicionar ao carrinho
      </button>
    </StyledWineCard>
  );
};
