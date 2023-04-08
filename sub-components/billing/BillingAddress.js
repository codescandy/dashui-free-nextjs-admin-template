// import node module libraries
import React, { Fragment, useState } from 'react'
import Link from 'next/link';
import { Row, Col, Card, Modal, Button, Form } from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';

const BillingAddress = () => {
  const [modalShow, setModalShow] = useState(false);

  const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'US', label: 'US' },
    { value: 'UK', label: 'UK' },
    { value: 'UAE', label: 'UAE' }
  ];

  const cityOptions = [
    { value: 'Ahmedabad', label: 'Ahmedabad' },
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' }
  ];

  const NewBillingAddressModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4 className="mb-1" id="billingAddressModalLabel">Billing Address</h4>
            <p className="mb-0">Please provide the billing address with the credit card you ve provided.</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="row">
            <Col xs={12} className="mb-3">
              <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control as={FormSelect} placeholder="Select Country" options={countryOptions} />
              </Form.Group>
            </Col>
            <Col xs={12} className="mb-3">
              <Form.Group controlId="addressOne">
                <Form.Label>Address line 1</Form.Label>
                <Form.Control type="text" placeholder="123 Ocean Ave" required />
              </Form.Group>
            </Col>
            <Col xs={12} className="mb-3">
              <Form.Group controlId="addressTwo">
                <Form.Label>Address line 2</Form.Label>
                <Form.Control type="text" placeholder="123 Ocean Ave" required />
              </Form.Group>
            </Col>
            <Col xs={12} className="mb-3">
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control as={FormSelect} placeholder="Select City" options={cityOptions} />
              </Form.Group>
            </Col>
            <Col md={6} xs={12} className="mb-3">
              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="Gujarat" required />
              </Form.Group>
            </Col>
            <Col md={6} xs={12} className="mb-3">
              <Form.Group controlId="zipCode">
                <Form.Label>Zip/Postal Code</Form.Label>
                <Form.Control type="text" placeholder="000000" required />
              </Form.Group>
            </Col>
            <Col xs={12} className="mb-3">
              <Form.Check type="checkbox" id="customCheckAddress">
                <Form.Check.Input type="checkbox" />
                <Form.Check.Label>
                  Make this my default payment method.
                </Form.Check.Label>
              </Form.Check>
            </Col>
            <Col xs={12}>
              <Button type="submit" className="d-grid" >Save Address</Button>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <Fragment>
      <Col xs={12} className="mb-6">
        <Card>
          <Card.Header className="p-4 bg-white">
            <h4 className="mb-0">Billing address</h4>
          </Card.Header>
          <Card.Body>
            <Row className="align-items-center">
              <Col lg={6} md={12} xs={12} className="mb-4 mb-lg-0">
                <div className="mb-3 mb-lg-0">
                  <Form.Check id="shippingBillingAddress1" >
                    <Form.Check.Input type="radio" name="shippingBillingAddress" />
                    <Form.Check.Label>
                      <span className="d-block mb-3 text-dark fw-bold">Shipping Billing Address</span>
                      <span className="d-block text-dark fw-medium fs-4">Valarie Tarrant</span>
                      <span className="d-block mb-4">3757 Morgan Street Tallahassee, FL 32301</span>
                      <Link href="#" className="me-2 link-success">Edit</Link>
                      <Link href="#" className="me-2 link-danger">Delete</Link>
                      <Link href="#" className="me-2 text-muted text-primary-hover">Remove as Default Billing</Link>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              </Col>
              <Col lg={6} md={12} xs={12} className="d-flex justify-content-lg-end">
                <div className="mb-2">
                  <p className="mb-1">E-mail: <Link href="#">valarietarrant@dashui.com</Link></p>
                  <p>Phone: 321-654-0987</p>
                </div>
              </Col>
              <Col xs={12}>
                <hr className="my-6" />
              </Col>
              <Col lg={6} md={12} xs={12} className="mb-4 mb-lg-0">
                <Form.Check id="shippingBillingAddress2" >
                  <Form.Check.Input type="radio" name="shippingBillingAddress" />
                  <Form.Check.Label>
                    <span className="d-block mb-3 text-dark fw-bold">Default Billing Address</span>
                    <span className="d-block text-dark fw-medium fs-4">Mildred Cantu</span>
                    <span className="d-block mb-4">3757 Morgan Street Tallahassee, FL 32301</span>
                    <Link href="#" className="me-2 link-success">Edit</Link>
                    <Link href="#" className="me-2 link-danger">Delete</Link>
                    <Link href="#" className="me-2 text-muted text-primary-hover">Set as Default</Link>
                  </Form.Check.Label>
                </Form.Check>
              </Col>
              <Col lg={6} md={12} xs={12} className="d-flex justify-content-lg-end">
                <div className="mb-2">
                  <p className="mb-1">E-mail: <Link href="#">valarietarrant@dashui.com</Link></p>
                  <p>Phone: 321-654-0987</p>
                </div>
              </Col>
              <Col xs={12}>
                <hr className="mt-6 mb-4" />
              </Col>
              <Col xs={12}>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Add New Address
                </Button>
                <NewBillingAddressModal show={modalShow} onHide={() => setModalShow(false)} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  )
}

export default BillingAddress