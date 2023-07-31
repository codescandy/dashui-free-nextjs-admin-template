// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version_01_01_00 = () => {	
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
										<code>v1.1.0</code> - August 1, 2023
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Geeks NextJS Update</h4>
									<ul>
										<li>Replaced <b>Page Router</b> with <b>App Router</b> and done all required changes to impliment it.</li>
										<li>Required packages are Updated</li>
										<li>Added new package <code>react-syntax-highlighter</code></li>
										<li>Removed <code>prism-react-renderer</code> and <code>next-seo</code> packages</li>
										<li>Fixed a few bugs</li>
									</ul>
								</div>
								<div className="mb-3">
									<h4>Updated React Files:</h4>
									<ul>
										{UpdatedReactFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>Updated SCSS Files:</h4>
									<ul>
										{UpdatedSass.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>
								<div className="mb-3">
									<h4>Deleted Components / Layout / Hook / React Files:</h4>
									<ul>
										{DeletedFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
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

export default Version_01_01_00;
