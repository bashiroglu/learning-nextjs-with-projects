import React from "react";
import Head from "next/head";
import Statistics from "../components/statistics/Statistics";

export default function features() {
  return (
    <div className="functionality">
      <Head>
        <title key="title">Statistics of short links | Shortly</title>
        <meta
          name="description"
          key="description"
          content="Boost your brand recognition with each click. Generic links don’t
          mean a thing. Branded links help instil confidence in your content."
        />
        <meta property="og:url" key="og:url" content="shortly.com" />
        <link rel="canonical" key="canonical" href="shortly.com" />
      </Head>
      <Statistics />
    </div>
  );
}
