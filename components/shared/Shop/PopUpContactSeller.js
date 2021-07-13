import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const PopUpContactSeller = ({btn}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow} className={`btn btn-success btn-${btn?btn: 'sm'}`}>BUY NOW</button>
            <Modal
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Contact with the seller</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mb-2">To buy this product, please contact with the seller directly.</p>
                    <p className="mb-4">You may call the number below: </p>
                    <div className="text-center mb-4">
                        <h5 className="text-danger mb-3">+8801912 152784</h5>
                        <a href="tel:+8801912152784"className="btn btn-success btn-lg text-white">Call Now</a>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PopUpContactSeller;