import React, { useState } from 'react';

const CopyToClipboardButton = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset 'copied' state after 2 seconds
        } catch (err) {
            console.error('Failed to copy text: ', err);
            // Handle error, e.g., show an error message to the user
        }
    };

    return (
        <button onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
    );
};

export default CopyToClipboardButton;