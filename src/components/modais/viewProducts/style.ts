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
  position: fixed;
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
    animation: myAnim 1s ease 0s 1 normal forwards;

    @keyframes myAnim {
      0% {
        opacity: 0;
        transform: translateY(-50px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

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
      width: 23rem;
      height: 30rem;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 90%;
        height: 80%;
        border-radius: 8px;
      }
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
