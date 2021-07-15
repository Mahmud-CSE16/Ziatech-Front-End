import SEOLayout from '../components/shared/SEOLayout';

const contact = () => {
    return (
        <>
                    <SEOLayout title="Contact| ziatech" />

            <section className="text-center py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4 offset-md-4">
                            <div>
                                <img src="/logo01.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center text-success font-bold">auto machine & engineering company ltd.</h1>
                <h2 className="font-italic text-center">--high power industrial machine & steel products manufacturer--</h2>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h3 className="text-center mb-4 font-bold"><u>Corporate Office &amp; Main Show Room</u></h3>

                            <p>MR Plaza, 2nd Floor, 25/1/C, Janapath Mur (East side of Baitul Mamur Mosque), Sayedabad, Dhaka-1100, Bangladesh.</p>
                            <h4><strong>Hot Line:</strong></h4>
                            <p><strong>Telephone</strong>: +88-02-7553243, Fax: +88-02-7553253,</p>
                            <p><strong>Cell</strong>: +88-01912152784, +88-01962415709, +88-01768963858.</p>
                            <p><strong>e-mail</strong>: ziaziddy@gmail.com. , ziatechbd@gmail.com,</p>
                            <p><strong>website</strong>: www.ziatechbd.com.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-2 mb-4 text-center offset-md-3">
                            <h5 className="font-bold"><u> Factory - 1</u></h5>
                            <p>Sayedabad <br />Dhaka-1100. </p>
                        </div>
                        <div className="col-md-2 mb-4 text-center">
                            <h5 className="font-bold"><u> Factory - 2</u></h5>
                            <p>Jatrabary, <br />Dhaka-1100. </p>
                        </div>
                        <div className="col-md-2 mb-4 text-center">
                            <h5 className="font-bold"><u> Factory - 3</u></h5>
                            <p>Rayerbag, <br />Dhaka. </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-2 mb-4 text-center offset-md-2">
                            <h5 className="font-bold"><u> India - Office</u></h5>
                            <p>Mahamayatala, Garia Main Road, Garia, <br/> Kolkata - 700 084, <br />West Bengal, India. </p>
                        </div>
                        <div className="col-md-2 mb-4 text-center ">
                            <h5 className="font-bold"><u> China - Office</u></h5>
                            <p>Zhangjiagang City, <br/> Jiangsu Province,<br />China </p>
                        </div>
                        <div className="col-md-2 mb-4 text-center ">
                            <h5 className="font-bold"><u> Nepal - Office</u></h5>
                            <p>Thamel, <br />Kathmandu, Nepal </p>
                        </div>
                        <div className="col-md-2 mb-4 text-center ">
                            <h5 className="font-bold"><u> Myanmar - Office</u></h5>
                            <p>Lanmadaw Township, <br />Yangon, Myanmar. </p>
                        </div>
                        
                    </div>
                </div>

            </section>
        </>
    );
};

export default contact;