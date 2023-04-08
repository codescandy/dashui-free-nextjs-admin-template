// import node module libraries
import { Container } from 'react-bootstrap';

const NotFound = (props) => {
	return (
		<Container className="d-flex flex-column" >
			{props.children}
		</Container>
	);
};

export default NotFound;