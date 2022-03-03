import '../assets/navbar.css';
import ic_twitter from '../img/ic_twitter.png';
import ic_linkedin from '../img/ic_linkedin.png';
import ic_medium from '../img/ic_medium.png';
import ic_div from '../img/ic_div.png';
import logo from '../img/logo.png';
// import React, { useEffect, useState } from 'react';

import ReactClock from './ReactClock';



function NavBar(props) {
	return (
		<nav className="navbar no-select py-0 px-3 align-middle overflow-hidden">
        <ul className="nav" id="dropdown-menu">
            <a className="navbar-brand my-0 p-0" href="https://scotts.computer">
                 <span className="vertical-helper"></span><img src={logo} alt="" width="20" height="18" />
            </a>
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About Me
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Socials</a>
                    <a className="dropdown-item" href="#">Contact</a>
                    <a className="dropdown-item" href="#">Readme</a>
                </div>
            </li>   
        </ul>


        <div className="socialLinks d-none d-md-flex py-0 my-0">
                <a className="mr-2" href="https://twitter.com/scottz_thoughtz">
                    <span className="vertical-helper social-link"></span><img src={ic_twitter} alt="ic_twitter" height="16px" />
                </a>
                <a className="mr-2" href="https://www.linkedin.com/in/ascotthendrix/">
                    <span className="vertical-helper"></span><img src={ic_linkedin} alt="ic_linkedin" height="16px" />
                </a>
                <a className="mr-2" href="https://medium.com/@scotthendrix">
                    <span className="vertical-helper"></span><img src={ic_medium} alt="ic_medium" height="16px" />
                </a>
                <a className="mr-2">
                    <span className="vertical-helper"></span><img className="default-pointer nav-div" src={ic_div} alt="ic_div" />
                </a>
                <span className="vertical-helper align-middle">
                    <a className="default-pointer" id="currentTime">
                        <ReactClock />
                    </a>
                </span>
        </div>
</nav>
		)
}

export default NavBar;