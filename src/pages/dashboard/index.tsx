import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { WineList } from "../../components/wineList";
import { StyledDashboard } from "./style";
import { ProductProvider } from "../../contexts/contextproducts";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <StyledDashboard />

      <ProductProvider>
        <WineList />
      </ProductProvider>

      <Footer />
    </div>
  );
};
