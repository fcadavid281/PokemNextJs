import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

const urlBase = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`;

interface Props {
  id: number;
}

const FavoriteCardPokemonPage: FC<Props> = ({ id }) => {
  const router = useRouter();
  const onClickFavorite = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onClickFavorite}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image src={`${urlBase}${id}.svg`} width={"100%"} height={140} />
      </Card>
    </Grid>
  );
};

export { FavoriteCardPokemonPage };
