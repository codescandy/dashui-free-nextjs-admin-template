// import node module libraries
import { Fragment, useState } from 'react';
import {
	Col,
	Row,
	Card,
	Button,
	Nav,
	Tab,
	Offcanvas,
	ListGroup,
	Container
} from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	OffcanvasBasicCode,
	OffCanvasPlacementCode,
	OffCanvasBackdropCode
} from 'data/code/OffcanvasCode';

const BSOffcanvas = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const options = [
		{
			name: 'Enable backdrop (default)',
			scroll: false,
			backdrop: true
		},
		{
			name: 'Disable backdrop',
			scroll: false,
			backdrop: false
		},
		{
			name: 'Enable body scrolling',
			scroll: true,
			backdrop: false
		},
		{
			name: 'Enable both scrolling & backdrop',
			scroll: true,
			backdrop: true
		}
	];

	function OffCanvasPlacement({ name, ...props }) {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

		return (
			<Fragment>
				<Button
					variant="primary"
					onClick={handleShow}
					className="me-2 mb-2 mb-lg-0"
				>
					{name}
				</Button>
				<Offcanvas show={show} onHide={handleClose} {...props}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Offcanvas</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						Some text as placeholder. In real life you can have the elements you
						have chosen. Like, text, images, lists, etc.
					</Offcanvas.Body>
				</Offcanvas>
			</Fragment>
		);
	}

	function OffCanvasBackdrop({ name, ...props }) {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const toggleShow = () => setShow((s) => !s);

		return (
			<Fragment>
				<Button
					variant="primary"
					onClick={toggleShow}
					className="me-2 mb-2 mb-lg-0"
				>
					{name}
				</Button>
				<Offcanvas show={show} onHide={handleClose} {...props}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Offcanvas</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						Some text as placeholder. In real life you can have the elements you
						have chosen. Like, text, images, lists, etc.
					</Offcanvas.Body>
				</Offcanvas>
			</Fragment>
		);
	}

	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Offcanvas</h1>
							<p className="mb-0 ">
								Build hidden sidebars into your project for navigation, shopping
								carts, and more.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/*  basic  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="basic-example" className="mb-4">
						<h3>Basic </h3>
						<p>
							Offcanvas includes support for a header with a close button and an
							optional body class for some initial padding.
						</p>
					</div>
					<Tab.Container defaultActiveKey="all">
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
										{/* basic offcanvas code started */}
										<Button variant="primary" onClick={handleShow}>
											Launch
										</Button>
										<Offcanvas show={show} onHide={handleClose}>
											<Offcanvas.Header closeButton>
												<Offcanvas.Title>Offcanvas</Offcanvas.Title>
											</Offcanvas.Header>
											<Offcanvas.Body>
												Some text as placeholder. In real life you can have the
												elements you have chosen. Like, text, images, lists,
												etc.
											</Offcanvas.Body>
										</Offcanvas>
										{/* end of basic offcanvas code */}
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={OffcanvasBasicCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of basic */}

			<hr className="mb-5 mt-7" />

			{/*  placement  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="placement" className="mb-4">
						<h3>Placement </h3>
						<p>Offcanvas supports a few different placements:</p>
						<ListGroup as="ul" bsPrefix=" ">
							<ListGroup.Item as="li" bsPrefix=" ">
								<code>start</code> places offcanvas on the left of the viewport
							</ListGroup.Item>
							<ListGroup.Item as="li" bsPrefix=" ">
								<code>end</code> places offcanvas on the right of the viewport
							</ListGroup.Item>
							<ListGroup.Item as="li" bsPrefix=" ">
								<code>top</code> places offcanvas on the top of the viewport
							</ListGroup.Item>
							<ListGroup.Item as="li" bsPrefix=" ">
								<code>bottom</code> places offcanvas on the bottom of the
								viewport
							</ListGroup.Item>
						</ListGroup>
					</div>
					<Tab.Container defaultActiveKey="all">
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
										{/* placement code started */}
										{['start', 'end', 'top', 'bottom'].map((placement, idx) => (
											<OffCanvasPlacement
												key={idx}
												placement={placement}
												name={placement}
											/>
										))}
										{/* end of placement code */}
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={OffCanvasPlacementCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of placement */}

			<hr className="mb-5 mt-7" />

			{/*  backdrop  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="backdrop" className="mb-4">
						<h3>Backdrop </h3>
						<p>
							Scrolling the <code>&lt;body&gt;</code> element is disabled when
							an offcanvas and its backdrop are visible. Use the{' '}
							<code>scroll</code> prop to toggle <code>&lt;body&gt;</code>{' '}
							scrolling and the <code>backdrop</code> prop to toggle the
							backdrop.
						</p>
					</div>
					<Tab.Container defaultActiveKey="all">
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
										{/* backdrop code started */}
										{options.map((props, idx) => (
											<OffCanvasBackdrop key={idx} {...props} />
										))}
										{/* end of backdrop code */}
									</Tab.Pane>

									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={OffCanvasBackdropCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of backdrop */}

			<hr className="mb-5 mt-7" />
		</Container>
	);
};

export default BSOffcanvas;
