export const OffcanvasBasicCode = `
const BSOffCanvas = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <Fragment>
            <Button variant="primary" onClick={handleShow}>Launch</Button>  
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
      </Fragment>
    );
}
export default BSOffCanvas;
`.trim();

export const OffCanvasPlacementCode = `
const BSOffCanvas = () => {
     
    function OffCanvasPlacement({ name, ...props }) {
        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        return (
          <>
            <Button variant="primary" onClick={handleShow} className="me-2 mb-2 mb-lg-0">
              {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
    }

    return (
        <Fragment>
            {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
                <OffCanvasPlacement key={idx} placement={placement} name={placement} />
            ))}
        </Fragment>
    );
}
export default BSOffCanvas;
`.trim();

export const OffCanvasBackdropCode = `
const BSOffCanvas = () => {
            
    const options = [
        {
          name: 'Enable backdrop (default)',
          scroll: false,
          backdrop: true,
        },
        {
          name: 'Disable backdrop',
          scroll: false,
          backdrop: false,
        },
        {
          name: 'Enable body scrolling',
          scroll: true,
          backdrop: false,
        },
        {
          name: 'Enable both scrolling & backdrop',
          scroll: true,
          backdrop: true,
        },
    ];
    
    function OffCanvasBackdrop({ name, ...props }) {
        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const toggleShow = () => setShow((s) => !s);
    
        return (
          <>
            <Button variant="primary" onClick={toggleShow} className="me-2 mb-2 mb-lg-0">
              {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
    }

    return (
        <Fragment>
            {options.map((props, idx) => (
                <OffCanvasBackdrop key={idx} {...props} />
            ))}
        </Fragment>
    );
}
export default BSOffCanvas;
`.trim();

export const OffcanvasCode = [
	OffcanvasBasicCode,
	OffCanvasPlacementCode,
	OffCanvasBackdropCode
];

export default OffcanvasCode;
