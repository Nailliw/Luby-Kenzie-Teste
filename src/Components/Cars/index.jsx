import CardTemplate from "../CardTemplate";
import { useStyles } from "./style";

import "antd/dist/antd.css";
import { List } from "antd";

import { useEffect, useState } from "react";
import axios from "axios";

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon?limit=150";

const Cars = () => {
  const classes = useStyles();

  const [pokemonChar, setPokemonChar] = useState([]);

  const pokemonList = () => {
    axios.get(POKEMON_URL).then((body) => {
      setPokemonChar(body.data.results);
    });
  };
  console.log(pokemonChar[0]);

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
            <CardTemplate name={item.name} marca="MARCA" price="699" />
          </List.Item>
        )}
      />
    </>
  );
};

export default Cars;
