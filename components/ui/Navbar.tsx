import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px  20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />

      <NextLink href="/" passHref>
        <Text color="white" transform="capitalize" h2>
          Pokémon
        </Text>
        {/* <Text color="white" h3></Text> */}
      </NextLink>

      <Spacer
        css={{
          flex: 1,
        }}
      />

      <NextLink href="/favorites" passHref>
        <Text
          color="white"
          transform="capitalize"
          css={{ marginRight: "10px" }}
        >
          favoritos
        </Text>
        {/* <Link css={{ marginRight: "10px" }}>
        </Link> */}
      </NextLink>
    </div>
  );
};

export { Navbar };
