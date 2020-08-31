import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="./favicon.png" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://miro.medium.com/max/4000/1*wW61modiUf9RZBmrZat9rQ.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="2000" />
          <meta property="og:image:height" content="480" />
          <meta property="og:image:alt" content="company logo" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
