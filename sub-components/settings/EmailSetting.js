// import node module libraries
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

const EmailSetting = () => {
  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Email Setting</h4>
          <p className="mb-0 fs-5 text-muted">Add an email settings to profile </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        {/* card */}
        <Card id="edit">
          {/* card body */}
          <Card.Body>
            <div className="mb-6">
              <h4 className="mb-1">Email</h4>
            </div>
            <Form>
              {/* New email */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="newEmailAddress">New email</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="email" placeholder="Enter your email address" id="newEmailAddress" required />
                </Col>
                <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-3">
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Col>
              </Row>
            </Form>
            <div className="mb-6 mt-6">
              <h4 className="mb-1">Change your password</h4>
            </div>
            <Form>

              {/* Current password */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="currentPassword">Current password</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="password" placeholder="Enter Current password" id="currentPassword" required />
                </Col>
              </Row>

              {/* New password */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="newPassword">New password</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="password" placeholder="Enter New password" id="newPassword" required />
                </Col>
              </Row>

              {/* Confirm new password */}
              <Row className="align-items-center">
                <Form.Label className="col-sm-4" htmlFor="confirmNewpassword">Confirm new password</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="password" placeholder="Confirm new password" id="confirmNewpassword" required />
                </Col>
                {/* list */}
                <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                  <h6 className="mb-1">Password requirements:</h6>
                  <p>Ensure that these requirements are met:</p>
                  <ul>
                    <li> Minimum 8 characters long the more, the better</li>
                    <li>At least one lowercase character</li>
                    <li>At least one uppercase character</li>
                    <li>At least one number, symbol, or whitespace character
                    </li>
                  </ul>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Col>
              </Row>
              
            </Form>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default EmailSetting