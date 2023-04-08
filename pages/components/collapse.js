// import node module libraries
import { Fragment, useState } from 'react';
import {
	Col,
	Row,
	Card,
	Button,
	Collapse,
	Fade,
	Tab,
	Nav,
	Container
} from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import { FadeCollapses, BasicCollapsesCode } from 'data/code/CollapsesCode';

const Collapses = () => {
	const [open, setOpen] = useState(false);
	const [openFade, setOpenFade] = useState(false);

	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Collapse </h1>
							<p className="mb-0 ">
								Add a collapse toggle animation to an element or component.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/*  Collapses */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
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
										<Button
											onClick={() => setOpen(!open)}
											aria-controls="example-collapse-text"
											aria-expanded={open}
										>
											Toggle Button
										</Button>
										<Collapse in={open}>
											<div id="example-collapse-text" className="pt-3">
												Anim pariatur cliche reprehenderit, enim eiusmod high
												life accusamus terry richardson ad squid. Nihil anim
												keffiyeh helvetica, craft beer labore wes anderson cred
												nesciunt sapiente ea proident.
											</div>
										</Collapse>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={BasicCollapsesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of Collapses */}

			<hr className="mb-5 mt-7" />

			{/*  Fade Collapses */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3 className="doc-section-head-title">Fade</h3>
						<p className="mb-0">
							Add a fade animation to a child element or component.
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
										<Button
											onClick={() => setOpenFade(!openFade)}
											aria-controls="example-fade-text"
											aria-expanded={openFade}
										>
											Toggle text
										</Button>
										<Fade in={openFade}>
											<div id="example-fade-text" className="pt-4">
												Anim pariatur cliche reprehenderit, enim eiusmod high
												life accusamus terry richardson ad squid. Nihil anim
												keffiyeh helvetica, craft beer labore wes anderson cred
												nesciunt sapiente ea proident.
											</div>
										</Fade>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={FadeCollapses} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of Fade Collapses */}
		</Container>
	);
};

export default Collapses;
