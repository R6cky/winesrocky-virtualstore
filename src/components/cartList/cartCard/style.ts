import styled from "styled-components";

export const StyledCartCard = styled.li`
  border: solid red;
  width: 30rem;
  height: 100px;
  border: solid red;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;

  .area-image {
    height: 100%;
    border: solid;
  }

  .content-button-total {
    width: 250px;
    max-width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: solid;

    .cart-counter {
      display: flex;
      justify-content: center;
      gap: 10px;
      align-items: center;

      .counter-signal {
        background-color: var(--color-gray0);
        padding: 5px 10px;
        border-radius: 50%;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }

  .cart-btn-remove {
    border: solid;
    text-align: end;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;
