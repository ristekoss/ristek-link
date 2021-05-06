import "../css/index.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins";

import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>RISTEK.link | No config customizable url shortener.</title>
        <meta
          name="description"
          content="No config customizable url shortener."
        />
        <meta
          property="og:image"
          content="https://join.ristek.cs.ui.ac.id/images/benefit-ristek.png"
        />
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
