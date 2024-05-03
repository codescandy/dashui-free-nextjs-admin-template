'use client'
import { useState, useEffect } from 'react';

import { Col, Row, Container, Card } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import Link from 'next/link';
import "../../../../../styles/posts.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Default image URL for products without an image_link
const DEFAULT_IMAGE_URL = 'https://source.unsplash.com/random';

export default function FirstPost() {
    // State to store fetched data
    const [cosmeticsData, setCosmeticsData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Eyeliner');
                const data = await response.json();
                setCosmeticsData(data);
            } catch (error) {
                console.error('Error fetching cosmetics data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container fluid className="p-6">
            {/* Page Heading */}
            <PageHeading heading="Cosmetics" />
            <div className="py-6">
                <Row>
                    <div>
                        <h1 className='float-start'>NYX - Eyeliners</h1>
                        <h3 className='float-end'>
                            <span className='me-2'><AddShoppingCartIcon style={{ color: "green", fontSize: "40px" }}/></span>
                            <Link href="/pages/home">
                               <ArrowBackIosIcon /> Back
                            </Link>
                        </h3>
                    </div>
                </Row>
            </div>
            {/* Iterate over cosmetics data and generate cards */}
            <Card className='mt-5'>
                <Card.Body>
                    <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
                        {cosmeticsData.filter(item => item.price !== '0.0').map((item, index) => (
                            <Col key={index}>
                                {/* <Link href={`/product/${item.id}`}> */}
                                    <Card style={{ height: '100%' }}>
                                        <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '100%', }}>
                                            <Card.Img
                                                variant="top"
                                                src={item.image_link ? item.image_link : DEFAULT_IMAGE_URL}
                                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '380px', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <div>
                                                <span className='float-start'><Card.Text>${item.price}</Card.Text></span>
                                                <span className='float-end'><AddShoppingCartIcon style={{ color: "red", fontSize: "23px" }}/></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                {/* </Link> */}
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}
