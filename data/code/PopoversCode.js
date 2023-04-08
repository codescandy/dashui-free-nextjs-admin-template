export const copyAction = (event) => {
	event.target.innerHTML = 'Copied';
	setTimeout(() => {
		event.target.innerHTML = 'Copy';
	}, 3000);
};

export const DefaultPopoverCode = `   
<OverlayTrigger trigger="click" placement="right" overlay={
    <Popover id="popover-basic">
        <Popover.Header as="h3">Popover title</Popover.Header>
        <Popover.Body>
            And here's some amazing content. It's very engaging. Right?
        </Popover.Body>
    </Popover>
    }>
    <Button variant="danger">Click to toggle popover</Button>
</OverlayTrigger>
`.trim();

export const FourDirectionsCode = `   
{['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
        trigger="click"
        key={placement}
        placement={placement}
        overlay={
            <Popover id={\`popover-positioned-\${placement}\`}>
                <Popover.Header as="h3">{\`Popover \${placement}\`}</Popover.Header>
                <Popover.Body>
                    <strong>Holy guacamole!</strong> Check this info.
                </Popover.Body>
            </Popover>
        }
    >
        <Button variant="secondary" className="me-2 mb-2 mb-lg-0">Popover on {placement}</Button>
    </OverlayTrigger>
))}
`.trim();

export const DismissableCode = `   
<OverlayTrigger trigger="focus" placement="right" overlay={
    <Popover id="popover-basic">
        <Popover.Header as="h3">Popover title</Popover.Header>
        <Popover.Body>
            And here's some amazing content. It's very engaging. Right?
        </Popover.Body>
    </Popover>
}>
    <Button variant="danger">Dismissible popover</Button>
</OverlayTrigger>
`.trim();

export const PopoversCode = [
	DefaultPopoverCode,
	FourDirectionsCode,
	DismissableCode
];

export default PopoversCode;
