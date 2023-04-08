export const BasicListgroupCode = `   
<ListGroup>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
`.trim();

export const ActiveItemCode = `   
<ListGroup>
    <ListGroup.Item active>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
`.trim();

export const DisabledItemsCode = `   
<ListGroup>
    <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
`.trim();

export const LinksButtonsCode = `   
<ListGroup defaultActiveKey="#link1">
    <ListGroup.Item action href="#link1" active >Cras justo odio</ListGroup.Item>
    <ListGroup.Item action href="#link2">Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item action href="#link3">Morbi leo risus</ListGroup.Item>
    <ListGroup.Item action href="#link4">Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item action href="#link5" disabled>Vestibulum at eros</ListGroup.Item>
</ListGroup>
`.trim();

export const ListButtonCode = `   
<ListGroup defaultActiveKey="#link1">
    <ListGroup.Item action onClick={alertClicked} active >Cras justo odio</ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked}>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked}>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked}>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked} disabled>Vestibulum at eros</ListGroup.Item>                                
</ListGroup>
`.trim();

export const FlushListgroupCode = `   
<ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
`.trim();

export const HorizontalListgroupCode = `   
<ListGroup horizontal>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>                                
</ListGroup>
`.trim();

export const HorizontalListgroupCode2 = `   
<ListGroup horizontal>
    <ListGroup.Item className="flex-fill">Cras justo odio</ListGroup.Item>
    <ListGroup.Item className="flex-fill">Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item className="flex-fill">Morbi leo risus</ListGroup.Item>                                
</ListGroup>
`.trim();

export const ContextualClassesCode = `   
<ListGroup>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item variant="primary">This is a Primary list group item</ListGroup.Item>
    <ListGroup.Item variant="secondary">This is a Secondary list group item</ListGroup.Item>
    <ListGroup.Item variant="success">This is a Success list group item</ListGroup.Item>
    <ListGroup.Item variant="danger">This is a Danger list group item</ListGroup.Item>
    <ListGroup.Item variant="warning">This is a Warning list group item</ListGroup.Item>
    <ListGroup.Item variant="info">This is a Info list group item</ListGroup.Item>
    <ListGroup.Item variant="light">This is a Light list group item</ListGroup.Item>
    <ListGroup.Item variant="dark">This is a Dark list group item</ListGroup.Item>
</ListGroup>
`.trim();

export const WithBadgesCode = `   
<ListGroup>
    <ListGroup.Item className="d-flex justify-content-between" >Cras justo odio <Badge bg="primary">14</Badge> </ListGroup.Item>
    <ListGroup.Item className="d-flex justify-content-between" >Dapibus ac facilisis in <Badge bg="primary">2</Badge></ListGroup.Item>
    <ListGroup.Item className="d-flex justify-content-between" >Morbi leo risus <Badge bg="primary">1</Badge></ListGroup.Item>                                
</ListGroup>
`.trim();

export const CustomContentCode = `   
<ListGroup defaultActiveKey="#link1" >
    <ListGroup.Item action href="#link1" active> 
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
        </div>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
    </ListGroup.Item>
    <ListGroup.Item action href="#link2" > 
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
        </div>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
    </ListGroup.Item>
    <ListGroup.Item action href="#link3" > 
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
        </div>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
    </ListGroup.Item>                                
</ListGroup>
`.trim();

export const WithIconCode = `   
<ListGroup variant="flush">
    <ListGroup.Item>
        <PlayCircle size="15px" className="align-middle me-2 text-primary"/>
        12 hours video
    </ListGroup.Item>
    <ListGroup.Item>
        <Award size="15px" className="align-middle me-2 text-success"/>
        Certificate
    </ListGroup.Item>
    <ListGroup.Item>
        <Calendar size="15px" className="align-middle me-2 text-info"/>
        12 Article
    </ListGroup.Item>
    <ListGroup.Item>
        <Video size="15px" className="align-middle me-2 text-secondary"/>
        Watch Offline
    </ListGroup.Item>
    <ListGroup.Item>
        <Clock size="15px" className="align-middle me-2 text-warning"/>
        Lifetime access
    </ListGroup.Item>
</ListGroup>
`.trim();

export const GroupWithIconCode = ` 
// Below import is required to use DotBadge custom component
// import DotBadge from './DotBadge'; 

<ListGroup variant="flush">
    <ListGroup.Item>
        <span>Post ID</span>
        <h5>8693637308</h5>
    </ListGroup.Item>
    <ListGroup.Item>
        <span>Status</span>
        <h5><DotBadge bg="success" >Published (unsaved changes)</DotBadge></h5>
    </ListGroup.Item>
    <ListGroup.Item>
        <span>Created by</span>
        <div className="d-flex mt-2">
            <Image src={Avatar1} alt="" className="avatar-sm rounded-circle"/>
            <div className="ms-2">
                <h5 className="mb-n1">Geeks Courses</h5>
                <small>Admin</small>
            </div>
        </div>
    </ListGroup.Item>
    <ListGroup.Item>
        <span>Created at</span>
        <h5>Jul 30, 2:21 PM</h5>
    </ListGroup.Item>
    <ListGroup.Item>
        <span>First published at</span>
        <h5>Jul 30, 2:21 PM</h5>
    </ListGroup.Item>
    <ListGroup.Item>
        <span>Last update</span>
        <h5>Aug 31, 12:21 PM</h5>
    </ListGroup.Item>
    <ListGroup.Item>
        <span>Last Published</span>
        <h5>Aug 31, 12:21 PM</h5>
    </ListGroup.Item>
</ListGroup>
`.trim();

export const ListgroupsCode = [
	BasicListgroupCode,
	ActiveItemCode,
	DisabledItemsCode,
	LinksButtonsCode,
	ListButtonCode,
	FlushListgroupCode,
	HorizontalListgroupCode,
	HorizontalListgroupCode2,
	ContextualClassesCode,
	WithBadgesCode,
	CustomContentCode,
	WithIconCode,
	GroupWithIconCode
];

export default ListgroupsCode;
