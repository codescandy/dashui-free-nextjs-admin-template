'use client';

// import node module libraries
import { Fragment } from "react";
import { Card, Table } from "react-bootstrap";

// import hooks
import useMounted from 'hooks/useMounted';

const ServerSideData = ({ data }) => {
    const hasMounted = useMounted();
    return (
        <Fragment>
            {hasMounted && <Card className="m-5">
                <Table bordered>
                    <thead>
                        <th>API</th>
                        <th>Description</th>
                        <th>Auth</th>
                        <th>Link</th>
                        <th>Category</th>
                    </thead>
                    <tbody>
                        {data.entries.slice(0, 10).map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.API}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.Auth}</td>
                                    <td>{item.Link}</td>
                                    <td>{item.Category}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Card>}
        </Fragment>
    )
}

export default ServerSideData