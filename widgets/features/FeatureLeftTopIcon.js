// Widget : Features
// Style : Features item with left top icon

// import node module libraries
import PropTypes from 'prop-types';

const FeatureLeftTopIcon = ({ item }) => {
    return (
        <div className="mb-6">
            <div className="icon-shape icon-lg bg-primary rounded-3 mb-4">
                <i className={`fe fe-${item.icon} text-white fs-3`}></i>
            </div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
        </div>
    )
}

// Typechecking With PropTypes
FeatureLeftTopIcon.propTypes = {
    item: PropTypes.any.isRequired
};

export default FeatureLeftTopIcon