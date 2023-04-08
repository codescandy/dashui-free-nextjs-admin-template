export const BasicDropdownCode = `   
<Dropdown>
    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Dropdown Button
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown> 
`.trim();

export const SplitDropdownCode = `   
<Dropdown as={ButtonGroup}>
    <Button variant="secondary">Split Button</Button>
    <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
    <Dropdown.Menu>
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
`.trim();

export const DropdownVariantCode = `   
{['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
    (variant) => (
    <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={\`dropdown-variants-\${variant}\`}
        variant={variant.toLowerCase()}
        title={variant}
        className="me-1 mb-2 mb-lg-0 "                                    
        >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3"> Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>  
    ),
)}  
`.trim();

export const DropdownSizingCode = `   
{[DropdownButton, SplitButton].map((DropdownType, idx) => (
    <DropdownType
        as={ButtonGroup}
        key={idx}
        id={\`dropdown-button-drop-\${idx}\`}
        size="lg"
        variant="secondary"
        title={idx===0 ? "Large button" : "Large split button"}
        className="me-1 mb-2 mb-lg-0 "
        >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownType>
))}

{[DropdownButton, SplitButton].map((DropdownType, idx) => (
    <DropdownType
        as={ButtonGroup}
        key={idx}
        id={\`dropdown-button-drop-\${idx}\`}
        size="sm"
        variant="secondary"
        title={idx===0 ? "Small button" : "Small split button"}
        className="me-1"
        >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownType>
))}
`.trim();

export const DirectionsCode = `   
<div className="mb-2">
    {['up', 'down', 'left', 'right'].map((direction) => (
        <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={\`dropdown-button-drop-\${direction}\`}
            drop={direction}
            variant="secondary"
            title={\` Drop \${direction} \`}
            className="me-1 mb-2 mb-lg-0"
            >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
    ))}
</div>   
<div>
    {['up', 'down', 'left', 'right'].map((direction) => (
        <SplitButton
            key={direction}
            id={\`dropdown-button-drop-\${direction}\`}
            drop={direction}
            variant="secondary"
            title={\`Drop \${direction}\`}
            className="me-1 mb-2 mb-lg-0"
            >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </SplitButton>
    ))}
</div>
`.trim();

export const MenuAlignmentCode = `   
<ButtonGroup aria-label="Basic example">
    <DropdownButton
        align="start"
        title="Left aligned dropdown "
        id="dropdown-menu-align-start"
        className="me-1 mb-2 mb-lg-0"
        >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">
            Another action
        </Dropdown.Item>
        <Dropdown.Item eventKey="3">
            Something else here
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">
            Separated link
        </Dropdown.Item>
    </DropdownButton>
</ButtonGroup>
<ButtonGroup aria-label="Basic example">	
    <DropdownButton
        align="end"
        title="Right aligned dropdown "
        id="dropdown-menu-align-end"
        >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">
            Another action
        </Dropdown.Item>
        <Dropdown.Item eventKey="3">
            Something else here
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">
            Separated link
        </Dropdown.Item>
    </DropdownButton>
</ButtonGroup>
`.trim();

export const ResponsiveMenuAlignmentCode1 = `   
<ButtonGroup aria-label="Basic example">                               
    <DropdownButton
        align={ {lg : "right"} }
        title="Left-aligned but right aligned when large screen"
        id="dropdown-menu-align-left"
        className="me-1"
        >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>
</ButtonGroup>
`.trim();

export const ResponsiveMenuAlignmentCode2 = `   
<ButtonGroup aria-label="Basic example">                               
    <DropdownButton
        align={ {lg : "left"} }
        title="Right aligned but left aligned when large screen"
        id="dropdown-menu-align-right"
        className="me-1"
        >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>
</ButtonGroup>
`.trim();

export const MenuContentCode = `   
<Dropdown.Menu show className="position-static" >
    <Dropdown.Header>Dropdown header</Dropdown.Header>
    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
</Dropdown.Menu> 
`.trim();

export const DividersCode = `   
<Dropdown.Menu show className="position-static">
    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
</Dropdown.Menu> 
`.trim();

export const FormsCode1 = `   
<Dropdown.Menu show className="position-static">  
        <Form className="dropdown-form p-4"> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">Sign in</Button>
        </Form> 
    <Dropdown.Divider />
    <Dropdown.Item >New around here? Sign up</Dropdown.Item>                          
    <Dropdown.Item >Forgot password?</Dropdown.Item>
</Dropdown.Menu> 
`.trim();

export const FormsCode2 = `   
<Dropdown.Menu show className="position-static">  
        <Form className="dropdown-form p-4">  
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">Sign in </Button>
        </Form> 
</Dropdown.Menu> 
`.trim();

export const DropdownsCode = [
	BasicDropdownCode,
	SplitDropdownCode,
	DropdownVariantCode,
	DropdownSizingCode,
	DirectionsCode,
	MenuAlignmentCode,
	ResponsiveMenuAlignmentCode1,
	ResponsiveMenuAlignmentCode2,
	MenuContentCode,
	DividersCode,
	FormsCode1,
	FormsCode2
];

export default DropdownsCode;
