import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text );
    let newText = text.toUpperCase();
    setText(newText);
        props.showAlert("Converted to uppercase!", "success");

  };
  const handleLoClick = () => {
    //console.log("Lowercase was clicked" + text );
    let newText = text.toLowerCase();
    setText(newText);
        props.showAlert("Converted to lowercase!", "success");

  };
  

  const handleclearClick = () => {
    //console.log("Uppercase was clicked" + text );
    let newText = "";
    setText(newText);
            props.showAlert("Textbox is clear now!", "success");

  };

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
            props.showAlert("Text Copied!", "success");


  }
  const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/).join(" ");
  setText(newText);
  props.showAlert("Extra spaces removed!", "success");
};


  const [text, setText] = useState("");
  //text = "new text"; //wrong way to change the state
  //setText("new text"); // correct way to change the state

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}}
            rows="8"
          ></textarea>
        </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick}>
          ClearText
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          CopyText
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3> Your Text Summary</h3>
        <p>
          {text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here............"}</p>
      </div>

    </>
  );
}
