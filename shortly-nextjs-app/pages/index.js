import Head from "next/head";
import Header from "../components/header/Header";

import Functionality from "../components/functionality/Functionality";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title key="title">Shortly URL shortening </title>
        <meta
          key="viewport"
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta
          name="description"
          key="description"
          content="This is fastest way to get shot link and if you need to save them, you can use your personal account, see our pircing plan and contact us"
        />
        <meta property="og:url" key="og:url" content="shortly.com" />
        <link rel="canonical" key="canonical" href="shortly.com" />
      </Head>
      <Header />
      <Functionality />
    </div>
  );
}
