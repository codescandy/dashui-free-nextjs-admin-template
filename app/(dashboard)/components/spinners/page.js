'use client'
// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Spinner, Button, Nav, Tab, Container } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	BorderSpinnerCode,
	SpinnersColorsCode,
	GrowingSpinnerCode,
	GrowColorsCode,
	AlignmentCode,
	PlacementCenterCode,
	PlacementLoadingCode,
	FloatsCode,
	TextAlignCode,
	SizeSpinnersCode,
	StyleCSSCode,
	ButtonsCode,
	Buttons2Code
} from 'data/code/SpinnersCode';

const Spinners = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Spinners</h1>
							<p className="mb-0 ">
								Indicate the loading state of a component or page with Bootstrap
								spinners, built entirely with HTML, CSS, and no JavaScript.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* border-spinner */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="border-spinner">
						<h3>Border spinner</h3>
						<p>
							Use the border spinners for a lightweight loading indicator. Set{' '}
							<code>animation=&#34;border&#34;</code> to use it.
						</p>
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
										<Spinner animation="border" role="status">
											<span className="visually-hidden">Loading...</span>
										</Spinner>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={BorderSpinnerCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of border-spinner */}

			<hr className="mb-5 mt-7" />

			{/* colors */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="colors" className="mb-4">
						<h3>Colors</h3>
						<p>
							All standard visual variants are available for border spinner
							animation styles by setting the <code>variant</code> property.
							Alternatively spinners can be custom sized with the{' '}
							<code>style</code> property, or custom CSS classes.
						</p>
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
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* code started */}
										<Spinner
											animation="border"
											variant="primary"
											className="me-2"
										/>
										<Spinner
											animation="border"
											variant="secondary"
											className="me-2"
										/>
										<Spinner
											animation="border"
											variant="success"
											className="me-2"
										/>
										<Spinner
											animation="border"
											variant="danger"
											className="me-2"
										/>
										<Spinner
											animation="border"
											variant="warning"
											className="me-2"
										/>
										<Spinner
											animation="border"
											variant="info"
											className="me-2"
										/>
										<Spinner
											animation="border"
											variant="light"
											className="me-2"
										/>
										<Spinner animation="border" variant="dark" />
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={SpinnersColorsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of colors */}

			<hr className="mb-5 mt-7" />

			{/* growing-spinner */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="growing-spinner" className="mb-4">
						<h3>Growing spinner</h3>
						<p>
							Set <code>animation=&#34;grow&#34;</code> to use it.
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
										<Spinner animation="grow" />
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={GrowingSpinnerCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of growing-spinner */}

			{/* text color utilities */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4 mt-4">
						<p>
							All standard visual variants are available for growing spinner
							animation styles by setting the <code>variant</code> property.
							Alternatively spinners can be custom sized with the{' '}
							<code>style</code> property, or custom CSS classes.
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
										<Spinner
											animation="grow"
											variant="primary"
											className="me-2"
										/>
										<Spinner
											animation="grow"
											variant="secondary"
											className="me-2"
										/>
										<Spinner
											animation="grow"
											variant="success"
											className="me-2"
										/>
										<Spinner
											animation="grow"
											variant="danger"
											className="me-2"
										/>
										<Spinner
											animation="grow"
											variant="warning"
											className="me-2"
										/>
										<Spinner animation="grow" variant="info" className="me-2" />
										<Spinner
											animation="grow"
											variant="light"
											className="me-2"
										/>
										<Spinner animation="grow" variant="dark" />
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={GrowColorsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of text color utilities */}

			<hr className="mb-5 mt-7" />

			{/* alignment */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="alignment" className="mb-4">
						<h3>Alignment</h3>
						<p>
							Spinners in Bootstrap are built with <code>rem</code>s,{' '}
							<code>variant</code> prop etc... This means they can easily be
							resized, recolored, and quickly aligned.
						</p>
						<div className="mt-5" id="margin">
							<h3>Margin</h3>
							<p>
								Use <code>margin utilities</code> like <code>.m-5</code> for
								easy spacing.
							</p>
						</div>
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
										<Spinner animation="border" role="status" className="m-5">
											<span className="visually-hidden">Loading...</span>
										</Spinner>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AlignmentCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of alignment */}

			<hr className="mb-5 mt-7" />

			{/* placement */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mb-4">
					<div id="placement" className="mb-4">
						<h3>Placement</h3>
						<p>
							Use <code>flexbox utilities</code>, <code>float utilities</code>,
							or <code>text alignment</code> utilities to place spinners exactly
							where you need them in any situation.
						</p>
						<div className="mt-4" id="flex">
							<h3>Flex</h3>
						</div>
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
										<div className="d-flex justify-content-center">
											<Spinner animation="border" role="status">
												<span className="visually-hidden">Loading...</span>
											</Spinner>
										</div>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={PlacementCenterCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of placement */}

			{/* placement 2 */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
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
										<div className="d-flex  align-items-center">
											<strong>Loading...</strong>
											<Spinner
												animation="border"
												role="status"
												className="ms-auto"
											>
												<span className="visually-hidden">Loading...</span>
											</Spinner>
										</div>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={PlacementLoadingCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of placement 2 */}

			<hr className="mb-5 mt-7" />

			{/* floats */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="floats" className="mb-4">
						<h3>Floats</h3>
					</div>
					<Tab.Container id="tab-container-8" defaultActiveKey="design">
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
									<Tab.Pane eventKey="design" className="p-4">
										{/* code started */}
										<Spinner
											animation="border"
											role="status"
											className="float-end mb-4"
										>
											<span className="visually-hidden">Loading...</span>
										</Spinner>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={FloatsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of floats */}

			<hr className="mb-5 mt-7" />

			{/* text-align */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="text-align" className="mb-4">
						<h3>Text align</h3>
					</div>
					<Tab.Container id="tab-container-9" defaultActiveKey="design">
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
										<div className="text-center">
											<Spinner animation="border" role="status">
												<span className="visually-hidden">Loading...</span>
											</Spinner>
										</div>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={TextAlignCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of  text-align */}

			<hr className="mb-5 mt-7" />

			{/* size */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="size" className="mb-4">
						<h3>Size</h3>
						<p>
							Add <code>size=&#34;sm&#34;</code> to make a smaller spinner that can
							quickly be used within other components.
						</p>
					</div>
					<Tab.Container id="tab-container-10" defaultActiveKey="design">
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
										<Spinner animation="border" size="sm" className="me-2" />
										<Spinner animation="grow" size="sm" />
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={SizeSpinnersCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of size */}

			{/* use custom CSS or inline styles */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4 mt-4">
						<p>
							Or, use custom CSS or inline styles to change the dimensions as
							needed.
						</p>
					</div>
					<Tab.Container id="tab-container-11" defaultActiveKey="design">
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
										<Spinner
											animation="border"
											style={{ width: '3rem', height: '3rem' }}
											className="me-2"
										/>
										<Spinner
											animation="grow"
											style={{ width: '3rem', height: '3rem' }}
										/>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={StyleCSSCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of use custom CSS or inline styles */}

			<hr className="mb-5 mt-7" />

			{/* buttons */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mb-4">
					<div id="buttons" className="mb-4">
						<h3>Buttons</h3>
						<p>
							Like the original Bootstrap spinners, these can also be used with
							buttons. To use this component out-of-the-box it is recommended
							you change the element type to <code>span</code> by configuring
							the <code>as</code> property when using spinners inside buttons.
						</p>
					</div>
					<Tab.Container id="tab-container-12" defaultActiveKey="design">
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
										<Button variant="primary" disabled className="me-2">
											<Spinner
												as="span"
												animation="border"
												size="sm"
												role="status"
												aria-hidden="true"
											/>
											<span className="visually-hidden"> Loading...</span>
										</Button>
										<Button variant="primary" disabled>
											<Spinner
												as="span"
												animation="border"
												size="sm"
												role="status"
												aria-hidden="true"
											/>{' '}
											Loading...
										</Button>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ButtonsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of buttons */}

			{/* buttons 2 */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mb-4">
					<Tab.Container id="tab-container-13" defaultActiveKey="design">
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
										<Button variant="primary" disabled className="me-2">
											<Spinner
												as="span"
												animation="grow"
												size="sm"
												role="status"
												aria-hidden="true"
											/>
											<span className="visually-hidden"> Loading...</span>
										</Button>
										<Button variant="primary" disabled>
											<Spinner
												as="span"
												animation="grow"
												size="sm"
												role="status"
												aria-hidden="true"
											/>{' '}
											Loading...
										</Button>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={Buttons2Code} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of buttons 2 */}
		</Container>
	);
};

export default Spinners;
