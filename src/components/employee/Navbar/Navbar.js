import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css'
import { NavLink } from 'react-router-dom';



class Navbar extends Component{
    
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: this.state.clicked}) 
    }
    

    render(){
        return(
            <nav className="NavbarItems">
                <div className="esi-logo-container">
                <img src="/esi.png" className="esi-logo"/>
                </div>
                <div className="navbar-logo">
                   ESI-SBA SW
                </div>  
                
                <div className="menu-icon" onClick={this.handleClick}>
                  
                </div>
                <ul className="nav-menu">
  {MenuItems.map((item, index) => (
    <li key={index}>
      {item.title === 'Requests' ? (
        <NavLink
          to={item.url}
          className={item.cName}
          activeClassName="nav-links-active"
        >
          <i className={item.icon}></i>
          {item.title}
        </NavLink>
      ) : (
        <a className={item.cName} href={item.url}>
          <i className={item.icon}></i>
          {item.title}
        </a>
      )}
    </li>
  ))}
</ul>

            </nav>
        )
    }
}

export default Navbar