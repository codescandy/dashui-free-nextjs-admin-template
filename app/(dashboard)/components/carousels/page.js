'use client'
// import node module libraries
import { Fragment, useState } from 'react';
import { Col, Row, Card, Carousel, Image, Nav, Tab, Container } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	SlidesOnlyCode,
	WithControlCode,
	WithIndicatorsCode,
	WithCaptionCode,
	CrossfadeCode,
	IndividualCode,
	DarkVariantCode
} from 'data/code/CarouselsCode';

const Carousels = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Carousel</h1>
							<p className="mb-0 ">
								A slideshow component for cycling through elements—images or
								slides of text—like a carousel.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/*  slide only  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="slide" className="mb-4">
						<h3>Slides only</h3>
						<p>
							Here’s a carousel with slides only. Note the presence of the{' '}
							<code className="highlighter-rouge">.d-block</code> and{' '}
							<code className="highlighter-rouge">.w-100</code> on carousel
							images to prevent browser default image alignment.
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
										{/* code started */}
										<Carousel controls={false} indicators={false}>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-1.jpg"
													alt="First slide"
												/>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-2.jpg"
													alt="Second slide"
												/>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-3.jpg"
													alt="Third slide"
												/>
											</Carousel.Item>
										</Carousel>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={SlidesOnlyCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of slide only */}

			<hr className="mb-5 mt-5" />

			{/*  with controls  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="with-controls" className="mb-4">
						<h3>With Control</h3>
						<p>Adding in the previous and next controls:</p>
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
										{/* code started */}
										<Carousel indicators={false}>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-1.jpg"
													alt="First slide"
												/>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-2.jpg"
													alt="Second slide"
												/>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-3.jpg"
													alt="Third slide"
												/>
											</Carousel.Item>
										</Carousel>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={WithControlCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of with controls */}

			<hr className="mb-5 mt-5" />

			{/*  with indicators */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="with-indicators" className="mb-4">
						<h3> With indicators</h3>
						<p>
							You can also add the indicators to the carousel, alongside the
							controls, too.
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
										{/* code started */}
										<Carousel indicators>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-1.jpg"
													alt="First slide"
												/>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-2.jpg"
													alt="Second slide"
												/>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-3.jpg"
													alt="Third slide"
												/>
											</Carousel.Item>
										</Carousel>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={WithIndicatorsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of with indicators  */}

			<hr className="mb-5 mt-5" />

			{/* with caption  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="with-caption" className="mb-4">
						<h3>With caption</h3>
						<p>
							Add captions to your slides easily with the{' '}
							<code>&lt;Carousel.Caption&gt;</code> within any{' '}
							<code>&lt;Carousel.Item&gt;</code>.
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
										{/* code started */}
										<Carousel activeIndex={index} onSelect={handleSelect}>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-1.jpg"
													alt="First slide"
												/>
												<Carousel.Caption>
													<h3 className="text-white">First slide label</h3>
													<p>
														Nulla vitae elit libero, a pharetra augue mollis
														interdum.
													</p>
												</Carousel.Caption>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-2.jpg"
													alt="Second slide"
												/>
												<Carousel.Caption>
													<h3 className="text-white">Second slide label</h3>
													<p>
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit.
													</p>
												</Carousel.Caption>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-3.jpg"
													alt="Third slide"
												/>
												<Carousel.Caption>
													<h3 className="text-white">Third slide label</h3>
													<p>
														Praesent commodo cursus magna, vel scelerisque nisl
														consectetur.
													</p>
												</Carousel.Caption>
											</Carousel.Item>
										</Carousel>
										{/* end of code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={WithCaptionCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of with caption  */}

			<hr className="mb-5 mt-5" />

			{/*  crossfade  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="crossfade" className="mb-4">
						<h3>Crossfade</h3>
						<p>
							Add the <code>fade</code> prop to your carousel to animate slides
							with a fade transition instead of a slide.
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
										<Carousel fade indicators={false}>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-1.jpg"
													alt="First slide"
												/>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-2.jpg"
													alt="Second slide"
												/>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-3.jpg"
													alt="Third slide"
												/>
											</Carousel.Item>
										</Carousel>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={CrossfadeCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of  crossfade */}

			<hr className="mb-5 mt-5" />

			{/*  individual  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="individual" className="mb-4">
						<h3>Individual</h3>
						<p>
							You can specify individual intervals for each carousel item via
							the <code>interval</code> prop.
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
										<Carousel indicators={false}>
											<Carousel.Item interval={1000}>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-1.jpg"
													alt="First slide"
												/>
											</Carousel.Item>
											<Carousel.Item interval={500}>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-2.jpg"
													alt="Second slide"
												/>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-3.jpg"
													alt="Third slide"
												/>
											</Carousel.Item>
										</Carousel>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={IndividualCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of individual */}

			<hr className="mb-5 mt-5" />

			{/*  dark variant  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="dark-variant" className="mb-4">
						<h3>Dark Variant</h3>
						<p>
							Add <code>variant=&#34;dark&#34;</code> to the <code>Carousel</code> for
							darker controls, indicators, and captions.
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
										<Carousel variant="dark">
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-1.jpg"
													alt="First slide"
												/>
												<Carousel.Caption>
													<h5>First slide label</h5>
													<p>
														Nulla vitae elit libero, a pharetra augue mollis
														interdum.
													</p>
												</Carousel.Caption>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-2.jpg"
													alt="Second slide"
												/>
												<Carousel.Caption>
													<h5>Second slide label</h5>
													<p>
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit.
													</p>
												</Carousel.Caption>
											</Carousel.Item>
											<Carousel.Item>
												<Image
													className="d-block w-100"
													src="/images/background/slider-img-3.jpg"
													alt="Third slide"
												/>
												<Carousel.Caption>
													<h5>Third slide label</h5>
													<p>
														Praesent commodo cursus magna, vel scelerisque nisl
														consectetur.
													</p>
												</Carousel.Caption>
											</Carousel.Item>
										</Carousel>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={DarkVariantCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of dark variant */}
		</Container>
	);
};

export default Carousels;
