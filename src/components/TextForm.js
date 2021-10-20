import React, {useState} from 'react'

export default function TextForm(props) {

    
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    // can get the event target value
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const [text, setText] = useState('initialState');

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
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
        </>
    )
}
