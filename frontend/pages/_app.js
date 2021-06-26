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
          content="https://ebiaicqphbxvmztakwcm.supabase.co/storage/v1/object/sign/files/link-og-image?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9saW5rLW9nLWltYWdlIiwiaWF0IjoxNjIwMzkxNjMxLCJleHAiOjE5MzU3NTE2MzF9.pHRxsG-BOME2i3g5gMM6V2j7gMuFXqHvwUFg8bU2bwo"
          key="ogimage"
        />
        <meta property="og:title" content="RISTEK.link" key="ogtitle" />
        <meta
          property="og:description"
          content="No config customizable url shortener."
          key="ogdesc"
        />
        <meta property="og:url" content="https://ristek.link" />
        <link rel="shortcut icon" href="/logo.svg" />
        <script
          data-ad-client="ca-pub-2189563930887054"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
