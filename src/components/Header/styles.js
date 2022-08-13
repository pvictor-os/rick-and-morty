import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--deep-blue-secondary);
  height: 100px;
  text-align: center;
  font-size: 24px;
  line-height: 100px;
  h1 > span {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover {
      transition: all 0.2s ease-in-out;
      font-size: 49.5px;
    }
  }
`;
