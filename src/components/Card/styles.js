import styled from "styled-components";

export const CardContainer = styled.div`
  :hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }

  background-color: var(--soft-white);
  padding: 10px;
  margin: 5px;
  text-align: center;
  color: var(--dark);
  width: 265px;
  min-height: 335px;
  transition: all 0.2s ease-in-out;

  img {
    width: 220px;
    height: 220px;
  }

  h2 {
    color: var(--deep-blue);
  }

  button {
    margin-inline: 5px;
    margin-top: 5px;
    border: none;
    padding: 5px;
    background-color: #e0e0e0;
    cursor: pointer;
  }

  .button-detalhes {
    background-color: #6da21b;
    color: white;
    font-weight: bold;
    transition: all 0.12s ease-in-out;
  }

  .button-detalhes:hover {
    transition: all 0.12s ease-in-out;
  }

  .button-remover {
    background-color: #791123;
    color: white;
    font-weight: bold;
    transition: all 0.12s ease-in-out;
  }

  .button-remover:hover {
    transition: all 0.12s ease-in-out;
  }
`;
