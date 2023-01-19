import { StyledWineList } from "./style";
import { useContext } from "react";
import { ProductContext } from "../../contexts/contextproducts";
import { WineCard } from "./wineCard";

export const WineList = () => {
  const { productWines } = useContext(ProductContext);
  console.log(productWines);
  return (
    <StyledWineList>
      <ul className="wine-list">
        {productWines.map((elem: any) => {
          return <WineCard elem={elem} />;
        })}
      </ul>
    </StyledWineList>
  );
};
