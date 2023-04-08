// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Table, Nav, Tab, Container } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	BasicTableCode,
	DarkTableCode,
	TableHeadCode,
	StripedTableCode,
	TableVariantCode,
	BorderedTableCode,
	BorderlessTableCode,
	HoverableRowsCode,
	SmallTableCode,
	ContextualClassesCode,
	ResponsiveTableCode
} from 'data/code/TablesCode';

const Tables = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Tables</h1>
							<p className="mb-0 ">
								Documentation and examples for opt-in styling of tables (given
								their prevalent use in JavaScript plugins) with Bootstrap.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/*  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mb-4">
					<div id="examples" className="mb-4">
						<h2>Examples</h2>
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
										<Table className="text-nowrap">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Larry</td>
													<td>the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</Table>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={BasicTableCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of  */}

			{/* dark table */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4 mt-4">
						<p>
							Use <code>variant=&#34;dark&#34; </code>to invert the colors of the table
							and get light text on a dark background.
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
										<Table variant="dark" className="text-nowrap">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Larry</td>
													<td>the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</Table>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={DarkTableCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of dark table */}

			<hr className="mb-5 mt-5" />

			{/*  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="table-head-options" className="mb-4">
						<h2>Table head options</h2>
						<p>
							Similar to tables and dark tables, use the modifier classes{' '}
							<code>.table-light</code> or <code>.table-dark</code> to make{' '}
							<code>&lt;thead&gt;</code>s appear light or dark gray.
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
										<Table className="text-nowrap">
											<thead className="table-light">
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Larry</td>
													<td>the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</Table>
										<Table className="text-nowrap">
											<thead className="table-dark">
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Larry</td>
													<td>the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</Table>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={TableHeadCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of  */}

			<hr className="mb-5 mt-5" />

			{/* striped-rows */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="striped-rows" className="mb-4">
						<h2>Striped rows</h2>
						<p>
							Use the <code>striped</code> prop to customise the table.
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
										<Table striped className="text-nowrap">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Larry</td>
													<td>the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</Table>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={StripedTableCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of striped-rows */}

			<hr className="mb-5 mt-5" />

			{/* striped-rows bg */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<p>
						Use <code>variant</code> prop to table variants:
					</p>
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
										<Table variant="success" className="text-nowrap">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Larry</td>
													<td>the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</Table>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={TableVariantCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of striped-rows bg */}

			<hr className="mb-5 mt-5" />

			{/* bordered-table */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="bordered-table" className="mb-4">
						<h2>Bordered table</h2>
						<p>
							Add <code>bordered</code> prop for borders on all sides of the
							table and cells.
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
										<Table bordered className="text-nowrap">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td colSpan="2">Larry the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</Table>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={BorderedTableCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of bordered-table */}

			<hr className="mb-5 mt-5" />

			{/* borderless-table */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="borderless-table" className="mb-4">
						<h2>Borderless table</h2>
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
										<Table borderless className="text-nowrap">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td colSpan="2">Larry the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</Table>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={BorderlessTableCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of borderless-table */}

			<hr className="mb-5 mt-5" />

			{/* hoverable-rows */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="hoverable-rows" className="mb-4">
						<h2>Hoverable rows</h2>
						<p>
							Add <code>hover</code> prop to enable a hover state on table rows
							within a <code>&lt;tbody&gt;</code>.
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
										<Table hover className="text-nowrap">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td colSpan="2">Larry the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</Table>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={HoverableRowsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of hoverable-rows */}

			<hr className="mb-5 mt-5" />

			{/* small-table */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="small-table" className="mb-4">
						<h2>Small table</h2>
						<p>
							Add <code>.table-sm</code> to make tables more compact by cutting
							cell padding in half.
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
										<Table size="sm" className="text-nowrap">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td colSpan="2">Larry the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</Table>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={SmallTableCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of small-table */}

			<hr className="mb-5 mt-5" />

			{/* contextual-classes */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="contextual-classes" className="mb-4">
						<h2>Variants</h2>
						<p>
							Use contextual classes to color table rows or individual cells.
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
										<Table className="text-nowrap">
											<thead className="thead-light">
												<tr>
													<th scope="col">Class</th>
													<th scope="col">Heading</th>
													<th scope="col">Heading</th>
												</tr>
											</thead>
											<tbody>
												<tr className="table-active">
													<th scope="row">Active</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr>
													<th scope="row">Default</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-primary">
													<th scope="row">Primary</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-secondary">
													<th scope="row">Secondary</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-success">
													<th scope="row">Success</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-danger">
													<th scope="row">Danger</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-warning">
													<th scope="row">Warning</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-info">
													<th scope="row">Info</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-light">
													<th scope="row">Light</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-dark">
													<th scope="row">Dark</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
											</tbody>
										</Table>
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
			{/* end of contextual-classes */}

			<hr className="mb-5 mt-5" />

			{/* responsive-tables */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="responsive-tables" className="mb-4">
						<h2>Responsive tables</h2>
						<p>
							Responsive tables allow tables to be scrolled horizontally with
							ease.
						</p>
						<p>
							Across every breakpoint, use responsive for horizontally scrolling
							tables. Responsive tables are wrapped automatically in a{' '}
							<code>div</code>.
						</p>
						<p>
							Use <code>responsive=&#34;sm&#34;</code>, <code>responsive=&#34;md&#34;</code>,{' '}
							<code>responsive=&#34;lg&#34;</code>, or <code>responsive=&#34;xl&#34;</code> as
							needed to create responsive tables up to a particular breakpoint.
							From that breakpoint and up, the table will behave normally and
							not scroll horizontally.
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
										<Table responsive className="text-nowrap">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">Heading</th>
													<th scope="col">Heading</th>
													<th scope="col">Heading</th>
													<th scope="col">Heading</th>
													<th scope="col">Heading</th>
													<th scope="col">Heading</th>
													<th scope="col">Heading</th>
													<th scope="col">Heading</th>
													<th scope="col">Heading</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
											</tbody>
										</Table>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ResponsiveTableCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of responsive-tables */}
		</Container>
	);
};

export default Tables;
