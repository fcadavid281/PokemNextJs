import Head from "next/head";
import React, { FC } from "react";

import { Navbar } from "../ui";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

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

        <meta property="og:title" content={`Info the about pokemon ${title}`} />
        <meta
          property="og:description"
          content={`this is page about ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
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
