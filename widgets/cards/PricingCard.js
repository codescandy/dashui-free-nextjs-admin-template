// import node module libraries
import { ListGroup, Card } from 'react-bootstrap';
import Link from 'next/link';

const PricingCard = ({ content }) => {
    let plan = content[0];
    return (
        <Card>
            <Card.Body className="p-6 border-bottom mb-4">
                {/* text */}
                <h2 className="mb-3">{plan.plantitle}</h2>
                <p className="mb-0" dangerouslySetInnerHTML={{ __html: plan.description }}></p>
                {/* price */}
                <div className="d-flex align-items-end mt-6 mb-3">
                    <h1 className="fw-bold me-1 mb-0">${plan.monthly} </h1>
                    <p className="mb-0">/mo</p>
                </div>
                <Link href="#" className={`btn btn-${plan.buttonClass ? plan.buttonClass : 'outline-primary'
                    }`}>
                    {plan.buttonText}
                </Link>
            </Card.Body>
            <Card.Body>
                <p className="mb-0">{plan.featureHeading}</p>
                <ListGroup bsPrefix="list-unstyled" className="mt-4 mb-0">
                    {plan.features.map((item, index) => {
                        return (
                            <ListGroup.Item
                                key={index}
                                className="mb-1"
                                bsPrefix="list-item"
                            >
                                <span className="text-success me-2">
                                    <i className="far fa-check-circle"></i>
                                </span>
                                <span
                                    dangerouslySetInnerHTML={{ __html: item.feature }}
                                ></span>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default PricingCard