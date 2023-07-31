'use client'
// import node module libraries
import { Fragment } from 'react';
import {
	Col,
	Row,
	Card,
	Navbar,
	NavDropdown,
	Nav,
	Image,
	Tab,
	Container
} from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import data files
import {
	DefaultNavbar,
	BrandNavbar,
	ColorSchemesCode
} from 'data/code/NavbarsCode';

const Navbars = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Navbar</h1>
							<p className="mb-0 ">
								A powerful, responsive navigation header, the navbar. Includes
								support for branding, navigation, and more.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* default-navbar */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="default-navbar" className="mb-4">
						<h2>Default Navbar</h2>
					</div>
					<Tab.Container id="tab-container-1" defaultActiveKey="all">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
											Code
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="all" className="pb-4 p-4">
										<Navbar expand="lg">
											<Navbar.Brand href="#home">
												<Image src="/images/brand/logo/logo-primary.svg" alt="" loading="lazy" />
											</Navbar.Brand>
											<Navbar.Toggle aria-controls="basic-navbar-nav" />
											<Navbar.Collapse id="basic-navbar-nav">
												<Nav className="me-auto">
													<Nav.Link href="#home">Home</Nav.Link>
													<Nav.Link href="#link">Link</Nav.Link>
													<NavDropdown title="Dropdown" id="basic-nav-dropdown">
														<NavDropdown.Item href="#action/3.1">
															Action
														</NavDropdown.Item>
														<NavDropdown.Item href="#action/3.2">
															Another action
														</NavDropdown.Item>
														<NavDropdown.Item href="#action/3.3">
															Something
														</NavDropdown.Item>
														<NavDropdown.Divider />
														<NavDropdown.Item href="#action/3.4">
															Separated link
														</NavDropdown.Item>
													</NavDropdown>
													<Nav.Link href="#link" disabled>
														Disabled
													</Nav.Link>
												</Nav>
											</Navbar.Collapse>
										</Navbar>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={DefaultNavbar} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of default-navbar */}

			{/* brand-navbar */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="brand-navbar" className="mb-4 mt-4">
						<p>
							A simple flexible branding component. Images are supported but
							will likely require custom styling to work well.
						</p>
					</div>
					<Tab.Container id="tab-container-2" defaultActiveKey="all">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
											Code
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="all" className="pb-4 p-4">
										<Navbar>
											<Navbar.Brand href="#home">
												<Image
													src="/images/brand/logo/brand-logo.png"
													width="30"
													height="30"
													alt=""
													loading="lazy"
												/>
											</Navbar.Brand>
										</Navbar>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={BrandNavbar} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of brand-navbar */}

			<hr className="mb-5 mt-7" />

			{/* Color schemes */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mb-4">
					<div id="color-schemes" className="mb-4">
						<h3>Color schemes</h3>
						<p>
							Theming the navbar has never been easier thanks to the combination
							of theming classes and background-color utilities. Choose from{' '}
							<code>variant=&#34;light&#34;</code> for use with light background colors,
							or <code>variant=&#34;dark&#34;</code> for dark background colors. Then,
							customize with the <code>bg</code> prop or any custom css!
						</p>
					</div>
					<Tab.Container id="tab-container-3" defaultActiveKey="all">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
											Code
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="all" className="pb-4 p-4">
										
										<Navbar bg="dark" variant="dark">
											<Container>
												<Navbar.Brand href="#home">
													{' '}
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
												<Navbar.Brand href="#home">
													{' '}
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
										<Navbar bg="light" variant="light">
											<Container>
												<Navbar.Brand href="#home">
													<Image src="/images/brand/logo/logo-primary.svg" alt="" loading="lazy" className='inverse' />
												</Navbar.Brand>
												<Nav className="me-auto">
													<Nav.Link href="#home">Home</Nav.Link>
													<Nav.Link href="#features">Features</Nav.Link>
													<Nav.Link href="#pricing">Pricing</Nav.Link>
												</Nav>
											</Container>
										</Navbar>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={ColorSchemesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of Color schemes */}
		</Container>
	);
};

export default Navbars;
