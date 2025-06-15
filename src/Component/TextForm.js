import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Convert text to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  // Convert text to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  // Clear text
  const handleClearClick = () => {
    setText("");
    props.showAlert("Textbox is clear now!", "success");
  };

  // Handle typing inside textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Copy text to clipboard
  const handleCopy = () => {
    let textBox = document.getElementById("myBox");
    textBox.select();
    navigator.clipboard.writeText(textBox.value);
    props.showAlert("Text copied!", "success");
  };

  // Remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  return (
    <>
      {/* Text Input Section */}
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}
            rows="8"
          ></textarea>
        </div>

        {/* Button Group: Flex wrap for mobile */}
        <div className="d-flex flex-wrap">
          <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>

      {/* Summary and Preview Section */}
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").filter((word) => word.length > 0).length} words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((word) => word.length > 0).length} Minutes read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it here............"}
        </p>
      </div>
    </>
  );
}
