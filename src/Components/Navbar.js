import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const Navbar=(props)=>{
    return (
      <div>
        <nav className="navbar bg-primary navbar-expand-lg text-light fixed-top" data-bs-theme="dark" >
  <div className="container-fluid">
    < NavLink  className="navbar-brand" to="/">NewsApp </ NavLink >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          < NavLink  className="nav-link active" aria-current="page" to="/">Home</ NavLink >
        </li>
        {/* <li className="nav-item" style={{color:"#ffffff"}}>
          < NavLink   className="nav-link" to="/about">About</ NavLink ></li> */}
          <li className="nav-item"> < NavLink  className="nav-link" to="/business">Business
</ NavLink ></li>
<li className="nav-item">  <NavLink className="nav-link" to="/entertainment">Entertainment
</NavLink ></li>
<li className="nav-item">  <NavLink className="nav-link" to="/general">General
</NavLink ></li>
<li className="nav-item"><NavLink  className="nav-link" to="/health">Health
</NavLink ></li>
<li className="nav-item">   <NavLink className="nav-link" to="/science">Science
</NavLink >
        </li>
        <li className="nav-item"><NavLink  className="nav-link" to="/sports">Sports

</NavLink ></li>
<li className="nav-item">   <NavLink  className="nav-link" to="/technology">Technology
</NavLink >
        </li>


        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="#">Action</a></li>
            <li><a className="dropdown-item" to="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>

    </div>
  </div>
</nav>
      </div>
    );
  }


export default Navbar;
