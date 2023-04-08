export const RegularButtonCode = `   
<Button variant="primary" className="me-1">Primary</Button>
<Button variant="secondary" className="me-1">Secondary</Button>
<Button variant="success" className="me-1">Success</Button>
<Button variant="warning" className="me-1">Warning</Button>
<Button variant="danger" className="me-1">Danger</Button> 
<Button variant="info" className="me-1">Info</Button>
<Button variant="light" className="me-1">Light</Button> 
<Button variant="dark" className="me-1">Dark</Button>
<Button variant="link" className="me-1">Link</Button>
`.trim();

export const ButtonTagsCode = `   
<Button href="#" className="me-1">Link</Button>
<Button type="submit"  className="me-1">Button</Button>
<Button as="input" type="button" value="Input"  className="me-1"/>
<Button as="input" type="submit" value="Submit"  className="me-1"/>
<Button as="input" type="reset" value="Reset"  className="me-1"/>
`.trim();

export const OutlineButtonsCode = `   
<Button variant="outline-primary" className="me-1">Primary</Button>
<Button variant="outline-secondary" className="me-1">Secondary</Button>
<Button variant="outline-success" className="me-1">Success</Button>
<Button variant="outline-warning" className="me-1">Warning</Button>
<Button variant="outline-danger" className="me-1">Danger</Button>
<Button variant="outline-info" className="me-1">Info</Button>
<Button variant="outline-light" className="me-1">Light</Button>
<Button variant="outline-dark" className="me-1">Dark</Button>
`.trim();

export const ButtonSizesCode = `   
<Button variant="primary" size="lg" className="me-1" >Large button</Button>
<Button variant="primary" className="me-1">Default button</Button>                          
<Button variant="primary" size="sm" className="me-1">Small button</Button>
<Button variant="primary" size="xs" className="me-1">Xtra Small button</Button>
`.trim();

export const BlockButtonCode = `   
<div className="d-grid gap-2">
    <Button variant="primary">Button</Button>
    <Button variant="primary">Button</Button>                          
</div>
`.trim();

export const ResponsiveButtonCode = `   
<div className="d-grid gap-2 d-md-block">
    <Button variant="primary" className="me-1">Button</Button>
    <Button variant="primary" className="me-1">Button</Button>                          
</div> 
`.trim();

export const BlockButtonWidthCode = `   
<Button variant="primary">Button</Button>
<Button variant="primary">Button</Button>  
`.trim();

export const ButtonAlignmentCode = `   
<div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <Button variant="primary">Button</Button>
    <Button variant="primary">Button</Button>                          
</div> 
`.trim();

export const ButtonIconsCode = `   
<Button variant="primary">Your Text Goes Here <ShoppingBag size="18px" /></Button> 
`.trim();

export const ButtonIcons2Code = `   
<Button variant="primary" className="me-1">+</Button>
<Button variant="primary"><Spinner animation="border" size="sm"  /></Button> 
`.trim();

export const ButtonIconsSizeCode = `   
<Button variant="primary" size="lg" className="me-1">+</Button>
<Button variant="primary" className="me-1">+</Button>
<Button variant="primary" size="sm" className="me-1">+</Button>
`.trim();

export const ActiveStateCode = `   
<Button variant="primary" active className="me-1">Primary button</Button>
<Button variant="secondary" active  className="me-1">Button</Button>
`.trim();

export const DisabledStateCode = `   
<Button variant="primary" disabled className="me-1">Primary button</Button>
<Button variant="secondary" disabled className="me-1">Button</Button>
`.trim();

export const ToggleStatesCode = `   
<ToggleButtonGroup type="checkbox" className="mb-2 me-1">
    <ToggleButton id="tbg-check-1" value={1}>Toggle button</ToggleButton>                                
</ToggleButtonGroup>
<ToggleButtonGroup type="checkbox" defaultValue={1} className="mb-2 me-1">
    <ToggleButton id="tbg-check-1" value={1}>Active toggle button</ToggleButton>                                
</ToggleButtonGroup>
<ToggleButtonGroup type="checkbox" className="mb-2 me-1" >
    <ToggleButton id="tbg-check-1" value={1} disabled>Disabled toggle button</ToggleButton>                                
</ToggleButtonGroup>
`.trim();

export const ButtonsCode = [
	RegularButtonCode,
	ButtonTagsCode,
	OutlineButtonsCode,
	ButtonSizesCode,
	BlockButtonCode,
	ResponsiveButtonCode,
	BlockButtonWidthCode,
	ButtonAlignmentCode,
	ButtonIconsCode,
	ButtonIcons2Code,
	ButtonIconsSizeCode,
	ActiveStateCode,
	DisabledStateCode,
	ToggleStatesCode
];

export default ButtonsCode;
