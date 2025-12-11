'use client'

// import node module libraries
import { Fragment, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HighlightCode = ({ code }) => {
	const [copied, setCopied] = useState(false);
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => setCopied(false), 3000); // Reset 'copied' state after 2 seconds
		} catch (err) {
			console.error('Failed to copy text: ', err);
			// Handle error, e.g., show an error message to the user
		}
	};
	return (
		<Fragment>
			{/* <CopyToClipboard text={code}>
				<button className="copy-button" onClick={copyAction}>
					Copy
				</button>
			</CopyToClipboard> */}
			<button className="copy-button" onClick={handleCopy}>
				{copied ? 'Copied!' : 'Copy'}
			</button>
			<SyntaxHighlighter language="handlebars" style={shadesOfPurple} className="rounded">
				{code}
			</SyntaxHighlighter>
		</Fragment>
	);
};
export default HighlightCode;
