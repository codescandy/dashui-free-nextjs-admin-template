// import node module libraries
import { useState } from 'react'
import { Col, Row, Card, Form, Button, Table, Alert } from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';

const Notifications = () => {
  const notificationOptions = [
    { value: 'Always', label: 'Always' },
    { value: 'One', label: 'One' },
    { value: 'Two', label: 'Two' },
    { value: 'Three', label: 'Three' }
  ];

  const dailyDigestOptions = [
    { value: 'Everyday', label: 'Everyday' },
    { value: 'One', label: 'One' },
    { value: 'Two', label: 'Two' },
    { value: 'Three', label: 'Three' }
  ];

  const timeOptions = [
    { value: '2PM', label: '2PM' },
    { value: 'One', label: 'One' },
    { value: 'Two', label: 'Two' },
    { value: 'Three', label: 'Three' }
  ];

  const AlertDismissible = () => {
    const [show, setShow] = useState(true);
    if (show) {
      return (
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
          To start using Slack for personal notifications, you should first connect Slack.
        </Alert>
      );
    }
  }

  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Notifications</h4>
          <p className="mb-0 fs-5 text-muted">Change notification settings </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card >
          <Card.Body>
            <div className="mb-6">
              <h4 className="mb-1">Notification for email, mobile & Slack</h4>
            </div>
            <div className="mb-4">
              {/* alert */}
              <AlertDismissible />
            </div>
            {/* table */}
            <div className="table-responsive mb-3">
              <Table className="text-nowrap">
                <thead className="table-light">
                  <tr>
                    <th className="w-75">Activity & Conversation</th>
                    <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smartphone icon-sm me-2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></th>
                    <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-slack icon-sm me-2"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg></th>
                    <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail icon-sm me-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-top-0">
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckOne" />
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckTwo" />
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckThree" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-top-0">
                      When a Files is shared with a team
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckFour" />
                    </td>
                    <td className="border-top-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus text-muted icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckFive" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-top-0">
                      When someone requests access to my design
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckSix" />
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckSeven" />
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckEight" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-top-0">
                      When someone comments in threads I’m following
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckNine" />
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckTen" />
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckEleven" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-top-0">
                      When someone @mentions me in any comments
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckTwelve" />
                    </td>
                    <td className="border-top-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus text-muted icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </td>
                    <td className="border-top-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus text-muted icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </td>
                  </tr>
                </tbody>
              </Table >
            </div>
            <div className="table-responsive mb-3">
              <Table className="text-nowrap">
                <thead className="table-light">
                  <tr>
                    <th className="w-75">Project activity</th>
                    <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smartphone icon-sm me-2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></th>
                    <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-slack icon-sm me-2"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg></th>
                    <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail icon-sm me-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-top-0">
                      When someone adds me to a project
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckThirteen" />
                    </td>
                    <td className="border-top-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus text-muted icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </td>
                    <td className="border-top-0">
                      <Form.Check.Input type="checkbox" name="customCheckFourteen" />
                    </td>
                  </tr>
                </tbody>
              </Table >
            </div>
            <Table responsive className="mb-0 text-nowrap">
              <thead className="table-light">
                <tr>
                  <th className="w-75">Team activity</th>
                  <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smartphone icon-sm me-2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></th>
                  <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-slack icon-sm me-2"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg></th>
                  <th><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail icon-sm me-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-top-0">
                    When my invitees sign up
                  </td>
                  <td className="border-top-0">
                    <Form.Check.Input type="checkbox" name="customCheckSixteen" />
                  </td>
                  <td className="border-top-0">
                    <Form.Check.Input type="checkbox" name="customCheckSeventeen" />
                  </td>
                  <td className="border-top-0">
                    <Form.Check.Input type="checkbox" name="customCheckEighteen" />
                  </td>
                </tr>
                <tr>
                  <td className="border-top-0">
                    When someone requests access to my team
                  </td>
                  <td className="border-top-0">
                    <Form.Check.Input type="checkbox" name="customCheckNineteen" />
                  </td>
                  <td className="border-top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus text-muted icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </td>
                  <td className="border-top-0">
                    <Form.Check.Input type="checkbox" name="customCheckNineteen" />
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom-0">
                    When someone invites me to a team
                  </td>
                  <td className="border-bottom-0">
                    <Form.Check.Input type="checkbox" name="customCheckTwentyone" />
                  </td>
                  <td className="border-bottom-0">
                    <Form.Check.Input type="checkbox" name="customCheckTwentytwo" />
                  </td>
                  <td className="border-bottom-0">
                    <Form.Check.Input type="checkbox" name="customCheckTwentythree" />
                  </td>
                </tr>
              </tbody>
            </Table >
            <hr className="my-6" />
            <Row>
              <Col xl={6} md={12} className="mb-3">
                <Form.Label htmlFor="notification">When should we send you notifications?</Form.Label>
                <Form.Control as={FormSelect} defaultselected="Always" id="notification" options={notificationOptions} />
              </Col>
              <Col xl={3} md={6} className="mb-3">
                <Form.Label htmlFor="dailyDigest">Daily Digest</Form.Label>
                <Form.Control as={FormSelect} defaultselected="Everyday" id="dailyDigest" options={dailyDigestOptions} />
              </Col>
              <Col xl={3} md={6} className="mb-3">
                <Form.Label htmlFor="time">Time</Form.Label>
                <Form.Control as={FormSelect} defaultselected="2PM" id="time" options={timeOptions} />
              </Col>
              <Col xl={3} md={12}>
                <Button variant="primary" type="submit">Save Changes</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Notifications