export const OverlayBasicCode = `
const Overlays = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
        <Fragment>
            <Button variant="primary" ref={target} onClick={() => setShow(!show)}>
                Click me to see
            </Button>
            <Overlay target={target.current} show={show} placement="right">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div
                        {...props}
                        style={{
                            backgroundColor: 'rgba(117, 79, 254, 0.50)',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                        }}
                    >
                        Simple tooltip
                    </div>
                )}
            </Overlay>
      </Fragment>
    );
}
export default Overlays;
`.trim();

export const OverlayTriggerCode = `
<OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={(
        <Tooltip id="button-tooltip">
            Simple tooltip
        </Tooltip>
        )}
    >
    <Button variant="primary">Hover me to see</Button>
</OverlayTrigger>
`.trim();

export const TriggerBehaviorCode = `
const Overlays = () => {
    return (
        <Fragment>
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
                >
                {({ ref, ...triggerHandler }) => (
                <Button
                    variant="light"
                    {...triggerHandler}
                    className="d-inline-flex align-items-center"                                            >
                    <Image
                        ref={ref}
                        roundedCircle
                        src="https://i.pravatar.cc/30?img=3"
                        width={30}
                    />
                    <span className="ms-1">Hover to see</span>
                </Button>
                )}
            </OverlayTrigger>
        </Fragment>
    );
}
export default Overlays;
`.trim();

export const OffcanvasCode = [
	OverlayBasicCode,
	OverlayTriggerCode,
	TriggerBehaviorCode
];

export default OffcanvasCode;
