import { FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebookF } from "react-icons/fa"
import { AiOutlineForward } from "react-icons/ai"
import Link from "next/link"
import { linksPartOne, linksPartThree, linksPartTwo } from "./data";
const Footer = () => {
    return (
        <>
            <footer className="bg-primary pt-5 pb-4 text-dark" id="footer"  >
                <div className="container mt-4 gray-bottom-border pb-5">
                    <div className="row">
                        <div className="col-md-4 part-1  mb-4 mb-md-0">
                            {/* <h5 className="text-white font-weight-bold mb-4">Contact info.</h5> */}
                            <img src="/logo01.png" alt="" className="footer-logo mb-3" />
                            <p> <b>ziatech auto machine & engineering company ltd.</b><br /> -industrial machines & steel products manufacturer, importer & exporter-</p>
                            <div className="mt-3">
                                {/* <a href="http://fb.com" target="_blank" rel="noopener noreferrer">
                                    <div className="social-icon-container" >
                                        <div className="social-icons"><FaFacebookF /></div>
                                    </div>
                                </a> */}
                                <a href="https://www.linkedin.com/company/74720530/admin/" target="_blank" rel="noopener noreferrer">
                                    <div className="social-icon-container" >
                                        <div className="social-icons"><FaLinkedinIn /></div>
                                    </div>
                                </a>
                                <a href="mailto:ziatechbd@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <div className="social-icon-container" >
                                        <div className="social-icons"><FaEnvelope /></div>
                                    </div>
                                </a>
                                <a href="tel:+8801912152784" target="_blank" rel="noopener noreferrer">
                                    <div className="social-icon-container" >
                                        <div className="social-icons"><FaPhoneAlt /></div>
                                    </div>
                                </a>
                            </div>
                            {/* <p> <span className="d-inline-block"><FaEnvelope /> </span>ziatechbd@gmail.com</p> */}
                            {/* <p> <span className="d-inline-block"><FaPhoneAlt /> </span>+8801912152784</p> */}
                            {/* <p> <span className="d-inline-block"><FaCalendar /> </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae maxime provident!</p> */}
                        </div>
                        <div className="col-md-3"></div>
                        {/* <div className="col-md-2 part-2 mb-4 mb-md-0">
                            <h5 className="text-white font-weight-bold mb-4">Shop Departments</h5>
                            <ul className="footer-links">
                                {linksPartOne.map(item => <FooterLinkItem data={item} key={item.id} />)}
                            </ul>
                        </div> */}
                        <div className="col-md-2 part-2 mb-4 mb-md-0">
                            <h5 className="text-dark font-weight-bold mb-4">Quick Links</h5>
                            <ul className="footer-links">
                                {linksPartTwo.map(item => <FooterLinkItem data={item} key={item.id} />)}
                            </ul>
                            {/* <h5 className="text-white font-weight-bold mb-4 mt-5">About Us</h5>
                            <ul className="footer-links">
                                {linksPartThree.map(item => <FooterLinkItem data={item} key={item.id} />)}
                            </ul> */}
                        </div>
                        <div className="col-md-3 ">
                            <h5 className="text-dark font-weight-bold mb-4">Visit Our Showroom</h5>
                            <p className="mb-3"><strong>Saidabad office: </strong>HR Plaza, 43/2/1, 1st Floor, Janapath mur, ( Beside of LS CNG Pump), Saidabad Dhaka-1100. +8801912-152784. </p>
                            {/* <p className="text-dark" >Corporate Office & Show Room-1: HR Plaza, 43/2/1, Janapath Mur, Saidabad, Dhaka-1100.</p> */}
                           
                        </div>
                    </div>
                </div>
                <div className="container text-center pt-4">
                    <p className="mb-0 text-dark font-light font-14">&copy; All Rights Reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;

const FooterLinkItem = ({ data }) => {
    return (
        <li>
            <Link href={`/${data.link}`}>
                <div className="d-flex">
                    <span className="icon"><AiOutlineForward /></span>
                    <p>{data.text}</p>
                </div>
            </Link>
        </li>
    )
}