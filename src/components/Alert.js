import React from 'react'

function Alert(props) {
    const toCapital = word=>{
        let temp = word.toLowerCase();
        return temp.charAt(0).toUpperCase() + temp.slice(1);
    }
  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{toCapital(props.alert.type)}: </strong>{props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}

export default Alert
