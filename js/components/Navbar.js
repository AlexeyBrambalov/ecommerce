import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import tele from '../../assets/telephone.png'
import flag from '../../assets/flag.png'
import logo from '../../assets/logo.png'

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>

                    <nav className="navbar">
                        <ul className="navbar-list">
                            <li className="navbar-list-pic"><img src={tele} alt="tel"/></li>
                            <li className="navbar-list-item">1337 1337 1337</li>
                            <li className="navbar-list-pic"><img src={flag} alt="flag"/></li>
                            <li className="navbar-list-item">Try Another Castle</li>
                        </ul>         
                    </nav>
                    
                    <div className="main"> 
                        <img src={logo} className="main-logo" alt="logo"/>
                    </div>

            </React.Fragment>   
        )
    }
}
