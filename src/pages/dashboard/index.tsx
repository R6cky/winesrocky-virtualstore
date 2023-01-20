import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { WineList } from "../../components/wineList";
import { StyledDashboard } from "./style";
import { ProductProvider } from "../../contexts/contextproducts";
import { ModalContext } from "../../contexts/contextmodals";
import { useContext } from "react";
import { ModalViewProducts } from "../../components/modais/viewProducts";

export const Dashboard = () => {
  const { modalViewProducts } = useContext(ModalContext);

  return (
    <StyledDashboard>
      {modalViewProducts ? (
        <ModalViewProducts />
      ) : (
        <>
          <Header />

          <ProductProvider>
            <WineList />
          </ProductProvider>

          <Footer />
        </>
      )}
    </StyledDashboard>
  );
};
