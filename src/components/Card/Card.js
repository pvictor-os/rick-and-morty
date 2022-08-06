import { CardContainer } from "./styles";

const Header = (props) => {
  return (
    <CardContainer>
      <img src={props.img} alt={props.name}></img>
      <h2>{props.name}</h2>
      <strong>
        <p>{props.species}</p>
      </strong>
      <button
        className="button-detalhes"
        onClick={() => props.changePage("details", props.id)}
      >
        Detalhes
      </button>
      <button
        className="button-remover"
        onClick={() => props.removeCharacter(props.id)}
      >
        Remover
      </button>
    </CardContainer>
  );
};

export default Header;
