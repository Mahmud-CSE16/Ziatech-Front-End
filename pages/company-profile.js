import SEOLayout from '../components/shared/SEOLayout';

const CompanyProfile = () => {
    const ziddy = {
        name: "Zia Ziddy",
        edu: "Engineer in Electronics",
        title: "Chairman & CEO"
    }
    const nashir = {
        name: "Nashir Uddin        ",
        edu: "Mechanical Engineer",
        title: "General Manager"
    }
    const maidul = {
        name: "Maidul Islam        ",
        edu: "B.A",
        title: "Customer Manager"
    }
    const parvin = {
        name: "Shahnaz Parvin",
        title: "Director"
    }
    return (
        <>
            <SEOLayout title="Company Profile | ziatech" />
            <main className="about">

                {/* <section className="page-hero">
                    <div className="container text-center text-white">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h1>Company Profile</h1>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="py-5 bg-success">
                    <h2 className="text-center text-white">
                        OUR COMPANY: BOARD OF DIRECTORS
                    </h2>
                </section>
                <section className="pb-5 pt-4">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-3 text-center  offset-md-3">
                                <TeamMemberCard data={ziddy} />
                            </div>
                            <div className="col-md-3 text-center ">
                                <TeamMemberCard data={parvin} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 bg-success">
                    <h2 className="text-center text-white">
                        OUR COMPANY: MAIN OFFICERS PANEL
                    </h2>
                </section>
                <section className="py-4">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-3 text-center offset-md-3">
                                <TeamMemberCard data={nashir} />
                            </div>
                            <div className="col-md-3 text-center  ">
                                <TeamMemberCard data={maidul} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 bg-success">
                    <h2 className="text-center text-white">
                        OUR COMPANY: Profile
                    </h2>
                </section>
                <section className="py-4 company-profile-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Name of the Company</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> ziatech auto machine & engineering company limited
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Type of Organization</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Address</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Web site</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Existing Office Floor Area</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Existing factory space Area</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Chairman & CEO</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Board of Directors</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Certificate of Incorporation No.</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> C-116885/14
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>TIN</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 171076128728
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>VAT registration number</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 5031032556
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Trade License Number</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 453/2007
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Number of Employees</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 100
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Number of Showrooms</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 03
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Number of Dealers</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 64
                                    </div>
                                </div>
                                {/* 3 */}
                                {/* <div className="row mb-3">
                                    <div className="col-md-4">
                                        <strong></strong>
                                    </div>
                                    <div className="col-md-8">
                                        <b>:</b> 
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default CompanyProfile;

const TeamMemberCard = ({ data }) => {
    return (
        <>
            <div className="team-card text-center">
                <div className="px-3">
                    <img src={data.img ? data.img : "https://i.pravatar.cc/400?img=8"} alt="" className="img-fluid" />
                </div>
                <div className="description-box py-4 px-3 ">
                    <h5>{data.name} </h5>
                    {data.edu &&<p ><i> ({data.edu}) </i></p>}
                    <h6>{data.title} </h6>
                </div>
            </div>
        </>
    )
}