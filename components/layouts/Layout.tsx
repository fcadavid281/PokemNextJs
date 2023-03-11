import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title style={{ textTransform: "uppercase" }}>
          {" "}
          {title || "Poken App"}{" "}
        </title>
        <meta name="author" content="Fabian Cadavid"></meta>
        <meta
          name="description"
          content={`Información sobre el pokemon   ${title}`}
        ></meta>
        <meta name="keywords" content={`${title} pokemon, pokedex`}></meta>
      </Head>

      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
export { Layout };
