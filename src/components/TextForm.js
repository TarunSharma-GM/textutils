import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success")
    }

    const clearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared","success")
    }

    const reverseClick = () =>{
        let newText = text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Text reverserd","success")
    }

    const removeExtraSpace = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces","success")
    }

    const handleOnChange = (event) => {
       // console.log("changed");
        setText(event.target.value);
    }

    const [text,setText] = useState("Enter Text");
    return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clearClick}>Clear Text</button>
            <button className="btn btn-danger mx-1" onClick={reverseClick}>Reverse Text</button>
            <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Space</button>
        </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{text.length>0?text.split(" ").length:0} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter Something above to Preview'}</p>
    </div>
    </>
  )
}
