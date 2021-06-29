
const BestSellingProducts = () => {
    return (
        <>
            <section className="py-5">
                <h2 className="text-center h3 font-bold">Top Selling Products of This Month</h2>
                <div className="container mt-4">
                    <div className="row featured-card">
                        <div className="col-md-4">
                            <FeaturedCard/>
                        </div>
                        <div className="col-md-4">
                            <FeaturedCard />
                        </div>
                        <div className="col-md-4">
                            <FeaturedCard />
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default BestSellingProducts;

const FeaturedCard = () => {
    const data = {
        title: `Product name`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
        img: `https://firebasestorage.googleapis.com/v0/b/ziatech-ltd.appspot.com/o/james-ree-ZmeFtu11Hpc-unsplash.jpeg?alt=media&token=bb494bd2-d528-4f74-b90e-cdae60615f91`
    }
    return (
        <>
            <figure>
                <figcaption>
                    <h2>{data.title} </h2>
                    <p>{data.description} </p>
                </figcaption>
            </figure>
            <style jsx>
                {`
                figure{
                    background-image: linear-gradient(0deg, rgba(11, 40, 49, 0.98), #c1f3ff4d),url(${data.img});
                }
                `}
            </style>
        </>
    )
}