import React from "react";

const Alert = (props) => {

    return (
        <>
            <div style={{ height: '50px', width: '100%' }}>
                {props.alert &&
                    <div className={`alert alert-${props.alert.type}`} style={{ width: '100%' }} role="alert">
                        {props.alert.msg}
                    </div>}
            </div>
        </>
    );
}
export default Alert;