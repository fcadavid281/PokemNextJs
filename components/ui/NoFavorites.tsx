import { Container, Image, Text } from "@nextui-org/react";

const NoFavoritesPage = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh- 100px)",
        alignSelf: "center",
        top: "250px",
      }}
    >
      <Text h1>There are no Favorites</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        width={250}
        height={250}
        alt="no hay"
        style={{
          opacity: 0.1,
        }}
      />
    </Container>
  );
};

export { NoFavoritesPage };
