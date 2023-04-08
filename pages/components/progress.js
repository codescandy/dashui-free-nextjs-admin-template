// import node module libraries
import { Fragment } from 'react';
import { Card, Col, Row, ProgressBar, Tab, Nav, Container } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	DefaultProgressCode,
	ProgressLabelsCode,
	ProgressHeightCode,
	ProgressBackgroundsCode,
	MultipleBarsCode,
	StripedCode,
	AnimatedCode
} from 'data/code/ProgressCode';

const Progress = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Progress</h1>
							<p className="mb-0 ">
								Documentation and examples for using Bootstrap custom progress
								bars featuring support for stacked bars, animated backgrounds,
								and text labels.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* default-progress */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="default-progress" className="mb-4">
						<h3>How it works</h3>
						<p>Default progress bar.</p>
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
										<ProgressBar now={0} className="mb-2" />
										<ProgressBar now={25} className="mb-2" />
										<ProgressBar now={50} className="mb-2" />
										<ProgressBar now={75} className="mb-2" />
										<ProgressBar now={100} className="mb-2" />
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={DefaultProgressCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of default-progress */}

			<hr className="mb-5 mt-7" />

			{/* highlighter-rouge */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="labels" className="mb-4">
						<h3>Labels</h3>
						<p>
							Add a <code>label</code> prop to show a visible percentage. For
							low percentages, consider adding a min-width to ensure the label&apos;s
							text is fully visible.
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
										<ProgressBar now={25} label={`${25}%`} />
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ProgressLabelsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of  highlighter-rouge */}

			<hr className="mb-5 mt-7" />

			{/* height */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="height" className="mb-4">
						<h3>Height</h3>
						<p>
							We only set a <code>height</code> value on the{' '}
							<code>&lt;ProgressBar&gt;</code>, so if you change that value the
							inner <code>progress-bar</code> will automatically resize
							accordingly.
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
										<ProgressBar
											now={25}
											className="mb-2"
											style={{ height: '1px' }}
										/>
										<ProgressBar
											now={25}
											className="mb-2"
											style={{ height: '20px' }}
										/>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ProgressHeightCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of height */}

			<hr className="mb-5 mt-7" />

			{/* backgrounds  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="backgrounds" className="mb-4">
						<h3>Backgrounds</h3>
						<p>
							Progress bars use some of the same button and alert classes like{' '}
							<code>variant</code> for consistent styles.
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
										<ProgressBar variant="success" now={25} className="mb-2" />
										<ProgressBar variant="info" now={50} className="mb-2" />
										<ProgressBar variant="warning" now={75} className="mb-2" />
										<ProgressBar variant="danger" now={100} className="mb-2" />
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ProgressBackgroundsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of backgrounds */}

			<hr className="mb-5 mt-7" />

			{/* multiple-bars  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="multiple-bars" className="mb-4">
						<h3>Multiple bars</h3>
						<p>
							Nest <code>&lt;ProgressBar&gt;</code>s to stack them.
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
										<ProgressBar
											variant="primary"
											now={15}
											key={1}
											className="mb-2"
										/>
										<ProgressBar
											variant="success"
											now={30}
											key={2}
											className="mb-2"
										/>
										<ProgressBar
											variant="info"
											now={20}
											key={3}
											className="mb-2"
										/>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={MultipleBarsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of multiple-bars */}

			<hr className="mb-5 mt-7" />

			{/* striped */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="striped" className="mb-4">
						<h3>Striped</h3>
						<p>
							Uses a gradient to create a striped effect. Not available in IE8.
							You can apply using <code>striped</code> prop.{' '}
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
										<ProgressBar
											striped
											variant="primary"
											now={10}
											className="mb-2"
										/>
										<ProgressBar
											striped
											variant="success"
											now={25}
											className="mb-2"
										/>
										<ProgressBar
											striped
											variant="info"
											now={50}
											className="mb-2"
										/>
										<ProgressBar
											striped
											variant="warning"
											now={75}
											className="mb-2"
										/>
										<ProgressBar
											striped
											variant="danger"
											now={100}
											className="mb-2"
										/>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={StripedCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of striped */}

			<hr className="mb-5 mt-7" />

			{/* animated-stripes */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="animated-stripes" className="mb-4">
						<h3>Animated stripes</h3>
						<p>
							Add <code>animated</code> prop to animate the stripes right to
							left. Not available in IE9 and below.
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
										<ProgressBar animated now={75} />
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AnimatedCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of animated-stripes */}
		</Container>
	);
};

export default Progress;
