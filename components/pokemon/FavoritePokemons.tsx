import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCardPokemonPage } from "./FavoriteCardPokemon";

interface Props {
  pokemon: number[];
}

const FavoritePokemonsPage: FC<Props> = ({ pokemon }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemon.map((id) => (
        <FavoriteCardPokemonPage id={id} key={id} />
      ))}
    </Grid.Container>
  );
};

export { FavoritePokemonsPage };
