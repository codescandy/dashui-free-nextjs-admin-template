'use client'
// import node module libraries
import { Fragment } from 'react';
import {
	Col,
	Row,
	Button,
	Card,
	Spinner,
	ToggleButton,
	ToggleButtonGroup,
	Nav,
	Tab,
	Container
} from 'react-bootstrap';
import { ShoppingBag } from 'react-feather';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	RegularButtonCode,
	ButtonTagsCode,
	OutlineButtonsCode,
	ButtonSizesCode,
	BlockButtonCode,
	ResponsiveButtonCode,
	BlockButtonWidthCode,
	ButtonAlignmentCode,
	ButtonIconsCode,
	ButtonIcons2Code,
	ButtonIconsSizeCode,
	ActiveStateCode,
	DisabledStateCode,
	ToggleStatesCode
} from 'data/code/ButtonsCode';

const Buttons = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Buttons</h1>
							<p className="mb-0 ">
								Custom button styles for actions in forms, dialogs, and more
								with support for multiple sizes, states, and more.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* regular button */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="button-tags" className="mb-4">
						<h3>Regular Button</h3>
						<p>
							Use any of the available button style types to quickly create a
							styled button. Just modify the <code>variant</code> prop.
						</p>
					</div>
					<Tab.Container id="tab-container-1" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Button variant="primary" className="me-1 mb-2">
											Primary
										</Button>
										<Button variant="secondary" className="me-1 mb-2">
											Secondary
										</Button>
										<Button variant="success" className="me-1 mb-2">
											Success
										</Button>
										<Button variant="warning" className="me-1 mb-2">
											Warning
										</Button>
										<Button variant="danger" className="me-1 mb-2">
											Danger
										</Button>
										<Button variant="info" className="me-1 mb-2">
											Info
										</Button>
										<Button variant="light" className="me-1 mb-2">
											Light
										</Button>
										<Button variant="dark" className="me-1 mb-2">
											Dark
										</Button>
										<Button variant="link" className="me-1 mb-2">
											Link
										</Button>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={RegularButtonCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of regular button */}

			<hr className="mb-5 mt-7" />

			{/* button tags */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="button-tags" className="mb-4">
						<h3>Button tags</h3>
						<p>
							Normally <code>&lt;Button&gt;</code> components will render a HTML{' '}
							<code>&lt;button&gt;</code> element. However you can render
							whatever you&apos;d like, adding a <code>href</code> prop will
							automatically render an <code>&lt;a/&gt;</code> element. You can
							use the <code>as</code> prop to render whatever your heart
							desires. React Bootstrap will take care of the proper ARIA roles
							for you.
						</p>
					</div>
					<Tab.Container id="tab-container-2" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Button href="#" className="me-1 mb-2">
											Link
										</Button>
										<Button type="submit" className="me-1 mb-2">
											Button
										</Button>
										<Button
											as="input"
											type="button"
											value="Input"
											className="me-1 mb-2"
										/>
										<Button
											as="input"
											type="submit"
											value="Submit"
											className="me-1 mb-2"
										/>
										<Button
											as="input"
											type="reset"
											value="Reset"
											className="me-1 mb-2"
										/>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ButtonTagsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of button tags */}

			<hr className="mb-5 mt-7" />

			{/* outline buttons */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="outline-button" className="mb-4">
						<h3>Outline buttons</h3>
						<p>
							For a lighter touch, Buttons also come in <code>outline-*</code>{' '}
							variants with no background color.
						</p>
					</div>
					<Tab.Container id="tab-container-3" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Button variant="outline-primary" className="me-1 mb-2">
											Primary
										</Button>
										<Button variant="outline-secondary" className="me-1 mb-2">
											Secondary
										</Button>
										<Button variant="outline-success" className="me-1 mb-2">
											Success
										</Button>
										<Button variant="outline-warning" className="me-1 mb-2">
											Warning
										</Button>
										<Button variant="outline-danger" className="me-1 mb-2">
											Danger
										</Button>
										<Button variant="outline-info" className="me-1 mb-2">
											Info
										</Button>
										<Button variant="outline-light" className="me-1 mb-2">
											Light
										</Button>
										<Button variant="outline-dark" className="me-1 mb-2">
											Dark
										</Button>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={OutlineButtonsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of outline buttons */}

			<hr className="mb-5 mt-7" />

			{/* sizes */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="sizes" className="mb-4">
						<h3>Sizes</h3>						
						<p>
							Fancy larger or smaller buttons? Add <code>size=&#34;lg&#34;</code> or <code>size=&#34;sm&#34;</code> for additional sizes.
						</p>
					</div>
					<Tab.Container id="tab-container-4" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Button
											variant="primary"
											size="lg"
											className="me-1 mb-2 mb-lg-0"
										>
											Large button
										</Button>
										<Button variant="primary" className="me-1 mb-2">
											Default button
										</Button>
										<Button variant="primary" size="sm" className="me-1 mb-2">
											Small button
										</Button>
										<Button variant="primary" size="xs" className="me-1 mb-2">
											Xtra Small button
										</Button>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ButtonSizesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of sizes */}

			{/* block buttons */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mt-5">
					<div id="buttonBlock" className="mb-4">
						<h3>Block buttons</h3>
						<p>
							Create responsive stacks of full-width, “block buttons” like those
							in Bootstrap 4 with a mix of our display and gap utilities.
						</p>
					</div>
					<Tab.Container id="tab-container-5" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<div className="d-grid gap-2">
											<Button variant="primary">Button</Button>
											<Button variant="primary">Button</Button>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={BlockButtonCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of block buttons */}

			{/* block buttons responsive variation */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mt-5">
					<p className="mb-3">
						Here we create a responsive variation, starting with vertically
						stacked buttons until the <code>md</code> breakpoint, where{' '}
						<code>.d-md-block</code> replaces the <code>.d-grid</code> class,
						thus nullifying the <code>gap-2</code> utility. Resize your browser
						to see that change.
					</p>
					<Tab.Container id="tab-container-6" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<div className="d-grid gap-2 d-md-block">
											<Button variant="primary" className="me-1">
												Button
											</Button>
											<Button variant="primary" className="me-1">
												Button
											</Button>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ResponsiveButtonCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of block buttons responsive variation*/}

			{/* adjust the width of your block buttons */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mt-5">
					<p className="mb-3">
						You can adjust the width of your block buttons with grid column
						width classes. For example, for a half-width “block button”, use{' '}
						<code>md=&#123;6&#125;</code>. Center it horizontally with{' '}
						<code>.mx-auto</code>, too.
					</p>
					<Tab.Container id="tab-container-7" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Row>
											<Col md={6} className="d-grid gap-2 mx-auto">
												<Button variant="primary">Button</Button>
												<Button variant="primary">Button</Button>
											</Col>
										</Row>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={BlockButtonWidthCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of adjust the width of your block buttons */}

			{/* alignment of buttons when horizontal */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mt-5">
					<p className="mb-3">
						Additional utilities can be used to adjust the alignment of buttons
						when horizontal. Here we’ve taken our previous responsive example
						and added some flex utilities and a margin utility on the button to
						right align the buttons when they’re no longer stacked.
					</p>
					<Tab.Container id="tab-container-8" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<div className="d-grid gap-2 d-md-flex justify-content-md-end">
											<Button variant="primary">Button</Button>
											<Button variant="primary">Button</Button>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ButtonAlignmentCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of alignment of buttons when horizontal */}

			<hr className="mb-5 mt-7" />

			{/* button icons */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="button-icon" className="mb-4">
						<h3>Button icons </h3>
						<p>A contained button with an icon.</p>
					</div>
					<Tab.Container id="tab-container-9" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Button variant="primary">
											Your Text Goes Here <ShoppingBag size="18px" />
										</Button>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ButtonIconsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of button icons */}

			{/* button icons */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mt-5 mb-3">With fixed width and height.</div>
					<Tab.Container id="tab-container-10" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Button variant="primary" className="me-1">
											+
										</Button>{' '}
										<Button variant="primary">
											<Spinner animation="border" size="sm" />
										</Button>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ButtonIcons2Code} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of button icons */}

			{/* button icons sizes*/}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mt-5 mb-3">Also available in all button sizes.</div>
					<Tab.Container id="tab-container-11" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Button variant="primary" size="lg" className="me-1">
											+
										</Button>
										<Button variant="primary" className="me-1">
											+
										</Button>
										<Button variant="primary" size="sm" className="me-1">
											+
										</Button>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ButtonIconsSizeCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of button icons sizes */}

			<hr className="mb-5 mt-7" />

			{/* active state */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="active-state" className="mb-4">
						<h3>Active state</h3>
						<p>
							To set a button&apos;s active state simply set the component&apos;s <code>active</code> prop.
						</p>
					</div>
					<Tab.Container id="tab-container-12" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Button variant="primary" active className="me-1">
											Primary button
										</Button>
										<Button variant="secondary" active className="me-1">
											Button
										</Button>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ActiveStateCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of active state */}

			<hr className="mb-5 mt-7" />

			{/* disabled state */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="disabled-state" className="mb-4">
						<h3>Disabled state</h3>
						<p>
							Make buttons look inactive by adding the <code>disabled</code>{' '}
							prop to.
						</p>
					</div>
					<Tab.Container id="tab-container-13" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<Button variant="primary" disabled className="me-1">
											Primary button
										</Button>
										<Button variant="secondary" disabled className="me-1">
											Button
										</Button>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={DisabledStateCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of disabled state */}

			<hr className="mb-5 mt-7" />

			{/* toggle state */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="toggle-state" className="mb-4">
						<h3>Toggle states</h3>
						<p>
							Buttons can also be used to style <code>checkbox</code> and{' '}
							<code>radio</code> form elements. This is helpful when you want a
							toggle button that works neatly inside an HTML form.
						</p>
					</div>
					<Tab.Container id="tab-container-14" defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 ">
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
										<ToggleButtonGroup type="checkbox" className="mb-2 me-1">
											<ToggleButton id="tbg-check-1" value={1}>
												Toggle button
											</ToggleButton>
										</ToggleButtonGroup>
										<ToggleButtonGroup
											type="checkbox"
											defaultValue={1}
											className="mb-2 me-1"
										>
											<ToggleButton id="tbg-check-1" value={1}>
												Active toggle button
											</ToggleButton>
										</ToggleButtonGroup>
										<ToggleButtonGroup type="checkbox" className="mb-2 me-1">
											<ToggleButton id="tbg-check-1" value={1} disabled>
												Disabled toggle button
											</ToggleButton>
										</ToggleButtonGroup>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ToggleStatesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of toggle state */}
		</Container>
	);
};

export default Buttons;
