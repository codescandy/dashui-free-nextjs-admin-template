export const BasicCollapsesCode = ` 
const Collapses = () => {
    const [open, setOpen] = useState(false);    
    return (  
        <Fragment> 
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                >
                Toggle Button
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text" className="pt-3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Collapse>     
        </Fragment>
    )
}
    `.trim();

export const FadeCollapses = ` 

const Collapses = () => {    
    const [openFade, setOpenFade] = useState(false);
    return (
        <Fragment>   
            <Button
                onClick={() => setOpenFade(!openFade)}
                aria-controls="example-fade-text"
                aria-expanded={openFade}
                >
                Toggle text
            </Button>
            <Fade in={openFade}>
                <div id="example-fade-text" className="pt-4">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Fade>  
        </Fragment>
    )
}
`.trim();

export const CollapsesCode = [BasicCollapsesCode, FadeCollapses];

export default CollapsesCode;
