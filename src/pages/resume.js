import React from 'react';
import pic5 from '../pictures/5.jpeg';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';
import './resume.css';


export default function Resume() {

    return (

<section>

<MDBContainer id="size">
          <div className="backroundProfile">
{/* this is main parent div heading back at beginning and then button is sub div after heading which has 3 equal sections
called height 1, 2 and 3 */ }


<div id= "buttonProfile">
  {/* add this to increase the icon size, style={{ fontSize: '24px' }} */}
  <div id="profileSpace"></div>
{/* insert height1 div to give some measurement to div not to collapse on no info */}
<div id="profileName"><h3 style = {{fontFamily: "Cursive", color: "#808080", fontSize: "18px"}}>Johny Matharu</h3></div>

<div id = "profilePic">
<img id = "imgProfile" src={pic5}></img>
</div>


<div id = "afterPicSpace"></div>

<div id = "profileContent">
<h6 style = {{fontFamily: "Futura", fontSize: "15px"}}>CONTENT CREATOR</h6>

<h6 style = {{fontFamily: "Futura", fontSize: "15px"}}>gohelppal@gmail.com</h6>
{/* <h5 style = {{fontFamily: "Futura", fontWeight: "bold", fontSize: "18px"}}><i class="fas fa-phone"></i></h5> */}
<h6 style = {{fontFamily: "Futura", fontSize: "15px"}}>1-(416) 998 0934</h6>
<h6 style = {{fontFamily: "Futura", fontSize: "15px"}}>-------------------------------</h6>
<h6 style = {{fontFamily: "Futura", fontSize: "15px"}}>Downtown Barrie</h6>
<h6 style = {{fontFamily: "Futura", fontSize: "15px"}}>www.gohelppal.com</h6>
<h6 style = {{fontFamily: "Futura", fontSize: "15px"}}>-------------------------------</h6>

</div>
<div id="profileSpace"></div>

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
