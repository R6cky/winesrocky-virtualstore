import styled from "styled-components";

export const StyledModalViewProducts = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  border: solid red;
  background: var(--background-modal);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-view-products {
    width: 46.875rem;
    max-width: 100%;
    height: 36.687rem;
    border: solid red;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .header-modal {
      width: 100%;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10px;

      .close-btn {
        cursor: pointer;
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
  }
`;
