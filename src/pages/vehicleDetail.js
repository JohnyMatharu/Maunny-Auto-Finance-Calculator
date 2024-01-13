import pic1 from '../pictures/pic1.jpeg';
import pic2 from '../pictures/pic2.jpeg';
import pic3 from '../pictures/pic3.jpeg';
import { MDBContainer} from "mdbreact";
// import $ from 'jquery';
import './vehicleDetail.css';
import Navbar from '../components/Navbar';
import React, {useState, useEffect} from 'react';
import '../components/navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import truckPic from '../pictures/truck.png'
import carPic from '../pictures/car.png'

// import {Link} from 'react-router-dom'
// import ShoppingCart from './shoppingCart.js';
// import ReactBootstrap from 'react-bootstrap';
// import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton} from 'react-bootstrap';
// import * as ReactDOMClient from 'react-dom/client';
// import {useHistory} from "react-router-dom";
// import { data } from 'jquery';
<script src="/path/to/vehicleDetail.js" type="text/javascript" />

 

class Render extends React.Component {
  constructor(props) {
    super(props);
  }
 
 render() {

  const multipleRender = [
 
        <div id="heightDiv"> 
        <img id ="imgProfile" src={pic1}></img></div>,
        <div id="heightDiv">
        <img id ="imgProfile" src={pic2}></img></div>,
       <div id="heightDiv"> 
        <img id ="imgProfile" src={pic3}></img></div>,
        <div id="heightDiv"> 
        <img id ="imgProfile" src={pic1}></img></div>
    ];
    
    
    
      
    if (this.props.image === 0)
    {
      return multipleRender [this.props.image]; 
    }
    
    else if (this.props.image === 1)  {
      
      return multipleRender [this.props.image]; 
    }
    else if (this.props.image === 2)  {
      
      return multipleRender [this.props.image]; 
    }
    else {
      return multipleRender [this.props.image]; 
    }
    
    }

};




class MyComponent1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 3
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
  handleClick() {
    // change code below this line
    this.setState({
      image: 0
    });}
    // change code above this line
    handleClick2() {
      // change code below this line
      this.setState({
        image: 1
      });  }
      
      handleClick3() {
        // change code below this line
        this.setState({
          image: 2
        }); }




  
  render() {
    return ( <div>
       <div id="profileSpace1"></div>
      
      
      <div id = "profilePic1">
    
     <Render image={this.state.image}/>

      </div>
      

      <div id="profileSpace1">
      
      
      <div id = "profilePic2">
      <button id = "buttonProfile2"><img id = "imgProfile2" alt="car" src = {pic1} onClick={this.handleClick}/></button>
      </div>

      <div id = "profilePic2">
      <button id = "buttonProfile2"><img id = "imgProfile2" alt="car" src = {pic2} onClick={this.handleClick2}/></button>
      </div>

      <div id = "profilePic2">

      <button id = "buttonProfile2"><img id = "imgProfile2" alt="car" src = {pic3} onClick={this.handleClick3}/></button>
      </div>
      
      </div>
      </div>
      
    );
  }
};




 


export default function VehicleDetail ({initialCount}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // storing input name
    localStorage.setItem("count", count.toString());}, [count]);



  return ( 



  <section>

<nav>
<div className="nav">

<div id ="sectionOne"><h3 style={{fontSize: '36px', fontFamily: 'roboto', fontWeight: 'bold' }}>
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
        <NavLink className="firstLink" to="/shoppingCart" activeStyle={ { color: "#ECEFF8" } }
                       style={ { color: "Black"} }>
                      
                          

{/* Try to reset the padding to lower the icon and line bottom, check Johny Matharu also */}

{/* <div id ="truckSize" className="App"> */}
<div className="App" id = "payment">
  {/* <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '18px' }}/> */}
{/* <div style = {{backgroundImage: 'url(${truckPic})', backgroundSize: "cover"}}> */}
{/* */}
{/* <div id="number" style = {{paddingRight: "2px", fontSize: "15px"}}>{count}<br></br></div>  */}
<div id ="car"> Make a Payment {count} <img id = "carSize" alt="car" src={carPic}></img></div>

{/* <div id="number" style = {{paddingRight: "2px", fontSize: "13px"}}>{count}<br></br></div>  */}
{/* <div id ="car"> <img id = "carSize" alt="car" src={carPic}></img></div> */}



{/* <div style = {{paddingRight: "17px", fontSize: "6px"}}>4</div> */}
{/* </div>  */}


</div>
                         
                         </NavLink></div>




</div>

</div>
</nav>



<MDBContainer id="size">




          <div className="backroundProfile">
{/* this is main parent div heading back at beginning and then button is sub div after heading which has 3 equal sections
called height 1, 2 and 3 */ }


<div id= "buttonProfile">
  {/* add this to increase the icon size, style={{ fontSize: '24px' }} */}
<div id= "left">



<MyComponent1/>



{/* this is end of left */}
</div>




<div id= "right">

  <div id="profileSpace"></div>


<div id = "afterPicSpace"></div>

<div id = "profileContent">
<h3 style = {{fontFamily: "roboto", fontSize: "18px", fontWeight: "bolder"}}>2024 TOYOTA 4RUNNER SR5</h3>
<br></br>
<h6 style = {{fontFamily: "roboto", fontSize: "15px"}}>5 star rating</h6>
<br></br>
<h6 style = {{fontFamily: "roboto", fontSize: "15px"}}>$ 55,014</h6>
{/* <h5 style = {{fontFamily: "Futura", fontWeight: "bold", fontSize: "18px"}}><i class="fas fa-phone"></i></h5> */}
<br></br>
<h6 style = {{fontFamily: "roboto", fontSize: "15px"}}>+ HST/Shipping fee/Licensing fee</h6>
<br></br>
<h6 style = {{fontFamily: "roboto", fontSize: "15px"}}>For 0 down $191 plus tax per week</h6>
<br></br>
<h6 style = {{fontFamily: "roboto", fontSize: "15px"}}>
Hydraulic Power Steering <br></br>
Front and Rear Ventilated Disc Brakes<br></br>
5-Speed Automatic Transmission<br></br>
4.0 Litre DOHC V6 W/VVT-i<br></br>
Backup Camera,<br></br>
Pre-Collision, Blind Spot, Lane Assistance<br></br> 
& Heated Seats</h6>
<br></br>
<h6>

<>
      Order: {count}<br></br>
      <br></br>
      <br></br>
      <button style = {{fontFamily: "roboto", fontSize: "15px", width: "26px", color: "white", background: "black"}} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button style = {{fontFamily: "roboto", fontSize: "15px", width: "26px", color: "white", background: "black"}} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button style = {{fontFamily: "roboto", fontSize: "15px", width: "78px", color: "white", background: "black"}} onClick={() => setCount(0)}>0</button>
     
</>


</h6>

{/* <br></br> */}
{/* <button>RESERVE</button> */}


</div>
<div id="profileSpace"></div>
{/* this is end of right */}
</div>




{/* thi is end of button */} 
   </div>

   {/* this is end of backround */}
          </div>
  
    </MDBContainer >  





<div id ="space">
</div>
<div id ="space"></div>
<div id ="space"></div>



<div id ="space">
</div>
<div id ="space"></div>
<div id ="space"></div>


<div id ="space">
</div>
<div id ="space"></div>
<div id ="space"></div>

 
</section> 

    )
}

