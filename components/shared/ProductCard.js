import Link from 'next/link';
import { useState } from 'react';
import { FaSearch, FaRegHeart, FaHeart } from "react-icons/fa";
import ProductQuickView from './ProductQuickView';

const ProductCard = ({ data, col }) => {
    const [quickView, setQuickView] = useState(false);
    return (
        <>
            <div className={`col-md-${col ? col : "4"} mb-4`} >
                <>
                    <div className="product-card p-3">
                        <div className="p-4">
                            <img src={data.img} alt="" className="img-fluid" />
                        </div>
                        <Link href="/contact">{data.category}</Link>
                        <Link href="/shop"><h6 className="mt-3">{data.name}</h6></Link>
                        <h6 className="font-bold text-danger">৳ {data.price? data.price: 0}</h6>
                        <div className="my-4 d-flex justify-content-between">
                            <button className="btn btn-danger btn-sm">ADD TO CART</button>
                            <button onClick={()=> setQuickView(true)} className="btn btn-outline-danger btn-sm">Quick view</button>
                        </div>
                        <div className="quick-access text-right">
                            <AddToFavorite/> <br />
                            <FaSearch />
                        </div>
                    </div>
                    <ProductQuickView data={data} show={quickView} onHide={()=> setQuickView(false)} />
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
        <span className="font-18" onClick={()=> setLike(!like)} >{like? <span className="text-red"><FaHeart/></span> : <FaRegHeart/> } </span>
        </>
    )
}