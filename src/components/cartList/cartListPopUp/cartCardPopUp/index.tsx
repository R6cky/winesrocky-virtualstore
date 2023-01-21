import { StyledCartCardPopUp } from "./style";

export const CartCardPopUp = () => {
  return (
    <StyledCartCardPopUp>
      <li className="pop-up-item">
        <div className="data-left">
          <img src="" alt="" />
        </div>
        <div className="data-right">
          <h3 className="data-right-title">Title</h3>
        </div>
        <div className="data-right-country-and-price">
          <span className="country">Country</span>
          <span className="price">R$ 0,00</span>
        </div>
      </li>
    </StyledCartCardPopUp>
  );
};
