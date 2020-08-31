import React from "react";
import Head from "next/head";

export default function Pricing() {
  return (
    <div className="pricing">
      <Head>
        <title key="title">Affordable prices for short links - Shortly</title>
        <meta
          name="description"
          key="description"
          content="Affordable prices for short links, See the reasons to choose us. It is also possible to get custom pricing after exceed certain numbers "
        />
        <meta property="og:url" key="og:url" content="shortly.com" />
        <link rel="canonical" key="canonical" href="shortly.com" />
      </Head>
      <h1>Our Pricing</h1>
      <div className="options__container">
        <div className="option border-radius-left">
          <h3>Basic</h3>

          <h2 id="priceBasic">
            <span>$ </span>199.99
          </h2>

          <ul>
            <li>500 GB Storage</li>
            <li>2 special domain</li>
            <li>Up to 3000 short links</li>
          </ul>
          <button>Learn more</button>
        </div>
        <div className="option option-special">
          <h3>Professional</h3>
          <h2 id="priceProf">
            <span>$ </span>249.99
          </h2>
          <ul>
            <li>1 TB Storage</li>
            <li>5 special domain</li>
            <li>Up to 10000 short links</li>
          </ul>
          <button>Learn More</button>
        </div>
        <div className="option border-radius-right">
          <h3>Master</h3>
          <h2 id="priceMaster">
            <span>$ </span>399.99
          </h2>
          <ul>
            <li>2 TB Storage</li>
            <li>10 special domain</li>
            <li>Up to 5000 short links</li>
          </ul>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
