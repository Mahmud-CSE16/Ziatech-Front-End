import Carousel from "react-bootstrap/Carousel";
import Image from "next/image"
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"
import { GiGears } from "react-icons/gi"
import { FiMessageCircle } from "react-icons/fi"

const HeroComponent = () => {
    const bg1 = `/bg/01.jpeg`;
    const bg2 = `/bg/02.jpeg`;
    const bg3 = `/bg/03.jpeg`;

    return (
        <>
            <section className="hero-section">

                <Carousel slide={false} pause="" interval={2500} controls={false} indicators={false} >
                    <Carousel.Item>
                        <div className="carousel-one d-flex align-items-center justify-content-center carousel-img">
                            <div className="text-center text-md-right">
                                {/* <h1 className="display-2 mb-0"><i>ziatech</i> </h1>
                                <p className="font-22"><i>an world famous brand of machinery</i> &nbsp;</p> */}
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-two d-flex align-items-center justify-content-center carousel-img">
                            <div className="text-center text-md-right">
                                {/* <h1 className="display-2 mb-0"><i>ziatech</i> </h1>
                                <p className="font-22"><i>an world famous brand of machinery</i> &nbsp;</p> */}
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-three d-flex align-items-center justify-content-center carousel-img">
                            <div className="text-center text-md-right">
                                {/* <h1 className="display-2 mb-0"><i>ziatech</i> </h1>
                                <p className="font-22"><i>an world famous brand of machinery</i> &nbsp;</p> */}
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                {/* <div className="text-right">
                    <h1 className="text-white display-2">ziatech</h1>
                    <p className="font-22"><i>a world famous brand of machinery</i></p>
                </div> */}
                {/* <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-8 py-3">
                            <Carousel slide={true} pause="hover" interval={1500} controls={false} indicators={true} >
                                <Carousel.Item>
                                    <div style={{ backgroundImage: `url("/img/products/01.jpeg")` }} className="carousel-img"></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div style={{ backgroundImage: `url("/img/products/02.jpeg")` }} className="carousel-img"></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div style={{ backgroundImage: `url("/img/products/03.jpeg")` }} className="carousel-img"></div>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                        <div className="col-md-4 py-3">
                            <div style={{ backgroundImage: `url("/img/products/04.jpeg")` }} className="carousel-img"></div>
                        </div>
                    </div>
                </div> */}
            </section>
            <section className="features">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <a href="#categories">
                                <div className="feature-card card p-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon">
                                            <GiGears />
                                        </div>
                                        <div className="text pl-4">
                                            <p className="title">All Machines</p>
                                            <p className="description">Imported & Manufactured</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <a href="#footer">
                                <div className="feature-card card p-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div className="text pl-4">
                                            <p className="title">Address</p>
                                            <p className="description">Janapath Mur, Saidabad, Dhaka</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <a href="tel:+8801912152784" target="_blank" rel="noopener noreferrer">
                                <div className="feature-card card p-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon">
                                            <FaPhoneAlt />
                                        </div>
                                        <div className="text pl-4">
                                            <p className="title">Contact Us</p>
                                            <p className="description">+880 1912-152784</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroComponent;