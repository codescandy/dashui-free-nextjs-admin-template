export const BasicExampleCode = `  
<Toast>
    <Toast.Header>
        <Image src="https://fakeimg.pl/20x20/754FFE/754FFE/" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
`.trim();

export const TranslucentToastsCode = `   
<Toast className="mb-4" >
    <Toast.Header>
        <Image src="https://fakeimg.pl/20x20/754FFE/754FFE/" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>just now</small>
    </Toast.Header>
    <Toast.Body>See? Just like this.</Toast.Body>
</Toast>
`.trim();

export const StackingCode = `   
<Toast className="mb-4">
    <Toast.Header>
        <Image src="https://fakeimg.pl/20x20/754FFE/754FFE/" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>just now</small>
    </Toast.Header>
    <Toast.Body>See? Just like this.</Toast.Body>
</Toast>
<Toast animation={false}>
    <Toast.Header>
        <Image src="https://fakeimg.pl/20x20/754FFE/754FFE/" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>2 seconds ago</small>
    </Toast.Header>
    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
</Toast>
`.trim();

export const PlacementCode1 = `   
<div className="mb-3">
    <label htmlFor="selectToastPlacement">Toast position</label>
    <Form.Select
        id="selectToastPlacement"
        className="mt-2"
        onChange={(e) => setPosition(e.currentTarget.value)}
        >
        {[
            'top-start',
            'top-center',
            'top-end',
            'middle-start',
            'middle-center',
            'middle-end',
            'bottom-start',
            'bottom-center',
            'bottom-end',
        ].map((p) => (
            <option key={p} value={p}>
                {p}
            </option>
        ))}
    </Form.Select>
</div>
<div
    aria-live="polite"
    aria-atomic="true"
    className="position-relative"
    style={{ minHeight: '240px' }}
    >
    <ToastContainer className="p-3" position={position}>
        <Toast>
            <Toast.Header closeButton={false}>
                <Image src={Avatar1} className="rounded me-2 avatar-xs" alt="..." />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
    </ToastContainer>
</div>   
`.trim();

export const PlacementCode2 = `   
<div
    aria-live="polite"
    aria-atomic="true"
    style={{
        position: 'relative',
        minHeight: '250px',
    }}
    >
    <div
        style={{
            position: 'absolute',
            top: 0,
            right: 0,
        }}
        >
        <Toast className="mb-4">
            <Toast.Header>
                <Image src="https://fakeimg.pl/20x20/754FFE/754FFE/" className="rounded me-2" alt="" />
                <strong className="me-auto">Bootstrap</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
        <Toast className="mb-4">
            <Toast.Header>
                <Image src="https://fakeimg.pl/20x20/754FFE/754FFE/" className="rounded me-2" alt="" />
                <strong className="me-auto">Bootstrap</strong>
                <small>2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
    </div>
</div>
`.trim();

export const PlacementCode3 = `   
<div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center" 
    style={{
        position: 'relative',
        minHeight: '250px',
    }}>
    <Toast>
        <Toast.Header>
            <Image src="https://fakeimg.pl/20x20/754FFE/754FFE/" className="rounded me-2" alt="" />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
</div>
`.trim();

export const DismissibleCode = `  
const Toasts = () => {

    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return ( 
        <Fragment> 
            <Row>
                <Col md={6} className="mb-2">
                    <Button onClick={toggleShowA} className="mb-2">
                        Toggle Toast <strong>with</strong> Animation
                    </Button>
                    <Toast className="mb-4" show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <Image src="https://fakeimg.pl/20x20/754FFE/754FFE/" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>just now</small>
                        </Toast.Header>
                        <Toast.Body>See? Just like this.</Toast.Body>
                    </Toast>
                </Col>
                <Col md={6} className="mb-2">
                    <Button onClick={toggleShowB} className="mb-2">
                        Toggle Toast <strong>without</strong> Animation
                    </Button>
                    <Toast onClose={toggleShowB} show={showB} animation={false}>
                        <Toast.Header>
                            <Image src="https://fakeimg.pl/20x20/754FFE/754FFE/" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>2 seconds ago</small>
                        </Toast.Header>
                        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </Fragment>
    )
}
`.trim();

export const ToastsCode = [
	BasicExampleCode,
	TranslucentToastsCode,
	StackingCode,
	PlacementCode1,
	PlacementCode2,
	PlacementCode3,
	DismissibleCode
];

export default ToastsCode;
