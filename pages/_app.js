import "../css/index.css";
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins"

import Head from "next/head";
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
      <title>RISTEK.link | No config customizable url shortener.</title>
        <meta
          name="Description"
          content="No config customizable url shortener."
        />
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
