'use client';

// import node module libraries
import { Fragment } from "react";
import { Card } from "react-bootstrap";

// import hooks
import useMounted from 'hooks/useMounted';

const ServerSideData = ({ data }) => {
    const hasMounted = useMounted();
    return (
        <Fragment>
            {hasMounted && <Card className="m-5">
                <Card.Body>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </Card.Body>
            </Card>}
        </Fragment>
    )
}

export default ServerSideData