import styled from "styled-components";

export const StyledWineCard = styled.li`
  width: 18rem;
  height: 28rem;
  border: solid var(--color-wine);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 50px;

  .card-image {
    width: 99%;
    height: 350px;
    border: solid;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-title {
    width: 100%;
    padding: 5px;
  }

  .title {
    font-size: 20px;
  }

  .description-price {
    font-size: 18px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px;

    .price {
      font-weight: bold;
      color: var(--color-wine);
    }
  }

  .button-add-cart {
    cursor: pointer;
    width: 95%;
    margin: 0 auto;
    height: 40px;
    font-size: 17px;
  }
`;
