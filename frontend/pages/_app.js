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
          property="og:description"
          content="No config customizable url shortener."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/cFVS07D/ristek-link.jpg"
          key="ogimage"
        />
        <meta property="og:title" content="RISTEK.link" key="ogtitle" />
        <meta
          property="og:description"
          content="No config customizable url shortener."
          key="ogdesc"
        />
        <meta property="og:url" content="https://ristek.link" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RISTEK.link" />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/cFVS07D/ristek-link.jpg"
        />
        <meta name="twitter:image:alt" content="Ristek OSS" />
        <meta
          name="twitter:description"
          content="No config customizable url shortener."
        />
        <meta name="twitter:site" content="@RistekOSS" />
        <meta name="twitter:creator" content="@RistekOSS" />
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
