import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(){
    return(
        <nav className="navbar sticky-top navbar-expand-lg bg-*">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Thomas Chen</Link>
            <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mt-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to= "/projects">Projects</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to= "/experiences">Experiences</Link>
                </li>
                <a className="btn btn-primary customBtn" href="https://airtable.com/shrmd9pYDGZusEGcc" target=" Blank"> Contact Me</a>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;