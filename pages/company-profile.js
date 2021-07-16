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
                <section className="py-5 bg-dark">
                    <h2 className="text-center text-white">
                        OUR COMPANY: BOARD OF DIRECTORS
                    </h2>
                </section>
                <section className="pb-5 pt-4">
                    <div className="container">
                        <div className="row mb-4 d-flex align-items-center">
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
                <section className="pt-4 pb-4">
                    <div className="container">
                        <div className="row mb-5 d-flex align-items-center">
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
                                        <b>:</b> Private Limited Company
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Address</strong>
                                    </div>
                                    <div className="col-8">
                                         <p><b>:</b> Corporate Office-MR Plaza, 2nd Floor, 25/1/C, Janapathmur, Sayedabad, Dhaka-1100, Bangladesh.</p> <br />
                                        <p>Phone: +88-02-7553243, Fax: +88-02-7553253,</p>
                                        <p>Cell: +88-01912152784, +88-01962415709, +88-01768963858.</p>
                                        <p>E-mail: ziaziddy@gmail.com. , ziatechbd@gmail.com,</p>
                                        <p>Facebook: www.facebook.com/zia.ziddy.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>Factory- 1,</strong> Sayedabad, Dhaka-1100,</p>
                                        <p><strong>Factory- 2</strong>, Jatrabary, Dhaka-1100,</p>
                                        <p><strong>Factory &ndash; 3</strong>, Rayerbag, Dhaka-1100</p>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Web site</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> <a href="http://www.ziatechbd.com">www.ziatechbd.com</a>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Existing Office Floor Area</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 4000 Sqr ft.  (Approx.)
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Existing factory space Area</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> 2 Biga.  (Approx.)
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Chairman & CEO</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> Engineer Zia Ziddy
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <strong>Board of Directors</strong>
                                    </div>
                                    <div className="col-8">
                                        <b>:</b> <ol>
                                            <li>Lt Cln Khondakar Amjad Hossain (Rtd), Executive Director.</li>
                                            <li>Shahnaz Parvin, Admin Director.</li>
                                            <li>Shahidul Islam Kabir, Marketing Director</li>
                                        </ol>
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
                                <div className="row mt-5">
                                    <div className="col-12">
                                        <p className="font-bold">জিয়া জিদ্দী</p>
                                        <p className="font-bold">চেয়ারম্যান,</p>
                                        <p className="font-bold">জিয়াটেক অটো মেশিন এন্ড ইঞ্জিনিয়ারিং কোম্পানী লিঃ,</p>
                                        <p>এম আর প্লাজা, ২৫/১/সি, জনপথ মোড়, সায়েদাবাদ,</p>
                                        <p>ঢাকা-১১০০, বাংলাদেশ।</p>
                                        <p>&nbsp;</p>
                                        <p>ফোনঃ +৮৮-০২-৭৫৫৩২৪৩, ফ্যাক্সঃ +৮৮-০২-৭৫৫৩২৫৩।</p>
                                        <p>সেলঃ +৮৮-০১৯১২১৫২৭৮৪, +৮৮-০১৯৬২৪১৫৭০৯, +৮৮-০১৭৬৮৯৬৩৮৫৮।</p>
                                        <p>ই-মেইলঃ <a href="mailto:ziaziddy@gmail.com">ziaziddy@gmail.com</a> , <a href="mailto:ziatechbd@gmail.com">ziatechbd@gmail.com</a>,</p>
                                        <p>ফেসবুকঃ <a href="http://www.facebook.com/zia.ziddy">www.facebook.com/zia.ziddy</a>.</p>
                                        <p>ওয়েবসাইটঃ <a href="http://www.ziatechbd.com">www.ziatechbd.com</a></p>
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
                    <img src={data.img ? data.img : "/img/blue-img.jpeg"} alt="" className="img-fluid" />
                </div>
                <div className="description-box py-4 px-3 ">
                    <h5>{data.name} </h5>
                    {data.edu && <p ><i> ({data.edu}) </i></p>}
                    <h6>{data.title} </h6>
                </div>
            </div>
        </>
    )
}