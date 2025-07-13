import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TextForm.css';

export default function TextForm({ heading = 'Enter heading', textplaceholder = 'Enter text here', darkMode, alert }) {
    const [txtarea, updateText] = useState('');
    const [output, setOutput] = useState('');

    const handleOnChange = (event) => {
        const input = event.target.value;
        updateText(input);
        setOutput(input);
    };

    const ConvertUpper = () => {
        if (!txtarea.trim()) return alert('Text box is empty!', 'warning');
        setOutput(txtarea.toUpperCase());
        alert('Converted to Uppercase!', 'success');
    };

    const ConvertLower = () => {
        if (!txtarea.trim()) return alert('Text box is empty!', 'warning');
        setOutput(txtarea.toLowerCase());
        alert('Converted to Lowercase!', 'success');
    };

    const TrimTxt = () => {
        if (!txtarea.trim()) return alert('Text box is empty!', 'warning');
        const trimmed = txtarea.replace(/\s+/g, '');
        setOutput(trimmed);
        alert('Whitespace removed!', 'success');
    };

    const ReverseTxt = () => {
        if (!txtarea.trim()) return alert('Text box is empty!', 'warning');
        const reversed = txtarea.split('').reverse().join('');
        setOutput(reversed);
        alert('Text Reversed!', 'success');
    };

    const ClearText = () => {
        if (!txtarea.trim() && !output.trim()) {
            alert('Nothing to clear.', 'warning');
        } else {
            updateText('');
            setOutput('');
            alert('Text cleared successfully!', 'danger');
        }
    };

    const CopyTxt = () => {
        if (!output.trim()) return alert('Nothing to copy!', 'warning');
        navigator.clipboard.writeText(output)
            .then(() => alert('Text copied to clipboard!', 'info'))
            .catch(() => alert('Failed to copy text', 'danger'));
    };

    return (
        <>
            <div className={`${darkMode ? 'textform-container dark' : 'textform-container'} container my-4`}>
                <h1 className={`textform-heading text-center mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>{heading}</h1>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="mb-3">
                            <textarea
                                className={`textform-textarea form-control ${darkMode ? 'bg-dark text-light' : ''}`}
                                id="textarea1"
                                value={txtarea}
                                placeholder={textplaceholder}
                                onChange={handleOnChange}
                                rows="2"
                            ></textarea>
                        </div>

                        <div className="textform-buttons d-flex flex-wrap gap-2">
                            <button className="btn btn-outline-success" onClick={ConvertUpper}>Convert to UpperCase</button>
                            <button className="btn btn-outline-success" onClick={ConvertLower}>Convert to LowerCase</button>
                            <button className="btn btn-outline-success" onClick={ReverseTxt}>Reverse</button>
                            <button className="btn btn-outline-warning" onClick={TrimTxt}>Trim whitespace</button>
                            <button className="btn btn-outline-danger" onClick={ClearText}>Clear Textbox</button>
                        </div>
                    </div>
                </div>
            </div>

            {(output && output.trim()) && (
                <div className={`${darkMode ? 'textform-container dark' : 'textform-container'} container row justify-content-center mx-0`}>
                    <div className="col-12 col-md-10 col-lg-8">
                        <h1>Preview</h1>
                        <textarea
                            readOnly
                            value={output}
                            rows="2"
                            className={`form-control mb-2 ${darkMode ? 'bg-dark text-light' : ''}`}
                        ></textarea>
                        <button className="btn btn-outline-info" onClick={CopyTxt}>Copy Text</button>
                        <p>
                            {`Total number of words = ${output.trim().split(/\s+/).length}`} <br />
                            {`Total characters = ${output.length}`}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    textplaceholder: PropTypes.string,
    alert: PropTypes.func.isRequired
};
