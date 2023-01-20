import { StyledModalViewProducts } from "./style";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/contextmodals";
export const ModalViewProducts = () => {
  const { controlModalViewProducts } = useContext(ModalContext);

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
            <img src="" alt="imagem" />
          </div>
          <div className="data-right">
            <div>
              <h3>Title</h3>
            </div>
            <div>
              <p>Descrição</p>
            </div>
            <div>
              <span>Valor R$ 125,00</span>
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
