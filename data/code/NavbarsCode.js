export const DefaultNavbar = `   
<Navbar expand="lg">                             
    <Navbar.Brand href="#home">
        <Image src="/images/brand/logo/logo-primary.svg" alt="" loading="lazy"/> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link" disabled>Disabled</Nav.Link>
    </Nav>
    </Navbar.Collapse>
</Navbar>
    `.trim();

export const BrandNavbar = `   
<Navbar>
    <Navbar.Brand href="#home">
        <Image src="/images/brand/logo/brand-logo.png" width="30" height="30" alt="" loading="lazy"/>                                        
    </Navbar.Brand>
</Navbar> 
    `.trim();

export const ColorSchemesCode = `   
<Navbar bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="#home">
            <Image src="/images/brand/logo/logo.svg" alt="" loading="lazy" />
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    </Container>
</Navbar>
<br />
<Navbar bg="primary" variant="dark">
    <Container>
        <Navbar.Brand href="#home"> <Image src="/images/brand/logo/logo.svg" alt="" loading="lazy" /></Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    </Container>
</Navbar>
<br />
<Navbar bg="light" variant="light">
    <Container>
        <Navbar.Brand href="#home"> <Image src="/images/brand/logo/logo.svg" alt="" loading="lazy" /></Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    </Container>
</Navbar>
`.trim();
export const NavbarsCode = [DefaultNavbar, BrandNavbar, ColorSchemesCode];

export default NavbarsCode;
