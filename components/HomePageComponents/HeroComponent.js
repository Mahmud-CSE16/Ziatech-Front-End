import Carousel from "react-bootstrap/Carousel";
import Image from "next/image"
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"
import { GiGears } from "react-icons/gi"
import { FiMessageCircle } from "react-icons/fi"

const HeroComponent = () => {
    const bg1 = `https://images.pexels.com/photos/2760289/pexels-photo-2760289.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`;
    const bg2 = `https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`;
    const bg3 = `https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`;

    return (
        <>
            <section className="hero-section">

                <Carousel slide={false} pause="hover" interval={2500} controls={false} indicators={false} >
                    <Carousel.Item>
                        <div style={{ background: `linear-gradient(0deg, rgba(7, 16, 19, 0.8), rgba(0, 0, 0, .6)),url(${bg1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="d-flex align-items-center justify-content-center carousel-img">
                            <div className="text-right">
                                <h1 className="display-2 font-weight-bold">ZiaTech BD</h1>
                                <p className="font-22">a world famous brand of machinery &nbsp;</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ background: `linear-gradient(0deg, rgba(7, 16, 19, 0.8), rgba(0, 0, 0, .6)),url(${bg2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="d-flex align-items-center justify-content-center carousel-img">
                            <div className="text-right">
                                <h1 className="display-2 font-weight-bold">ZiaTech BD</h1>
                                <p className="font-22">a world famous brand of machinery &nbsp;</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ background: `linear-gradient(0deg, rgba(7, 16, 19, 0.8), rgba(0, 0, 0, .6)),url(${bg3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="d-flex align-items-center justify-content-center carousel-img">
                            <div className="text-right">
                                <h1 className="display-2 font-weight-bold">ZiaTech BD</h1>
                                <p className="font-22">a world famous brand of machinery &nbsp;</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                {/* <div className="text-right">
                    <h1 className="text-white display-2">ZiaTech BD</h1>
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
                        <div className="col-md-4">
                            <a href="#categories">
                                <div className="feature-card card p-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon">
                                            <GiGears />
                                        </div>
                                        <div className="text pl-4">
                                            <p className="title">All Machineries</p>
                                            <p className="description">Imported & Manufactured</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
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
                        <div className="col-md-4">
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