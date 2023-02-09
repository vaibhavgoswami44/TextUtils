import React from "react";
import '../App.css'

const Home = (props) => {

    return (
        <>
            <div className={`container homeDiv p-4 `} style={{ background: props.mode === 'light' ? 'white' : 'rgb(108, 110, 201)', boxShadow: props.mode === 'light' ? '' : '5px 5px 25px 15px rgb(36 , 26, 26)' }}>
                <h1 className={` text-dark mb-4 `}>TextUtils</h1>
                <textarea className="mb-4" style={{ height: '20vh', width: '80%', background: props.mode === 'light' ? 'white' : 'rgb(108, 110, 201)', color: props.mode === 'light' ? 'black' : 'black', boxShadow: props.mode === 'light' ? '' : '5px 5px 25px 15px rgb(36 , 26, 26)' }} placeholder='Enter Text Hear' value={props.text} onChange={props.handleText}></textarea>
                <div>
                    <button type="button" className="my-1 me-1 btn-sm btn btn-primary" style={{ background: props.mode === 'light' ? 'blue' : 'rgb(59, 60, 124)' }} onClick={props.handleUpperCase}>Click To Covert UpperCase</button>
                    <button type="button" className="my-1 me-1 btn-sm btn btn-primary" style={{ background: props.mode === 'light' ? 'blue' : 'rgb(59, 60, 124)' }} onClick={props.handleLowerCase}>Click To Covert LowerCase</button>
                    <button type="button" className="my-1 me-1 btn-sm btn btn-primary" style={{ background: props.mode === 'light' ? 'blue' : 'rgb(59, 60, 124)' }} onClick={props.handleClearText}>Click To Clear Text</button>
                    <button type="button" className="my-1 me-1 btn-sm btn btn-primary" style={{ background: props.mode === 'light' ? 'blue' : 'rgb(59, 60, 124)' }} onClick={props.handleExtraSpaces}>Click To Remove Extra Spaces</button>
                    <button type="button" className="my-1 me-1 btn-sm btn btn-primary" style={{ background: props.mode === 'light' ? 'blue' : 'rgb(59, 60, 124)' }} onClick={props.handleCopy}>Click To Copy Text</button>
                </div>
                <h5 className={` text-dark mt-2`}>Text Summary</h5>
                <p className={` text-dark `}> {props.text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {props.text.length} characters</p>
                <h2 className={` text-dark `}>Preview</h2>
                <p className={` text-dark pb-4 `}>{props.text.length === 0 ? "Enter Text To Preview" : props.text}</p>
            </div>
        </>
    );
}
export default Home;