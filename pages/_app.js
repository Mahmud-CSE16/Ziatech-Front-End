import SiteNavbar from "../components/shared/SiteNavbar/SiteNavbar";
import "../styles/all-styles.scss";
import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar';
import Footer from "../components/shared/Footer/Footer";
import SiteHeader from "../components/shared/SiteNavbar/SiteHeader";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#0db04b"
      />
      {/* <SiteHeader /> */}
      <SiteNavbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
