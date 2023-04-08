export const MenuNavCode = `   
<Nav defaultActiveKey="/#" as="ul">
    <Nav.Item as="li">
        <Nav.Link href="/#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="link-2" disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav>
`.trim();

export const MenuNavFlexCode = `   
<Nav>
    <Nav.Item>
        <Nav.Link href="#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="#">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="#">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav> 
`.trim();

export const AlignmentCenterCode = `   
<Nav className="justify-content-center" defaultActiveKey="/#" as="ul">
    <Nav.Item as="li">
        <Nav.Link href="/#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="link-2" disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav>
`.trim();

export const AlignmentRightCode = `   
<Nav className="justify-content-end" defaultActiveKey="/#" as="ul">
    <Nav.Item as="li">
        <Nav.Link href="/#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="link-2" disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav> 
`.trim();

export const VerticalFlexCode = `   
<Nav defaultActiveKey="/#" className="flex-column" as="ul">
    <Nav.Item as="li">
        <Nav.Link href="/#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>                                
    <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>                                
    <Nav.Item as="li">
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav> 
`.trim();

export const VerticalULLICode = `   
<Nav defaultActiveKey="/#" className="flex-column">
    <Nav.Link href="/#">Active</Nav.Link>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
</Nav>
`.trim();

export const TabsNavCode = `   
<Nav variant="tabs" defaultActiveKey="#">
    <Nav.Item>
        <Nav.Link href="#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1">Link </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-2">Link </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav>  
`.trim();

export const PillsNavsCode = `   
<Nav variant="pills" defaultActiveKey="#">
    <Nav.Item>
        <Nav.Link href="#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1">Link </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-2">Link </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav>  
`.trim();

export const FillPillsULLICode = `   
<Nav fill variant="pills"  defaultActiveKey="#" as="ul">
    <Nav.Item as="li">
        <Nav.Link href="#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Much longer nav link </Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link </Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav> 
`.trim();

export const FillPillsLinkCode = `   
<Nav fill variant="pills" defaultActiveKey="#">
    <Nav.Item>
        <Nav.Link href="#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1">Much longer nav link </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-2">Link </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav> 
`.trim();

export const FillPillsJustifyCode = `   
<Nav justify variant="pills" defaultActiveKey="#">
    <Nav.Item>
        <Nav.Link href="#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1">Much longer nav link </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-2">Link </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav> 
`.trim();

export const NavsFlexUtilitiesCode = `   
<Nav fill variant="pills" defaultActiveKey="#" className="flex-column flex-sm-row">
    <Nav.Item>
        <Nav.Link href="#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1">Much longer nav link </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-2">Link </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav>
`.trim();

export const NavsTabsCode = `   
<Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
    <Tab eventKey="home" title="Home">
        <strong>Home Tab</strong> - Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. 
        Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex 
        veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip 
        cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
    </Tab>
    <Tab eventKey="profile" title="Profile">
        <strong>Profile Tab</strong> - Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. 
        Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex 
        veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip 
        cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
    </Tab>
    <Tab eventKey="contact" title="Contact">
        <strong>Contact Tab</strong> - Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. 
        Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex 
        veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip 
        cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
    </Tab>
</Tabs> 
`.trim();

export const NavsTabsPillsCode = `  
<Tabs  variant="pills" defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
    <Tab eventKey="home" title="Home">
        <strong>Home Tab</strong> - Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. 
        Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex 
        veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip 
        cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
    </Tab>
    <Tab eventKey="profile" title="Profile">
        <strong>Profile Tab</strong> - Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. 
        Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex 
        veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip 
        cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
    </Tab>
    <Tab eventKey="contact" title="Contact">
        <strong>Contact Tab</strong> - Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. 
        Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex 
        veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip 
        cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
    </Tab>
</Tabs>
`.trim();

export const VerticalPillsCode = `  
<Tab.Container id="left-tabs-example" defaultActiveKey="home">
    <Row>
        <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey="home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="profile">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="messages">Messages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="settings">Settings</Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
        <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="home">
                    <strong>Home Tab</strong> - Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. 
                    Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex 
                    veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip 
                    cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                </Tab.Pane>
                <Tab.Pane eventKey="profile">
                    <strong>Profile Tab</strong> - Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. 
                    Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex 
                    veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip 
                    cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                </Tab.Pane>
                <Tab.Pane eventKey="messages">
                    <strong>Messages Tab</strong> - Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. 
                    Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex 
                    veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip 
                    cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                </Tab.Pane>
                <Tab.Pane eventKey="settings">
                    <strong>Settings Tab</strong> - Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. 
                    Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex 
                    veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip 
                    cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                </Tab.Pane>
            </Tab.Content>
        </Col>
    </Row>
</Tab.Container>
`.trim();

export const NavsCode = [
	MenuNavCode,
	MenuNavFlexCode,
	AlignmentCenterCode,
	AlignmentRightCode,
	VerticalFlexCode,
	VerticalULLICode,
	TabsNavCode,
	PillsNavsCode,
	FillPillsULLICode,
	FillPillsLinkCode,
	FillPillsJustifyCode,
	NavsFlexUtilitiesCode,
	NavsTabsCode,
	NavsTabsPillsCode,
	VerticalPillsCode
];

export default NavsCode;
