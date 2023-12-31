import React, { useState } from "react";

const TextForm = (props) => {


    const [text, setText] = useState("Enter text here");

    // Change into UppperCase
    const handleUpperClick = () => {
        setText('You have clicked on handleUpClick')
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!', 'success')
    }


    // Change into LowerCase
    const handleLowerClick = () => {
        setText('You have clicked on handleUpClick')
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!', 'success')
    }


    // Change into Clear All Text
    const handleClearClick = () => {
        setText('');
        props.showAlert('Text clear!', 'success')
    }


    // Reverse Text
    const handleReverseClick = () => {
        let newText = text.split('').reverse().join("");
        setText(newText);
        props.showAlert('Converted to reverse order!', 'success')
    }



    const handlerOnChange = (event) => {
        setText(event.target.value)
    }

    // Copy All Text
    const handleCopyText = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges()
        props.showAlert('Copied text!', 'success')
    }

    // It Remove Extra spaces
    const handleRemoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces get removed!', 'success')
    }

    // For Selecting all text
    const handleSelectText = () => {
        let text = document.getElementById('myBox');
        text.select();
        props.showAlert('Text selected!', 'success')
    }


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3 className="my-2 mb-4">{props.heading}</h3>
                <div className="mb-3 col-sm-15">
                    <textarea className="form-control"
                        id="myBox"
                        rows="7"
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }}
                        value={text}
                        onChange={handlerOnChange}

                    ></textarea>
                </div>
                <div className="my-3">
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>Convert to Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear All</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse All</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaces}>Remove Extra spaces</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSelectText}>Select Text</button>
                </div>
            </div>

            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p> {text.split(/\s+/   ).filter((ele) => { return ele.length !== 0 }).length} words And {text.length} chracters</p>
                <p> {0.008 * text.split(" ").filter((ele) => { return ele.length !== 0 }).length} Minutes read</p>
                <h1>Preview</h1>
                <p>{text.trim().length > 0 ? text : "Nothing to preview"}</p>
            </div>

        </>
    )
}

export default TextForm;