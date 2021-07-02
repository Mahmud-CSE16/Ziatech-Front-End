import Carousel from "react-bootstrap/Carousel";
import Image from "next/image"
import { FaShuttleVan, FaWallet } from "react-icons/fa"
import { FiMessageCircle } from "react-icons/fi"

const HeroComponent = () => {
    return (
        <>
            <section className="hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-8 py-3">
                            <Carousel slide={true} pause="hover" interval={6000} controls={false} indicators={true} >
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
                </div>
            </section>
            <section className="features">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-card card p-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <FaShuttleVan />
                                    </div>
                                    <div className="text pl-4">
                                        <p className="title">Payment & Delivery</p>
                                        <p className="description">Shipping for order over ৳ 1000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card card p-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <FaWallet />
                                    </div>
                                    <div className="text pl-4">
                                        <p className="title">Payment & Delivery</p>
                                        <p className="description">Shipping for order over ৳ 1000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card card p-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <FiMessageCircle />
                                    </div>
                                    <div className="text pl-4">
                                        <p className="title">Payment & Delivery</p>
                                        <p className="description">Shipping for order over ৳ 1000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroComponent;