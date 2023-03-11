import { Layout } from "../../../components/layouts";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FavoritePokemonsPage } from "../../../components/pokemon";
import { NoFavoritesPage } from "../../../components/ui";
import { localFavorites } from "../../../utils";

const FavoritesPage = () => {
  const router = useRouter();

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemon());
  }, []);

  return (
    <Layout title="pokémon's Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavoritesPage />
      ) : (
        <FavoritePokemonsPage pokemon={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
