'use client'
// import node module libraries
import {
	Col,
	Row,
	Card,
	ButtonGroup,
	Button,
	ButtonToolbar,
	DropdownButton,
	Dropdown,
	ToggleButton,
	ToggleButtonGroup,
	Nav,
	Tab,
	Container
} from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	BasicButtonGroupCode,
	GroupLinksCode,
	MixedStylesCode,
	OutlineStylesCode,
	CheckboxStyleCode,
	RadioStyleCode,
	ToolbarStyleCode,
	ButtonSizingCode,
	ButtonNestingCode,
	VerticalButtonCode
} from 'data/code/ButtonGroupCode';

const ButtonGroups = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Button Group</h1>
							<p className="mb-0 ">
								Group a series of buttons together on a single line with the
								button group.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* basic example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="button" className="mb-4">
						<h3>Basic example</h3>
						<p>
							Wrap a series of <code>&lt;Button&gt;</code>s in a{' '}
							<code>&lt;ButtonGroup&gt;</code>.
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
										<ButtonGroup aria-label="Basic example">
											<Button variant="primary">Left</Button>
											<Button variant="primary">Middle</Button>
											<Button variant="primary">Right</Button>
										</ButtonGroup>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={BasicButtonGroupCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of basic example */}

			{/* groups of links */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="my-4">
						<p>
							These classes can also be added to groups of links with{' '}
							<code>href</code>, as an alternative to the navigation components.
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
										<ButtonGroup aria-label="Basic example">
											<Button variant="primary" href="#" active>
												Active Link
											</Button>
											<Button variant="primary" href="#">
												Link
											</Button>
											<Button variant="primary" href="#">
												Link
											</Button>
										</ButtonGroup>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={GroupLinksCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of groups of links */}

			<hr className="mb-5 mt-7" />

			{/* mixed styles */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="mixed-styles" className="mb-4">
						<h3>Mixed Styles</h3>
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
										<ButtonGroup aria-label="Basic mixed styles example">
											<Button variant="danger">Left</Button>
											<Button variant="warning">Middle</Button>
											<Button variant="success">Right</Button>
										</ButtonGroup>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={MixedStylesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of mixed styles */}

			<hr className="mb-5 mt-7" />

			{/* mixed outline styles */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="mixed-outline-styles" className="mb-4">
						<h3>Outline Styles</h3>
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
										<ButtonGroup aria-label="Basic mixed styles example">
											<Button variant="outline-primary">Left</Button>
											<Button variant="outline-primary">Middle</Button>
											<Button variant="outline-primary">Right</Button>
										</ButtonGroup>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={OutlineStylesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of mixed outline styles */}

			<hr className="mb-5 mt-7" />

			{/* checkbox and radio button groups */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="checkbox-and-radio-button-groups" className="mb-4">
						<h3>Checkbox and radio button groups</h3>
						<p>
							Combine button-like checkbox and radio toggle buttons into a
							seamless looking button group.
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
										<ToggleButtonGroup
											type="checkbox"
											defaultValue={[1]}
											className="mb-2"
										>
											<ToggleButton
												id="tbg-check-1"
												value={1}
												variant="outline-primary"
											>
												Checkbox 1
											</ToggleButton>
											<ToggleButton
												id="tbg-check-2"
												value={2}
												variant="outline-primary"
											>
												Checkbox 2
											</ToggleButton>
											<ToggleButton
												id="tbg-check-3"
												value={3}
												variant="outline-primary"
											>
												Checkbox 3
											</ToggleButton>
										</ToggleButtonGroup>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={CheckboxStyleCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>

					<Tab.Container id="tab-container-6" defaultActiveKey="design">
						<Card className="mt-5">
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
										<ToggleButtonGroup
											type="radio"
											name="options"
											defaultValue={1}
										>
											<ToggleButton
												id="tbg-radio-1"
												value={1}
												variant="outline-primary"
											>
												Radio 1
											</ToggleButton>
											<ToggleButton
												id="tbg-radio-2"
												value={2}
												variant="outline-primary"
											>
												Radio 2
											</ToggleButton>
											<ToggleButton
												id="tbg-radio-3"
												value={3}
												variant="outline-primary"
											>
												Radio 3
											</ToggleButton>
										</ToggleButtonGroup>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={RadioStyleCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of checkbox and radio button groups */}

			<hr className="mb-5 mt-7" />

			{/* button toolbar */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="button-toolbar" className="mb-4">
						<h3>Button toolbar</h3>
						<p>
							Combine sets of <code>&lt;ButtonGroup&gt;</code>s into a{' '}
							<code>&lt;ButtonToolbar&gt;</code> for more complex components.
							Use utility classes as needed to space out groups, buttons, and
							more.
						</p>
					</div>
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
										<ButtonToolbar aria-label="Toolbar with button groups">
											<ButtonGroup className="me-2" aria-label="First group">
												<Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
												<Button>4</Button>
											</ButtonGroup>
											<ButtonGroup className="me-2" aria-label="Second group">
												<Button>5</Button> <Button>6</Button> <Button>7</Button>
											</ButtonGroup>
											<ButtonGroup aria-label="Third group">
												<Button>8</Button>
											</ButtonGroup>
										</ButtonToolbar>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ToolbarStyleCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of button toolbar */}

			<hr className="mb-5 mt-7" />

			{/* button sizing */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="button-sizing" className="mb-4">
						<h3>Sizing</h3>
						<p>
							Instead of applying button sizing props to every button in a
							group, just add <code>size</code> prop to the{' '}
							<code>&lt;ButtonGroup&gt;</code>.
						</p>
					</div>
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
										<ButtonGroup
											aria-label="Basic example"
											size="lg"
											className="mb-2"
										>
											<Button variant="primary">Left</Button>
											<Button variant="primary">Middle</Button>
											<Button variant="primary">Right</Button>
										</ButtonGroup>
										<br />
										<ButtonGroup aria-label="Basic example" className="mb-2">
											<Button variant="primary">Left</Button>
											<Button variant="primary">Middle</Button>
											<Button variant="primary">Right</Button>
										</ButtonGroup>
										<br />
										<ButtonGroup aria-label="Basic example" size="sm">
											<Button variant="primary">Left</Button>
											<Button variant="primary">Middle</Button>
											<Button variant="primary">Right</Button>
										</ButtonGroup>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ButtonSizingCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of button sizing */}

			<hr className="mb-5 mt-7" />

			{/* button nesting */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="button-nesting" className="mb-4">
						<h3>Button Nesting</h3>
						<p>
							You can place other button types within the{' '}
							<code>&lt;ButtonGroup&gt;</code> like{' '}
							<code>&lt;DropdownButton&gt;</code>s.
						</p>
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
										<ButtonGroup>
											<Button>1</Button>
											<Button>2</Button>
											<DropdownButton
												as={ButtonGroup}
												title="Dropdown"
												id="bg-nested-dropdown"
											>
												<Dropdown.Item eventKey="1">
													Dropdown link
												</Dropdown.Item>
												<Dropdown.Item eventKey="2">
													Dropdown link
												</Dropdown.Item>
											</DropdownButton>
										</ButtonGroup>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ButtonNestingCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of button nesting */}

			<hr className="mb-5 mt-7" />

			{/* button vertical variation */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="vertical-variation" className="mb-4">
						<h3>Vertical variation</h3>
						<p>
							Make a set of buttons appear vertically stacked rather than
							horizontally, by adding <code>vertical</code> to the{' '}
							<code>&lt;ButtonGroup&gt;</code>.{' '}
							<strong>Split button dropdowns are not supported here.</strong>
						</p>
					</div>
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
										<ButtonGroup vertical>
											<Button>Button</Button>
											<Button>Button</Button>

											<DropdownButton
												as={ButtonGroup}
												title="Dropdown"
												id="bg-vertical-dropdown-1"
											>
												<Dropdown.Item eventKey="1">
													Dropdown link
												</Dropdown.Item>
												<Dropdown.Item eventKey="2">
													Dropdown link
												</Dropdown.Item>
											</DropdownButton>

											<Button>Button</Button>
											<Button>Button</Button>

											<DropdownButton
												as={ButtonGroup}
												title="Dropdown"
												id="bg-vertical-dropdown-2"
											>
												<Dropdown.Item eventKey="1">
													Dropdown link
												</Dropdown.Item>
												<Dropdown.Item eventKey="2">
													Dropdown link
												</Dropdown.Item>
											</DropdownButton>

											<DropdownButton
												as={ButtonGroup}
												title="Dropdown"
												id="bg-vertical-dropdown-3"
											>
												<Dropdown.Item eventKey="1">
													Dropdown link
												</Dropdown.Item>
												<Dropdown.Item eventKey="2">
													Dropdown link
												</Dropdown.Item>
											</DropdownButton>
										</ButtonGroup>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={VerticalButtonCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of button vertical variation */}
		</Container>
	);
};

export default ButtonGroups;
