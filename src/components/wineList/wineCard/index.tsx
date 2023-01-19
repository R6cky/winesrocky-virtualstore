import { StyledWineCard } from "./style";

export const WineCard = ({ elem }: any) => {
  return (
    <StyledWineCard className="wine-card" key={elem.id}>
      <div className="card-image">
        <img src={elem.img} alt="image" />
      </div>
      <div className="card-title">
        <h4 className="title">{elem.title}</h4>
      </div>
      <div className="description">
        <p>{elem.description}</p>
      </div>
      <button>Adicionar ao carrinho</button>
    </StyledWineCard>
  );
};
