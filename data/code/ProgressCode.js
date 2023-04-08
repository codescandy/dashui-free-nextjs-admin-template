export const DefaultProgressCode = `   
<ProgressBar now={0} className="mb-2" />
<ProgressBar now={25} className="mb-2" />
<ProgressBar now={50} className="mb-2" />
<ProgressBar now={75} className="mb-2" />
<ProgressBar now={100} className="mb-2" />
`.trim();

export const ProgressLabelsCode = `   
<ProgressBar now={25} label={\`\${25}%\`} />
`.trim();

export const ProgressHeightCode = `   
<ProgressBar now={25} className="mb-2" style={ { height : '1px'}}  />
<ProgressBar now={25} className="mb-2" style={ { height : '20px'}}  />
`.trim();

export const ProgressBackgroundsCode = `   
<ProgressBar variant="success" now={25} className="mb-2" />
<ProgressBar variant="info" now={50} className="mb-2" />
<ProgressBar variant="warning" now={75} className="mb-2" />
<ProgressBar variant="danger" now={100} className="mb-2" />
`.trim();

export const MultipleBarsCode = `   
<ProgressBar variant="primary" now={15} key={1} className="mb-2" />
<ProgressBar variant="success" now={30} key={2} className="mb-2" />
<ProgressBar variant="info" now={20} key={3} className="mb-2" />
`.trim();

export const StripedCode = `   
<ProgressBar striped variant="primary" now={10} className="mb-2" />
<ProgressBar striped variant="success" now={25} className="mb-2" />
<ProgressBar striped variant="info" now={50} className="mb-2" />
<ProgressBar striped variant="warning" now={75} className="mb-2" />
<ProgressBar striped variant="danger" now={100} className="mb-2" />
`.trim();

export const AnimatedCode = `   
<ProgressBar animated now={75} />
`.trim();

export const ProgressCode = [
	DefaultProgressCode,
	ProgressLabelsCode,
	ProgressHeightCode,
	ProgressBackgroundsCode,
	MultipleBarsCode,
	StripedCode,
	AnimatedCode
];

export default ProgressCode;
