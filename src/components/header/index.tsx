import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <img src="" alt="logo" />
      </div>
      <div className="area-menu-container">
        <div className="icon-cart">
          <img src="" alt="cart" />
        </div>
        <div className="icon-menu">
          <img src="" alt="menu" />
        </div>
        <div className="icon-exit">
          <img src="" alt="exit" />
        </div>
      </div>
    </StyledHeader>
  );
};
