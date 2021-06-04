import CardTemplate from "../CardTemplate";
import { useStyles } from "./style";

import "antd/dist/antd.css";
import { List } from "antd";

import { useEffect, useState } from "react";
import axios from "axios";

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon?limit=150";

const Cars = () => {
  const classes = useStyles();

  const [characterAPI, setCharacterAPI] = useState({
    characterList: [],
    nextUrl: "https://rickandmortyapi.com/api/character/",
  });
  const { characterList, nextUrl } = characterAPI;
  const [pokemonChar, setPokemonChar] = useState([]);

  const getCharacters = () => {
    if (nextUrl) {
      fetch(nextUrl)
        .then((res) => res.json())
        .then((body) => {
          setCharacterAPI({
            characterList: [...characterList, ...body.results],
            nextUrl: body.info.next,
          });
        });
    }
  };

  const pokemonList = () => {
    axios.get(POKEMON_URL).then((body) => {
      setPokemonChar(body.data.results);
    });
  };
  console.log(pokemonChar);

  useEffect(getCharacters, [nextUrl, characterList]);
  useEffect(pokemonList, []);

  return (
    <>
      <List
        grid={{ gutter: 50, column: 4 }}
        dataSource={pokemonChar}
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: ["10", "50", "100"],
          responsive: true,
          pageSize: 16,
        }}
        renderItem={(item) => (
          <List.Item>
            <CardTemplate name={item.name} marca="AUDI" price="699" />
          </List.Item>
        )}
      />
    </>
  );
};

export default Cars;
