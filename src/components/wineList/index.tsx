import { StyledWineList } from "./style";
import { useContext } from "react";
import { ProductContext } from "../../contexts/contextproducts";
import { WineCard } from "./wineCard";

export const WineList = () => {
  const { productWines } = useContext(ProductContext);

  return (
    <StyledWineList>
      <ul className="wine-list">
        {productWines.map((elem: any) => {
          return (
            <WineCard elem={elem} key={elem.id} productWines={productWines} />
          );
        })}
      </ul>
    </StyledWineList>
  );
};
