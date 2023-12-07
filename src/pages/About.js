//import React, { useState, useEffect }from 'react';
import './about.css';
import React from 'react';
import pic1 from '../pictures/1.jpeg';
import pic2 from '../pictures/2.jpeg';
import pic3 from '../pictures/3.jpeg';
import pic4 from '../pictures/4.jpeg';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';



$(function() {
  'use strict';

// this is the value where you can increase the speed of scroll bar and increase the span will end, do this for Maugny
// where ever you are using arrow scroll bars, do same for the color and size adjustment for arrow buttons

  var scrollingValue = 270;
  var scrollbarPosition = 30;



  function getMaxChildWidth( elm ) {
    var childrenWidth = $.map($('>*', elm), function(el) { return $(el).width() });
    var max = 0;
    for (var i = 0; i < childrenWidth.length; i++) {
      max = childrenWidth[i] > max ? childrenWidth[i] : max;
    }
    return max;
  }

  function getScrollingValue(toLeft, ctx) {

    if (toLeft) {
      return scrollbarPosition < 1 ? 0 : scrollingValue;
    }
    return scrollbarPosition >= getMaxChildWidth(ctx) ? 0 : scrollingValue;
  }

  $('.scroll-btn.scroll-to-left').on('click', function() {
    $(this).parent().scrollLeft(
      scrollbarPosition -= getScrollingValue(true, $(this).parent())
    );
  });

  $('.scroll-btn.scroll-to-right').on('click', function() {
    $(this).parent().scrollLeft(
      scrollbarPosition += getScrollingValue(false, $(this).parent())
    );
    
  });
});





