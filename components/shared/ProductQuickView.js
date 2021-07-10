import { Modal, Button } from "react-bootstrap";
import PopUpContactSeller from "./Shop/PopUpContactSeller";

const ProductQuickView = ({ data, show, onHide }) => {
    return (
        <>
            <Modal
                show={show}
                onHide={() => onHide()}
                dialogClassName="modal-w75 product-view"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>

                </Modal.Header>
                <div className="w-100 mb-3">
                    <div className="row px-5">
                        <div className="col-md-6 text-center">
                            <img src={data.img} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="mb-4" >{data.category} </h3>

                            <p className="mb-2">To buy this product, please contact with the seller directly.</p>
                            <p className="mb-4">You may call the number below: </p>
                            <div className="text-center mb-4">
                                <h5 className="text-danger mb-3">+880 1912 152784</h5>
                                <a href="tel:++8801912152784" className="btn btn-danger btn-lg text-white">Call Now</a>
                            </div>
                            {/* <h4 className="text-danger mb-4">৳ {data.price} </h4> */}
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, iure et voluptate excepturi saepe suscipit, est atque neque laborum sunt officiis fugit.</p> */}
                            {/* <button className="btn btn-danger btn-lg ">BUY NOW</button> */}
                            {/* <PopUpContactSeller btn="lg" /> */}
                            <p className="text-gray mt-5">Category: <span className="text-dark">{data.category} </span> </p>
                        </div>
                    </div>
                </div>
                <Modal.Footer>
                    {/* <Button onClick={props.onHide}>Close</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProductQuickView;