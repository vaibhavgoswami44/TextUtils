import React from "react";
import '../App.css'

const Home = (props) => {

    return (
        <>
            <div className={`container homeDiv pt-4 pe-4 pb-4`} style={{ background: props.mode === 'light' ? 'white' : 'rgb(8 9 34)', borderRadius: "12px",  boxShadow: props.mode === 'light' ? '' : 'rgb(103 170 217) 1px 1px 20px 2px' }}>
                <h1 className={` mb-4 text-${props.textMode} `}>TextUtils</h1>
                <textarea className={`mb-4 ${props.textarea}`} style={{ height: '20vh', width: '100%', background: props.mode === 'light' ? 'white' : 'rgb(11 12 68)', color: props.mode === 'light' ? 'black' : 'white',  boxShadow: props.mode === 'light' ? '' : 'rgb(103 170 217) 1px 1px 20px 2px' }} placeholder='Enter Text Hear' value={props.text} onChange={props.handleText}></textarea>
                <div>
                    <button type="button" className="my-1 me-1 btn-sm btn btn-primary" style={{ background: props.mode === 'light' ? 'blue' : 'rgb(59, 60, 124)' }} onClick={props.handleUpperCase}  disabled={props.text.split(/\s+/).filter((element) => { return element.length !== 0  }).length===0} >Click To Covert UpperCase</button>
                    <button type="button" className="my-1 me-1 btn-sm btn btn-primary" style={{ background: props.mode === 'light' ? 'blue' : 'rgb(59, 60, 124)' }} onClick={props.handleLowerCase}  disabled={props.text.split(/\s+/).filter((element) => { return element.length !== 0  }).length===0} >Click To Covert LowerCase</button>
                    <button type="button" className="my-1 me-1 btn-sm btn btn-primary" style={{ background: props.mode === 'light' ? 'blue' : 'rgb(59, 60, 124)' }} onClick={props.handleClearText}  disabled={props.text.length===0} >Click To Clear Text</button>
                    <button type="button" className="my-1 me-1 btn-sm btn btn-primary" style={{ background: props.mode === 'light' ? 'blue' : 'rgb(59, 60, 124)' }} onClick={props.handleExtraSpaces}  disabled={props.text.split(/\s+/).filter((element) => { return element.length !== 0  }).length===0} >Click To Remove Extra Spaces</button>
                    <button type="button" className="my-1 me-1 btn-sm btn btn-primary" style={{ background: props.mode === 'light' ? 'blue' : 'rgb(59, 60, 124)' }} onClick={props.handleCopy}  disabled={props.text.split(/\s+/).filter((element) => { return element.length !== 0  }).length===0} >Click To Copy Text</button>
                </div>
                <h5 className={` mt-2 text-${props.textMode}`}>Text Summary {props.textarea}</h5>
                <p className={` text-${props.textMode} `}> {props.text.split(/\s+/).filter((element) => { return element.length !== 0  }).length} words and {props.text.trim().length} characters  and  {props.text.length-props.text.trim().length} spaces</p>
                <h2 className={` text-${props.textMode} `}>Preview</h2>
                <p className={` pb-4 text-${props.textMode} `}>{props.text.split(/\s+/).filter((element) => { return element.length !== 0  }).length===0? "Enter Text To Preview" : props.text}</p>
            </div>
        </>
    );
}
export default Home;