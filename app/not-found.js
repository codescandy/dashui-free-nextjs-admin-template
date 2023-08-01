'use client'
// import node module libraries
import { Col, Row, Image, Container } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';
import { Fragment } from 'react';

const NotFound = () => {
  const hasMounted = useMounted();
  return (
    <Fragment>
      {hasMounted &&
        <Container>
          <Row >
            <Col sm={12}>
              <div className="text-center">
                <div className="mb-3">
                  <Image src="/images/error/404-error-img.png" alt="" className="img-fluid" />
                </div>
                <h1 className="display-4 fw-bold">Oops! the page not found.</h1>
                <p className="mb-4">Or simply leverage the expertise of our consultation
                  team.</p>
                <Link href="/" className="btn btn-primary">
                  Go Home
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      }
    </Fragment>
  );
};


export default NotFound;


