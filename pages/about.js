
const about = () => {
    return (
        <>
        <main className="about">
            
            <section className="page-hero">
                <div className="container text-center text-white">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta libero molestias quos odio, corrupti illo veritatis vel quasi excepturi iste nobis itaque. </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 mission">
                <div className="container py-4">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <h2 className="h1">Our Mission in the Company</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repudiandae eius ea rem iusto. Voluptatibus commodi ipsum odio totam labore dicta harum tempore, eaque exercitationem, aliquid nulla veniam quidem culpa distinctio nobis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus temporibus labore tenetur obcaecati, cumque voluptas iste id doloremque nam maiores excepturi.</p>
                            <button className="btn btn-primary">READ MORE</button>
                            <hr className="my-5" />
                            <div className="d-flex market-exp">
                                <div className="num text-danger m-0">
                                    10
                                </div>
                                <div className="text pl-4">
                                    <h5 className="font-weight-bold">Years on the Market</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, explicabo. Impedit, cupiditate?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="https://source.unsplash.com/random/600x600" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="team bg-light py-5">
                <div className="container py-4">
                    <h2 className="h1 text-center mb-5">The Team Behind the Business</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <TeamMemberCard/>
                        </div>
                        <div className="col-md-4">
                            <TeamMemberCard/>
                        </div>
                        <div className="col-md-4">
                            <TeamMemberCard/>
                        </div>
                    </div>
                </div>
            </section>

        </main>
        </>
    );
};

export default about;

const TeamMemberCard =({data})=>{
    return(
        <>
        <div className="team-card text-center">
            <img src="https://source.unsplash.com/random/400x400" alt="" className="img-fluid" />
            <div className="description-box py-4 px-3 ">
                <h5>Shahjahan Swajan</h5>
                <p >Software Engineer</p>
            </div>
        </div>
        </>
    )
}