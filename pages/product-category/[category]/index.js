import Link from "next/link"
import { FaChevronRight, FaEnvelopeOpenText, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import ProductCard from "../../../components/shared/ProductCard";


const ShopPage = () => {
    const data = {
        id: 0,
        name: `Orange drink powder packaging machine`,
        price: `300,000`,
        category: `Packaging Machine`,
        img: `/img/products/04.jpeg`
    }
    return (
        <>
            <section className="bg-light py-4">
                <div className="container">
                    <Link href="/"><a className="text-primary font-bold">Home</a></Link> 
                    <span className="text-secondary font-14"> <FaChevronRight /></span> Category <span className="text-secondary font-14"> <FaChevronRight /></span> Packaging Machine
                    <h2 className="mt-2 mb- font-bold">Packaging Machine</h2>
                </div>
            </section>
            <main className="shop">
                <div className="section py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h5 className="font-bold">Other categories</h5>
                                <div className="category-container mt-4 pr-0 pr-md-4">
                                    <CategoryCard />
                                    <CategoryCard />
                                    <CategoryCard />
                                    <CategoryCard />
                                    <CategoryCard />
                                    <CategoryCard />
                                </div>
                            </div>
                            <div className="col-md-9 pl-0 pl-md-4">
                                <h5 className="font-bold"><span className="text-gray">Category: </span>Package Machine </h5>
                                <div className="row mt-4">
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

export default ShopPage;
const CategoryCard = () => {
    return (
        <>
            <div className="category-item">
                <Link href={`/product-category/packaging-machine`}><a className="h6">Packaging Machine</a></Link>
            </div>
        </>
    )
}