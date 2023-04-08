export const BasicButtonGroupCode = `   
<ButtonGroup aria-label="Basic example" >
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
</ButtonGroup>
`.trim();

export const GroupLinksCode = `   
<ButtonGroup aria-label="Basic example" >
    <Button variant="primary" href="#" active >Active Link</Button>
    <Button variant="primary" href="#">Link</Button>
    <Button variant="primary" href="#">Link</Button>
</ButtonGroup>
`.trim();

export const MixedStylesCode = `   
<ButtonGroup aria-label="Basic mixed styles example" >
    <Button variant="danger"  >Left</Button>
    <Button variant="warning" >Middle</Button>
    <Button variant="success" >Right</Button>
</ButtonGroup> 
`.trim();

export const OutlineStylesCode = `   
<ButtonGroup aria-label="Basic mixed styles example" >
    <Button variant="outline-primary"  >Left</Button>
    <Button variant="outline-primary" >Middle</Button>
    <Button variant="outline-primary" >Right</Button>
</ButtonGroup> 
`.trim();

export const CheckboxStyleCode = `   
<ToggleButtonGroup type="checkbox" defaultValue={[1]} className="mb-2">
    <ToggleButton id="tbg-check-1" value={1} variant="outline-primary">
        Checkbox 1 
    </ToggleButton>
    <ToggleButton id="tbg-check-2" value={2} variant="outline-primary">
        Checkbox 2
    </ToggleButton>
    <ToggleButton id="tbg-check-3" value={3} variant="outline-primary">
        Checkbox 3 
    </ToggleButton>
</ToggleButtonGroup> 
`.trim();

export const RadioStyleCode = `   
<ToggleButtonGroup type="radio" name="options" defaultValue={1}>
    <ToggleButton id="tbg-radio-1" value={1} variant="outline-primary">
        Radio 1
    </ToggleButton>
    <ToggleButton id="tbg-radio-2" value={2} variant="outline-primary">
        Radio 2
    </ToggleButton>
    <ToggleButton id="tbg-radio-3" value={3} variant="outline-primary">
        Radio 3
    </ToggleButton>
</ToggleButtonGroup> 
`.trim();

export const ToolbarStyleCode = `   
<ButtonToolbar aria-label="Toolbar with button groups">
    <ButtonGroup aria-label="First group" className="me-2" >
        <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Second group" className="me-2" >
        <Button>5</Button> <Button>6</Button> <Button>7</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Third group">
        <Button>8</Button>
    </ButtonGroup>
</ButtonToolbar> 
`.trim();

export const ButtonSizingCode = `   
<ButtonGroup aria-label="Basic example"  size="lg" className="mb-2" >
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
</ButtonGroup>

<br/>    

<ButtonGroup aria-label="Basic example" className="mb-2" >
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
</ButtonGroup>

<br/>

<ButtonGroup aria-label="Basic example" size="sm">
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
</ButtonGroup> 
`.trim();

export const ButtonNestingCode = `   
<ButtonGroup>
    <Button>1</Button>
    <Button>2</Button>                                
    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>
</ButtonGroup> 
`.trim();

export const VerticalButtonCode = `   
<ButtonGroup vertical>
    <Button>Button</Button>
    <Button>Button</Button>

    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>

    <Button>Button</Button>
    <Button>Button</Button>

    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>

    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>
</ButtonGroup> 
`.trim();

export const PaginationsCode = [
	BasicButtonGroupCode,
	GroupLinksCode,
	MixedStylesCode,
	OutlineStylesCode,
	CheckboxStyleCode,
	RadioStyleCode,
	ToolbarStyleCode,
	ButtonSizingCode,
	ButtonNestingCode,
	VerticalButtonCode
];

export default PaginationsCode;
