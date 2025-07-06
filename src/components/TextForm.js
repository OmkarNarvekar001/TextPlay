import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TextForm.css';

export default function TextForm({ heading = 'Enter heading', textplaceholder = 'Enter text here', darkMode }) {
    const [txtarea, updateText] = useState('');
    const [output, setOutput] = useState(''); // output shown in preview

    const handleOnChange = (event) => {
        const input = event.target.value;
        updateText(input);
        setOutput(input); // 👈 live update preview while typing
    };

    const ConvertUpper = () => {
        setOutput(txtarea.toUpperCase());
    };

    const ConvertLower = () => {
        setOutput(txtarea.toLowerCase());
    };

    const TrimTxt = () => {
        const noSpaces = txtarea.replace(/\s+/g, '');
        setOutput(noSpaces);
    };

    const ReverseTxt = () => {
        const reversed = txtarea.split('').reverse().join('');
        setOutput(reversed);
    };

    const ClearText = () => {
        alert('The text area and output will be cleared');
        updateText('');
        setOutput('');
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
                            <button type="button" className="btn btn-outline-success" onClick={ConvertUpper}>
                                Convert to UpperCase
                            </button>
                            <button type="button" className="btn btn-outline-success" onClick={ConvertLower}>
                                Convert to LowerCase
                            </button>
                            <button type="button" className="btn btn-outline-success" onClick={ReverseTxt}>
                                Reverse
                            </button>
                            <button type="button" className="btn btn-outline-primary" onClick={TrimTxt}>
                                Trim whitespace
                            </button>
                            <button type="button" className="btn btn-outline-danger" onClick={ClearText}>
                                Clear Textbox
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {(output && output.trim()) && (
                <div className={`${darkMode ? 'textform-container dark' : 'textform-container'} container row justify-content-center mx-0`}>
                    <div className="className col-12 col-md-10 col-lg-8">
                    <h1>Preview</h1>
                    <textarea
                        readOnly
                        value={output}
                        rows="2"
                        className={`form-control mb-2 ${darkMode ? 'bg-dark text-light' : ''}`}
                    ></textarea>
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
};
