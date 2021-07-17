import ChemicalCosmetics from "../../components/products/ChemicalCosmetics";
import SEOLayout from "../../components/shared/SEOLayout";

const PackagingPrinting = () => {
    const title = `Chemical & Cosmetic Machine`;
    const img = "/products/03.jpeg"
    return (
        <>
            <SEOLayout title={title + " | ziatech"} />
            <main>
                <section className="bg-success py-5 text-white">
                    <h1 className="text-center" >{title} </h1>
                </section>
                <section className="bg-white pt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h4>To buy any product call now:</h4>
                                        <a href="tel:+8801912152784" className="">+880 1912 152784</a>
                                    </div>
                                    <div>
                                        <a href="tel:+8801912152784" className="btn btn-md-lg btn-success ">CALL&nbsp;NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ChemicalCosmetics />
                <section className="bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
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