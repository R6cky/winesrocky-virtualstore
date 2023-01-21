import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { WineList } from "../../components/wineList";
import { StyledDashboard } from "./style";
import { ModalContext } from "../../contexts/contextmodals";
import { useContext } from "react";
import { ModalViewProducts } from "../../components/modais/viewProducts";
import { ImageSlide } from "../../components/imageSlide";
import { CartListPopUp } from "../../components/cartList/cartListPopUp";

export const Dashboard = () => {
  const { modalViewProducts } = useContext(ModalContext);

  return (
    <StyledDashboard>
      <Header />
      <ImageSlide />
      <WineList />
      {modalViewProducts && <ModalViewProducts />}
      <CartListPopUp />
      <Footer />
    </StyledDashboard>
  );
};
