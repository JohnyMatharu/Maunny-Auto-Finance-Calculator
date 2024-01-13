import React, {useState, useEffect} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import carPic from '../pictures/car.png'
// import the library

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Navbar() {
  const [count, setCount] = useState (+localStorage.getItem('count'));

  

 
  
    return (
      <div className="nav">

      <div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '36px', fontFamily: 'roboto', fontWeight: 'bold' }}>
        <span style={{color:'#ff66c4'}}>Maunny's</span></h3></div>
        {/* Make changes with brand color as in previous line */}
    {/* <div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '24px', fontFamily: 'Futura', fontWeight: 'bold' }}><span style={{color:'#13d34b'}}>Go</span><span style={{color:'#3c6cd2'}}>Help</span><span style={{color:'#b429b0'}}>Pal</span></h3></div>
     */}


      <div id ="sectionTwo">  
          <Link to="/" className="Nav__brand">
          </Link>
             
             
            {/* only when not active it should turn to dark grey keeping in mind with hover effect */}
              <div className="Detail">
                <NavLink className="fourthLink" to="/vehicleDetail" activeStyle={{color: "#ECEFF8", fontSize: '18px'}}
                 style={ { color: "#808080"} }
                >
                  {/* this is link for VDP but no name is given so it will not be visible */}
                </NavLink>
              
              
              
              </div>

              <div className="Cart">
              <NavLink className="firstLink" to="/shoppingCart" activeStyle={ { color: "#ff66c4" } }
                             style={ { color: "Black"} }>
                            
                                

{/* Try to reset the padding to lower the icon and line bottom, check Johny Matharu also */}

      <div id ="truckSize" className="App">
        {/* <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '18px' }}/> */}
   {/* <div style = {{backgroundImage: 'url(${truckPic})', backgroundSize: "cover"}}> */}
   {/* */}
   <div id ="car"> <img id = "carSize" alt="car" src={carPic}></img></div>
 <div id="number" style = {{paddingRight: "23px", fontSize: "15px"}}>{count}</div> 
  
      
   
  {/* <div style = {{paddingRight: "17px", fontSize: "6px"}}>4</div> */}
    {/* </div>  */}
    
      
    </div>
                               
                               </NavLink></div>




      </div>
      
      </div>
      
    );
  }




      
      
//https://github.com/JohnnyMatharu/Workday-Scheduler/blob/main/index.html
