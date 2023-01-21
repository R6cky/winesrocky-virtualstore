import { StyledModalViewProducts } from "./style";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/contextmodals";
import { ProductContext } from "../../../contexts/contextproducts";
export const ModalViewProducts = () => {
  const { controlModalViewProducts } = useContext(ModalContext);
  const { productDataView } = useContext(ProductContext);
  return (
    <StyledModalViewProducts>
      <div className="modal-view-products">
        <div className="header-modal">
          <span
            className="close-btn"
            onClick={() => controlModalViewProducts()}
          >
            Closebtn
          </span>
        </div>
        <div className="data-modal">
          <div className="data-left">
            <img src={productDataView[0].img} alt="imagem" />
          </div>
          <div className="data-right">
            <div>
              <h3>{productDataView[0].title}</h3>
            </div>
            <div>
              <p>{productDataView[0].description}</p>
            </div>
            <div>
              <span>Valor R$ {productDataView[0].price}</span>
            </div>
            <div>
              <button>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </StyledModalViewProducts>
  );
};
