import { Header } from "../../components/Header/Header";
import { Container } from "../../pages/DetailsPage/styles";
import { Button } from "../../pages/DetailsPage/styles";

const DetailsPage = (props) => {
  const [character] = props.characters.filter(
    (element) => element.id === props.id
  );

  return (
    <div>
      <Header changePage={props.changePage} />
      <Container>
        <div>
          <h2>{character.name}</h2>
          <img src={character.image}></img>
          <p>Espécie: {character.species}</p>
          <p>Gênero: {character.gender}</p>
          <p>Lugar de origem: {character.origin.name}</p>
          <p>Localização: {character.location.name}</p>
        </div>
      </Container>
      <Button onClick={() => props.changePage("homepage")}>Voltar </Button>{" "}
    </div>
  );
};

export default DetailsPage;
