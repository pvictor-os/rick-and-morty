import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 400px;
  height: 70%;
  text-align: center;
  margin: auto;
  margin-block: 60px;
  padding-block: 20px;
  //background-color: white;
  img {
    max-width: 300px;
    margin: auto;
    padding-block: 20px;
  }

  h2 {
    color: #011640;
  }
  p {
    color: #011640;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  display: flex;
  margin: 0 auto;
  margin-block-end: 20px;
  padding-inline: 20px;
  padding-block: 10px;

  background-color: var(--yellow);
  border: none;
  cursor: pointer;
  font-family: "Staatliches", cursive;
  font-size: 20px;
`;
