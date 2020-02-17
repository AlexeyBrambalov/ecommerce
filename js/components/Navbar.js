import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import tele from '../../assets/telephone.png'
import flag from '../../assets/flag.png'
import logo from '../../assets/logo.png'

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                
                    <header>
                        <nav className="navbar">
                            <ul className="navbar__list">
                                <li className="navbar__list__pic"><img src={tele} alt="tel"/></li>
                                <li className="navbar__list__item">1337 1337 1337</li>
                                <li className="navbar__list__pic"><img src={flag} alt="flag"/></li>
                                <li className="navbar__list__item">Try Another Castle</li>
                            </ul>         
                        </nav>
                    
                    <div className="main"> 
                        <img src={logo} className="main__logo" alt="logo"/>
                    </div>
                    </header>
               
            </React.Fragment>   
        )
    }
}
