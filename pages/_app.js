import SiteNavbar from "../components/shared/SiteNavbar/SiteNavbar";
import "../styles/all-styles.scss";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <SiteNavbar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