export default function AboutMe() {

    return (
        <section>
      <MDBContainer id="size">
          <div className="backround">
{/* this is main parent div heading back at beginning and then button is sub div after heading which has 3 equal sections
called height 1, 2 and 3 */ }



          <h3 className="headingBack" style={{ fontSize: '18px', fontFamily: 'Futura', fontWeight: 'bold', color: 'white' }}>2021 University Projects</h3>
     
<div id= "button">
  {/* add this to increase the icon size, style={{ fontSize: '24px' }} */}
    <div id="height">
      {/* this is flex box with 3 sections equalBox with equal size to seperate information */}
      
  
<div id= "equalBox"> <span><h3 style={{fontFamily: 'Futura', color: "#808080", fontSize: '18px' }}>myBid&nbsp;</h3></span> 

    <h6><a href='https://github.com/PrimalOrB/myBid'><i class="fab fa-github" style={{color: "#00F4A2", fontSize: '16px'}}></i></a> </h6> 
    <br></br>
    <br></br>
    </div>  

    {/* <div id= "equalBox"><a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div> */}
    <div id= "equalBox"><a href='https://mybid-live.herokuapp.com/'><img id = "pic" src={pic1}></img></a></div> 
  
  <div id= "equalBox"> 
  <br></br>
  <h6 style = {{fontFamily: "Futura", color: 'black', fontSize: '15px'}}> MERN Full Stack SPA: An auction platform </h6>
    <h6 style = {{fontFamily: "Futura", color: 'black', fontSize: '15px'}}>allowing anyone to create and bid on auctions.</h6>
    <h6 style = {{fontFamily: "Futura", color: 'black', fontSize: '15px'}}>Pay by Stripe or Cryptocurrency.</h6>
  
    </div> 
  
  {/* this is end of height 1 */}
  </div> 
 
 
  <div id="height">
    
    
    
    
    <div id= "equalBox">
    <h3 style={{fontFamily: 'Futura', color: "#808080", fontSize: '18px'}}>Tech AI Chat&nbsp;</h3>
  <h6><a href='https://github.com/JohnyMatharu/Tech-Blog-AI-Chat'><i class="fab fa-github" style={{color: "#00F4A2", fontSize: '18px' }}></i></a>
  </h6>  
  {/* 'https://github.com/JohnyMatharu/Tech-Blog' */}
  <br></br>
    <br></br>
  </div>
  
  <div id= "equalBox">
  <a href='https://johnymatharu.github.io/Tech-Blog-AI-Chat/'><img id = "pic"  src={pic2}></img></a>
  </div>
  {/* 'https://stormy-castle-86583.herokuapp.com/'  */}
  <div id= "equalBox">
  <br></br>
  <h6 style = {{fontFamily: "Futura", color: 'black', fontSize: '15px'}}> An app for users to post help, offers help </h6>
    <h6 style = {{fontFamily: "Futura", color: 'black', fontSize: '15px'}}>or volunteer opportunities. People will</h6>
    <h6 style = {{fontFamily: "Futura", color: 'black', fontSize: '15px'}}>leave their posts who wish to help or volunteer.</h6>
   
    </div>


{/* this is end of height 2 */}
  </div>
 
  <div id="height">

 
   
   
    
    <div id= "equalBox"> <h3 style={{fontFamily: 'Futura', color: "#808080", fontSize: '18px'}}>Maunny&nbsp;</h3>
<h6><a href='https://github.com/JohnyMatharu/Maunny/tree/main'><i class="fab fa-github" style={{ color: "#00F4A2",fontSize: '18px' }}></i></a>
  </h6>
  <br></br>
    <br></br>
  </div> 
  
  <div id= "equalBox">
  <a href='https://johnymatharu.github.io/Maunny/'><img id = "pic"  src={pic3}></img></a>
  </div>
  
  <div id= "equalBox">
  <br></br>
  <h6 style = {{fontFamily: "Futura", color: 'black', fontSize: '15px'}}> Maunny is an application that gets comprehensive</h6>
    <h6 style = {{fontFamily: "Futura", color: 'black', fontSize: '15px'}}>information that would assist users in making</h6>
    <h6 style = {{fontFamily: "Futura", color: 'black', fontSize: '15px'}}>a correct purchase decision. Its an online dealership.</h6>
      
 
    </div>
 
{/* this is end of height 3 */}
  </div>
  
  

  {/* <button class="scroll-btn scroll-to-left btn btn-light btn-arrow-left"  */}
  {/* type="button"><i class="fas fa-chevron-left"></i></button> */}
    {/* <button class="scroll-btn scroll-to-right btn btn-light btn-arrow-right" type="button"><i class="fas fa-chevron-right"></i></button> */}
        
         {/* this is end of button */}
   </div>

   {/* this is end of backround */}
          </div>
    </MDBContainer >  








<div id ="space">
</div>
<div id ="space"></div>
<div id ="space"></div>

{/* this is beginning of next section */}

    <MDBContainer id="size">
          <div className="backround2">
          <h3 className="headingBack" style={{ fontSize: '18px', fontFamily: 'Futura', fontWeight: 'bold', color: 'white' }}>2022 - 2023 Personal E-Commmerce Project</h3>
     
<div id= "button">
  {/* add this to increase the icon size, style={{ fontSize: '24px' }} */}
    <div id="height">
      
   

    <div id= "equalBox">
      <h3 style={{fontFamily: 'Futura', color: "#808080", fontSize: '18px'}}>MAUGNY&nbsp;</h3>
    {/* <div id ="space2"></div> */}
    <h6>
   {/*if there is a link we will insert here for Github, if nothing then add special permission page etc., there is no link 
   here for now */}
     <a href='https://github.com/JohnyMatharu/maugny.com'>
      <i class="fab fa-github" style={{color: "#00F4A2", fontSize: '18px'}}></i>
      </a></h6>
    <br></br>
    <br></br>
    </div>
    
    <div id= "equalBoxSpecial">
    <a href='https://johnymatharu.github.io/maugny.com/'><img id = "pic"  src={pic4}></img></a>
    </div>
    <br></br>
    <div id= "equalBox">
    <h6 style = {{fontFamily: "Futura", color: 'black', fontSize: '15px'}}>Maugny is e-commerce site which sells automotive</h6>
    <h6 style = {{fontFamily: "Futura", color: 'black', fontSize: '15px'}}>sports jewelry and gear. Goal is to connect</h6>
    <h6 style = {{fontFamily: "Futura", color: 'black', fontSize: '15px'}}>buyer for best deal negotiation with supplier.</h6>
       </div>
    
    </div>
  
  {/* these buttons are connected to this div, when you add 2023 projects then this will disappear and same buttons will be added to that div instead */}
  {/* <button class="scroll-btn scroll-to-left btn btn-light btn-arrow-left" type="button"><i class="fas fa-chevron-left"></i></button> */}
    {/* <button class="scroll-btn scroll-to-right btn btn-light btn-arrodw-right" type="button"><i class="fas fa-chevron-right"></i></button> */}
         
   </div>
          </div>

          {/* this is beginning of 2nd flex section next to 2022 projects, 2023 projects, with buttons, this needs to be set as flex-row to #size, if not add a parent div to both backrounds and make it flex div*/}
          <div className="backround3">
{/* 
copy and paste same div as above backround 2, only thing changed will be if more than one project then height5, 6 and so on, project name, link and pic etc.
 */}
          </div>
    </MDBContainer > 






    </section>    
    
      
    )
}
