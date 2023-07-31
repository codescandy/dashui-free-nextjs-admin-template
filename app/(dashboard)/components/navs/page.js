'use client'
// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Nav, Tabs, Tab, Container } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	MenuNavCode,
	MenuNavFlexCode,
	AlignmentCenterCode,
	AlignmentRightCode,
	VerticalFlexCode,
	VerticalULLICode,
	TabsNavCode,
	PillsNavsCode,
	FillPillsULLICode,
	FillPillsLinkCode,
	FillPillsJustifyCode,
	NavsFlexUtilitiesCode,
	NavsTabsCode,
	NavsTabsPillsCode,
	VerticalPillsCode
} from 'data/code/NavsCode';

const Navs = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Navs</h1>
							<p className="mb-0 ">
								Documentation and examples for how to use Bootstrap’s included
								navigation components.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* base-nav */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="base-nav" className="mb-4">
						<h3>Menu nav</h3>
						<p>
							Navigation bits in Bootstrap all share a general <code>Nav</code>{' '}
							component and styles. Swap <code>variant</code>s to switch between
							each style.
						</p>
						<p>
							The base <code>Nav</code> component is built with flexbox and
							provide a strong foundation for building all types of navigation
							components.
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
										<Nav defaultActiveKey="/#" as="ul">
											<Nav.Item as="li">
												<Nav.Link href="/#">Active</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-1">Link</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-2">Link</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-2" disabled>
													Disabled
												</Nav.Link>
											</Nav.Item>
										</Nav>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={MenuNavCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of base-nav */}

			{/* base-nav */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mt-4">
					<div className="mb-4">
						<p>
							<code>&lt;Nav&gt;</code> markup is very flexible and styling is
							controlled via classes so you can use whatever elements you like
							to build your navs. By default
							<code>&lt;Nav&gt;</code> and <code>&lt;Nav.Item&gt;</code> both
							render <code>&lt;div&gt;</code>s instead of
							<code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> elements
							respectively. This because it&apos;s possible (and common) to leave off
							the <code>&lt;Nav.Item&gt;</code>&apos;s and render a{' '}
							<code>&lt;Nav.Link&gt;</code> directly, which would create invalid
							markup by default (ul &lt; a).
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
										<Nav>
											<Nav.Item>
												<Nav.Link href="#">Active</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link href="#">Link</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link href="#">Link</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="disabled" disabled>
													Disabled
												</Nav.Link>
											</Nav.Item>
										</Nav>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={MenuNavFlexCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of base-nav */}

			<hr className="mb-5 mt-7" />

			{/* available-styles */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="available-styles" className="mb-4">
						<h3>Available styles</h3>
						<p>
							Change the style of <code>&lt;Nav&gt;</code>s component with
							modifiers and utilities. Mix and match as needed, or build your
							own.
						</p>
						<div className="mt-4" id="horizontal-alignment">
							<h3>Horizontal alignment</h3>
							<p>
								You can control the the direction and orientation of the Nav by
								making use of the{' '}
								<a
									href="https://getbootstrap.com/docs/4.0/layout/grid/#horizontal-alignment"
									target="_blank"
									rel="noreferrer"
								>
									flexbox layout
								</a>{' '}
								utility classes. By default, navs are left-aligned, but that is
								easily changed to center or right-aligned.
							</p>
							<p>
								Centered with <code>.justify-content-center</code>:
							</p>
						</div>
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
										<Nav
											className="justify-content-center"
											defaultActiveKey="/#"
											as="ul"
										>
											<Nav.Item as="li">
												<Nav.Link href="/#">Active</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-1">Link</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-2">Link</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-2" disabled>
													Disabled
												</Nav.Link>
											</Nav.Item>
										</Nav>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AlignmentCenterCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of available-styles */}

			{/* right-aligned */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4 mt-4">
						<p>
							Right-aligned with <code>.justify-content-end</code>:
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
										<Nav
											className="justify-content-end"
											defaultActiveKey="/#"
											as="ul"
										>
											<Nav.Item as="li">
												<Nav.Link href="/#">Active</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-1">Link</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-2">Link</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-2" disabled>
													Disabled
												</Nav.Link>
											</Nav.Item>
										</Nav>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AlignmentRightCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of right-aligned */}

			<hr className="mb-5 mt-7" />

			{/* vertical */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="vertical" className="mb-4">
						<h3>Vertical</h3>
						<p>
							Create stacked navs by changing the flex item direction with the{' '}
							<code>.flex-column</code> class, or your own css. You can even use
							the responsive versions to stack in some viewports but not others
							( e.g. <code>.flex-sm-column</code> ).
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
										<Nav defaultActiveKey="/#" className="flex-column" as="ul">
											<Nav.Item as="li">
												<Nav.Link href="/#">Active</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-1">Link</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-2">Link</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="disabled" disabled>
													Disabled
												</Nav.Link>
											</Nav.Item>
										</Nav>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={VerticalFlexCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of vertical */}

			{/* vertical-nav-second */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mt-4 mb-4">
						<p>
							As always, vertical navigation is possible without{' '}
							<code>&lt;ul&gt;</code>s, too.
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
										<Nav defaultActiveKey="/#" className="flex-column">
											<Nav.Link href="/#">Active</Nav.Link>
											<Nav.Link eventKey="link-1">Link</Nav.Link>
											<Nav.Link eventKey="link-2">Link</Nav.Link>
											<Nav.Link eventKey="disabled" disabled>
												Disabled
											</Nav.Link>
										</Nav>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={VerticalULLICode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of vertical-nav-second */}

			<hr className="mb-5 mt-7" />

			{/* tabs */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="tabs" className="mb-4">
						<h3>Tabs</h3>
						<p>
							Visually represent nav items as &#34;tabs&#34;. This style pairs nicely
							with tabbable regions created by our Tab components.
							<br />
							<br />
							<strong>Note:</strong> creating a vertical nav (
							<code>.flex-column</code>) with tabs styling is unsupported by
							Bootstrap&apos;s default stylesheet.
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
										<Nav variant="tabs" defaultActiveKey="#">
											<Nav.Item>
												<Nav.Link href="#">Active</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="link-1">Link </Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="link-2">Link </Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="disabled" disabled>
													Disabled
												</Nav.Link>
											</Nav.Item>
										</Nav>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={TabsNavCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of tabs */}

			<hr className="mb-5 mt-7" />

			{/* pills */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="pills" className="mb-4">
						<h3>Pills</h3>
						<p>
							An alternative visual with <code>variant=&#34;pills&#34;</code> prop
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
										<Nav variant="pills" defaultActiveKey="#">
											<Nav.Item>
												<Nav.Link href="#">Active</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="link-1">Link </Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="link-2">Link </Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="disabled" disabled>
													Disabled
												</Nav.Link>
											</Nav.Item>
										</Nav>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={PillsNavsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of pills */}

			<hr className="mb-5 mt-7" />

			{/* fill-and-justify */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="fill-and-justify" className="mb-4">
						<h3>Fill and justify</h3>
						<p>
							Force the contents of your nav to extend the full available width.
							To proportionately fill the space use <code>fill</code>. Notice
							that the nav is the entire width but each nav item is a different
							size.
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
										<Nav fill variant="pills" defaultActiveKey="#" as="ul">
											<Nav.Item as="li">
												<Nav.Link href="#">Active</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-1">
													Much longer nav link{' '}
												</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="link-2">Link </Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="disabled" disabled>
													Disabled
												</Nav.Link>
											</Nav.Item>
										</Nav>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={FillPillsULLICode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of fill-and-justify */}

			{/* Nav justify second  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4 mt-4">
						<p>
							When using a <code>&lt;Nav&gt;</code> based navigation without{' '}
							<code>as</code> prop, it will generate anchors in{' '}
							<code>&lt;div&gt;</code>.
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
										<Nav fill variant="pills" defaultActiveKey="#">
											<Nav.Item>
												<Nav.Link href="#">Active</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="link-1">
													Much longer nav link{' '}
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="link-2">Link </Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="disabled" disabled>
													Disabled
												</Nav.Link>
											</Nav.Item>
										</Nav>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={FillPillsLinkCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of Nav justify second  */}

			{/* Nav justify third  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4 mt-4">
						<p>
							If you want each NavItem to be the same size use{' '}
							<code>justify</code>.
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
										<Nav justify variant="pills" defaultActiveKey="#">
											<Nav.Item>
												<Nav.Link href="#">Active</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="link-1">
													Much longer nav link{' '}
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="link-2">Link </Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="disabled" disabled>
													Disabled
												</Nav.Link>
											</Nav.Item>
										</Nav>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={FillPillsJustifyCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of Nav justify third  */}

			<hr className="mb-5 mt-7" />

			{/* working-with-flex-utilities */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="working-with-flex-utilities" className="mb-4">
						<h3>Working with flex utilities</h3>
						<p>
							If you need responsive nav variations, consider using a series of
							flexbox utilities. While more verbose, these utilities offer
							greater customization across responsive breakpoints. In the
							example below, our nav will be stacked on the lowest breakpoint,
							then adapt to a horizontal layout that fills the available width
							starting from the small breakpoint.
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
										<Nav
											fill
											variant="pills"
											defaultActiveKey="#"
											className="flex-column flex-sm-row"
										>
											<Nav.Item>
												<Nav.Link href="#">Active</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="link-1">
													Much longer nav link{' '}
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="link-2">Link </Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="disabled" disabled>
													Disabled
												</Nav.Link>
											</Nav.Item>
										</Nav>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={NavsFlexUtilitiesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of working-with-flex-utilities */}

			<hr className="mb-5 mt-7" />

			{/* JavaScript behavior */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="javascript-behavior" className="mb-4">
						<h3>JavaScript behavior ( Tabs ) </h3>
						<p>
							Create dynamic tabbed interfaces, as described in the{' '}
							<a
								href="https://www.w3.org/TR/wai-aria-practices/#tabpanel"
								target="_blank"
								rel="noreferrer"
							>
								WAI ARIA Authoring Practices
							</a>
							. <code>Tabs</code> is a higher-level component for quickly
							creating a <code>Nav</code> matched with a set of{' '}
							<code>TabPane</code>s.
						</p>
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
										<Tabs
											defaultActiveKey="home"
											id="uncontrolled-tab-example"
											className="mb-3"
										>
											<Tab eventKey="home" title="Home">
												<strong>Home Tab</strong> - Consequat occaecat ullamco
												amet non eiusmod nostrud dolore irure incididunt est
												duis anim sunt officia. Fugiat velit proident aliquip
												nisi incididunt nostrud exercitation proident est nisi.
												Irure magna elit commodo anim ex veniam culpa eiusmod id
												nostrud sit cupidatat in veniam ad. Eiusmod consequat eu
												adipisicing minim anim aliquip cupidatat culpa excepteur
												quis. Occaecat sit eu exercitation irure Lorem
												incididunt nostrud.
											</Tab>
											<Tab eventKey="profile" title="Profile">
												<strong>Profile Tab</strong> - Consequat occaecat
												ullamco amet non eiusmod nostrud dolore irure incididunt
												est duis anim sunt officia. Fugiat velit proident
												aliquip nisi incididunt nostrud exercitation proident
												est nisi. Irure magna elit commodo anim ex veniam culpa
												eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
												consequat eu adipisicing minim anim aliquip cupidatat
												culpa excepteur quis. Occaecat sit eu exercitation irure
												Lorem incididunt nostrud.
											</Tab>
											<Tab eventKey="contact" title="Contact">
												<strong>Contact Tab</strong> - Consequat occaecat
												ullamco amet non eiusmod nostrud dolore irure incididunt
												est duis anim sunt officia. Fugiat velit proident
												aliquip nisi incididunt nostrud exercitation proident
												est nisi. Irure magna elit commodo anim ex veniam culpa
												eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
												consequat eu adipisicing minim anim aliquip cupidatat
												culpa excepteur quis. Occaecat sit eu exercitation irure
												Lorem incididunt nostrud.
											</Tab>
										</Tabs>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={NavsTabsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of JavaScript behavior */}

			{/* javascript behavior pills */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4 mt-4">
						<p>The tabs plugin also works with pills.</p>
					</div>
					<Tab.Container id="tab-container-14" defaultActiveKey="design">
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
										<Tabs
											variant="pills"
											defaultActiveKey="home"
											id="uncontrolled-tab-example"
											className="mb-3"
										>
											<Tab eventKey="home" title="Home">
												<strong>Home Tab</strong> - Consequat occaecat ullamco
												amet non eiusmod nostrud dolore irure incididunt est
												duis anim sunt officia. Fugiat velit proident aliquip
												nisi incididunt nostrud exercitation proident est nisi.
												Irure magna elit commodo anim ex veniam culpa eiusmod id
												nostrud sit cupidatat in veniam ad. Eiusmod consequat eu
												adipisicing minim anim aliquip cupidatat culpa excepteur
												quis. Occaecat sit eu exercitation irure Lorem
												incididunt nostrud.
											</Tab>
											<Tab eventKey="profile" title="Profile">
												<strong>Profile Tab</strong> - Consequat occaecat
												ullamco amet non eiusmod nostrud dolore irure incididunt
												est duis anim sunt officia. Fugiat velit proident
												aliquip nisi incididunt nostrud exercitation proident
												est nisi. Irure magna elit commodo anim ex veniam culpa
												eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
												consequat eu adipisicing minim anim aliquip cupidatat
												culpa excepteur quis. Occaecat sit eu exercitation irure
												Lorem incididunt nostrud.
											</Tab>
											<Tab eventKey="contact" title="Contact">
												<strong>Contact Tab</strong> - Consequat occaecat
												ullamco amet non eiusmod nostrud dolore irure incididunt
												est duis anim sunt officia. Fugiat velit proident
												aliquip nisi incididunt nostrud exercitation proident
												est nisi. Irure magna elit commodo anim ex veniam culpa
												eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
												consequat eu adipisicing minim anim aliquip cupidatat
												culpa excepteur quis. Occaecat sit eu exercitation irure
												Lorem incididunt nostrud.
											</Tab>
										</Tabs>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={NavsTabsPillsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of javascript behavior pills */}

			{/* vertical pills */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4 mt-4">
						<p>And with vertical pills.</p>
					</div>
					<Tab.Container id="tab-container-15" defaultActiveKey="design">
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
										<Tab.Container id="tab-container-16" defaultActiveKey="home">
											<Row>
												<Col sm={3}>
													<Nav variant="pills" className="flex-column">
														<Nav.Item>
															<Nav.Link eventKey="home">Home</Nav.Link>
														</Nav.Item>
														<Nav.Item>
															<Nav.Link eventKey="profile">Profile</Nav.Link>
														</Nav.Item>
														<Nav.Item>
															<Nav.Link eventKey="messages">Messages</Nav.Link>
														</Nav.Item>
														<Nav.Item>
															<Nav.Link eventKey="settings">Settings</Nav.Link>
														</Nav.Item>
													</Nav>
												</Col>
												<Col sm={9}>
													<Tab.Content>
														<Tab.Pane eventKey="home">
															<strong>Home Tab</strong> - Consequat occaecat
															ullamco amet non eiusmod nostrud dolore irure
															incididunt est duis anim sunt officia. Fugiat
															velit proident aliquip nisi incididunt nostrud
															exercitation proident est nisi. Irure magna elit
															commodo anim ex veniam culpa eiusmod id nostrud
															sit cupidatat in veniam ad. Eiusmod consequat eu
															adipisicing minim anim aliquip cupidatat culpa
															excepteur quis. Occaecat sit eu exercitation irure
															Lorem incididunt nostrud.
														</Tab.Pane>
														<Tab.Pane eventKey="profile">
															<strong>Profile Tab</strong> - Consequat occaecat
															ullamco amet non eiusmod nostrud dolore irure
															incididunt est duis anim sunt officia. Fugiat
															velit proident aliquip nisi incididunt nostrud
															exercitation proident est nisi. Irure magna elit
															commodo anim ex veniam culpa eiusmod id nostrud
															sit cupidatat in veniam ad. Eiusmod consequat eu
															adipisicing minim anim aliquip cupidatat culpa
															excepteur quis. Occaecat sit eu exercitation irure
															Lorem incididunt nostrud.
														</Tab.Pane>
														<Tab.Pane eventKey="messages">
															<strong>Messages Tab</strong> - Consequat occaecat
															ullamco amet non eiusmod nostrud dolore irure
															incididunt est duis anim sunt officia. Fugiat
															velit proident aliquip nisi incididunt nostrud
															exercitation proident est nisi. Irure magna elit
															commodo anim ex veniam culpa eiusmod id nostrud
															sit cupidatat in veniam ad. Eiusmod consequat eu
															adipisicing minim anim aliquip cupidatat culpa
															excepteur quis. Occaecat sit eu exercitation irure
															Lorem incididunt nostrud.
														</Tab.Pane>
														<Tab.Pane eventKey="settings">
															<strong>Settings Tab</strong> - Consequat occaecat
															ullamco amet non eiusmod nostrud dolore irure
															incididunt est duis anim sunt officia. Fugiat
															velit proident aliquip nisi incididunt nostrud
															exercitation proident est nisi. Irure magna elit
															commodo anim ex veniam culpa eiusmod id nostrud
															sit cupidatat in veniam ad. Eiusmod consequat eu
															adipisicing minim anim aliquip cupidatat culpa
															excepteur quis. Occaecat sit eu exercitation irure
															Lorem incididunt nostrud.
														</Tab.Pane>
													</Tab.Content>
												</Col>
											</Row>
										</Tab.Container>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={VerticalPillsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of vertical pills */}
		</Container>
	);
};

export default Navs;
