'use client'
import { useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import "../../../../styles/posts.css";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default function StudentData() {
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
            <PageHeading heading="Students" />
            <div className="py-6">
                <Row>
                    <h3 className='text-center pb-2'>Generate Student Table</h3>
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
