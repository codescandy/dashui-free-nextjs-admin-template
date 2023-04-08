// import node module libraries
import React from "react";
import Link from 'next/link';
import { MoreVertical } from 'react-feather';
import { Col, Row, Card, Form, Dropdown, Image, Button } from 'react-bootstrap';

const RecentFromBlog = () => {

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    (<Link
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="text-muted text-primary-hover">
      {children}
    </Link>)
  ));

  CustomToggle.displayName = 'CustomToggle';

  const ActionMenu = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <MoreVertical size="15px" className="text-muted" />
        </Dropdown.Toggle>
        <Dropdown.Menu align={'end'}>
          <Dropdown.Item eventKey="1">
            Action
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            Another action
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            Something else here
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <Col xl={6} md={12} xs={12} className="mb-6">
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between mb-5 align-items-center">
            {/* avatar */}
            <div className="d-flex align-items-center">
              <div>
                <Image src="/images/avatar/avatar-1.jpg" alt="" className="avatar avatar-md rounded-circle" />
              </div>
              <div className="ms-3">
                <h5 className="mb-0 fw-bold">Jitu Chauhan</h5>
                <p className="mb-0">19 minutes ago</p>
              </div>
            </div>
            <div>
              {/* dropdown */}
              <ActionMenu />
            </div>
          </div>
          <div className="mb-4">
            {/* text */}
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen disse var ius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <Image src="/images/blog/blog-img-1.jpg" className="rounded-3 w-100" alt="" />
          </div>
          {/* icons */}
          <div className="mb-4">
            <span className="me-1 me-md-4"><i className="fe fe-heart"></i> <span>20 Like</span></span>
            <span className="me-1 me-md-4"><i className="fe fe-message-square"></i> <span>12 Comment</span></span>
            <span><i className="fe fe-share-2"></i><span> Share</span></span>
          </div>
          <div className="border-bottom border-top py-5 d-flex align-items-center mb-4">
            <div className="avatar-group me-2 me-md-3">
              <span className="avatar avatar-sm">
                {/* Image */}
                <Image alt="avatar"
                  src="/images/avatar/avatar-7.jpg"
                  className="rounded-circle" />
              </span>
              <span className="avatar avatar-sm">
                {/* Image */}
                <Image alt="avatar"
                  src="/images/avatar/avatar-8.jpg"
                  className="rounded-circle" />
              </span>
              <span className="avatar avatar-sm">
                {/* Image */}
                <Image alt="avatar"
                  src="/images/avatar/avatar-9.jpg"
                  className="rounded-circle" />
              </span>
            </div>
            <div><span>You and 20 more liked this</span></div>
          </div>
          {/* row */}
          <Row>
            <Col xl={1} lg={2} md={2} xs={12} className="mb-3 mb-lg-0">
              <Image src="/images/avatar/avatar-1.jpg" className="avatar avatar-md rounded-circle" alt="" />
            </Col>
            <Col xl={11} lg={10} md={9} xs={12}>
              <Row className="row g-3 align-items-center">
                <Col md={2} xxl={1} >
                  <Form.Label >Name</Form.Label>
                </Col>
                <Col md={8} xxl={9} className="mt-0 mt-md-3">
                  <Form.Control type="text" placeholder="" id="name" required />
                </Col>
                <Col md={2} xxl={2}>
                  <Button type="submit" className="d-grid" >Post</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default RecentFromBlog