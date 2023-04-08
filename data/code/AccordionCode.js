export const AccordionBasicCode = `
<Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
        <strong>This is the accordion body of item 1.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
        These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
        It's also worth noting that just about any HTML can go within the <code>&lt;Accordion.Item&gt;</code> &rarr; <code>&lt;Accordion.Body&gt;</code> though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
        <strong>This is the accordion body of item 2.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
        These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
        It's also worth noting that just about any HTML can go within the <code>&lt;Accordion.Item&gt;</code> &rarr; <code>&lt;Accordion.Body&gt;</code> though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Accordion Item #3</Accordion.Header>
    <Accordion.Body>
        <strong>This is the accordion body of item 3.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
        These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
        It's also worth noting that just about any HTML can go within the <code>&lt;Accordion.Item&gt;</code> &rarr; <code>&lt;Accordion.Body&gt;</code> though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    `.trim();

export const AccordionFlushCode = `
<Accordion defaultActiveKey="0" flush>
    <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
            <strong>This is the accordion body of item 1.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
            These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
            It's also worth noting that just about any HTML can go within the <code>&lt;Accordion.Item&gt;</code> &rarr; <code>&lt;Accordion.Body&gt;</code> though the transition does limit overflow.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
            <strong>This is the accordion body of item 2.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
            These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
            It's also worth noting that just about any HTML can go within the <code>&lt;Accordion.Item&gt;</code> &rarr; <code>&lt;Accordion.Body&gt;</code> though the transition does limit overflow.
        </Accordion.Body>
        </Accordion.Item>
    <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
            <strong>This is the accordion body of item 3.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
            These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
            It's also worth noting that just about any HTML can go within the <code>&lt;Accordion.Item&gt;</code> &rarr; <code>&lt;Accordion.Body&gt;</code> though the transition does limit overflow.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
    `.trim();

export const AccordionCode = [AccordionBasicCode, AccordionFlushCode];

export default AccordionCode;
