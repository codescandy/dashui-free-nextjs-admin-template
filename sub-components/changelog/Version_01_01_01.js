// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version_01_01_01 = () => {
	const UpdatedSass = [
		'styles/theme/_utilities.scss',
		'styles/theme.scss'
	]
	const UpdatedReactFiles = [
		'widgets/dropfiles/DropFiles.js',
		'widgets/form-select/FormSelect.js',
		'widgets/highlight-code/HighlightCode.js',
		'sub-components/dashboard/TasksPerformance.js',
		'sub-components/settings/EmailSetting.js',
		'sub-components/settings/GeneralSetting.js',
		'routes/DashboardRoutes.js',
		'data/code/ListgroupsCode.js',
		'data/code/NavbarsCode.js',
		'data/code/ToastsCode.js',
		'components/bootstrap/DotBadge.js'
	]
	const DeletedFiles = [
		'layouts/DefaultDashboardLayout.js',
		'layouts/NotFound.js',
		'layouts/AuthLayout.js',
		'pages/_app.js',
		'pages/_document.js'
	]
	return (
		<Row>
			<Col lg={7} md={12} sm={12}>
				<Card>
					<Card.Body>
						<Row className="g-0">
							<Col lg={3} md={4} sm={12}>
								<div id="initial">
									<h5 className="mb-3 fwsemi--bold">
										<code>v1.1.1</code> - December 9, 2025
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Dash UI NextJS Update</h4>
									<ul>
										<li>Updated Nextjs to 16.x</li>
										<li>Updated React to 19.x</li>
										<li>Required packages are Updated</li>
										<li>Removed <code>react-copy-to-clipboard</code> package</li>
										<li>Fixed a few bugs</li>
									</ul>
								</div>

							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default Version_01_01_01;
