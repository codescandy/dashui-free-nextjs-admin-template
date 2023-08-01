'use client'

// import node module libraries
import { Fragment } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HighlightCode = ({ code }) => {
	const copyAction = (event) => {
		event.target.innerHTML = 'Copied';
		setTimeout(() => {
			event.target.innerHTML = 'Copy';
		}, 3000);
	};
	return (
		<Fragment>
			<CopyToClipboard text={code}>
				<button className="copy-button" onClick={copyAction}>
					Copy
				</button>
			</CopyToClipboard>
			<SyntaxHighlighter language="handlebars" style={shadesOfPurple} className="rounded">
				{code}
			</SyntaxHighlighter>
		</Fragment>
	);
};
export default HighlightCode;
