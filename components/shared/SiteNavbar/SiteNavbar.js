import { Navbar, Container, Nav, DropdownButton, Dropdown, NavDropdown } from "react-bootstrap";
import Link from "next/link"
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"

const SiteNavbar = () => {
    return (
        <>
            <section className="py-3 bg-primary gray-bottom-border header-top">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-2">
                            <Link href="/"><a className="h5 font-weight-bold text- navbar-brand mb-0 text-white">ZiaTech</a></Link>
                        </div>
                        <div className="col-md-2 offset-md-6">
                            <div className="d-flex align-items-center">
                                <div className="icon">
                                    <AiOutlineUser />
                                </div>
                                <p className="mb-0 mt-2 pl-3">
                                    Welcome <br />
                                    <span className="font-weight-bold">Swajan</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="d-flex align-items-center">
                                <div className="icon">
                                    <AiOutlineShoppingCart />
                                </div>
                                <p className="mb-0 mt-2 pl-3">
                                    My Cart <br />
                                    <span className="font-weight-bold">৳ 0.00</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark" className="py-0 bg-primary nav-lg">
                <div className="container">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ color: "#FFFFFF" }} className="mx-auto text-center">
                            <Nav.Item>
                                <Nav.Link eventKey="122" className="ml-0 mx-md-3"><Link href="/"><span className="nav-link text-white">Home</span></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="123" className="ml-0 mx-md-3"><Link href="/about"><span className="nav-link text-white">About</span></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="123" className="ml-0 mx-md-3"><Link href="/shop"><span className="nav-link text-white">Shop</span></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="123" className="ml-0 mx-md-3"><Link href="/blog"><span className="nav-link text-white">Blog</span></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="123" className="ml-0 mx-md-3"><Link href="/contact"><span className="nav-link text-white">Contact</span></Link></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            {/* <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark" className="py-0 bg-primary">
                <div className="container py-3">
                    <Navbar.Brand>
                        <Link href="/"><a href="/" className="h5 font-weight-bold text- navbar-brand mb-0">ZiaTech</a></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ color: "#FFFFFF" }} className="ml-auto text-center">
                            <Nav.Item>
                                <Nav.Link eventKey="122" className="ml-0 ml-md-5 single-item"><Link href="/insights"><span className="nav-link">Insights</span></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="123" className="ml-0 ml-md-5 single-item"><Link href="/blog"><span className="nav-link">Blog</span></Link></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar> */}
        </>
    );
};

export default SiteNavbar;