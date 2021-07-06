import SEOLayout from "../../components/shared/SEOLayout";

const PackagingPrinting = () => {
    const title= `Chemical & Cosmetic Machine`;
    const img = "/products/03.jpeg"
    return (
        <>
        <SEOLayout title={title+ " | ZiaTech BD"} />
            <main>
                <section className="page-hero">
                    <div className="container text-center text-white">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h1>{title} </h1>
                                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta libero molestias quos odio, corrupti illo veritatis vel quasi excepturi iste nobis itaque. </p> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="d-flex mb-5 mt-4 justify-content-between align-items-center">
                                    <div>
                                        <h4>To buy any product call now:</h4>
                                        <a href="tel:+8801912152784" className="">+880 1912 152784</a>
                                    </div>
                                    <div>
                                        <a href="tel:+8801912152784" className="btn btn-lg btn-primary ">CALL NOW</a>
                                    </div>
                                </div>
                                {/* image */}
                                <img src={img} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                <style>
                    {`
                .page-hero{
                    background: linear-gradient(0deg, rgba(11, 40, 49, 0.98), #29586498),
                    url("/bg/packaging-bg.jpeg");
                    background-position: center center;
                }
                `}
                </style>
            </main>
        </>
    );
};

export default PackagingPrinting;