// import node module libraries
import { Row, Col, Card, Image } from 'react-bootstrap';

const ActivityFeed = () => {
    return (
        <Row>
            <Col xs={12}>
                {/* card */}
                <Card>
                    {/* card body */}
                    <Card.Body>
                        {/* card title */}
                        <Card.Title as="h4">Activity Feed</Card.Title>
                        
                        <div className="d-flex mb-5">
                            <div>
                                <Image src="/images/avatar/avatar-6.jpg" className="rounded-circle avatar-md" alt="" />
                            </div>
                            <div className="ms-3 ">
                                <h5 className="mb-1">Dianna Smiley</h5>
                                <p className="text-muted mb-2">Just create a new Project in Dashui...
                                </p>
                                <p className="fs-5 mb-0">2m ago</p>
                            </div>
                        </div>
                        <div className="d-flex mb-5">
                            <div>
                                <Image src="/images/avatar/avatar-7.jpg" className="rounded-circle avatar-md" alt="" />
                            </div>
                            <div className="ms-3 ">
                                <h5 className="mb-1">Irene Hargrove</h5>
                                <p className="text-muted mb-2">Comment on Bootstrap Tutorial Says Hi, I m irene...
                                </p>
                                <p className="fs-5 mb-0">1hour ago</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <Image src="/images/avatar/avatar-9.jpg" className="rounded-circle avatar-md" alt="" />
                            </div>
                            <div className="ms-3 ">
                                <h5 className="mb-1">Trevor Bradley</h5>
                                <p className="text-muted mb-2">Just share your article on Social Media..
                                </p>
                                <p className="mb-0 fs-5 text-muted">2month ago</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ActivityFeed