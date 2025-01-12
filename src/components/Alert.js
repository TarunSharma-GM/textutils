import React from 'react'

export default function Alert(props) {
    const capt = (word) => {
        let txt = word.toLowerCase();
        return txt.charAt(0).toUpperCase()+txt.slice(1);
    }
  return (
    <div style={{height:"50px"}}>
    {props.alert && <div>
        <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capt(props.alert.type)} </strong>{props.alert.msg}
        </div>
    </div>}
    </div>
  )
}
