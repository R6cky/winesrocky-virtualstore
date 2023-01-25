import styled from "styled-components";

export const StyledRegister = styled.div`
  width: 29rem;
  height: 43.75rem;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: var(--color-wine);

  form {
    width: 25rem;
    max-width: 100%;
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;

    .inputs-container {
      height: 350px;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    input {
      width: 100%;
      max-width: 100%;
      height: 50px;
      border-radius: 4px;
      font-size: 18px;
    }

    .button-container {
      height: 7rem;
      font-size: 1.3rem;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
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
