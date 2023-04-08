// import node module libraries
import React from "react";
import Link from 'next/link';
import { Col, Card, Dropdown, Image } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

// import required data files
import ProjectsContributionsData from 'data/profile/ProjectsContributionsData';

const ProjectsContributions = () => {

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
        <Col xl={6} lg={12} md={12} xs={12} className="mb-6">
            <Card>
                <Card.Body>
                    <Card.Title as="h4">Projects Contributions</Card.Title>
                    {ProjectsContributionsData.map((item, index) => {
                        return (
                            <div className="d-md-flex justify-content-between align-items-center mb-4" key={index}>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div className={`icon-shape icon-md border p-4 rounded-1 ${item.brandLogoBg}`}>
                                            <Image src={item.brandLogo} alt="" />
                                        </div>
                                    </div>
                                    {/* text */}
                                    <div className="ms-3 ">
                                        <h5 className="mb-1">
                                            <Link href="#" className="text-inherit">{item.projectName}</Link>
                                        </h5>
                                        <p className="mb-0 fs-5 text-muted">{item.description}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center ms-10 ms-md-0 mt-3">
                                    {/* avatar group */}
                                    <div className="avatar-group me-2">
                                        {item.members.map((avatar, avatarIndex) => {
                                            return (
                                                <span className="avatar avatar-sm" key={avatarIndex}>
                                                    <Image alt="avatar" src={avatar.image} className="rounded-circle" />
                                                </span>
                                            )
                                        })}
                                    </div>
                                    <div>
                                        {/* dropdown */}
                                        <ActionMenu/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectsContributions