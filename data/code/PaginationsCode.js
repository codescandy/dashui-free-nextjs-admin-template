export const DefaultPaginationCode = `   
<Pagination>
    <Pagination.Prev>Previous</Pagination.Prev> 
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>                                
    <Pagination.Item>{3}</Pagination.Item>      
    <Pagination.Next>Next</Pagination.Next>
</Pagination>
`.trim();

export const PaginationWithIconsCode = `   
<Pagination>
    <Pagination.First><ChevronsLeft size="18px" /></Pagination.First> 
    <Pagination.Prev><ChevronLeft size="18px" /></Pagination.Prev> 
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>                                
    <Pagination.Item>{3}</Pagination.Item>      
    <Pagination.Next><ChevronRight size="18px"  /></Pagination.Next>
    <Pagination.Last><ChevronsRight size="18px" /></Pagination.Last> 
</Pagination>
`.trim();

export const DisabledActiveCode = `   
<Pagination>
    <Pagination.Prev disabled>Previous</Pagination.Prev> 
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item active>{2}</Pagination.Item>                                
    <Pagination.Item>{3}</Pagination.Item>      
    <Pagination.Next>Next</Pagination.Next>
</Pagination>
`.trim();

export const PaginationSizingCode = `   
<Pagination size="lg">                                
    <Pagination.Item active>{1}</Pagination.Item>
    <Pagination.Item >{2}</Pagination.Item>                                
    <Pagination.Item>{3}</Pagination.Item>                                      
</Pagination>
`.trim();

export const PaginationSizingSmallCode = `   
<Pagination size="sm">                                
    <Pagination.Item active>{1}</Pagination.Item>
    <Pagination.Item >{2}</Pagination.Item>                                
    <Pagination.Item>{3}</Pagination.Item>                                      
</Pagination>
`.trim();

export const AlignmentCode = `   
<Pagination className="justify-content-center">
    <Pagination.Prev disabled>Previous</Pagination.Prev> 
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>                                
    <Pagination.Item>{3}</Pagination.Item>      
    <Pagination.Next>Next</Pagination.Next>
</Pagination>
`.trim();

export const JustifyContentEndCode = `   
<Pagination className="justify-content-end">
    <Pagination.Prev disabled>Previous</Pagination.Prev> 
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>                                
    <Pagination.Item>{3}</Pagination.Item>      
    <Pagination.Next>Next</Pagination.Next>
</Pagination>
`.trim();

export const PaginationsCode = [
	DefaultPaginationCode,
	PaginationWithIconsCode,
	DisabledActiveCode,
	PaginationSizingCode,
	PaginationSizingSmallCode,
	AlignmentCode,
	JustifyContentEndCode
];

export default PaginationsCode;
