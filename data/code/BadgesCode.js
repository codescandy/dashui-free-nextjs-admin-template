export const SimpleBadgeCode = `   
<h1> Example heading <Badge bg="secondary">New</Badge></h1>
<h2> Example heading <Badge bg="secondary">New</Badge></h2>
<h3> Example heading <Badge bg="secondary">New</Badge> </h3>
<h4> Example heading <Badge bg="secondary">New</Badge></h4>
<h5> Example heading <Badge bg="secondary">New</Badge> </h5>
<h6> Example heading <Badge bg="secondary">New</Badge></h6>
`.trim();

export const BadgeWithButtonCode = `   
<Button variant="primary">
    Notifications <Badge bg="light" className="text-primary">4</Badge>                                        
</Button>
`.trim();

export const PillBadgesCode = `   
<Badge pill bg="primary"  className="me-1">primary</Badge>
<Badge pill bg="secondary"  className="me-1">secondary</Badge>
<Badge pill bg="success"  className="me-1">success</Badge>
<Badge pill bg="danger"  className="me-1">danger</Badge>
<Badge pill bg="warning"  className="me-1">warning</Badge>
<Badge pill bg="info"  className="me-1">info</Badge>
<Badge pill bg="light" text="dark" className="me-1">light</Badge>
<Badge pill bg="dark"  className="me-1">dark</Badge>
`.trim();


export const PaginationsCode = [
	SimpleBadgeCode,
	BadgeWithButtonCode,
	PillBadgesCode
];

export default PaginationsCode;
