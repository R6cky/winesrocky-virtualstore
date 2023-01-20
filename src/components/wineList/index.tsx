import { StyledWineList } from "./style";
import { useContext } from "react";
import { ProductContext } from "../../contexts/contextproducts";
import { WineCard } from "./wineCard";
import { ModalContext, ModalProvider } from "../../contexts/contextmodals";

export const WineList = () => {
  const { productWines } = useContext(ProductContext);
  const { modalViewProducts } = useContext(ModalContext);
  console.log(modalViewProducts);
  console.log(productWines);
  return (
    <StyledWineList>
      <ul className="wine-list">
        {productWines.map((elem: any) => {
          return <WineCard elem={elem} key={elem.id} />;
        })}
      </ul>
    </StyledWineList>
  );
};
