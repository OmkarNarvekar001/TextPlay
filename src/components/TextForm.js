import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TextForm.css';

export default function TextForm({ heading = 'Enter heading', textplaceholder = 'Enter text here', darkMode }) {
    const [txtarea, updateText] = useState('');

    const handleOnChange = (event) => {
        updateText(event.target.value);
    };

    const ConvertUpper = () => {
        updateText(txtarea.toUpperCase());
    };

    const ConvertLower = () => {
        updateText(txtarea.toLowerCase());
    };

    const CountChar = () => {
        const c = txtarea.length;
        c.toString();
        updateText("Characters in "+ txtarea + "= " + c);
        setTimeout(() => {
            updateText('');
        }, 8000);
    };

    const ReverseTxt = () => {
        const reversed = txtarea.split('').reverse().join('');
        updateText(reversed);
    };

    const ClearText = () => {
        alert('The text area will be cleared');
        updateText('');
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
                                rows="6"
                            ></textarea>
                        </div>

                        <div className="textform-buttons d-flex flex-wrap gap-2">
                            <button type="button" className="btn btn-outline-primary" onClick={ConvertUpper}>
                                Convert to UpperCase
                            </button>
                            <button type="button" className="btn btn-outline-warning" onClick={ConvertLower}>
                                Convert to LowerCase
                            </button>
                            <button type="button" className="btn btn-outline-success" onClick={ReverseTxt}>
                                Reverse
                            </button>
                            <button type="button" className="btn btn-outline-success" onClick={CountChar}>
                                Count Characters
                            </button>
                            <button type="button" className="btn btn-outline-danger" onClick={ClearText}>
                                Clear Textbox
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    textplaceholder: PropTypes.string,
};
