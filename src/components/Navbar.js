import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar fixed-top  sticky-top navbar-expand-lg bg-${props.mode === 'light' ? 'light' : 'dark'} `} style={{ width: '100%' }}>
                <div className="container-fluid">
                    <Link className={`navbar-brand text-${props.textMode} `} to='/'>TextUtils</Link>
                    <button className={` ${props.btnClass} navbar-toggler `} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={` text-${props.textMode} nav-link my-1`} to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={` text-${props.textMode} nav-link my-1`} to='/About'>About</Link>
                            </li>
                        </ul>
                        <div className={`  form-check dark-button form-switch `}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleMode} />
                            <label className={` text-${props.textMode} form-check-label my-1 `} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;