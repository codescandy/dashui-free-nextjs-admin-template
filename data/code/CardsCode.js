export const BasicCardCode = `  
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://fakeimg.pl/640x360/?text=Image Placeholder" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>
`.trim();

export const CardBodyCode = `   
<Card>
    <Card.Body>This is some text within a card body.</Card.Body>
</Card>
`.trim();

export const TitlesTextLinksCode = `   
<Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
</Card>
`.trim();

export const ListGroups1Code = `   
<Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>
`.trim();

export const ListGroups2Code = `   
<Card style={{ width: '18rem' }}>
  <Card.Header>Featured</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>
`.trim();

export const CardImagesCode = `   
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://fakeimg.pl/640x360/?text=Image Placeholder" />
    <Card.Body>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
    </Card.Body>
</Card>
`.trim();

export const KitchenSinkCode = `   
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://fakeimg.pl/640x360/?text=Image Placeholder" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
    <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
</Card>
`.trim();

export const HeaderFooterCode = `   
<Card>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
            With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>
`.trim();

export const HeaderFooterCode2 = `   
<Card className="text-center">
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
            With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
`.trim();

export const TextAlignmentCode = `   
<Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
            With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>

<Card style={{ width: '18rem' }} className="text-center">
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
            With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>

<Card style={{ width: '18rem' }} className="text-end">
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
            With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>
`.trim();

export const ImagesTopBottomCode = `   
<Card>
    <Card.Img variant="top" src="https://fakeimg.pl/640x360/?text=Image Placeholder" />
    <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Text>
    </Card.Body>
</Card>
<br />
<Card>
    <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://fakeimg.pl/640x360/?text=Image Placeholder" />
</Card>
`.trim();

export const ImageOverlaysCode = `   
<Card className="bg-dark text-white">
    <Card.Img variant="bottom" src="https://fakeimg.pl/640x360/?text=Image Placeholder" />
    <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
</Card>
`.trim();

export const CardsCode = [
	BasicCardCode,
	CardBodyCode,
	TitlesTextLinksCode,
	ListGroups1Code,
	ListGroups2Code,
	CardImagesCode,
	KitchenSinkCode,
	HeaderFooterCode,
	HeaderFooterCode2,
	TextAlignmentCode,
	ImagesTopBottomCode,
	ImageOverlaysCode
];

export default CardsCode;
