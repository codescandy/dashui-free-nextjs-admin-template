// import node module libraries
import { Col, Row, Card, Button, Badge, Tab, Nav, Container } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	SimpleBadgeCode,
	BadgeWithButtonCode,
	PillBadgesCode
} from 'data/code/BadgesCode';

const Badges = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Badges</h1>
							<p className="mb-0 ">
								Documentation and examples for badges, our small count and
								labeling component.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* Contextual  badges   */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="contextual-badge" className="mb-4">
						<h3>Contextual badges</h3>
						<p>
							Add any of the below mentioned modifier classes to change the
							appearance of a badge.
						</p>
					</div>
					<Tab.Container defaultActiveKey="all">
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
										<Badge bg="primary" className="me-1">
											primary
										</Badge>
										<Badge bg="secondary" className="me-1">
											secondary
										</Badge>
										<Badge bg="success" className="me-1">
											success
										</Badge>
										<Badge bg="danger" className="me-1">
											danger
										</Badge>
										<Badge bg="warning" className="me-1">
											warning
										</Badge>
										<Badge bg="info" className="me-1">
											info
										</Badge>
										<Badge bg="light" text="dark" className="me-1">
											light
										</Badge>
										<Badge bg="dark" className="me-1">
											dark
										</Badge>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={PillBadgesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of Contextual badges  */}

			<hr className="mb-5 mt-7" />

			{/* Pill badges   */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="pill-badge" className="mb-4">
						<h3>Pill badges</h3>
						<p>
							Use the <code>pill</code> modifier to make badges more rounded
							(with a larger border-radius and additional horizontal padding).
						</p>
					</div>
					<Tab.Container defaultActiveKey="all">
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
										<Badge pill bg="primary" className="me-1">
											primary
										</Badge>
										<Badge pill bg="secondary" className="me-1">
											secondary
										</Badge>
										<Badge pill bg="success" className="me-1">
											success
										</Badge>
										<Badge pill bg="danger" className="me-1">
											danger
										</Badge>
										<Badge pill bg="warning" className="me-1">
											warning
										</Badge>
										<Badge pill bg="info" className="me-1">
											info
										</Badge>
										<Badge pill bg="light" text="dark" className="me-1">
											light
										</Badge>
										<Badge pill bg="dark" className="me-1">
											dark
										</Badge>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={PillBadgesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of Pill badges  */}

			<hr className="mb-5 mt-7" />

			{/* simple badge  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="simple-badge" className="mb-4">
						<h3>Simple Badge </h3>
						<p>
							Badges scale to match the size of the immediate parent element by
							using relative font sizing and em units.
						</p>
					</div>
					<Tab.Container defaultActiveKey="all">
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
										<h1>
											{' '}
											Example heading <Badge bg="secondary">New</Badge>
										</h1>
										<h2>
											{' '}
											Example heading <Badge bg="secondary">New</Badge>
										</h2>
										<h3>
											{' '}
											Example heading <Badge bg="secondary">New</Badge>{' '}
										</h3>
										<h4>
											{' '}
											Example heading <Badge bg="secondary">New</Badge>
										</h4>
										<h5>
											{' '}
											Example heading <Badge bg="secondary">New</Badge>{' '}
										</h5>
										<h6>
											{' '}
											Example heading <Badge bg="secondary">New</Badge>
										</h6>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={SimpleBadgeCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of simple badge  */}

			<hr className="mb-5 mt-7" />

			{/* badge with button  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Badge with Button</h3>
						<p>
							Badges can be used as part of links or buttons to provide a
							counter.
						</p>
					</div>
					<Tab.Container defaultActiveKey="all">
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
										<Button variant="primary">
											Notifications{' '}
											<Badge bg="light" className="text-primary">
												4
											</Badge>
										</Button>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={BadgeWithButtonCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of badge with button  */}

		</Container>
	);
};
export default Badges;
