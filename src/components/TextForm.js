import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const convertToUpperCase = ()=>{
        if(text === ""){
            props.showAlert("Enter text in text box!","info");
            return;
        }
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to upper case!", "success");
    }
    const convertToLowerCase = ()=>{
        if(text === ""){
            props.showAlert("Enter text in text box!","info");
            return;
        }
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("Converted to lower case!", "success");
    }
    const toCapitalCase = ()=>{
        if(text === ""){
            props.showAlert("Enter text in text box!","info");
            return;
        }
        let wordArr = text.split(" ");
        let newText = wordArr.map(e=>{
               return e.charAt([0]).toUpperCase()+e.slice(1);
        }).join(" ");
        setText(newText);
        props.showAlert("Converted to Capital case!", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <h1><label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text here to analyse it:</label></h1>
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode === "dark" ? "#525570" : "white",color:props.mode === "dark" ? 'white" : "black"}} onChange={handleOnChange}id="exampleFormControlTextarea1" rows="3" ></textarea>
            </div>
            <button className="btn btn-primary" onClick={convertToUpperCase}>Convert text to UpperCase</button>
            <button className="btn btn-secondary mx-5" onClick={convertToLowerCase}>Convert To LowerCase</button>
            <button className="btn btn-success" onClick={toCapitalCase}>Capital case</button>
        </div>
        <div className="container my-5">
            <h2>Your text summary</h2>
            <p>{text === ""? 0 : text.match(/\S+/ig).length} words, {text.length} characters</p>
            <h2 className='my-8'>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}




TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}