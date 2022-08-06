import { Header } from "../../components/Header/Header";
import { HomePageContainer } from "./styles";
import Card from "../../components/Card/Card";

const HomePage = (props) => {
  const characters = props.characters;

  const RenderList = characters
    .filter(
      (element) =>
        props.query === "" ||
        element.name.toLowerCase().includes(props.states.query.toLowerCase())
    )
    .sort((a, b) =>
      props.states.orderParam === "" ||
      (props.states.orderParam === "asc" && a.name > b.name)
        ? 1
        : -1
    )
    .sort((a, b) =>
      props.states.orderParam === "" ||
      (props.states.orderParam === "desc" && a.name > b.name)
        ? -1
        : 1
    )
    .map((element) => {
      return (
        <Card
          img={element.image}
          name={element.name}
          species={element.species}
          key={element.id}
          id={element.id}
          removeCharacter={props.removeCharacter}
          changePage={props.changePage}
        />
      );
    });

  return (
    <>
      <Header />
      <HomePageContainer>
        <aside>
          <div>
            <form className="form-order-search">
              <div className="ordenar">
                <h2>Ordenar</h2>
                <select
                  name=""
                  id=""
                  value={props.states.orderParam}
                  onChange={props.handlers.handleInputorderParam}
                >
                  <option value="asc">Crescente</option>
                  <option value="desc">Decrescente</option>
                </select>
              </div>

              <div className="buscar">
                <h2>Buscar</h2>
                <input
                  onChange={props.handlers.handleInputQuery}
                  value={props.states.query}
                  type="text"
                  placeholder="Nome do personagem"
                ></input>
              </div>
            </form>
          </div>
        </aside>

        <main>{RenderList}</main>

        <aside>
          <div>
            <form className="form-criar-personagem">
              <div className="criar-personagem"></div>
              <h2>Criar personagem</h2>
              <label htmlFor="imagem">Imagem:</label>
              <input
                onChange={props.handlers.handleInputImage}
                value={props.states.image}
                id="imagem"
                type="text"
                placeholder="Link da imagem"
              ></input>
              <label htmlFor="name">Nome:</label>
              <input
                id="name"
                onChange={props.handlers.handleInputName}
                value={props.states.name}
                type="text"
                placeholder="Nome do personagem"
                maxLength={20}
              ></input>
              <label htmlFor="species">Espécie:</label>
              <input
                onChange={props.handlers.handleInputSpecies}
                value={props.states.species}
                id="species"
                type="text"
                placeholder="Espécie do personagem"
                maxLength={25}
              ></input>
              <button onClick={props.addCharacter}>Criar</button>
            </form>
          </div>
        </aside>
      </HomePageContainer>
    </>
  );
};

export default HomePage;
