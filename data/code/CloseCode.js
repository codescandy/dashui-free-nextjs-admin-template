export const GenericCloseButtonCode = ` 
<CloseButton className="btn-close"/> 
`.trim();

export const DisabledStateCode = ` 
<CloseButton className="btn-close" disabled />
`.trim();

export const WhiteVariantCode = ` 
<div className="bg-dark p-3">
    <CloseButton className="btn-close" variant="white" />
    <CloseButton className="btn-close" variant="white" disabled />
</div>
`.trim();

export const CollapsesCode = [
	GenericCloseButtonCode,
	DisabledStateCode,
	WhiteVariantCode
];

export default CollapsesCode;
