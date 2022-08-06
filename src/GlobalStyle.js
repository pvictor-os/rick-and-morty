import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --soft-white: #f2f2f2;
    --green: #8bcf21;
    --yellow: #ffcb16;
    --dark: #383b40;
    --deep-blue: #011640;
    --deep-blue-secondary: #010f2b;
  }

  h1{
    font-family: 'Jolly Lodger', cursive;
    color: var(--green)
  }

  h2, h3 {
  font-family: "Staatliches", cursive;
  color: var(--yellow)
  }


  body{
    font-family: 'Rajdhani', sans-serif;
    background: var(--deep-blue);
    color: var(--soft-white)
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .reset-button{
    background-color: #791123;
    cursor: pointer;
      font-family: "Staatliches", cursive;
      font-size: 15px;
      color: var(--soft-white);
    border: none;
    padding: 10px 20px;
    display: flex;
    margin: 0 auto;
    margin-bottom: 20px}

`;
