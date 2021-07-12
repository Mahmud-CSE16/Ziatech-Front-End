import SEOLayout from "../components/shared/SEOLayout";

const about = () => {
    return (
        <>
        <SEOLayout title="About | ziatech"/>
            <main className="about">

                <section className="page-hero">
                    <div className="container text-center text-white">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h1>About Us</h1>
                                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta libero molestias quos odio, corrupti illo veritatis vel quasi excepturi iste nobis itaque. </p> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-5 mission">
                    <div className="container py-4">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6">
                                <h2 className="h1">ziatech</h2>
                                <p>"Be brave and confident, hope and make plans, get ready, fix aim, take the risk, begin work or business, remove obstacles, make challenging life, be a successful person or an industrialist, finally gain gorgeous, shining and successful life."</p>
                                <p className="font-bold mt-3">-Engineer Zia Ziddy</p>
                                <hr className="my-5" />
                                {/* <div className="d-flex market-exp">
                                    <div className="num text-danger m-0">
                                        10
                                    </div>
                                    <div className="text pl-4">
                                        <h5 className="font-weight-bold">Years on the Market</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, explicabo. Impedit, cupiditate?</p>
                                    </div>
                                </div> */}
                            </div>
                            <div className="col-md-6 text-center">
                                <img src="/img/products/04.jpeg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="team bg-light py-5">
                    <div className="container py-4 pb-5 mb-4">
                        <h2 className="h1 text-center mb-5">The Team Behind the Business</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <TeamMemberCard />
                            </div>
                            <div className="col-md-4">
                                <TeamMemberCard />
                            </div>
                            <div className="col-md-4">
                                <TeamMemberCard />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 partners">
                    <div className="container py-4 text-center">
                        <h2 className="h1 mb-5">Our Partners</h2>
                        <div className="row">
                            <PartnerLogo />
                            <PartnerLogo />
                            <PartnerLogo />
                        </div>
                    </div>
                </section> */}

                {/* testimonials */}
                {/* <section className="testimonial bg-light py-5">
                    <div className="container py-4">
                        <h2 className="h1 text-center mb-5">Customers' opinions</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="testimonial-card">
                                    <div className="d-flex mb-4">
                                        <img src="/img/about/testimonial-icon.svg" alt="" />
                                        <div className="pl-4">
                                            <h5 className="font-bold">Shahjahan Md Swajan</h5>
                                            <p>Software Engineer</p>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur minima asperiores molestiae doloremque ullam odit est eveniet, consectetur aliquid ducimus voluptate alias excepturi rem nostrum vel laudantium autem ratione culpa architecto? Enim.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="testimonial-card">
                                    <div className="d-flex mb-4">
                                        <img src="/img/about/testimonial-icon.svg" alt="" />
                                        <div className="pl-4">
                                            <h5 className="font-bold">Shahjahan Md Swajan</h5>
                                            <p>Software Engineer</p>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur minima asperiores molestiae doloremque ullam odit est eveniet, consectetur aliquid ducimus voluptate alias excepturi rem nostrum vel laudantium autem ratione culpa architecto? Enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
        </>
    );
};

export default about;

const TeamMemberCard = ({ data }) => {
    return (
        <>
            <div className="team-card text-center">
                <img src="https://i.pravatar.cc/400?img=8" alt="" className="img-fluid" />
                <div className="description-box py-4 px-3 ">
                    <h5>Shahjahan Swajan</h5>
                    <p >Software Engineer</p>
                </div>
            </div>
        </>
    )
}

const PartnerLogo = () => {
    return (
        <>
            <div className="col-md-2">
                <div className="px-3">
                    <img src="https://dev-shekho-bangladesh.pantheonsite.io/wp-content/uploads/2021/06/dummy_logo3.png" alt="" className="img-fluid" />
                </div>
            </div>
            <div className="col-md-2">
                <div className="px-3">
                    <img src="https://dev-shekho-bangladesh.pantheonsite.io/wp-content/uploads/2021/06/dummy_logo1.png" alt="" className="img-fluid" />
                </div>
            </div>
        </>
    )
}