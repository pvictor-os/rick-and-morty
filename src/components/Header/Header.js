import { HeaderContainer } from "./styles";

export const Header = (props) => {
  return (
    <HeaderContainer>
      <h1 onClick={() => props.changePage("homepage")}>
        <span>Rick and Morty</span>
      </h1>
    </HeaderContainer>
  );
};
