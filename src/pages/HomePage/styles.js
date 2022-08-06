import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  width: 100%;
  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-block: 1rem;
    width: 72%;
  }

  aside {
    min-width: 14%;
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
    }
  }
  .form-order-search {
    margin-inline-start: 20px;
  }
  .form-criar-personagem {
    margin-inline-end: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 90%;
    margin: auto;
    margin-top: 10px;

    > div {
      margin-block: 10px;
    }

    > label {
      font-size: 18px;
    }

    input,
    select {
      height: 23px;
      font-size: 13px;
      max-width: 250px;
      min-width: 100px;
    }

    button {
      margin-top: 10px;
      width: 100%;
      max-width: 250px;
      min-height: 30px;
      background-color: var(--yellow);
      border: none;
      cursor: pointer;
      font-family: "Staatliches", cursive;
      font-size: 15px;
    }
  }

  .ordenar select,
  .buscar input,
  .criar-personagem input {
    width: 100%;
  }
`;
