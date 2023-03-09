import { Grid } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import { Inter } from "next/font/google";
import { pokeApi } from "../../api";

import { Layout } from "../../components/layouts";
import { PokemonCard } from "../../components/pokemon";
import { PokemonListResponse, SmallPokemon } from "../../interfaces";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listados de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((poke) => (
          <PokemonCard key={poke.id} pokemon={poke} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("pokemon?limit=151");

  let pokemons: SmallPokemon[] = data.results.map((item, index) => {
    return {
      ...item,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemons,
      // results,
    },
  };
};

export default HomePage;
