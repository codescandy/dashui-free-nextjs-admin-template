'use client'
// import node module libraries
import { Fragment } from 'react';
import {
	Col,
	Row,
	Card,
	ListGroup,
	Badge,
	Image,
	Tab,
	Nav,
	Container
} from 'react-bootstrap';
import { PlayCircle, Award, Calendar, Video, Clock } from 'react-feather';

// import sub custom components
import DotBadge from 'components/bootstrap/DotBadge';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	BasicListgroupCode,
	ActiveItemCode,
	DisabledItemsCode,
	LinksButtonsCode,
	ListButtonCode,
	FlushListgroupCode,
	HorizontalListgroupCode,
	HorizontalListgroupCode2,
	ContextualClassesCode,
	WithBadgesCode,
	CustomContentCode,
	WithIconCode,
	GroupWithIconCode
} from 'data/code/ListgroupsCode';

const Listgroups = () => {
	function alertClicked() {
		alert('You clicked a ListGroupItem');
	}

	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Listgroup</h1>
							<p className="mb-0 ">
								List groups are a flexible and powerful component for displaying
								a series of content. Modify and extend them to support just
								about any content within.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* basic example  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="basic-example" className="mb-4">
						<h3>Basic list</h3>
						<p>
							The most basic list group is an unordered list with list items and
							the proper classes. Build upon it with the options that follow, or
							with your own CSS as needed.
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
										<ListGroup>
											<ListGroup.Item>Cras justo odio</ListGroup.Item>
											<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
											<ListGroup.Item>Morbi leo risus</ListGroup.Item>
											<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
											<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={BasicListgroupCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of basic example */}

			<hr className="mb-5 mt-7" />

			{/*  active items  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="active-items" className="mb-4">
						<h3>Active Item</h3>
						<p>
							Set the <code>active</code> prop to indicate the list groups
							current active selection.
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
										<ListGroup>
											<ListGroup.Item active>Cras justo odio</ListGroup.Item>
											<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
											<ListGroup.Item>Morbi leo risus</ListGroup.Item>
											<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
											<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ActiveItemCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of active items */}

			<hr className="mb-5 mt-7" />

			{/*  disabled items  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="disabled-items" className="mb-4">
						<h3>Disabled Items</h3>
						<p>
							Set the <code>disabled</code> prop to prevent actions on a{' '}
							<code>&lt;ListGroup.Item&gt;</code>. For elements that aren&apos;t
							naturally disable-able (like anchors) <code>onClick</code>{' '}
							handlers are added that call <code>preventDefault</code> to mimick
							disabled behavior.
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
										<ListGroup>
											<ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
											<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
											<ListGroup.Item>Morbi leo risus</ListGroup.Item>
											<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
											<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={DisabledItemsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of disabled items */}

			<hr className="mb-5 mt-7" />

			{/*  links-and-buttons  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="links-and-buttons" className="mb-4">
						<h3>Links and buttons</h3>
						<p>
							Use <code>href</code> and <code>action</code> props to create{' '}
							<em>actionable</em> list group items with hover, disabled, and
							active states.
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
										<ListGroup defaultActiveKey="#link1">
											<ListGroup.Item action href="#link1" active>
												Cras justo odio
											</ListGroup.Item>
											<ListGroup.Item action href="#link2">
												Dapibus ac facilisis in
											</ListGroup.Item>
											<ListGroup.Item action href="#link3">
												Morbi leo risus
											</ListGroup.Item>
											<ListGroup.Item action href="#link4">
												Porta ac consectetur ac
											</ListGroup.Item>
											<ListGroup.Item action href="#link5" disabled>
												Vestibulum at eros
											</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={LinksButtonsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of links-and-buttons */}

			<hr className="mb-5 mt-7" />

			{/*  List button  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<p>
							With <code>onClick</code> function parameter, list group will
							create <code>&lt;button&gt;</code>s, you can also make use of the{' '}
							<code>disabled</code> and <code>active</code> attributes.
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
										<ListGroup defaultActiveKey="#link1">
											<ListGroup.Item action onClick={alertClicked} active>
												Cras justo odio
											</ListGroup.Item>
											<ListGroup.Item action onClick={alertClicked}>
												Dapibus ac facilisis in
											</ListGroup.Item>
											<ListGroup.Item action onClick={alertClicked}>
												Morbi leo risus
											</ListGroup.Item>
											<ListGroup.Item action onClick={alertClicked}>
												Porta ac consectetur ac
											</ListGroup.Item>
											<ListGroup.Item action onClick={alertClicked} disabled>
												Vestibulum at eros
											</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ListButtonCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of List button */}

			<hr className="mb-5 mt-7" />

			{/*  flush  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="flush" className="mb-4">
						<h3>Flush</h3>
						<p>
							Add the <code>flush</code> variant to remove outer borders and
							rounded corners to render list group items edge-to-edge in a
							parent container such as a Card.
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
										<ListGroup variant="flush">
											<ListGroup.Item>Cras justo odio</ListGroup.Item>
											<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
											<ListGroup.Item>Morbi leo risus</ListGroup.Item>
											<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
											<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={FlushListgroupCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of flush */}

			<hr className="mb-5 mt-7" />

			{/*  horizontal  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="horizontal" className="mb-4">
						<h3>Horizontal</h3>
						<p>
							Use the <code>horizontal</code> prop to make the ListGroup render
							horizontally. Currently{' '}
							<strong>
								horizontal list groups cannot be combined with flush list
								groups.
							</strong>
						</p>
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
										<ListGroup horizontal>
											<ListGroup.Item>Cras justo odio</ListGroup.Item>
											<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
											<ListGroup.Item>Morbi leo risus</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={HorizontalListgroupCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of horizontal */}

			{/*  horizontal  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="horizontal" className="mb-4 mt-4">
						<p>
							<strong>ProTip:</strong> Want equal-width list group items when
							horizontal? Add <code>.flex-fill</code> to each list group item.
						</p>
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
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* code started */}
										<ListGroup horizontal>
											<ListGroup.Item className="flex-fill">
												Cras justo odio
											</ListGroup.Item>
											<ListGroup.Item className="flex-fill">
												Dapibus ac facilisis in
											</ListGroup.Item>
											<ListGroup.Item className="flex-fill">
												Morbi leo risus
											</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={HorizontalListgroupCode2} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of horizontal */}

			<hr className="mb-5 mt-7" />

			{/* contextual-classes   */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="contextual-classes" className="mb-4">
						<h3>Contextual classes</h3>
						<p>
							Use contextual <code>variant</code>s on{' '}
							<code>&lt;ListGroup.Item&gt;</code>s to style them with a stateful
							background and color.
						</p>
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
										<ListGroup>
											<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
											<ListGroup.Item variant="primary">
												This is a Primary list group item
											</ListGroup.Item>
											<ListGroup.Item variant="secondary">
												This is a Secondary list group item
											</ListGroup.Item>
											<ListGroup.Item variant="success">
												This is a Success list group item
											</ListGroup.Item>
											<ListGroup.Item variant="danger">
												This is a Danger list group item
											</ListGroup.Item>
											<ListGroup.Item variant="warning">
												This is a Warning list group item
											</ListGroup.Item>
											<ListGroup.Item variant="info">
												This is a Info list group item
											</ListGroup.Item>
											<ListGroup.Item variant="light">
												This is a Light list group item
											</ListGroup.Item>
											<ListGroup.Item variant="dark">
												This is a Dark list group item
											</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ContextualClassesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of  contextual-classes */}

			<hr className="mb-5 mt-7" />

			{/* with-badges   */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="with-badges" className="mb-4">
						<h3>With badges</h3>
						<p>
							Add <code>&lt;Badge&gt;</code> to any list group item to show
							unread counts, activity, and more with the help of some utilities.
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
										<ListGroup>
											<ListGroup.Item className="d-flex justify-content-between">
												Cras justo odio <Badge bg="primary">14</Badge>{' '}
											</ListGroup.Item>
											<ListGroup.Item className="d-flex justify-content-between">
												Dapibus ac facilisis in <Badge bg="primary">2</Badge>
											</ListGroup.Item>
											<ListGroup.Item className="d-flex justify-content-between">
												Morbi leo risus <Badge bg="primary">1</Badge>
											</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={WithBadgesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of with-badges */}

			<hr className="mb-5 mt-7" />

			{/*  custom-content  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="custom-content" className="mb-4">
						<h3>Custom content</h3>
						<p>
							Add nearly any HTML within, even for linked list groups like the
							one below, with the help of flexbox utilities.
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
										<ListGroup defaultActiveKey="#link1">
											<ListGroup.Item action href="#link1" active>
												<div className="d-flex w-100 justify-content-between">
													<h5 className="mb-1">List group item heading</h5>
													<small>3 days ago</small>
												</div>
												<p className="mb-1">
													Donec id elit non mi porta gravida at eget metus.
													Maecenas sed diam eget risus varius blandit.
												</p>
												<small>Donec id elit non mi porta.</small>
											</ListGroup.Item>
											<ListGroup.Item action href="#link2">
												<div className="d-flex w-100 justify-content-between">
													<h5 className="mb-1">List group item heading</h5>
													<small>3 days ago</small>
												</div>
												<p className="mb-1">
													Donec id elit non mi porta gravida at eget metus.
													Maecenas sed diam eget risus varius blandit.
												</p>
												<small>Donec id elit non mi porta.</small>
											</ListGroup.Item>
											<ListGroup.Item action href="#link3">
												<div className="d-flex w-100 justify-content-between">
													<h5 className="mb-1">List group item heading</h5>
													<small>3 days ago</small>
												</div>
												<p className="mb-1">
													Donec id elit non mi porta gravida at eget metus.
													Maecenas sed diam eget risus varius blandit.
												</p>
												<small>Donec id elit non mi porta.</small>
											</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={CustomContentCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of custom-content */}

			<hr className="mb-5 mt-7" />

			{/*  with icon  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="withIcon" className="mb-4">
						<h3 className="mb-0">List Group with Icon</h3>
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
										<ListGroup variant="flush">
											<ListGroup.Item>
												<PlayCircle
													size="15px"
													className="align-middle me-2 text-primary"
												/>
												12 hours video
											</ListGroup.Item>
											<ListGroup.Item>
												<Award
													size="15px"
													className="align-middle me-2 text-success"
												/>
												Certificate
											</ListGroup.Item>
											<ListGroup.Item>
												<Calendar
													size="15px"
													className="align-middle me-2 text-info"
												/>
												12 Article
											</ListGroup.Item>
											<ListGroup.Item>
												<Video
													size="15px"
													className="align-middle me-2 text-secondary"
												/>
												Watch Offline
											</ListGroup.Item>
											<ListGroup.Item>
												<Clock
													size="15px"
													className="align-middle me-2 text-warning"
												/>
												Lifetime access
											</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={WithIconCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of with icon */}

			<hr className="mb-5 mt-7" />

			{/* List group with icon  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="simpleList" className="mb-4">
						<h3 className="mb-0">List with Data</h3>
					</div>
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
										<ListGroup variant="flush">
											<ListGroup.Item>
												<span>Post ID</span>
												<h5>8693637308</h5>
											</ListGroup.Item>
											<ListGroup.Item>
												<span>Status</span>
												<h5>
													<DotBadge bg="success">
														Published (unsaved changes)
													</DotBadge>
												</h5>
											</ListGroup.Item>
											<ListGroup.Item>
												<span>Created by</span>
												<div className="d-flex mt-2">
													<Image
														src="/images/avatar/avatar-1.jpg"
														alt=""
														className="avatar-sm rounded-circle"
													/>
													<div className="ms-2">
														<h5 className="mb-n1">Geeks Courses</h5>
														<small>Admin</small>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<span>Created at</span>
												<h5>Jul 30, 2:21 PM</h5>
											</ListGroup.Item>
											<ListGroup.Item>
												<span>First published at</span>
												<h5>Jul 30, 2:21 PM</h5>
											</ListGroup.Item>
											<ListGroup.Item>
												<span>Last update</span>
												<h5>Aug 31, 12:21 PM</h5>
											</ListGroup.Item>
											<ListGroup.Item>
												<span>Last Published</span>
												<h5>Aug 31, 12:21 PM</h5>
											</ListGroup.Item>
										</ListGroup>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={GroupWithIconCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of List group with icon */}
		</Container>
	);
};

export default Listgroups;
