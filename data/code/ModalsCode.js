export const SampleExamplesCode = `   
<div className="modal show" style={{ display: 'block', position: 'initial' }}>
  <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary">Close</Button>
      <Button variant="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
</div>
`.trim();

export const LiveDemoCode = ` 
const Modals = () => {   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment> 
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
`.trim();

export const LongContentCode = ` 
const Modals = () => {   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const longContent =\`<p>Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum.   Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl  consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\`
    
    return (
        <Fragment> 
            <Button variant="primary" onClick={() => setScrollShow(true)}>
                Launch demo modal 
            </Button>
            <Modal show={scrollShow} onHide={() => setScrollShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body dangerouslySetInnerHTML={{__html: longContent}}></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setScrollShow(false)} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setScrollShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
`.trim();

export const ScrollableModalCode = `   
const Modals = () => {      
     
    const [scrollShow, setScrollShow] = useState(false);
    const longContent =\`<p>Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum.   Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl  consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\`

    return (
        <Fragment> 
            <Button variant="primary" onClick={() => setScrollShow(true)}>
                Launch demo modal 
            </Button>
            <Modal className="modal-dialog-scrollable" show={scrollShow} onHide={() => setScrollShow(false)}  >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body  style={{height:'500px'}} dangerouslySetInnerHTML={{__html: longContent}}></Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={() => setScrollShow(false)} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setScrollShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
`.trim();

export const VerticallyCenteredCode = `   
const Modals = () => {      
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}            
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal title
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Fragment> 
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch demo modal 
            </Button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </Fragment>
    )
}
`.trim();

export const TooltipsPopoversCode = `  
const Modals = () => {          
    const [popoverTipShow ,  setpopoverTipShow] = useState(false);
    return (
        <Fragment> 
            <Button variant="primary" onClick={() => setpopoverTipShow(true)}>
            Launch demo modal 
            </Button>
            <Modal show={popoverTipShow} onHide={() => setpopoverTipShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Popover in a modal</h5>
                    <p>This{' '}
                        <OverlayTrigger trigger="click" placement="right" overlay={(
                                <Popover>
                                    <Popover.Header as="h3">Popover title</Popover.Header>
                                    <Popover.Body>
                                        Popover body content is set in this attribute.
                                    </Popover.Body>
                                </Popover>
                            )}>
                            <Button variant="secondary">button</Button>
                        </OverlayTrigger> triggers a popover on click.
                    </p>
                    <hr/>
                    <h5>Tooltips in a modal</h5>
                    <div>
                        <OverlayTrigger trigger={['hover', 'focus']} 
                            overlay={
                            <Tooltip>Tooltip</Tooltip>
                            }>
                            <Link href="#" variant="secondary" size="sm" >This Link</Link>
                        </OverlayTrigger> and 
                        <OverlayTrigger trigger={['hover', 'focus']} 
                            overlay={
                            <Tooltip>Tooltip</Tooltip>
                            }>
                            <Link href="#" variant="secondary" size="sm" className="m-1">That Link</Link>
                        </OverlayTrigger> have tooltips on hover.
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setpopoverTipShow(false)} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setpopoverTipShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
`.trim();

export const OptionalSizesCode = ` 
const Modals = () => {          

    const [smShow, setSmShow] = useState(false);
    const [mdShow, setMdShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return (
        <Fragment> 
            <Button onClick={() => setLgShow(true)}>Extra large modal</Button>{' '}
            <Button onClick={() => setMdShow(true)}>Large modal</Button>{' '}
            <Button onClick={() => setSmShow(true)}>Small modal</Button>
            <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm" >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Small modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Extra large modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
            <Modal show={mdShow} onHide={() => setMdShow(false)} aria-labelledby="example-modal-sizes-title-lg" >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </Fragment>
    )
}
`.trim();

export const ModalsCode = [
	SampleExamplesCode,
	LiveDemoCode,
	LongContentCode,
	ScrollableModalCode,
	VerticallyCenteredCode,
	TooltipsPopoversCode,
	OptionalSizesCode
];

export default ModalsCode;
