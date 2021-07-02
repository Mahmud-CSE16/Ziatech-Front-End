import Link from "next/link"
import { FaChevronRight, FaEnvelopeOpenText, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import ProductCard from "../components/shared/ProductCard"


const shop = () => {
    const data = {
        id: 0,
        name: `Orange drink powder packaging machine`,
        price: `300,000`,
        category: `Packaging Machine`,
        img: `/img/products/04.jpeg`
    }
    return (
        <>
            <main className="shop">
                <section className="bg-light py-4">
                    <div className="container">
                        <Link href="/"><a className="text-primary font-bold">Home</a></Link> <span className="text-secondary font-14"> <FaChevronRight /></span> Shop
                        <h2 className="mt-2 mb-0 font-bold">Shop</h2>
                    </div>
                </section>
                <div className="section py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h5 className="font-bold">Filter by category</h5>
                            </div>
                            <div className="col-md-9">
                                <h5 className="font-bold">Choose your product</h5>
                                <div className="row mt-4">
                                    <ProductCard data={data} />
                                    <ProductCard data={data} />
                                    <ProductCard data={data} />
                                    <ProductCard data={data} />
                                    <ProductCard data={data} />
                                    <ProductCard data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default shop;