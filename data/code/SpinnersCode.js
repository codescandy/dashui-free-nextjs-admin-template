export const BorderSpinnerCode = `   
<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>
`.trim();

export const SpinnersColorsCode = `   
<Spinner animation="border" variant="primary" className="me-2" />
<Spinner animation="border" variant="secondary" className="me-2" />
<Spinner animation="border" variant="success" className="me-2" />
<Spinner animation="border" variant="danger" className="me-2" />
<Spinner animation="border" variant="warning" className="me-2" />
<Spinner animation="border" variant="info" className="me-2" />
<Spinner animation="border" variant="light" className="me-2" />
<Spinner animation="border" variant="dark" />
`.trim();

export const GrowingSpinnerCode = `   
<Spinner animation="grow" />
`.trim();

export const GrowColorsCode = `   
<Spinner animation="grow" variant="primary" className="me-2" />
<Spinner animation="grow" variant="secondary" className="me-2" />
<Spinner animation="grow" variant="success" className="me-2" />
<Spinner animation="grow" variant="danger" className="me-2" />
<Spinner animation="grow" variant="warning" className="me-2" />
<Spinner animation="grow" variant="info" className="me-2" />
<Spinner animation="grow" variant="light" className="me-2" />
<Spinner animation="grow" variant="dark" />
`.trim();

export const AlignmentCode = `   
<Spinner animation="border" role="status" className="m-5">
    <span className="visually-hidden">Loading...</span>
</Spinner>
`.trim();

export const PlacementCenterCode = `   
<div className="d-flex justify-content-center">
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
</div>
`.trim();

export const PlacementLoadingCode = `   
<div className="d-flex  align-items-center">
    <strong>Loading...</strong>
    <Spinner animation="border" role="status" className="ms-auto">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
</div>
`.trim();

export const FloatsCode = `   
<Spinner animation="border" role="status" className="float-end">
    <span className="visually-hidden">Loading...</span>
</Spinner>
`.trim();

export const TextAlignCode = `   
<div className="text-center">
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
</div>
`.trim();

export const SizeSpinnersCode = `   
<Spinner animation="border" size="sm" className="me-2"/> 
<Spinner animation="grow" size="sm" />
`.trim();

export const StyleCSSCode = `   
<Spinner animation="border" style={{ width: '3rem', height: '3rem' }} className="me-2" />
<Spinner animation="grow" style={{ width: '3rem', height: '3rem' }} />
`.trim();

export const ButtonsCode = `   
<Button variant="primary" disabled className="me-2">
    <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
    />
    <span className="visually-hidden">Loading...</span>
    </Button>
    <Button variant="primary" disabled>
    <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
    />
    Loading...
</Button>
`.trim();

export const Buttons2Code = `   
<Button variant="primary" disabled className="me-2">
    <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
    />
    <span className="visually-hidden">Loading...</span>
</Button>
<Button variant="primary" disabled>
    <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
    />
    Loading...
</Button>
`.trim();

export const SpinnersCode = [
	BorderSpinnerCode,
	SpinnersColorsCode,
	GrowingSpinnerCode,
	GrowColorsCode,
	AlignmentCode,
	PlacementCenterCode,
	PlacementLoadingCode,
	FloatsCode,
	TextAlignCode,
	SizeSpinnersCode,
	StyleCSSCode,
	ButtonsCode,
	Buttons2Code
];

export default SpinnersCode;
