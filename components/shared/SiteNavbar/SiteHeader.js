import { Navbar, Container, Nav, DropdownButton, Dropdown, NavDropdown } from "react-bootstrap";
import Link from "next/link"

const SiteHeader = () => {
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark" className="py-2 bg-primary nav-lg">
                <div className="container">
                    <Navbar.Brand>
                        <Link href="/">
                            <a href="/" className="h5 font-weight-bold mb-0 navbar-brand">ZiaTech</a>
                            {/* <img src={ImgLogo} className="site-logo" alt="" /> */}
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ color: "#FFFFFF" }} className="ml-auto text-center">
                            <Nav.Item>
                                <Nav.Link eventKey="1" className="ml-4 single-item"><Link href="/"><span className="nav-link">Home</span></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2" className="ml-4 single-item"><Link href="/shop"><span className="nav-link">Shop</span></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3" className="ml-4 single-item"><Link href="/about"><span className="nav-link">About</span></Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="4" className="ml-4 single-item"><Link href="/contact"><span className="nav-link">Contact</span></Link></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
        </>
    );
};

export default SiteHeader;