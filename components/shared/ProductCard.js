import Link from 'next/link';
import { FaSearch, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ data, col }) => {
    return (
        <>
            <div className={`col-md-${col ? col : "4"} mb-4`} >
                <Link href="/contact">
                    <div className="product-card p-3">
                        <div className="p-4">
                            <img src="https://source.unsplash.com/random/600x600" alt="" className="img-fluid" />
                        </div>
                        <Link href="/contact">Product Category</Link>
                        <h6 className="mt-3">Blink Mini - Compact indoor plug-in smart</h6>
                        <h6 className="font-bold text-danger">৳ 3000</h6>
                        <div className="my-4 d-flex justify-content-between">
                            <button className="btn btn-danger btn-sm">ADD TO CART</button>
                            <button className="btn btn-outline-danger btn-sm">Buy Now</button>
                        </div>
                        <div className="quick-access text-right">
                            <FaRegHeart /> <br />
                            <FaSearch />
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProductCard;