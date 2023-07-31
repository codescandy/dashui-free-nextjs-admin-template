'use client'
// import node module libraries
import Link from 'next/link';
import { Col, Row, Container, Image } from 'react-bootstrap';

const Layout = () => {
  return (
    <Container fluid className="px-6 py-4">
      <Row>
        <Col xl={12} lg={12} md={12} sm={12}>
          <div className="text-center mb-7">
            <h1 className="display-4">Layouts</h1>
            <p>Customize your overview page layout. Choose the one that best fits your needs.</p>
          </div>
          <span className="divider fw-bold my-3">Demo layouts</span>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={3} sm={6} className="my-4 ">
          <Link className="card" href="/">
            <Image className="card-img-top" src="/images/layouts/default-classic.svg" alt="Image Description" />
            <div className="card-body text-center">
              <h5 className="mb-0">Classic</h5>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Layout