'use client'
// import node module libraries
import { Fragment } from 'react';
import {
	Col,
	Row,
	Card,
	Button,
	ListGroup,
	ListGroupItem,
	Nav,
	Tab,
	Container
} from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	BasicCardCode,
	CardBodyCode,
	TitlesTextLinksCode,
	ListGroups1Code,
	ListGroups2Code,
	CardImagesCode,
	KitchenSinkCode,
	HeaderFooterCode,
	HeaderFooterCode2,
	TextAlignmentCode,
	ImagesTopBottomCode,
	ImageOverlaysCode
} from 'data/code/CardsCode';

const Cards = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Cards</h1>
							<p className="mb-0 ">
								Geek&apos;s cards provide a flexible and extensible content container
								with multiple variants and options.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* card  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="card" className="mb-4">
						<h3>Basic Example</h3>
						<p className="mb-0">
							Below is an example of a basic card with mixed content and a fixed
							width.
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
										<Card style={{ width: '18rem' }}>
											<Card.Img variant="top" src="/images/placeholder/placeholder-4by3.svg" />
											<Card.Body>
												<Card.Title>Card Title</Card.Title>
												<Card.Text>
													Some quick example text to build on the card title and
													make up the bulk of the card&apos;s content.
												</Card.Text>
												<Button variant="primary">Go somewhere</Button>
											</Card.Body>
										</Card>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={BasicCardCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of card */}

			<hr className="mb-5 mt-7" />

			{/* content-types  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="content-types" className="mb-4">
						<div className="mt-3" id="body">
							<h3>Card Body</h3>
							<p>
								Use <code>&lt;Card.Body&gt;</code> to pad content inside a{' '}
								<code>&lt;Card&gt;</code>.
							</p>
						</div>
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
										<Card>
											<Card.Body>
												This is some text within a card body.
											</Card.Body>
										</Card>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={CardBodyCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of content-types */}

			<hr className="mb-5 mt-7" />

			{/*  Titles, text, and links  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="titles-text-links" className="mb-4">
						<h3>Titles, text, and links</h3>
						<p>
							Using <code>&lt;Card.Title&gt;</code>,{' '}
							<code>&lt;Card.Subtitle&gt;</code>, and{' '}
							<code>&lt;Card.Text&gt;</code> inside the{' '}
							<code>&lt;Card.Body&gt;</code> will line them up nicely.{' '}
							<code>&lt;Card.Link&gt;</code>s are used to line up links next to
							each other.
						</p>
						<p>
							{' '}
							<code>&lt;Card.Text&gt;</code> outputs <code>&lt;p&gt;</code> tags
							around the content, so you can use multiple{' '}
							<code>&lt;Card.Text&gt;</code>s to create separate paragraphs.
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
										{/* Code started */}
										<Card style={{ width: '18rem' }}>
											<Card.Body>
												<Card.Title>Card Title</Card.Title>
												<Card.Subtitle className="mb-2 text-muted">
													Card Subtitle
												</Card.Subtitle>
												<Card.Text>
													Some quick example text to build on the card title and
													make up the bulk of the card&apos;s content.
												</Card.Text>
												<Card.Link href="#">Card Link</Card.Link>
												<Card.Link href="#">Another Link</Card.Link>
											</Card.Body>
										</Card>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={TitlesTextLinksCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of Titles, text, and links */}

			<hr className="mb-5 mt-7" />

			{/*  List Groups  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="list-groups" className="mb-4">
						<h3>List Groups</h3>
						<p>Create lists of content in a card with a flush list group.</p>
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
										{/* Code started */}
										<Card style={{ width: '18rem' }}>
											<ListGroup variant="flush">
												<ListGroup.Item>Cras justo odio</ListGroup.Item>
												<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
												<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
											</ListGroup>
										</Card>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ListGroups1Code} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>

					<br />

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
										<Card style={{ width: '18rem' }}>
											<Card.Header>Featured</Card.Header>
											<ListGroup variant="flush">
												<ListGroup.Item>Cras justo odio</ListGroup.Item>
												<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
												<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
											</ListGroup>
										</Card>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ListGroups2Code} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of List Groups */}

			<hr className="mb-5 mt-7" />

			{/* image  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="image" className="mb-4">
						<h3>Images</h3>
						<p>
							<code>&lt;Card.Img&gt;</code> with <code>variant=&#34;top&#34;</code>{' '}
							places an image to the top of the card. With{' '}
							<code>&lt;Card.Text&gt;</code>, text can be added to the card.
							Text within <code>&lt;Card.Text&gt;</code> can also be styled with
							the standard HTML tags.
						</p>
					</div>
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
										<Card style={{ width: '18rem' }}>
											<Card.Img variant="top" src="/images/placeholder/placeholder-4by3.svg" />
											<Card.Body>
												<Card.Text>
													Some quick example text to build on the card title and
													make up the bulk of the card&apos;s content.
												</Card.Text>
											</Card.Body>
										</Card>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={CardImagesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of image */}

			<hr className="mb-5 mt-7" />

			{/*  kitchen-sink */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="kitchen-sink" className="mb-4">
						<h3>Kitchen sink</h3>
						<p>
							Mix and match multiple content types to create the card you need,
							or throw everything in there. Shown below are image styles,
							blocks, text styles, and a list group—all wrapped in a fixed-width
							card.
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
										<Card style={{ width: '18rem' }}>
											<Card.Img variant="top" src="/images/placeholder/placeholder-4by3.svg" />
											<Card.Body>
												<Card.Title>Card Title</Card.Title>
												<Card.Text>
													Some quick example text to build on the card title and
													make up the bulk of the card&apos;s content.
												</Card.Text>
											</Card.Body>
											<ListGroup className="list-group-flush">
												<ListGroupItem>Cras justo odio</ListGroupItem>
												<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
												<ListGroupItem>Vestibulum at eros</ListGroupItem>
											</ListGroup>
											<Card.Body>
												<Card.Link href="#">Card Link</Card.Link>
												<Card.Link href="#">Another Link</Card.Link>
											</Card.Body>
										</Card>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={KitchenSinkCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of kitchen-sink */}

			<hr className="mb-5 mt-7" />

			{/* header-footer  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="header-footer" className="mb-4">
						<h3>Header and Footer</h3>
						<p>
							You may add a header by adding a <code>&lt;Card.Header&gt;</code>{' '}
							component.
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
										<Card>
											<Card.Header>Featured</Card.Header>
											<Card.Body>
												<Card.Title>Special title treatment</Card.Title>
												<Card.Text>
													With supporting text below as a natural lead-in to
													additional content.
												</Card.Text>
												<Button variant="primary">Go somewhere</Button>
											</Card.Body>
										</Card>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={HeaderFooterCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>

					<br />

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
										<Card className="text-center">
											<Card.Header>Featured</Card.Header>
											<Card.Body>
												<Card.Title>Special title treatment</Card.Title>
												<Card.Text>
													With supporting text below as a natural lead-in to
													additional content.
												</Card.Text>
												<Button variant="primary">Go somewhere</Button>
											</Card.Body>
											<Card.Footer className="text-muted">
												2 days ago
											</Card.Footer>
										</Card>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={HeaderFooterCode2} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of  header-footer */}

			<hr className="mb-5 mt-7" />

			{/* text-alignment  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="text-alignment" className="mb-4">
						<h3>Text alignment</h3>
						<p>
							You can quickly change the text alignment of any card—in its
							entirety or specific parts—with our text align classes.
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
										{/* code started */}
										<Card style={{ width: '18rem' }}>
											<Card.Body>
												<Card.Title>Special title treatment</Card.Title>
												<Card.Text>
													With supporting text below as a natural lead-in to
													additional content.
												</Card.Text>
												<Button variant="primary">Go somewhere</Button>
											</Card.Body>
										</Card>

										<Card style={{ width: '18rem' }} className="text-center">
											<Card.Body>
												<Card.Title>Special title treatment</Card.Title>
												<Card.Text>
													With supporting text below as a natural lead-in to
													additional content.
												</Card.Text>
												<Button variant="primary">Go somewhere</Button>
											</Card.Body>
										</Card>

										<Card style={{ width: '18rem' }} className="text-end">
											<Card.Body>
												<Card.Title>Special title treatment</Card.Title>
												<Card.Text>
													With supporting text below as a natural lead-in to
													additional content.
												</Card.Text>
												<Button variant="primary">Go somewhere</Button>
											</Card.Body>
										</Card>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={TextAlignmentCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of text-alignment */}

			<hr className="mb-5 mt-7" />

			{/* images  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="images" className="mb-4">
						<h3>Images</h3>
						<p>
							Cards include a few options for working with images. Choose from
							appending “image caps” at either end of a card, overlaying images
							with card content, or simply embedding the image in a card.
						</p>
						<div className="mt-3" id="image-caps">
							<h3>Image caps</h3>
							<p>
								Similar to headers and footers, cards can include top and bottom
								“image caps”—images at the top or bottom of a card.
							</p>
						</div>
					</div>
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
										{/* Code started */}
										<Card>
											<Card.Img variant="top" src="/images/placeholder/placeholder-4by3.svg" />
											<Card.Body>
												<Card.Title>Card title</Card.Title>
												<Card.Text>
													This is a wider card with supporting text below as a
													natural lead-in to additional content. This content is
													a little bit longer.
												</Card.Text>
												<Card.Text>
													<small className="text-muted">
														Last updated 3 mins ago
													</small>
												</Card.Text>
											</Card.Body>
										</Card>
										<br />
										<Card>
											<Card.Body>
												<Card.Title>Card title</Card.Title>
												<Card.Text>
													This is a wider card with supporting text below as a
													natural lead-in to additional content. This content is
													a little bit longer.
												</Card.Text>
												<Card.Text>
													<small className="text-muted">
														Last updated 3 mins ago
													</small>
												</Card.Text>
											</Card.Body>
											<Card.Img variant="bottom" src="/images/placeholder/placeholder-4by3.svg" />
										</Card>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ImagesTopBottomCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of images */}

			<hr className="mb-5 mt-7" />

			{/*  image-overlays */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="image-overlays" className="mb-4">
						<h3>Image overlays</h3>
						<p>
							Turn an image into a card background and overlay your card’s text.
							Depending on the image, you may or may not need additional styles
							or utilities.
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
										{/* Code start */}
										<Card className="bg-dark text-white">
											<Card.Img variant="bottom" src="/images/placeholder/placeholder-4by3.svg" />
											<Card.ImgOverlay>
												<Card.Title>Card title</Card.Title>
												<Card.Text>
													This is a wider card with supporting text below as a
													natural lead-in to additional content. This content is
													a little bit longer.
												</Card.Text>
												<Card.Text>Last updated 3 mins ago</Card.Text>
											</Card.ImgOverlay>
										</Card>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ImageOverlaysCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of image-overlays */}
		</Container>
	);
};
export default Cards;
