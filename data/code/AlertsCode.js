export const SimpleAlert = `   
<Alert variant="primary" >This is a primary alert—check it out!</Alert>
<Alert variant="secondary" >This is a secondary alert—check it out!</Alert>
<Alert variant="success" >This is a success alert—check it out!</Alert>
<Alert variant="danger" >This is a danger alert—check it out!</Alert>
<Alert variant="warning" >This is a warning alert—check it out!</Alert>
<Alert variant="info" >This is a info alert—check it out!</Alert>
<Alert variant="light" >This is a light alert—check it out!</Alert>
<Alert variant="dark" >This is a dark alert—check it out!</Alert>
    `.trim();

export const LinkAlert = `   
<Alert variant="primary">                                                    
    This is a primary alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>
<Alert variant="secondary">                                                    
    This is a secondary alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>
<Alert variant="success">                                                    
    This is a success alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>
<Alert variant="danger">                                                    
    This is a danger alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>
<Alert variant="warning">                                                    
    This is a warning alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>
<Alert variant="info">                                                    
    This is a info alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>
<Alert variant="light">                                                    
    This is a light alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>
<Alert variant="dark">                                                    
    This is a dark alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>
    `.trim();

export const AdditionalAlert = `   
<Alert variant="success">
    <Alert.Heading>Well done!</Alert.Heading>
    <p>
        Aww yeah, you successfully read this important alert message. This example
        text is going to run a bit longer so that you can see how spacing within an
        alert works with this kind of content.
    </p>
    <hr />
    <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice
        and tidy.
    </p>
</Alert>    
    `.trim();

export const AlertWithIcon = ` 
// import below bootstrap icons from react-bootstrap-icons library before using those
import { ExclamationCircleFill, CheckCircleFill, ExclamationTriangleFill } from 'react-bootstrap-icons';

<Alert variant="primary"><ExclamationCircleFill size={25} className="me-1"  />An example alert with an icon</Alert>
<Alert variant="success "><CheckCircleFill size={25} className="me-1"  />An example success alert with an icon</Alert>
<Alert variant="warning"><ExclamationTriangleFill size={25} className="me-1"  />An example warning alert with an icon</Alert>
<Alert variant="danger"><ExclamationTriangleFill size={25} className="me-1"  />An example danger alert with an icon</Alert>
`.trim();

export const DismissingAlert = `   
const AlertDismissible = () => {
    const [show, setShow] = useState(true);    
    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>            
            <Alert.Heading>Holy guacamole!</Alert.Heading>You should check in on some of those fields below.          
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
render(<AlertDismissible />);    
`.trim();

export const AlertsCode = [
	SimpleAlert,
	LinkAlert,
	AdditionalAlert,
	AlertWithIcon,
	DismissingAlert
];

export default AlertsCode;
