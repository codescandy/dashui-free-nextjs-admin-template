// import node module libraries
import Link from 'next/link';
import { Col, Row, Container } from 'react-bootstrap';

// import sub components
import { PricingCard, PageHeading, FeatureLeftTopIcon } from 'widgets'

// import data files
import { standard, multisite, extended } from 'data/pricing/PricingPlansData';
import FAQsData from 'data/pricing/FAQsData';
import FeaturesData from 'data/pricing/FeaturesData';

const Pricing = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Pricing" />
      <div className="py-8">
        <Row>
          <Col xl={{ span: 10, offset: 1 }} md={12}>
            <Row className="mb-10">
              <Col md={12} xs={12} className="mb-6">
                <h1 className="display-4 fw-bold ls-sm">Find a plan that s right for you</h1>
                <div className="d-lg-flex align-items-center mt-4">
                  <div>
                    <p className="mb-lg-0">Or simply leverage the expertise of our consultation team.</p>
                  </div>
                  <div className="ms-0 ms-lg-3">
                    <Link href="#" className="btn btn-outline-primary btn-sm">Talk to us</Link>
                  </div>
                </div>
              </Col>
              <Col xl={4} lg={6} md={12} xs={12} className="mb-3">
                {/* Standard Pricing Card */}
                <PricingCard content={standard} />
              </Col>
              <Col xl={4} lg={6} md={12} xs={12} className="mb-3">
                {/* Multisite Pricing Card */}
                <PricingCard content={multisite} />
              </Col>
              <Col xl={4} lg={6} md={12} xs={12} className="mb-3">
                {/* Extended Pricing Card */}
                <PricingCard content={extended} />
              </Col>
            </Row>
            <Row className="mb-10">
              <Col lg={12} md={12} xs={12}>
                <div className="mb-6">
                  <h2>Everything you need to build efficiently</h2>
                  <p>Start building your app using our tools, be efficient, spend less time with details more time with your business.
                  </p>
                </div>
              </Col>
              {/* Features */}
              {FeaturesData.map((item, index) => {
                return (
                  <Col lg={4} md={6} xs={12} key={index}>
                    <FeatureLeftTopIcon item={item} />
                  </Col>
                )
              })}
            </Row>
            <Row>
              {/* FAQs Heading */}
              <Col xs={12}>
                <div className="mb-6">
                  <h2 className="mb-0">Frequently Asked Questions</h2>
                </div>
              </Col>

              {/* FAQs List */}
              {FAQsData.map((item, index) => {
                return (
                  <Col lg={4} md={6} sm={12} className="mb-3" key={index}>
                    <h4>{item.question}</h4>
                    <p>{item.answer}</p>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Pricing