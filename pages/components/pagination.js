// import node module libraries
import { Fragment } from 'react';
import Link from 'next/link';
import { Col, Row, Card, Pagination, Nav, Tab, Container } from 'react-bootstrap';
import {
	ChevronsLeft,
	ChevronLeft,
	ChevronRight,
	ChevronsRight
} from 'react-feather';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	DefaultPaginationCode,
	PaginationWithIconsCode,
	DisabledActiveCode,
	PaginationSizingCode,
	PaginationSizingSmallCode,
	AlignmentCode,
	JustifyContentEndCode
} from 'data/code/PaginationsCode';

const Paginations = () => {
	return (
        <Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Pagination</h1>
							<p className="mb-0 ">
								Documentation and examples for showing pagination to indicate a
								series of related content exists across multiple pages.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* default-pagination */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="default-pagination" className="mb-4">
						<h3>Default Pagination</h3>
						<p>
							We use a large block of connected links for our pagination, making
							links hard to miss and easily scalable—all while providing large
							hit areas. Pagination is built with list HTML elements so screen
							readers can announce the number of available links. Use a wrapping{' '}
							<code>&lt;Pagination&gt;</code> component to identify it as a
							navigation section to screen readers and other assistive
							technologies.
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
										<Pagination>
											<Pagination.Prev>Previous</Pagination.Prev>
											<Pagination.Item>{1}</Pagination.Item>
											<Pagination.Item>{2}</Pagination.Item>
											<Pagination.Item>{3}</Pagination.Item>
											<Pagination.Next>Next</Pagination.Next>
										</Pagination>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={DefaultPaginationCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of default-pagination */}

			<hr className="mb-5 mt-7" />

			{/* working-with-icons */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="working-with-icons" className="mb-4">
						<h3>Working with icons</h3>
						<p>
							Looking to use an icon or symbol in place of text for some
							pagination links? Use <code>&lt;Pagination.First&gt;</code>,{' '}
							<code>&lt;Pagination.Prev&gt;</code> ,{' '}
							<code>&lt;Pagination.Next&gt;</code> and{' '}
							<code>&lt;Pagination.Last&gt;</code> tags .
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
										<Pagination>
											<Pagination.First>
												<ChevronsLeft size="18px" />
											</Pagination.First>
											<Pagination.Prev>
												<ChevronLeft size="18px" />
											</Pagination.Prev>
											<Pagination.Item>{1}</Pagination.Item>
											<Pagination.Item>{2}</Pagination.Item>
											<Pagination.Item>{3}</Pagination.Item>
											<Pagination.Next>
												<ChevronRight size="18px" />
											</Pagination.Next>
											<Pagination.Last>
												<ChevronsRight size="18px" />
											</Pagination.Last>
										</Pagination>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={PaginationWithIconsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of working-with-icons */}

			<hr className="mb-5 mt-7" />

			{/* disabled-and-active-states */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="disabled-and-active-states" className="mb-4">
						<h3>Disabled and active states</h3>
						<p>
							Pagination links are customizable for different circumstances. Use{' '}
							<code>disabled</code> prop for links that appear un-clickable and{' '}
							<code>active</code> prop to indicate the current page.
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
										<Pagination>
											<Pagination.Prev disabled>Previous</Pagination.Prev>
											<Pagination.Item>{1}</Pagination.Item>
											<Pagination.Item active>{2}</Pagination.Item>
											<Pagination.Item>{3}</Pagination.Item>
											<Pagination.Next>Next</Pagination.Next>
										</Pagination>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={DisabledActiveCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of disabled-and-active-states */}

			<hr className="mb-5 mt-7" />

			{/* sizing */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mb-4">
					<div id="sizing" className="mb-4">
						<h3>Sizing</h3>
						<p>
							Fancy larger or smaller pagination? Add <code>size=&#34;lg&#34;</code> or{' '}
							<code>size=&#34;sm&#34;</code> for additional sizes.
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
										<Pagination size="lg">
											<Pagination.Item active>{1}</Pagination.Item>
											<Pagination.Item>{2}</Pagination.Item>
											<Pagination.Item>{3}</Pagination.Item>
										</Pagination>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={PaginationSizingCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of sizing */}

			{/* sizing-small */}
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
										<Pagination size="sm">
											<Pagination.Item active>{1}</Pagination.Item>
											<Pagination.Item>{2}</Pagination.Item>
											<Pagination.Item>{3}</Pagination.Item>
										</Pagination>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={PaginationSizingSmallCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of sizing-small */}

			<hr className="mb-5 mt-7" />

			{/* alignment */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mb-4">
					<div id="alignment" className="mb-4">
						<h3>Alignment</h3>
						<p>
							Change the alignment of pagination components with{' '}
							<Link href="#">
								flexbox utilities
							</Link>.
						</p>
					</div>
					<div className="mb-4 mt-4">
						<p>
							Centered-aligned with <code>.justify-content-center</code>:
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
										<Pagination className="justify-content-center">
											<Pagination.Prev disabled>Previous</Pagination.Prev>
											<Pagination.Item>{1}</Pagination.Item>
											<Pagination.Item>{2}</Pagination.Item>
											<Pagination.Item>{3}</Pagination.Item>
											<Pagination.Next>Next</Pagination.Next>
										</Pagination>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={AlignmentCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of alignment */}

			{/* justify-content-end */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mb-4">
					<div className="mb-4 mt-4">
						<p>
							Right-aligned with <code>.justify-content-end</code>:
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
										<Pagination className="justify-content-end">
											<Pagination.Prev disabled>Previous</Pagination.Prev>
											<Pagination.Item>{1}</Pagination.Item>
											<Pagination.Item>{2}</Pagination.Item>
											<Pagination.Item>{3}</Pagination.Item>
											<Pagination.Next>Next</Pagination.Next>
										</Pagination>
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={JustifyContentEndCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of justify-content-end */}
		</Container>
    );
};

export default Paginations;
