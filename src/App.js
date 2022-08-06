import { Header } from "./components/Header/Header";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import { GlobalStyle } from "./GlobalStyle";
import { results } from "./data/data";

function App() {
  const [characters, setCharacters] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [query, setQuery] = useState("");
  const [orderParam, setOrderParam] = useState("");
  const [page, setPage] = useState("homepage");
  const [id, setId] = useState(0);

  useEffect(() => {
    setCharacters(results);
  }, []);
  const handleInputImage = (event) => {
    setImage(event.target.value);
  };
  const handleInputName = (event) => {
    setName(event.target.value);
  };
  const handleInputSpecies = (event) => {
    setSpecies(event.target.value);
  };
  const handleInputQuery = (event) => {
    setQuery(event.target.value);
  };
  const handleInputorderParam = (event) => {
    setOrderParam(event.target.value);
  };

  const changePage = (page, id) => {
    setPage(page);
    setId(id);
  };

  const addCharacter = (event) => {
    event.preventDefault();

    let newCharacter = {
      id: Date.now(),
      name,
      species,
      origin: {
        name: "Earth",
      },
      image,
      location: { name: "unknown" },
      gender: "unknown",
    };

    newCharacter.image === ""
      ? (newCharacter.image = "https://i.ibb.co/T1vb6Vk/inter.jpg")
      : (newCharacter.image = newCharacter.image);
    newCharacter.name === ""
      ? (newCharacter.name = "Unknown")
      : (newCharacter.name = newCharacter.name);
    newCharacter.species === ""
      ? (newCharacter.species = "Unknown")
      : (newCharacter.species = newCharacter.species);

    const newCharacterList = [...characters, newCharacter];
    setCharacters(newCharacterList);

    setImage("");
    setName("");
    setSpecies("");
  };

  const removeCharacter = (id) => {
    const filteredList = characters.filter((element) => {
      return element.id !== id;
    });

    setCharacters(filteredList);
  };

  const resetCharacters = () => {
    setCharacters(results);
    setPage("homepage");
  };

  const renderPage = () => {
    switch (page) {
      case "homepage":
        return (
          <>
            <HomePage
              characters={characters}
              states={{ image, name, species, query, orderParam }}
              handlers={{
                handleInputImage,
                handleInputName,
                handleInputSpecies,
                handleInputQuery,
                handleInputorderParam,
              }}
              resetCharacters={resetCharacters}
              addCharacter={addCharacter}
              removeCharacter={removeCharacter}
              changePage={changePage}
            />
            <button className="reset-button" onClick={resetCharacters}>
              Reset
            </button>
          </>
        );
      case "details":
        return (
          <DetailsPage
            characters={characters}
            id={id}
            changePage={changePage}
          />
        );
    }
  };

  return (
    <div className="App">
      <GlobalStyle />

      {renderPage()}
    </div>
  );
}

export default App;
