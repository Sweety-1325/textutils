import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props){
  
  
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutUs}</Link>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-info" type="submit">Search</button>
            </form>
          </div>
          {/* <div className='d-flex'>
            {/* onclick needs a function not a function call */}
            {/* <div className='bg-primary rounded mx-2' onClick={()=>{props.changemode('primary')}} style={{height:'20px', width:'20px',  cursor:'pointer'}}></div>
            <div className='bg-success rounded mx-2' onClick={()=>{props.changemode('success')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
            <div className='bg-danger rounded mx-2' onClick={()=>{props.changemode('danger')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
            </div> */}
          <div className={`form-check form-switch text-${(props.mode==='light')?'dark':'light'}`}>
           <input className="form-check-input mx-2" onClick={props.changemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label"  htmlfor="flexSwitchCheckDefault" style= {(props.mode==='light')?{color:'grey'}:{color:'white'}}>Enable {(props.mode==='light')?'dark':'light'} Mode</label>
          </div>
        </div>
      </nav>
      </>
    )
}
//putting the check on the data types of prop so that we don't use any other data types
Navbar.propTypes={title:PropTypes.string.isRequired,
                  aboutUs:PropTypes.string.isRequired}

Navbar.defaultProps={
  title: "Set title here",
    aboutUs: "About Us here"
}             