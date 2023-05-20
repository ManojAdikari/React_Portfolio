import React from 'react';
import {Link}from 'react-router-dom';

function Nav() {

    return (
        <nav className="navbar navbar-light navbar-expand-md py-3 fixed-top">
            <div className="container">
                <a href="" className="navbar-brand">

                    <h3 className="d-inline align-middle"/>
                </a>
                <button className="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" >About me</Link>
                        </li>
                        < li className="nav-item">
                            <Link to='/portfolio' className="nav-link" href="#about">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link" href="#skill">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/resume' className="nav-link" href="#portfolio">Resume </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>

        </nav>


    );

}
export default Nav;
