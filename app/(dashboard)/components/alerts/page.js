'use client'
// import node module libraries
import { Fragment, useState } from 'react';
import { Col, Row, Card, Alert, Button, Nav, Tab, Container } from 'react-bootstrap';
import {
	ExclamationCircleFill,
	CheckCircleFill,
	ExclamationTriangleFill
} from 'react-bootstrap-icons';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	SimpleAlert,
	LinkAlert,
	AdditionalAlert,
	AlertWithIcon,
	DismissingAlert
} from 'data/code/AlertsCode';

const Alerts = () => {
	const AlertDismissible = () => {
		const [show, setShow] = useState(true);
		if (show) {
			return (
				<Alert variant="danger" onClose={() => setShow(false)} dismissible>
					<Alert.Heading>Holy guacamole!</Alert.Heading>You should check in on
					some of those fields below.
				</Alert>
			);
		}
		return <Button onClick={() => setShow(true)}>Show Alert</Button>;
	};

	return (
		<Container fluid className="p-6">
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Alerts</h1>
							<p className="mb-0 ">
								Provide contextual feedback messages for typical user actions
								with the handful of available and flexible alert messages.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* simple alert  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="simple-alert" className="mb-4">
						<h3>Simple Alert </h3>
						<p>
							Alerts are available for any length of text, as well as an
							optional dismiss button. For proper styling, use one of the eight{' '}
							<code>variants</code>.
						</p>
					</div>
					<Tab.Container id="tab-container-1" defaultActiveKey="all">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Alert variant="primary">
											This is a primary alert—check it out!
										</Alert>
										<Alert variant="secondary">
											This is a secondary alert—check it out!
										</Alert>
										<Alert variant="success">
											This is a success alert—check it out!
										</Alert>
										<Alert variant="danger">
											This is a danger alert—check it out!
										</Alert>
										<Alert variant="warning">
											This is a warning alert—check it out!
										</Alert>
										<Alert variant="info">
											This is a info alert—check it out!
										</Alert>
										<Alert variant="light">
											This is a light alert—check it out!
										</Alert>
										<Alert variant="dark">
											This is a dark alert—check it out!
										</Alert>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={SimpleAlert} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of simple alert  */}

			<hr className="mb-5 mt-7" />

			{/* link alert  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="simple-alert" className="mb-4">
						<h3>Link Alert </h3>
						<p>
							For links, use the <code> &#60;/Alert.Link&#62;</code> component
							to provide matching colored links within any alert.
						</p>
					</div>
					<Tab.Container id="tab-container-2" defaultActiveKey="all">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Alert variant="primary">
											This is a primary alert with{' '}
											<Alert.Link href="#">an example link</Alert.Link>. Give it
											a click if you like.
										</Alert>
										<Alert variant="secondary">
											This is a secondary alert with{' '}
											<Alert.Link href="#">an example link</Alert.Link>. Give it
											a click if you like.
										</Alert>
										<Alert variant="success">
											This is a success alert with{' '}
											<Alert.Link href="#">an example link</Alert.Link>. Give it
											a click if you like.
										</Alert>
										<Alert variant="danger">
											This is a danger alert with{' '}
											<Alert.Link href="#">an example link</Alert.Link>. Give it
											a click if you like.
										</Alert>
										<Alert variant="warning">
											This is a warning alert with{' '}
											<Alert.Link href="#">an example link</Alert.Link>. Give it
											a click if you like.
										</Alert>
										<Alert variant="info">
											This is a info alert with{' '}
											<Alert.Link href="#">an example link</Alert.Link>. Give it
											a click if you like.
										</Alert>
										<Alert variant="light">
											This is a light alert with{' '}
											<Alert.Link href="#">an example link</Alert.Link>. Give it
											a click if you like.
										</Alert>
										<Alert variant="dark">
											This is a dark alert with{' '}
											<Alert.Link href="#">an example link</Alert.Link>. Give it
											a click if you like.
										</Alert>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={LinkAlert} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of link alert  */}

			<hr className="mb-5 mt-7" />

			{/* additional content  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="additional-content" className="mb-4">
						<h3>Additional content </h3>
						<p>
							Alerts can also contain additional HTML elements like headings,
							paragraphs and dividers.
						</p>
					</div>
					<Tab.Container id="tab-container-3" defaultActiveKey="all">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Alert variant="success">
											<Alert.Heading>Well done!</Alert.Heading>
											<p>
												Aww yeah, you successfully read this important alert
												message. This example text is going to run a bit longer
												so that you can see how spacing within an alert works
												with this kind of content.
											</p>
											<hr />
											<p className="mb-0">
												Whenever you need to, be sure to use margin utilities to
												keep things nice and tidy.
											</p>
										</Alert>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={AdditionalAlert} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of additional content */}

			<hr className="mb-5 mt-7" />

			{/* icons */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="alert-icons" className="mb-4">
						<h3>Icons </h3>
						<p>
							Similarly, you can use{' '}
							<a
								href="https://www.npmjs.com/package/react-bootstrap-icons"
								rel="noreferrer"
								target="_blank"
							>
								(React) Bootstrap Icons
							</a>{' '}
							to create alerts with icons. Depending on your icons and content,
							you may want to add more utilities or custom styles.
						</p>
					</div>
					<Tab.Container id="tab-container-4" defaultActiveKey="all">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Alert variant="primary">
											<ExclamationCircleFill size={25} className="me-1" />
											An example alert with an icon
										</Alert>
										<Alert variant="success ">
											<CheckCircleFill size={25} className="me-1" />
											An example success alert with an icon
										</Alert>
										<Alert variant="warning">
											<ExclamationTriangleFill size={25} className="me-1" />
											An example warning alert with an icon
										</Alert>
										<Alert variant="danger">
											<ExclamationTriangleFill size={25} className="me-1" />
											An example danger alert with an icon
										</Alert>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={AlertWithIcon} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of icons */}

			<hr className="mb-5 mt-7" />

			{/* icons */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="dismissing" className="mb-4">
						<h3>Dismissing </h3>
						<p>
							Add the <code>dismissible</code> prop to add a functioning dismiss
							button to the Alert.
						</p>
					</div>
					<Tab.Container id="tab-container-5" defaultActiveKey="all">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<AlertDismissible />
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={DismissingAlert} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of icons */}
		</Container>
	);
};
export default Alerts;
