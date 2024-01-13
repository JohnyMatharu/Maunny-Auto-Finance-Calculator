import './shoppingCart.css';
import Button from 'react-bootstrap/Button';
import { MDBContainer} from "mdbreact";
// import $ from 'jquery';
import pic1 from '../pictures/pic1.jpeg';
// import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import '../components/navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import truckPic from '../pictures/truck.png'
import carPic from '../pictures/car.png'


  export default function ShoppingCart() {
    const [count, setCount] = useState (+localStorage.getItem('count')||0);



    function renderDiv (count)

    {
    if ( count >= 1 && count <= 9) {
    console.log("I am the div, successful")
      return  <div>
      
      <div id = "squareBoxSpace1">

      </div>
            
      <div id ="squareBoxDiv">   
        
        <div id ="squareSpaceLeft"></div>
        
        <div id = "squareBox1">
        
        <div id="formSpace1"></div>
  
  
  
  <div id = "itemCentreDiv">
  
  <div id= "itemSpace"></div>
  
  <div id = "itemImage">
  <img id = "imageProfile" alt="car" src={pic1}></img>
  
  </div>
  
  <div id= "itemSpace"></div>
  
  <div id = "itemDetail">
  
  <div id = "itemDetail1" style = {{fontWeight: "bolder"}}>2024 Toyota 4Runner</div>
  
  <div id = "itemDetail1">$55,014</div>
  
  
  
  
  
  <div id = "itemDetail1">Qty: {count}
  
  
  </div>
  
  
  
  <div id = "itemDetail1">
  <button style = {{fontFamily: "roboto", fontSize: "15px", width: "26px", color: "white", background: "black"}} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button style = {{fontFamily: "roboto", fontSize: "15px", width: "26px", color: "white", background: "black"}} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button style = {{fontFamily: "roboto", fontSize: "15px", width: "78px", color: "white", background: "black"}} onClick={() => setCount(0)}>Remove</button>
 
  </div>
  
  </div>
  
  <div id= "itemSpace"></div>
  
  {/* end of itemCentre div */}
  </div>
        <div id="formSpace1"></div>
  
  {/* end of squareBox1 */}
  </div>
  
  <div id ="squareSpaceRight"></div>

  
  {/* end of squareBoxDiv */}
  </div>   
    
  
  <div id = "squareBoxSpace1">
  <br></br>
Estimated delivery date is Jan 1st 2024
{/* A date function could be added here which adds few more days to the date  */}
</div>
</div>
       
  
    }
  
  else if ( count > 9)
  {
    return <div>
      
    <div id = "squareBoxSpace1">

    </div>
          
    <div id ="squareBoxDiv">   
        
        <div id ="squareSpaceLeft"></div>
        
        <div id = "squareBox1">
        
        <div id="formSpace1"></div>
  
  
  
  <div id = "itemCentreDiv">
  
  <div id= "itemSpace"></div>
  
  <div id = "itemImage">
  <img id = "imageProfile" alt="car" src={pic1}></img>
  
  </div>
  
  <div id= "itemSpace"></div>
  
  <div id = "itemDetail">
  
  <div id = "itemDetail1" style = {{fontWeight: "bolder"}}>2024 Toyota 4Runner</div>
  
  <div id = "itemDetail1">$55,014</div>
  
  
  
  
  
  <div id = "itemDetail1">Qty: 10
  
  
  </div>
  
  
  
  <div id = "itemDetail1">
  
  
   
      {/* <button style = {{fontFamily: "roboto", fontSize: "15px", width: "26px", color: "white", background: "black"}} onClick={() => setCount(prevCount => prevCount + 1)}>+</button> */}
      <button style = {{fontFamily: "roboto", fontSize: "15px", width: "26px", color: "white", background: "black"}} onClick={() => setCount(9)}>-</button>
      <button style = {{fontFamily: "roboto", fontSize: "15px", width: "78px", color: "white", background: "black"}} onClick={() => setCount(0)}>Remove</button>
   
  
  </div>
  
  </div>
  
  <div id= "itemSpace"></div>
  
  {/* end of itemCentre div */}
  </div>
        <div id="formSpace1"></div>
  
  {/* end of squareBox1 */}
  </div>
  
  <div id ="squareSpaceRight"></div>
  
  {/* end of squareBoxDiv */}
  </div>     
    
    <div id = "squareBoxSpace1">
    <br></br>
 Estimated delivery date is Jan 1st 2024 <br></br> 
 <h7 style = {{color : "red"}}>You have reached the maximum limit of 10 units</h7>  

  {/* A date function could be added here which adds few more days to the date  */}
  </div>
  </div>
  
  }
  
  
      else {
        return "";
      }
  
  
  }
    




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
        <NavLink className="firstLink" to="/shoppingCart" activeStyle={ { color: "#ECEFF8 " } }
                       style={ { color: "Black"} }>
                     
                          {/* #ECEFF8 */}

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



      <MDBContainer>
          <div className="backround">
{/* this is main parent div heading back at beginning and then button is sub div */ }


    
<div id= "button">
  {/* add this to increase the icon size, style={{ fontSize: '24px' }} */}
    <div id="height1">
      {/* this is flex box with 3 sections equalBox with equal size to seperate information */}



   

{renderDiv(count)}




  





  
  {/* this is end of height 1 */}
  </div> 
 
 
  <div id="height2">
    
  <div id = "squareBoxSpace1">

</div>
    
  <div id = "squareBox2">
{/* HERE */}

<div id="formSpace"></div>


<div id="form">

<div id="itemSpace"></div>
<div id="form1">

<form id = "formStyle"  
// onSubmit={handleSubmit}
>
      <input type="text" maxlength="99" style={{fontSize : "15px", width : "100%", border: "white"}}
      // value={value} 
      placeholder= "First & Last Name" 
      // onChange={handleChange} 
      />
  
    </form>

</div>
<div id="itemSpace"></div>
<div id="form1">

<form id = "formStyle"  
// onSubmit={handleSubmit}
>
      <input type="text" maxlength="99" style={{fontSize : "15px", width : "100%", border: "white"}}
      // value={value} 
      placeholder= "Phone" 
      // onChange={handleChange} 
      />
  
    </form>



</div>
<div id="itemSpace"></div>

  </div>



<div id="form">
<div id="itemSpace"></div>


<div id="form2" style={{color : "grey", fontSize : "15px"}}>Delivery Address</div>


<div id="itemSpace"></div>
</div>


<div id="form">
<div id="itemSpace"></div>



<div id="form2">

<form id = "formStyle"  
// onSubmit={handleSubmit}
>
      <input type="text" maxlength="99" style={{fontSize : "15px", width : "100%", border: "white"}}
      // value={value} 
      placeholder= "Street Number & Name" 
      // onChange={handleChange} 
      />
  
    </form>


</div>
<div id="itemSpace"></div>
</div>








<div id="form">

<div id="itemSpace"></div>
<div id="form1">

<form id = "formStyle"  
// onSubmit={handleSubmit}
>
      <input type="text" maxlength="99" style={{fontSize : "15px", width : "100%", border: "white"}}
      // value={value} 
      placeholder= "Unit #" 
      // onChange={handleChange} 
      />
  
    </form>

</div>
<div id="itemSpace"></div>
<div id="form1">

<form id = "formStyle"  
// onSubmit={handleSubmit}
>
      <input type="text" maxlength="99" style={{fontSize : "15px", width : "100%", border: "white"}}
      // value={value} 
      placeholder= "City" 
      // onChange={handleChange} 
      />
  
    </form>



</div>
<div id="itemSpace"></div>

  </div>







  <div id="form">

<div id="itemSpace"></div>
<div id="form1">

<form id = "formStyle"  
// onSubmit={handleSubmit}
>
      <input type="text" maxlength="99" style={{fontSize : "15px", width : "100%", border: "white"}}
      // value={value} 
      placeholder= "Province" 
      // onChange={handleChange} 
      />
  
    </form>

</div>
<div id="itemSpace"></div>
<div id="form1">

<form id = "formStyle"  
// onSubmit={handleSubmit}
>
      <input type="text" maxlength="99" style={{fontSize : "15px", width : "100%", border: "white"}}
      // value={value} 
      placeholder= "Postal Code" 
      // onChange={handleChange} 
      />
  
    </form>



</div>
<div id="itemSpace"></div>

  </div>






<div id="formText" style={{fontSize : "14.4px"}}>
<div id="itemSpace"></div>
<div id ="formText1">
MSRP total <br></br>                                               
Tax (HST)<br></br> 
License & Warranty <br></br>                  
Shipping and gas <br></br>                           
Grand Total  <br></br>                                
Interest (%) <br></br> 
Term (months)<br></br>                                                                 
Downpayment (CDN $) <br></br>                   
</div>
<div id ="formText2">$55,014<br></br>
$7,151<br></br>
$1,600<br></br>
$900<br></br>
$64,665<br></br>
4<br></br>
72<br></br>
<form id = "formStyle"  
// onSubmit={handleSubmit}
>
      <input type="text" maxlength="99" style={{fontSize : "14.4px", width : "100%", border: "white", textAlign: "right"}}
      // value={value} 
       
      // onChange={handleChange} 
      />
  
    </form>
</div>
<div id="itemSpace"></div>
{/* Upon payment submission, a message will be received via email/or pop up modal as follows */}
{/* 
Thank you! for your advance booking for new vehicle 20........(including price and remaining unpaid balance), we have recieved 
your deposit. We have reserved the vehicle in our inventory system. The details about this vehicle will be sent in another email. 
The vehicle will be delivered within 2 weeks. Based on the interest rate, term and downpayment you have selected, your monthly 
payment is expected to be ...biweekly or ...monthly. The credit and income department will be contacting you shortly for credit 
adjudication and income verification process to see if you qualify for financing. The final interest rate, term and monthly 
payment can only then be determined and confirmed. If you like to trade in a vehicle then please bring in to any of our 
dealerships for evaluation within 1 week to recalculate the total loanable amount and negative equity if any which may lead to 
re-adjudication for approval of the car loan.
*/}
                          
</div>

<div id="formSpace"></div>



</div>   

<div id = "squareBoxSpace2">

</div>
<div id = "squareBoxSpace2">

</div>

<div id = "squareBox2">

<div id="formSpace"></div>

<div id="card">
<div id="itemSpace"></div>
<div id="form2">
  
  
  
<form id = "formStyle"  
// onSubmit={handleSubmit}
>
      <input type="text" maxlength="99" style={{fontSize : "15px", width : "100%", border: "white"}}
      // value={value} 
      placeholder= "Cardholder Name" 
      // onChange={handleChange} 
      />
  
    </form>
  
  
  
  
  </div>
<div id="itemSpace"></div>
  </div>

  <div id="card">
  <div id="itemSpace"></div>
  <div id="form2">
    
  <form id = "formStyle"  
// onSubmit={handleSubmit}
>
      <input type="text" maxlength="99" style={{fontSize : "15px", width : "100%", border: "white"}}
      // value={value} 
      placeholder= "Card Number" 
      // onChange={handleChange} 
      />
  
    </form>
    
    
    
    </div>
<div id="itemSpace"></div>
  </div>

<div id="cardText">

<div id="cardTextUp">
<div id="itemSpace"></div>
<div id ="cardText1">
  
<form id = "formStyle"  
// onSubmit={handleSubmit}
>
      <input type="text" maxlength="99" style={{fontSize : "15px", width : "100%", border: "white"}}
      // value={value} 
      placeholder= "Expiration - MM/YY" 
      // onChange={handleChange} 
      />
  
    </form>
  
  
  
              
</div>
<div id="itemSpace"></div>
<div id ="cardText2">
  
<form id = "formStyle"  
// onSubmit={handleSubmit}
>
      <input type="text" maxlength="99" style={{fontSize : "15px", width : "100%", border: "white"}}
      // value={value} 
      placeholder= "CVV" 
      // onChange={handleChange} 
      />
  
    </form>  
  </div>

<div id="itemSpace"></div>
</div>


<div id="cardTextDown">

  
  <p style={{fontSize: "13.2px", color: "white"}}>Maunny, Downtown Barrie</p>

  <input type="checkbox"/>
  {' '}
Save your card
<br></br>
<br></br>
<input type="checkbox"/>
{' '}
Pickup address
<br></br>
Maunny's Warehouse, King St, Toronto, ON




{/* Once scheduled pickup, customer can pick up at loaction mentioned before pay that will be searched by system closest to 
their address, full address, contact info, timings and directions will be stated on pop up modal or confirmation email with
timings such as Mon-Sat: 6am-9pm, Sun: 9am-6pm */}

{/* 
Once saved this card it will be in local storage which later be back end
*/}
</div>
                          {/* ending carText */}
</div> 

<div id="cardPay">

<button style = {{fontFamily: "roboto", fontSize: "15px", width: "78px", color: "white", background: "black", paddingTop: "1px"}}>
        PAY
</button>


{/* style = {{fontFamily: "roboto", fontSize: "15px", width: "26px", color: "white", background: "black"}} */}



</div>
<div id="formSpace"></div>


{/* ending squareBox2 */}
</div> 

<div id = "squareBoxSpace1">

</div>


{/* this is end of height 2 */}
  </div>
 
  
  
  

  {/* <button class="scroll-btn scroll-to-left btn btn-light btn-arrow-left"  */}
  {/* type="button"><i class="fas fa-chevron-left"></i></button> */}
    {/* <button class="scroll-btn scroll-to-right btn btn-light btn-arrow-right" type="button"><i class="fas fa-chevron-right"></i></button> */}
        
         {/* this is end of button */}
   </div>
  

   {/* this is end of backround */}
          </div>



    </MDBContainer >  





    </section>    
    
      
    )
}
