import { Modal, Button } from "react-bootstrap";

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
                            <h3 className="mb-4" >{data.name} </h3>
                            <h4 className="text-danger mb-4">৳ {data.price} </h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, iure et voluptate excepturi saepe suscipit, est atque neque laborum sunt officiis fugit.</p>
                            <button className="btn btn-danger btn-lg ">BUY NOW</button>

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