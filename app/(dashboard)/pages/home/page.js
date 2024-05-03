'use client'
import { Container, Card } from 'react-bootstrap';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import widget as custom components
import { PageHeading } from 'widgets';
import Link from 'next/link';

function HomePage() {

    return (
        <Container fluid className="p-6">
            <PageHeading heading="Home" />
            <Card>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h4 className="mb-0">Welcome to Next.js!</h4>
                        </div>
                        {/* <div className="icon-shape icon-md bg-light-primary text-primary rounded-2"></div> */}
                    </div>
                    <div>
                        <h3 className="fw-bold">
                            <Link href="/pages/home/posts" className='me-2'>Go to store</Link>
                            <ShoppingCartCheckoutIcon style={{ color: "green" }} />
                        </h3>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h4 className="mb-0"></h4>
                        </div>
                    </div>
                    <div>
                        <p className="mb-0"></p>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default HomePage;