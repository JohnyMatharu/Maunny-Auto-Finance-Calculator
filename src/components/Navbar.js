import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
// import the library

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Navbar extends React.Component {

  render() {    
    const { location } = this.props;
        const isHome = location.pathname === "/";
    return (
      <div className="nav">

      <div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '27px', fontFamily: 'Futura', fontWeight: 'bold' }}>
        <span style={{color:'#00F4A2'}}>GoHelpPal</span></h3></div>
        {/* Make changes with brand color as in previous line */}
    {/* <div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '24px', fontFamily: 'Futura', fontWeight: 'bold' }}><span style={{color:'#13d34b'}}>Go</span><span style={{color:'#3c6cd2'}}>Help</span><span style={{color:'#b429b0'}}>Pal</span></h3></div>
     */}


      <div id ="sectionTwo">  
          <Link to="/" className="Nav__brand">
          </Link>
             
              <div className="aboutMe">
              <NavLink className="firstLink" to="/about" activeStyle={ { color: "#ECEFF8" } }
                             style={ { color: "#00F4A2"} }>
                            
                                

{/* Try to reset the padding to lower the icon and line bottom, check Johny Matharu also */}

      <div className="App">
        <FontAwesomeIcon icon={faHome} style={{ fontSize: '18px' }}/>
    </div>
                               
                               </NavLink></div>
            {/* only when not active it should turn to dark grey keeping in mind with hover effect */}
              <div className="Resume">
                <NavLink className="fourthLink" to="/resume" activeStyle={{color: "#ECEFF8", fontSize: '18px'}}
                 style={ { color: "#808080"} }
                >Johny Matharu</NavLink>
              </div>
      </div>
      
      </div>
      
    );
  }
} 
  
const NavbarWithRouter = withRouter(Navbar);

export default NavbarWithRouter;



      
      
//https://github.com/JohnnyMatharu/Workday-Scheduler/blob/main/index.html
