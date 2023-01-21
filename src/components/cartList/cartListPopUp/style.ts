import styled from "styled-components";

export const StyledCartListPopUp = styled.div`
  border: solid;
  width: 35rem;
  max-width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  .pop-up-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 300px;
    border: solid red;
    overflow-y: scroll;

    .pop-up-item {
      width: 95%;
      max-width: 100%;
      height: 120px;
      margin: 0 auto;
      border: solid red;
      border-radius: 4px;
    }
  }

  .cart-total {
    border: solid red;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
`;
