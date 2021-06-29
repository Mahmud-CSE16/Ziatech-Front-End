import SiteNavbar from "../components/shared/SiteNavbar/SiteNavbar";
import "../styles/all-styles.scss";
import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar';
import Footer from "../components/shared/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#f06e18"
      />
      <SiteNavbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
