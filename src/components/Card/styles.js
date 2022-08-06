import styled from "styled-components";

export const CardContainer = styled.div`
  :hover {
    background-color: #e6e6e6;
    transition: all 0.2s ease-in-out;
  }
  background-color: var(--soft-white);
  padding: 10px;
  margin: 5px;
  text-align: center;
  color: var(--dark);
  /* width: 220px;
  height: 340px; */
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
    box-shadow: 0px 4px #6da21b;
    transition: all 0.12s ease-in-out;
  }

  .button-detalhes:hover {
    box-shadow: 0px 6px #6da21b;
    transition: all 0.12s ease-in-out;
  }

  .button-remover {
    box-shadow: 0px 4px #791123;
    transition: all 0.12s ease-in-out;
  }
  .button-remover:hover {
    box-shadow: 0px 6px #791123;
    transition: all 0.12s ease-in-out;
  }
`;
