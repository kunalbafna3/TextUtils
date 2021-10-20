import React, {useState} from 'react'

export default function TextForm(props) {

    
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    // can get the event target value
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    // useState syntax from the docs
    const [text, setText] = useState('');

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="myBox">{props.heading}</label>
                    {/* we have to listen onChange so that we can type in textbox */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
            
            </form>
            <br />
            <button className="btn btn-info mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>

            <div className="container my-3">
                <h2>text summary</h2>
                {/* to get words and char on the fly */}
                {/* text.split will give the array and therefore .length for the length */}
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{ 0.008 * text.split(" ").length } Minutes read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
