import { StyledHeader } from "./style";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <div className="logo">
        <img src="" alt="logo" />
      </div>
      <div className="area-menu-container">
        <div className="icon-cart" onClick={() => navigate("/cart")}>
          <img src="" alt="cart" />
        </div>
        <div className="icon-menu" onClick={() => navigate("/dashboard")}>
          <img src="" alt="inicio" />
        </div>
        <div className="icon-exit">
          <img src="" alt="exit" />
        </div>
      </div>
    </StyledHeader>
  );
};
