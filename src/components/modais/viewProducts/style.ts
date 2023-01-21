import styled from "styled-components";

export const StyledModalViewProducts = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100%;
  border: solid red;
  background: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  .modal-view-products {
    width: 46.875rem;
    max-width: 100%;
    height: 36.687rem;
    border: solid red;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background: var(--color-wine);

    .header-modal {
      width: 100%;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10px;

      .close-btn {
        cursor: pointer;
        background: var(--color-gray0);
      }
    }
  }

  .data-modal {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: solid red;

    .data-left {
      border: solid white;
      width: 20rem;
      height: 30rem;
      border-radius: 8px;
    }

    .data-right {
      border: solid white;
      width: 20rem;
      height: 30rem;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
`;
