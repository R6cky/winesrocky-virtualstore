import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  max-width: 100%;
  border: solid 0.1px;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;

  .logo {
    border: solid red;
    width: 200px;
    height: 80px;
  }

  .area-menu-container {
    border: solid red;
    width: 250px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    .icon-cart {
      border: solid;
      cursor: pointer;
    }

    .icon-menu {
      border: solid;
      cursor: pointer;
    }

    .icon-exit {
      border: solid;
      cursor: pointer;
    }
  }
`;
