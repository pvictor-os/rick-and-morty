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

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
  }

  img {
    max-width: 300px;
    margin: auto;
    padding-block: 20px;
  }

  h2 {
    color: #011640;
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.07);
      transition: all 0.3s ease-in-out;
    }
  }
  p {
    color: #011640;
    font-weight: 900;
    transition: all 0.1s ease-in-out;
    :hover {
      transform: scale(1.03);
      transition: all 0.1s ease-in-out;
    }
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
  :hover {
    background-color: #f5c316;
  }
`;
