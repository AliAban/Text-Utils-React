import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li> */}
                    </ul>
                    <div>
                        <i class="fa-solid fa-circle" style={{color : "#ef108a"}} onClick={props.pinkTheme}></i>
                    </div>
                    {/* //this is the button for dark mode */}
                    <div className="form-check form-switch">
                        
                        {/* <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleDarkMode} id="flexSwitchCheckDefault"/> */}
                        <i className={`fa-solid fa-${props.mode === "dark"? "sun" : "moon"} fa-2x mx-3`} style={{color: props.pink === "pink" ||  props.mode === "light"? 'black':'white'}} onClick={props.toggleDarkMode}></i>
                        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.mode.charAt(0).toUpperCase()+props.mode.slice(1)} Mode</label> */}
                        
                        {/* <FontAwesomeIcon icon={faMoonOverSun}/> */}
                    </div>
                    </div>
                </div>
            </nav>
  )
}

Navbar.propTypes = {
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    about: "Set the about here"
}