import { Navbar, Container, Nav, DropdownButton, Dropdown, NavDropdown } from "react-bootstrap";
import Link from "next/link"
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"

const SiteNavbar = () => {
    return (
        <>
            {/* <section className="py-0  gray-bottom-border header-top d-none d-md-block text-primary">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-2">
                            <Link href="/"><a className="h5 font-weight-bold text- navbar-brand mb-0 text-white"><img src="/logo01.png" alt="" className="img-fluid" /></a></Link>
                        </div>
                    </div>
                </div>
            </section> */}
            <Navbar collapseOnSelect expand="lg" variant="light" className="bg-white d-none mobile-nav d-md-block py-0 light-gray-bottom-border">
                <div className="container">
                    <Navbar.Brand>
                        <Link href="/"><a className="h5 font-weight-bold text- navbar-brand mb-0 text-white"><img src="/logo01.png" alt="" className="" /></a></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ color: "#FFFFFF" }} className="ml-auto text-center d-flex align-items-center">
                            <Nav.Item>
                                <Nav.Link eventKey="1" className="ml-4"><Link href="/about"><a className="nav-link text-dark">About </a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3" className="ml-4"><Link href="/contact"><a className="nav-link text-dark">Contact</a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2" className="ml-4"><Link href="/services"><a className="nav-link text-dark">Services</a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <a href="tel:+8801912152784" className="ml-4 btn btn-success">CALL NOW</a>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            {/* cat 1 */}
            <Navbar collapseOnSelect  expand="lg" variant="dark" className="light-gray-bottom-border text-dark d-none d-md-block py-0 bg-primary nav-lg">
                <div className="container-fluid">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ color: "#000000" }} className="mx-auto text-center">
                            <Nav.Item>
                                <Nav.Link eventKey="1" className="ml-0"><Link href="/products/packaging-printing"><a className="nav-link text-dark">Packaging&nbsp;&&nbsp;Printing </a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3" className="ml-0"><Link href="/products/food-beverage"><a className="nav-link text-dark">Food&nbsp;&&nbsp;Beverage</a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2" className="ml-0"><Link href="/products/chemical-cosmetics"><a className="nav-link text-dark">Chemical&nbsp;&&nbsp;Cosmetics</a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="5" className="ml-0"><Link href="/products/plastic-rubber"><a className="nav-link text-dark">Plastic&nbsp;&&nbsp;Rubber</a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="5" className="ml-0"><Link href="/products/hardware-others"><a className="nav-link text-dark">Hardware&nbsp;&&nbsp;Others </a></Link></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            {/* cat 2 */}
            <Navbar collapseOnSelect expand="lg" variant="dark" className="gray-bottom-border text-dark d-none d-md-block py-0 bg-primary nav-lg">
                <div className="container-fluid">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ color: "#000000" }} className="mx-auto text-center">
                            <Nav.Item>
                                <Nav.Link eventKey="5" className="ml-0"><Link href="/products/construction-agriculture"><a className="nav-link text-dark">Construction&nbsp;&&nbsp;Agriculture</a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="5" className="ml-0"><Link href="/products/pharmaceutical-herbal"><a className="nav-link text-dark">Pharmaceutical&nbsp;&&nbsp;Herbal </a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="5" className="ml-0"><Link href="/products/medical-health"><a className="nav-link text-dark">Medical&nbsp;&&nbsp;Health </a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="5" className="ml-0"><Link href="/products/garments-textiles"><a className="nav-link text-dark">Garments&nbsp;&&nbsp;Textile </a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="5" className="ml-0"><Link href="/products/leather-goods"><a className="nav-link text-dark">Leather&nbsp;&&nbsp;Leather&nbsp;Goods </a></Link></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <Navbar collapseOnSelect sticky="top" expand="lg" variant="light" className="bg-white d-block mobile-nav d-md-none py-0">
                <div className="container">
                    <Navbar.Brand>
                        <Link href="/"><a className="h5 font-weight-bold text- navbar-brand mb-0 text-white"><img src="/logo01.png" alt="" className="" /></a></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ color: "#FFFFFF" }} className="ml-auto text-center">
                        <Nav.Item>
                                <Nav.Link eventKey="1" className="ml-0"><Link href="/products/packaging-printing"><a className="nav-link text-dark">Packaging&nbsp;&&nbsp;Printing </a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3" className="ml-0"><Link href="/products/food-beverage"><a className="nav-link text-dark">Food&nbsp;&&nbsp;Beverage</a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2" className="ml-0"><Link href="/products/chemical-cosmetics"><a className="nav-link text-dark">Chemical&nbsp;&&nbsp;Cosmetics</a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="5" className="ml-0"><Link href="/products/plastic-rubber"><a className="nav-link text-dark">Plastic&nbsp;&&nbsp;Rubber</a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="5" className="ml-0"><Link href="/products/hardware-others"><a className="nav-link text-dark">Hardware&nbsp;&&nbsp;Others </a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="1" className="ml-0"><Link href="/products/packaging-printing"><a className="nav-link text-dark">Packaging&nbsp;&&nbsp;Printing </a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3" className="ml-0"><Link href="/products/food-beverage"><a className="nav-link text-dark">Food&nbsp;&&nbsp;Beverage</a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2" className="ml-0"><Link href="/products/chemical-cosmetics"><a className="nav-link text-dark">Chemical&nbsp;&&nbsp;Cosmetics</a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="5" className="ml-0"><Link href="/products/plastic-rubber"><a className="nav-link text-dark">Plastic&nbsp;&&nbsp;Rubber</a></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="5" className="ml-0"><Link href="/products/hardware-others"><a className="nav-link text-dark">Hardware&nbsp;&&nbsp;Others </a></Link></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

        </>
    );
};

export default SiteNavbar;