import Link from "next/link"
import { useForm } from "react-hook-form";
import { FaChevronRight, FaEnvelopeOpenText, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import SEOLayout from "../components/shared/SEOLayout";

const contact = () => {
    // if (typeof window !== "undefined") {
    //     window.open('mailto:email@address.com?subject=Hello world&body=Line one%0DLine two', '_blank');
    // }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onFormSubmit =(data, e)=>{
        console.log(data);
const msgBody = `<b>Phone: ${data.phone}</b> <br/> <br/><p>${data.message}</p>`
        // if(typeof window !== "undefined"){
            window.open(`mailto:${data.email}?subject=${data.subject}&body=${msgBody}`, '_blank')
        
    }

    return (
        <>
        
            <SEOLayout title="Contact | ZiaTechBD" />
            <main className="contact">
                {/* breadcrumb */}
                <section className="bg-light py-4">
                    <div className="container">
                        <Link href="/"><a className="text-dark font-bold">Home</a></Link> <span className="text-secondary font-14"> <FaChevronRight /></span> Contact
                        <h2 className="mt-2 mb-0 font-bold">Contact</h2>
                    </div>
                    {/* <nav>
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link> </li>
                                <li className="breadcrumb-item active" aria-current="page" >Contact</li>
                            </ol>
                        </div>
                    </nav> */}
                </section>
                <section className="hero">

                </section>
                <section className="form-section">
                    <div className="container">
                        <div className="row content">
                            <div className="col-md-8 p-5 bg-white">
                                <h2 className="h1 font-bold mb-5">Send us a Message</h2>
                                <form onSubmit={handleSubmit(onFormSubmit)} className="contact-form">
                                    <div className="row">
                                        <InputField label="Full Name" htmlFor="name">
                                            <input {...register("name", {required: true})} type="text" placeholder="Your Full Name..." className="form-control" />
                                        </InputField>
                                        <InputField label="Email Address" htmlFor="email">
                                            <input {...register("email", {required: true})} type="email" placeholder="Email Address..." className="form-control" />
                                        </InputField>
                                        <InputField label="Phone Number" htmlFor="email">
                                            <input {...register("phone", {required: true})} type="tel" placeholder="Your phone number..." name="phone" className="form-control" />
                                        </InputField>
                                        <InputField label="Subject" htmlFor="subject" >
                                            <input {...register("subject", {required: true})} type="text" placeholder="The message subject..." name="subject" className="form-control" />
                                        </InputField>
                                        <InputField col="12" label="Message" htmlFor="message">
                                            <textarea {...register("message", {required: true})} name="message" placeholder="Type here..." className="p-4 form-control" rows="5"></textarea>
                                        </InputField>
                                        <div className="col-12 mt-4">
                                            <button type="submit" className="btn btn-danger">SEND MESSAGE</button>
                                            {/* <a className="btn btn-danger" target="_blank" rel="noopener noreferrer" href="mailto:email@address.com?subject=Hello world&body=Line one%0DLine two">Email me</a> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4 p-5 text-dark bg-primary contact-sidebar">
                                <div className="icon-box mb-5">
                                    <div className="icon">
                                        <FaEnvelopeOpenText />
                                    </div>
                                    <h3>Email Address</h3>
                                    <a href="mailto:ziatechbd@gmail.com" target="_blank" rel="noopener noreferrer">ziatechbd@gmail.com</a>
                                    {/* <a href="mailto:mahmud@prottoy.com.bd" target="_blank" rel="noopener noreferrer">mahmud@prottoy.com.bd</a> */}
                                </div>
                                <div className="icon-box mb-5">
                                    <div className="icon">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <h3>Office Address</h3>
                                    <p>Corporate Office & Show Room-1: HR Plaza, 43/2/1, Janapath Mur, Saidabad, Dhaka-1100.</p>
                                </div>
                                <div className="icon-box mb-5">
                                    <div className="icon">
                                        <FaPhoneAlt />
                                    </div>
                                    <h3>Phone Number</h3>
                                    <a href="tel:+01912152784" target="_blank" rel="noopener noreferrer">Main office: 01912152784</a>
                                    <a href="tel:+01768963858" target="_blank" rel="noopener noreferrer">Support: 01768963858</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default contact;

export const InputField = ({ col, label, htmlFor, children }) => {
    return (
        <>
            <div className={`col-md-${col ? col : 6}`} >
                <div className="form-group">
                    <label htmlFor={htmlFor}>{label} </label>
                    {children}
                </div>
            </div>
        </>
    )
}