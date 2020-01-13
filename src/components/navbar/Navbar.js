import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default class Navbar extends Component {
    render(){
        return (
            <div className = "Navbar">
                <div className = "navbar_div">
                    <ul>
                        <li><Link to="/" >home</Link></li>
                        <li><Link to="/about-us" >about us</Link></li>
                        <li><Link to="/contact-us" >contact us</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}