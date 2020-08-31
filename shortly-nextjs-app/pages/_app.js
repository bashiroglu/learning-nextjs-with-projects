import "../sass/app.scss";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
