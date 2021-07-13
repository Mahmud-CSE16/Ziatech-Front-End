import { bestSellingData } from "./bestSellingData";
import Link from "next/link"

const BestSellingProducts = () => {
    return (
        <>
            <section className="py-5 bg-light" id="categories">
                <h2 className="text-center h3 font-bold">Top Product Categories</h2>
                <div className="container featured-card mt-5">
                    <div className="row  d-flex justify-content-around">
                        {bestSellingData.map(item => <FeaturedCard data={item} key={item.id} />)}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BestSellingProducts;

const FeaturedCard = ({ data }) => {
    // const data = {
    //     title: `Product name`,
    //     description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    //     img: `https://firebasestorage.googleapis.com/v0/b/ziatech-ltd.appspot.com/o/james-ree-ZmeFtu11Hpc-unsplash.jpeg?alt=media&token=bb494bd2-d528-4f74-b90e-cdae60615f91`
    // }
    return (
        <>
            <div className="col-md-3 mb-3">
                <Link href={`/products${data.link}`}>
                    <figure>
                        <figcaption>
                            <h2 className="">{data.name} </h2>
                            <p><a href="#" className="btn btn-success">Visit Now</a> </p>
                        </figcaption>
                    </figure>
                </Link>
                <style jsx>
                    {`
                figure{
                    background-image: linear-gradient(0deg, rgba(11, 40, 49, 0.08), #c1f3ff4d),url(${data.img});
                }
                figure:hover{
                    background-image: linear-gradient(0deg, rgba(11, 40, 49, 1), #0844539a),url(${data.img});
                }
                `}
                </style>
            </div>
        </>
    )
}