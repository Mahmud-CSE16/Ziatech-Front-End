import Link from 'next/link';
import { useState } from 'react';
import { FaSearch, FaRegHeart, FaHeart } from "react-icons/fa";

const ProductCard = ({ data, col }) => {
    return (
        <>
            <div className={`col-md-${col ? col : "4"} mb-4`} >
                <>
                    <div className="product-card p-3">
                        <div className="p-4">
                            <img src="/img/products/04.jpeg" alt="" className="img-fluid" />
                        </div>
                        <Link href="/contact">Product Category</Link>
                        <Link href="/shop"><h6 className="mt-3">Orange drink powder packing machine</h6></Link>
                        <h6 className="font-bold text-danger">৳ 300,000</h6>
                        <div className="my-4 d-flex justify-content-between">
                            <button className="btn btn-danger btn-sm">ADD TO CART</button>
                            <button className="btn btn-outline-danger btn-sm">Buy Now</button>
                        </div>
                        <div className="quick-access text-right">
                            <AddToFavorite/> <br />
                            <FaSearch />
                        </div>
                    </div>
                </>
            </div>
        </>
    );
};

export default ProductCard;

const AddToFavorite =()=>{
    const [like, setLike] = useState(false);
    return(
        <>
        <spa className="font-18" onClick={()=> setLike(!like)} >{like? <span className="text-red"><FaHeart/></span> : <FaRegHeart/> } </spa>
        </>
    )
}