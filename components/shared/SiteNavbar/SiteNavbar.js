import { Navbar, Container, Nav, DropdownButton, Dropdown, NavDropdown } from "react-bootstrap";
import Link from "next/link"
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"

const SiteNavbar = () => {
    return (
        <>
            <div className="d-none d-md-block">
                <section className="py-3  gray-bottom-border header-top text-primary">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-2">
                                <Link href="/"><a className="h5 font-weight-bold text- navbar-brand mb-0 text-white"><img src="/logo01.png" alt="" className="img-fluid" /></a></Link>
                            </div>
                            <div className="col-md-2 offset-md-6">
                                <div className="d-flex align-items-center justify-content-end">
                                    {/* <div className="icon">
                                        <AiOutlineUser />
                                    </div> */}
                                    <p className="mb-0 ">
                                        Welcome to<br />
                                        <span className="font-weight-bold">ZiaTechBD</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="d-flex align-items-center justify-content-end">
                                    <a href="tel:+8801912152784" className="btn btn-primary">CALL NOW</a>
                                    {/* <div className="icon">
                                        <AiOutlineShoppingCart />
                                    </div>
                                    <p className="mb-0 mt-2 pl-3">
                                        My Cart <br />
                                        <span className="font-weight-bold">৳ 0.00</span>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark" className="py-0 bg-primary nav-lg">
                    <div className="container-fluid">
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav style={{ color: "#FFFFFF" }} className="mx-auto text-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="1" className="ml-0"><Link href="/products/packaging-printing"><a className="nav-link text-white">Packaging </a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="3" className="ml-0"><Link href="/products/food-beverage"><a className="nav-link text-white">Food&nbsp;&&nbsp;Beverage</a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="2" className="ml-0"><Link href="/products/chemical-cosmetics"><a className="nav-link text-white">Chemical&nbsp;&&nbsp;Cosmetics</a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/plastic-rubber"><a className="nav-link text-white">Plastic&nbsp;&&nbsp;Rubber</a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/hardware-others"><a className="nav-link text-white">Hardware </a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/construction-agriculture"><a className="nav-link text-white">Construction&nbsp;&&nbsp;Agriculture</a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/pharmaceutical-herbal"><a className="nav-link text-white">Pharmaceutical </a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/medical-health"><a className="nav-link text-white">Medical </a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/garments-textiles"><a className="nav-link text-white">Garments </a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/leather-goods"><a className="nav-link text-white">Leather </a></Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
            <div className="d-block d-md-none mobile-nav">

                <Navbar collapseOnSelect  expand="lg" variant="light" className="py-0">
                    <div className="container py-3">
                        <Navbar.Brand>
                            <Link href="/"><a className="h5 font-weight-bold text- navbar-brand mb-0 text-white"><img src="/logo01.png" alt="" className="" /></a></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav style={{ color: "#FFFFFF" }} className="ml-auto text-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="1" className="ml-0"><Link href="/products/packaging-printing"><a className="nav-link text-primary">Packaging </a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="3" className="ml-0"><Link href="/products/food-beverage"><a className="nav-link text-primary">Food&nbsp;&&nbsp;Beverage</a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="2" className="ml-0"><Link href="/products/chemical-cosmetics"><a className="nav-link text-primary">Chemical&nbsp;&&nbsp;Cosmetics</a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/plastic-rubber"><a className="nav-link text-primary">Plastic&nbsp;&&nbsp;Rubber</a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/hardware-others"><a className="nav-link text-primary">Hardware </a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/construction-agriculture"><a className="nav-link text-primary">Construction&nbsp;&&nbsp;Agriculture</a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/pharmaceutical-herbal"><a className="nav-link text-primary">Pharmaceutical </a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/medical-health"><a className="nav-link text-primary">Medical </a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/garments-textiles"><a className="nav-link text-primary">Garments </a></Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" className="ml-0"><Link href="/products/leather-goods"><a className="nav-link text-primary">Leather </a></Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>

            </div>
        </>
    );
};

export default SiteNavbar;