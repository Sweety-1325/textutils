import React from 'react'

function Alert(props){
    
    return (
    
        <div style={{height:'50px'}}>
            {/* if alert is null the null paart won't evaluate further else it will go further and show alert */}
            
             {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
               <strong>{props.alert.type}  </strong>: {props.alert.msg}
               
            </div>}
        </div>
      
    )
}
export default Alert;