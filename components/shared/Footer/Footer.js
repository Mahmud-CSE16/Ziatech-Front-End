import { FaCalendar, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { AiOutlineForward } from "react-icons/ai"
import Link from "next/link"
import { linksPartOne, linksPartThree, linksPartTwo } from "./data";
const Footer = () => {
    return (
        <>
            <footer className="bg-primary pt-5 pb-4 " >
                <div className="container mt-4 gray-bottom-border pb-5">
                    <div className="row">
                        <div className="col-md-3 part-1 pr-0 pr-md-4">
                            <h5 className="text-white font-weight-bold mb-4">Contact info.</h5>
                            <p> <span className="d-inline-block"><FaMapMarkerAlt /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vero sunt animi nisi officia consequuntur. </p>
                            <p> <span className="d-inline-block"><FaEnvelope /> </span>ziatechbd@gmail.com</p>
                            <p> <span className="d-inline-block"><FaPhoneAlt /> </span>+8801912152784</p>
                            {/* <p> <span className="d-inline-block"><FaCalendar /> </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae maxime provident!</p> */}
                        </div>
                        <div className="col-md-2 part-2">
                            <h5 className="text-white font-weight-bold mb-4">Shop Departments</h5>
                            <ul className="footer-links">
                                {linksPartOne.map(item => <FooterLinkItem data={item} key={item.id} />)}
                            </ul>
                        </div>
                        <div className="col-md-3 part-2">
                            <h5 className="text-white font-weight-bold mb-4">Quick Links<br /> Info</h5>
                            <ul className="footer-links">
                                {linksPartTwo.map(item => <FooterLinkItem data={item} key={item.id} />)}
                            </ul>
                            {/* <h5 className="text-white font-weight-bold mb-4 mt-5">About Us</h5>
                            <ul className="footer-links">
                                {linksPartThree.map(item => <FooterLinkItem data={item} key={item.id} />)}
                            </ul> */}
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-white font-weight-bold mb-4">Stay Informed By Newsletter</h5>
                            <p className="text-white" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est libero fugit velit consequuntur.</p>
                        </div>
                    </div>
                </div>
                <div className="container text-center pt-4">
                    <p className="mb-0 text-white font-light font-14">&copy; All Rights Reserved</p>
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