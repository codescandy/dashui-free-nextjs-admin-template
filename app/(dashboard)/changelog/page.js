'use client'

// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import sub components
import Version_01_00_00 from 'sub-components/changelog/Version_01_00_00';
import Version_01_01_00 from 'sub-components/changelog/Version_01_01_00';

const ChangeLog = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-0 h2 fw-bold">Changelog</h1>
							<p className="mb-0">
								We’re constantly improving & updating Dashui. See the latest features and improvements.
							</p>
						</div>
					</div>
				</Col>
			</Row>		
			<Version_01_01_00/>
			<hr/>
			<Version_01_00_00 />
		</Container>
	);
};

export default ChangeLog;
