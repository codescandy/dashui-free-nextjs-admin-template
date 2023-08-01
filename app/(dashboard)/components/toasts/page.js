'use client'
// import node module libraries
import { Fragment, useState } from 'react';
import {
	Col,
	Row,
	Card,
	Toast,
	ToastContainer,
	Button,
	Image,
	Tab,
	Nav,
	Form,
	Container
} from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	BasicExampleCode,
	TranslucentToastsCode,
	StackingCode,
	PlacementCode1,
	PlacementCode2,
	PlacementCode3,
	DismissibleCode
} from 'data/code/ToastsCode';

const Toasts = () => {
	const [showA, setShowA] = useState(true);
	const [showB, setShowB] = useState(true);

	const toggleShowA = () => setShowA(!showA);
	const toggleShowB = () => setShowB(!showB);

	const [position, setPosition] = useState('top-start');

	const iconSVG = `<svg class="bd-placeholder-img rounded me-2" width="20" height="20"
	xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
	role="img">
	<rect width="100%" height="100%" fill="var(--bs-primary)"></rect>
  </svg>`;
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Toast</h1>
							<p className="mb-0 ">
								Push notifications to your visitors with a toast, a lightweight
								and easily customizable alert message.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* basic */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="examples" className="mb-4">
						<div id="basic">
							<h3>Basic</h3>
							<p>
								To encourage extensible and predictable toasts, we recommend a
								header and body. Toast headers use display: flex, allowing easy
								alignment of content thanks to our margin and flexbox utilities.
							</p>
							<p>
								Toasts are as flexible as you need and have very little required
								markup. At a minimum, we require a single element to contain
								your “toasted” content and strongly encourage a dismiss button.
							</p>
						</div>
					</div>
					<Tab.Container id="tab-container-1" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											Code
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* code started */}
										<Toast>
											<Toast.Header>
												<span
													dangerouslySetInnerHTML={{ __html: iconSVG }}
												></span>
												<strong className="me-auto">Bootstrap</strong>
												<small>11 mins ago</small>
											</Toast.Header>
											<Toast.Body>
												Hello, world! This is a toast message.
											</Toast.Body>
										</Toast>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={BasicExampleCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of basic */}

			<hr className="mb-5 mt-7" />

			{/* translucent */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="translucent" className="mb-4">
						<h3>Translucent</h3>
					</div>
					<Tab.Container id="tab-container-2" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											Code
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4 bg-primary">
										{/* code started */}
										<Toast className="mb-4">
											<Toast.Header>
												<span
													dangerouslySetInnerHTML={{ __html: iconSVG }}
												></span>
												<strong className="me-auto">Bootstrap</strong>
												<small>just now</small>
											</Toast.Header>
											<Toast.Body>See? Just like this.</Toast.Body>
										</Toast>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={TranslucentToastsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of translucent */}

			<hr className="mb-5 mt-7" />

			{/* stacking */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="stacking" className="mb-4">
						<h3>Stacking</h3>
						<p>
							When you have multiple toasts, we default to vertically stacking
							them in a readable manner.
						</p>
					</div>
					<Tab.Container id="tab-container-3" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											Code
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* code started */}
										<Toast className="mb-4">
											<Toast.Header>
												<span
													dangerouslySetInnerHTML={{ __html: iconSVG }}
												></span>
												<strong className="me-auto">Bootstrap</strong>
												<small>just now</small>
											</Toast.Header>
											<Toast.Body>See? Just like this.</Toast.Body>
										</Toast>

										<Toast animation={false}>
											<Toast.Header>
												<span
													dangerouslySetInnerHTML={{ __html: iconSVG }}
												></span>
												<strong className="me-auto">Bootstrap</strong>
												<small>2 seconds ago</small>
											</Toast.Header>
											<Toast.Body>
												Heads up, toasts will stack automatically
											</Toast.Body>
										</Toast>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={StackingCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of stacking */}

			<hr className="mb-5 mt-7" />

			{/* placement */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="placement" className="mb-4">
						<h3>Placement</h3>
						<p>
							Place toasts with custom CSS as you need them. The top right is
							often used for notifications, as is the top middle.
						</p>
					</div>
					<Tab.Container id="tab-container-4" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											Code
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* code started */}
										<div className="mb-3">
											<label htmlFor="selectToastPlacement">
												Toast position
											</label>
											<Form.Select
												id="selectToastPlacement"
												className="mt-2"
												onChange={(e) => setPosition(e.currentTarget.value)}
											>
												{[
													'top-start',
													'top-center',
													'top-end',
													'middle-start',
													'middle-center',
													'middle-end',
													'bottom-start',
													'bottom-center',
													'bottom-end'
												].map((p) => (
													<option key={p} value={p}>
														{p}
													</option>
												))}
											</Form.Select>
										</div>
										<div
											aria-live="polite"
											aria-atomic="true"
											className="position-relative"
											style={{ minHeight: '240px' }}
										>
											<ToastContainer className="p-3" position={position}>
												<Toast>
													<Toast.Header closeButton={false}>
														<Image
															src="/images/avatar/avatar-1.jpg"
															className="rounded me-2 avatar-xs"
															alt="..."
														/>
														<strong className="me-auto">Bootstrap</strong>
														<small>11 mins ago</small>
													</Toast.Header>
													<Toast.Body>
														Hello, world! This is a toast message.
													</Toast.Body>
												</Toast>
											</ToastContainer>
										</div>

										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={PlacementCode1} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of placement */}

			{/* placement */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4 mt-4">
						<p>
							For systems that generate more notifications, consider using a
							wrapping element so they can easily stack.
						</p>
					</div>
					<Tab.Container id="tab-container-5" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											Code
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* code started */}
										<div
											aria-live="polite"
											aria-atomic="true"
											style={{
												position: 'relative',
												minHeight: '250px'
											}}
										>
											<div
												style={{
													position: 'absolute',
													top: 0,
													right: 0
												}}
											>
												<Toast className="mb-4">
													<Toast.Header>
														<span
															dangerouslySetInnerHTML={{ __html: iconSVG }}
														></span>
														<strong className="me-auto">Bootstrap</strong>
														<small>just now</small>
													</Toast.Header>
													<Toast.Body>See? Just like this.</Toast.Body>
												</Toast>
												<Toast className="mb-4">
													<Toast.Header>
														<span
															dangerouslySetInnerHTML={{ __html: iconSVG }}
														></span>
														<strong className="me-auto">Bootstrap</strong>
														<small>2 seconds ago</small>
													</Toast.Header>
													<Toast.Body>
														Heads up, toasts will stack automatically
													</Toast.Body>
												</Toast>
											</div>
										</div>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={PlacementCode2} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of placement */}

			{/* placement */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4 mt-4">
						<p>
							You can also get fancy with flexbox utilities to align toasts
							horizontally and/or vertically.
						</p>
					</div>
					<Tab.Container id="tab-container-6" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											Code
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* code started */}
										<div
											aria-live="polite"
											aria-atomic="true"
											className="d-flex justify-content-center align-items-center"
											style={{
												position: 'relative',
												minHeight: '250px'
											}}
										>
											<Toast>
												<Toast.Header>
													<span
														dangerouslySetInnerHTML={{ __html: iconSVG }}
													></span>
													<strong className="me-auto">Bootstrap</strong>
													<small>11 mins ago</small>
												</Toast.Header>
												<Toast.Body>
													Hello, world! This is a toast message.
												</Toast.Body>
											</Toast>
										</div>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={PlacementCode3} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of placement  */}

			<hr className="mb-5 mt-7" />

			{/* dismissible */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mb-5">
					<div id="dismissible" className="mb-4">
						<h3>Dismissible</h3>
					</div>
					<Tab.Container id="tab-container-7" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											Code
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* code started */}
										<Row>
											<Col md={6} className="mb-2">
												<Button onClick={toggleShowA} className="mb-2">
													Toggle Toast <strong>with</strong> Animation
												</Button>
												<Toast
													className="mb-4"
													show={showA}
													onClose={toggleShowA}
												>
													<Toast.Header>
														<span
															dangerouslySetInnerHTML={{ __html: iconSVG }}
														></span>
														<strong className="me-auto">Bootstrap</strong>
														<small>just now</small>
													</Toast.Header>
													<Toast.Body>See? Just like this.</Toast.Body>
												</Toast>
											</Col>
											<Col md={6} className="mb-2">
												<Button onClick={toggleShowB} className="mb-2">
													Toggle Toast <strong>without</strong> Animation
												</Button>
												<Toast
													onClose={toggleShowB}
													show={showB}
													animation={false}
												>
													<Toast.Header>
														<span
															dangerouslySetInnerHTML={{ __html: iconSVG }}
														></span>
														<strong className="me-auto">Bootstrap</strong>
														<small>2 seconds ago</small>
													</Toast.Header>
													<Toast.Body>
														Heads up, toasts will stack automatically
													</Toast.Body>
												</Toast>
											</Col>
										</Row>

										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={DismissibleCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of dismissible */}
		</Container>
	);
};

export default Toasts;
