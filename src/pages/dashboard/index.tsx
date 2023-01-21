import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { WineList } from "../../components/wineList";
import { StyledDashboard } from "./style";
import { ModalContext } from "../../contexts/contextmodals";
import { useContext } from "react";
import { ModalViewProducts } from "../../components/modais/viewProducts";
import { ImageSlide } from "../../components/imageSlide";

export const Dashboard = () => {
  const { modalViewProducts } = useContext(ModalContext);

  return (
    <StyledDashboard>
      <Header />
      <ImageSlide />
      <WineList />
      {modalViewProducts && <ModalViewProducts />}
      <Footer />
    </StyledDashboard>
  );
};
