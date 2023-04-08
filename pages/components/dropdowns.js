// import node module libraries
import { Fragment } from 'react';
import {
	Col,
	Row,
	Card,
	Dropdown,
	ButtonGroup,
	DropdownButton,
	SplitButton,
	Form,
	Button,
	Nav,
	Tab,
	Container
} from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	BasicDropdownCode,
	SplitDropdownCode,
	DropdownVariantCode,
	DropdownSizingCode,
	DirectionsCode,
	MenuAlignmentCode,
	ResponsiveMenuAlignmentCode1,
	ResponsiveMenuAlignmentCode2,
	MenuContentCode,
	DividersCode,
	FormsCode1,
	FormsCode2
} from 'data/code/DropdownsCode';

const Dropdowns = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Dropdowns</h1>
							<p className="mb-0 ">
								Toggle contextual overlays for displaying lists of links and
								more with the Bootstrap dropdown plugin.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/*  basic  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="basic" className="mb-4">
						<h3>Basic</h3>
						<p>
							The basic Dropdown is composed of a wrapping <code>Dropdown</code>{' '}
							and inner <code>&lt;DropdownMenu&gt;</code>, and{' '}
							<code>&lt;DropdownToggle&gt;</code>. By default the{' '}
							<code>&lt;DropdownToggle&gt;</code> will render a Button component
							and accepts all the same props.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
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
										<Dropdown>
											<Dropdown.Toggle variant="secondary" id="dropdown-basic">
												Dropdown Button
											</Dropdown.Toggle>

											<Dropdown.Menu>
												<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
												<Dropdown.Item href="#/action-2">
													Another action
												</Dropdown.Item>
												<Dropdown.Item href="#/action-3">
													Something else
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={BasicDropdownCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of basic */}

			<hr className="mb-5 mt-7" />

			{/*  split button  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="split-button" className="mb-4">
						<h3>Split Button</h3>
						<p>
							Similarly, You create a split dropdown by combining the Dropdown
							components with another Button and a ButtonGroup.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
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
										<Dropdown as={ButtonGroup}>
											<Button variant="secondary">Split Button</Button>
											<Dropdown.Toggle
												split
												variant="secondary"
												id="dropdown-split-basic"
											/>
											<Dropdown.Menu>
												<Dropdown.Item href="#">Action</Dropdown.Item>
												<Dropdown.Item href="#">Another action</Dropdown.Item>
												<Dropdown.Item href="#">Something else</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={SplitDropdownCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of split button */}

			<hr className="mb-5 mt-7" />

			{/*  options  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="options" className="mb-4">
						<h3>Options</h3>
						<p>
							The best part is you can do this with any button variant, too:
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
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
										{[
											'Primary',
											'Secondary',
											'Success',
											'Info',
											'Warning',
											'Danger'
										].map((variant) => (
											<DropdownButton
												as={ButtonGroup}
												key={variant}
												id={`dropdown-variants-${variant}`}
												variant={variant.toLowerCase()}
												title={variant}
												className="me-1 mb-2 mb-lg-0 "
											>
												<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">
													Another action
												</Dropdown.Item>
												<Dropdown.Item eventKey="3">
													{' '}
													Something else
												</Dropdown.Item>
												<Dropdown.Divider />
												<Dropdown.Item eventKey="4">
													Separated link
												</Dropdown.Item>
											</DropdownButton>
										))}
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={DropdownVariantCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of options */}

			<hr className="mb-5 mt-7" />

			{/* sizing  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="sizing" className="mb-4">
						<h3>Sizing</h3>
						<p>
							Button dropdowns work with buttons of all sizes, including default
							and split dropdown buttons.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
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
										{[DropdownButton, SplitButton].map((DropdownType, idx) => (
											<DropdownType
												as={ButtonGroup}
												key={idx}
												id={`dropdown-button-drop-${idx}`}
												size="lg"
												variant="secondary"
												title={
													idx === 0 ? 'Large button' : 'Large split button'
												}
												className="me-1 mb-2 mb-lg-0 "
											>
												<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">
													Another action
												</Dropdown.Item>
												<Dropdown.Item eventKey="3">
													Something else here
												</Dropdown.Item>
												<Dropdown.Divider />
												<Dropdown.Item eventKey="4">
													Separated link
												</Dropdown.Item>
											</DropdownType>
										))}

										{[DropdownButton, SplitButton].map((DropdownType, idx) => (
											<DropdownType
												as={ButtonGroup}
												key={idx}
												id={`dropdown-button-drop-${idx}`}
												size="sm"
												variant="secondary"
												title={
													idx === 0 ? 'Small button' : 'Small split button'
												}
												className="me-1 mb-2 mb-lg-0 "
											>
												<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">
													Another action
												</Dropdown.Item>
												<Dropdown.Item eventKey="3">
													Something else here
												</Dropdown.Item>
												<Dropdown.Divider />
												<Dropdown.Item eventKey="4">
													Separated link
												</Dropdown.Item>
											</DropdownType>
										))}
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={DropdownSizingCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of sizing */}

			<hr className="mb-5 mt-7" />

			{/* directions   */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="directions" className="mb-4">
						<h3>Directions</h3>
						<p>
							Trigger dropdown menus above, below, left, or to the right of
							their toggle elements, with the <code>drop</code> prop.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
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
										<div className="mb-2">
											{['up', 'down', 'start', 'end'].map((direction) => (
												<DropdownButton
													as={ButtonGroup}
													key={direction}
													id={`dropdown-button-drop-${direction}`}
													drop={direction}
													variant="secondary"
													title={` Drop ${direction} `}
													className="me-1 mb-2 mb-lg-0 "
												>
													<Dropdown.Item eventKey="1">Action</Dropdown.Item>
													<Dropdown.Item eventKey="2">
														Another action
													</Dropdown.Item>
													<Dropdown.Item eventKey="3">
														Something else here
													</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item eventKey="4">
														Separated link
													</Dropdown.Item>
												</DropdownButton>
											))}
										</div>
										<div>
											{['up', 'down', 'start', 'end'].map((direction) => (
												<SplitButton
													key={direction}
													id={`dropdown-button-drop-${direction}`}
													drop={direction}
													variant="secondary"
													title={`Drop ${direction}`}
													className="me-1 mb-2 mb-lg-0 "
												>
													<Dropdown.Item eventKey="1">Action</Dropdown.Item>
													<Dropdown.Item eventKey="2">
														Another action
													</Dropdown.Item>
													<Dropdown.Item eventKey="3">
														Something else here
													</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item eventKey="4">
														Separated link
													</Dropdown.Item>
												</SplitButton>
											))}
										</div>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={DirectionsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of directions */}

			<hr className="mb-5 mt-7" />

			{/*  alignment  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="alignment" className="mb-4">
						<h3>Menu Alignment</h3>
						<p>
							By default, a dropdown menu is aligned to the left, but you can
							switch it by passing align=&#34;end&#34; to a{' '}
							<code>&lt;Dropdown&gt;</code>, <code>&lt;DropdownButton&gt;</code>
							, or <code>&lt;SplitButton&gt;</code>.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
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
										<ButtonGroup aria-label="Basic example">
											<DropdownButton
												align="start"
												title="Left aligned dropdown "
												id="dropdown-menu-align-start"
												className="me-1 mb-2 mb-lg-0"
											>
												<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">
													Another action
												</Dropdown.Item>
												<Dropdown.Item eventKey="3">
													Something else here
												</Dropdown.Item>
												<Dropdown.Divider />
												<Dropdown.Item eventKey="4">
													Separated link
												</Dropdown.Item>
											</DropdownButton>
										</ButtonGroup>
										<ButtonGroup aria-label="Basic example">
											<DropdownButton
												align="end"
												title="Right aligned dropdown "
												id="dropdown-menu-align-end"
											>
												<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">
													Another action
												</Dropdown.Item>
												<Dropdown.Item eventKey="3">
													Something else here
												</Dropdown.Item>
												<Dropdown.Divider />
												<Dropdown.Item eventKey="4">
													Separated link
												</Dropdown.Item>
											</DropdownButton>
										</ButtonGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={MenuAlignmentCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of alignment */}

			<hr className="mb-5 mt-7" />

			{/* responsive men alignment  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="alignment" className="mb-4 mt-4">
						<h3>Responsive Menu Alignment</h3>
						<p>
							If you want to use responsive menu alignment, pass an object
							containing a breakpoint to the align prop on the{' '}
							<code>&lt;DropdownMenu&gt;</code>,{' '}
							<code>&lt;DropdownButton&gt;</code>, or{' '}
							<code>&lt;SplitButton&gt;</code>. You can specify start or end for
							the various breakpoints.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
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
										<ButtonGroup aria-label="Basic example">
											<DropdownButton
												align={{ lg: 'end' }}
												title="Left-aligned but right aligned when large screen"
												id="dropdown-menu-align-end"
												className="me-1"
											>
												<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">
													Another action
												</Dropdown.Item>
												<Dropdown.Item eventKey="3">
													Something else here
												</Dropdown.Item>
												<Dropdown.Divider />
												<Dropdown.Item eventKey="4">
													Separated link
												</Dropdown.Item>
											</DropdownButton>
										</ButtonGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ResponsiveMenuAlignmentCode1} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>

					{/* responsive men alignment  */}
					<Tab.Container defaultActiveKey="design">
						<Card className="mt-4">
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
										<ButtonGroup aria-label="Basic example">
											<DropdownButton
												align={{ lg: 'start' }}
												title="Right aligned but left aligned when large screen"
												id="dropdown-menu-align-start"
												className="me-1"
											>
												<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">
													Another action
												</Dropdown.Item>
												<Dropdown.Item eventKey="3">
													Something else here
												</Dropdown.Item>
												<Dropdown.Divider />
												<Dropdown.Item eventKey="4">
													Separated link
												</Dropdown.Item>
											</DropdownButton>
										</ButtonGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ResponsiveMenuAlignmentCode2} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of responsive men alignment */}

			<hr className="mb-5 mt-7" />

			{/*  menu-content */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="menu-content" className="mb-4">
						<h3>Menu content</h3>
						<div className="mt-4" id="headers">
							<h3>Header</h3>
							<p>
								Add a header to label sections of actions in any dropdown menu.
							</p>
						</div>
					</div>
					<Tab.Container defaultActiveKey="design">
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
										<Dropdown.Menu show className="position-static">
											<Dropdown.Header>Dropdown header</Dropdown.Header>
											<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
											<Dropdown.Item eventKey="3">
												Something else here
											</Dropdown.Item>
										</Dropdown.Menu>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={MenuContentCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of menu-content */}

			<hr className="mb-5 mt-7" />

			{/*  dividers  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="dividers" className="mb-4">
						<h3>Dividers</h3>
						<p>Separate groups of related menu items with a divider.</p>
					</div>
					<Tab.Container defaultActiveKey="design">
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
										<Dropdown.Menu show className="position-static">
											<Dropdown.Item eventKey="1">Action</Dropdown.Item>
											<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
											<Dropdown.Item eventKey="3">
												Something else here
											</Dropdown.Item>
											<Dropdown.Divider />
											<Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
										</Dropdown.Menu>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={DividersCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of dividers */}

			<hr className="mb-5 mt-7" />

			{/*  forms  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="forms" className="mb-4">
						<h3>Forms</h3>
						<p>
							Put a form within a dropdown menu, or make it into a dropdown
							menu, and use margin or padding utilities to give it the negative
							space you require.
						</p>
					</div>

					<Tab.Container defaultActiveKey="design">
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
										<Dropdown.Menu show className="position-static">
											<Form className="dropdown-form p-4">
												<Form.Group
													className="mb-3"
													controlId="formBasicEmail1"
												>
													<Form.Label>Email address</Form.Label>
													<Form.Control
														type="email"
														placeholder="Enter email"
													/>
													<Form.Text className="text-muted">
														We&apos;ll never share your email with anyone else.
													</Form.Text>
												</Form.Group>
												<Form.Group
													className="mb-3"
													controlId="formBasicPassword1"
												>
													<Form.Label>Password</Form.Label>
													<Form.Control
														type="password"
														placeholder="Password"
													/>
												</Form.Group>
												<Form.Group
													className="mb-3"
													controlId="formBasicCheckbox1"
												>
													<Form.Check type="checkbox" label="Remember me" />
												</Form.Group>
												<Button variant="primary" type="submit">
													{' '}
													Sign in
												</Button>
											</Form>
											<Dropdown.Divider />
											<Dropdown.Item>New around here? Sign up</Dropdown.Item>
											<Dropdown.Item>Forgot password?</Dropdown.Item>
										</Dropdown.Menu>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={FormsCode1} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of forms */}

			<hr className="mb-5 mt-7" />

			{/*    */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<Tab.Container defaultActiveKey="design">
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
										<Dropdown.Menu show className="position-static">
											<Form className="dropdown-form p-4">
												<Form.Group
													className="mb-3"
													controlId="formBasicEmail2"
												>
													<Form.Label>Email address</Form.Label>
													<Form.Control
														type="email"
														placeholder="Enter email"
													/>
													<Form.Text className="text-muted">
														We&apos;ll never share your email with anyone else.{' '}
													</Form.Text>
												</Form.Group>

												<Form.Group
													className="mb-3"
													controlId="formBasicPassword2"
												>
													<Form.Label>Password</Form.Label>
													<Form.Control
														type="password"
														placeholder="Password"
													/>
												</Form.Group>
												<Form.Group
													className="mb-3"
													controlId="formBasicCheckbox2"
												>
													<Form.Check type="checkbox" label="Remember me" />
												</Form.Group>
												<Button variant="primary" type="submit">
													Sign in{' '}
												</Button>
											</Form>
										</Dropdown.Menu>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={FormsCode2} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of  */}
		</Container>
	);
};

export default Dropdowns;
