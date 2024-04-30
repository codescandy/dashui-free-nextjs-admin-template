'use client'
// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

import Link from 'next/link'

export default function FirstPost() {
    return (
        <Container fluid className="p-6">
            {/* Page Heading */}
            <PageHeading heading="Posts" />
            <div className="py-12">
                <Row>
                    <h1>My First Post</h1>
                    <h2>
                        <Link href="/pages/home">
                            Home
                        </Link>
                    </h2>
                </Row>
            </div>
        </Container>
    )
}