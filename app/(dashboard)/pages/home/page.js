'use client'
// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'
import { Card } from 'react-bootstrap';
import Link from 'next/link'

function HomePage() {
   return (
      <Container fluid className="p-6">
        {/* Page Heading */}
      <PageHeading heading="Home"/>
      <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h4 className="mb-0">Welcome to Next.js!</h4>
                    </div>
                    {/* <div className="icon-shape icon-md bg-light-primary text-primary rounded-2"></div> */}
                </div>
                <div>
                    <h3 className="fw-bold"><Link href="/pages/home/posts">First Post</Link></h3>
                </div>
            </Card.Body>
        </Card>
      </Container>
   )
}

export default HomePage
