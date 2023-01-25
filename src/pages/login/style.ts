import styled from "styled-components";

export const StyledLogin = styled.div`
  width: 29rem;
  height: 30rem;
  margin: 0 auto;
  margin-top: 50px;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: var(--color-wine);

  .inputs-container {
    height: 140px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  form {
    width: 25rem;
    max-width: 100%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;

    input {
      width: 100%;
      max-width: 100%;
      height: 50px;
      border-radius: 4px;
      font-size: 18px;
    }

    .button-container {
      height: 20rem;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .redirect-container {
      width: 100%;
      height: 5rem;
      font-size: 20px;
    }

    button {
      width: 100%;
      max-width: 100%;
      height: 50px;
      border-radius: 4px;
      font-size: 18px;
    }
  }
`;
