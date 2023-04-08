/***************************
Component : DotBadge
****************************

Availalble Parameters

bg        : Optional ( default = primary ), possible bg options are, primary, light-primary, secondary,  light-secondary etc...

*/

// import node module libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

const DotBadge = ({...props }) => {
	return (
		<span className={props.className}>
		<Badge bg={props.bg} className="badge-dot"></Badge> {props.children}
	</span>
	);
};

DotBadge.propTypes = {
	bg: PropTypes.string,
	className: PropTypes.string
};

DotBadge.defaultProps = {
	bg: 'light-primary',
	className:'me-2'
};

export default DotBadge;
