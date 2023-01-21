import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  border: solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cart-container {
    border: solid green;
    width: 55rem;
    height: 30rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }

  .cart-list-container {
    height: 100%;
  }

  .cart-buy-button {
    width: 200px;
    height: 40px;
    border-radius: 8px;
    font-size: 16px;
  }

  .container-buy-button {
    border: solid;
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    .byu-value {
      border: solid;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
`;
