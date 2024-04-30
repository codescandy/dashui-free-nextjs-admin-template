'use client'
// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

import Link from 'next/link'

function HomePage() {
   return (
      <Container fluid className="p-6">
        {/* Page Heading */}
      <PageHeading heading="Home"/>
      <div className="py-12">
        <Row>
         <div>Welcome to Next.js!</div>
         <Link href="/pages/home/posts">First Post</Link>
        </Row>
      </div>
      </Container>
   )
}

export default HomePage
