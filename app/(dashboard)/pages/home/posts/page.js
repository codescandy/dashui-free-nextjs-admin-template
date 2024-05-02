'use client'
import { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import Link from 'next/link';
import "../../../../../styles/posts.css";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function FirstPost() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch('https://my-json-server.typicode.com/VinusreeJeyasankar/Server2/students');
            const jsonData = await res.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const columns = [
        {
            dataField: 'Name',
            text: 'Name'
        },
        {
            dataField: 'Roll-No',
            text: 'Roll No'
        },
        {
            dataField: 'Age',
            text: 'Age'
        },
        {
            dataField: 'Gender',
            text: 'Gender'
        },
        {
            dataField: 'Course',
            text: 'Course'
        },
        {
            dataField: 'Course-Duration',
            text: 'Course Duration'
        },
        {
            dataField: 'Fees',
            text: 'Fees'
        },
        {
            dataField: 'Status',
            text: 'Status'
        },
        {
            dataField: 'Date-of-joining',
            text: 'Date of joining'
        },
    ];

    return (
        <Container fluid className="p-6">
            {/* Page Heading */}
            <PageHeading heading="Posts" />
            <div className="py-6">
                <Row>
                    <div>
                        <h1 className='float-start'>My First Post</h1>
                        <h3 className='float-end'>
                            <Link href="/pages/home">
                               <ArrowBackIosIcon /> Back
                            </Link>
                        </h3>
                    </div>
                    <h3>Student Data</h3>
                    <BootstrapTable
                        keyField='id'
                        data={data}
                        columns={columns}
                        pagination={paginationFactory()}
                    />
                </Row>
            </div>
        </Container>
    );
}
