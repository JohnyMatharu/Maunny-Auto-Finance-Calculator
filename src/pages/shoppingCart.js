import './shoppingCart.css';
import Button from 'react-bootstrap/Button';
import { MDBContainer} from "mdbreact";
// import $ from 'jquery';
import pic1 from '../pictures/pic1.jpeg';
// import Form from 'react-bootstrap/Form';
import React, {useState, useEffect, useRef} from 'react';
import '../components/navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import carPic from '../pictures/car.png'
import interac from '../pictures/interac.png'
import visaMastercard from '../pictures/visaMastercard.png'
import emailjs from '@emailjs/browser';
import { addWeeks } from '@progress/kendo-date-math';
import moment from 'moment';


let dates = new Date()
let newDate = addWeeks(dates, 2); // Returns a new Date instance.
console.log(newDate);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(newDate.toLocaleString()).format('MMMM Do YYYY')
    };


  }
  render() {
    return (this.state.date);
  }
}



const validName = new RegExp('^[A-Za-z-\'\" ]+$');
// its important to put the ^ as thats beginning then + which is to continue search till this point and $ is till end
const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);
const validPhone = new RegExp('^([0-9]{10})$');
const validStreet = new RegExp('^([A-Za-z0-9\-\'\"\.\#\&\(\)\/:\,\\\\ ])+$');
const validUnit = new RegExp('^([A-Za-z0-9\# ])+$'); 
const validCity = new RegExp('^[A-Za-z-\'\" ]+$');
const validProvince = new RegExp('^[A-Za-z-\'\" ]+$');
const validZip = new RegExp('^[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]$'); 
 const validDown = new RegExp('^([0-9])+$'); 
const validCardName = new RegExp('^[A-Za-z-\'\" ]+$');
const validCardNumber = new RegExp('^([0-9]{16})$'); 
const validExpiry = new RegExp('^[0-9][0-9][\/\\\\][0-9][0-9]$'); 
const validCvv = new RegExp('^([0-9]{3})$'); 



  export default function ShoppingCart() {
    const [name, setName] = useState (JSON.parse(localStorage.getItem('name'))||'');
    const [count, setCount] = useState (+localStorage.getItem('count')||0);
    const [phone, setPhone] = useState (JSON.parse(localStorage.getItem('phone'))||'');
    const [email, setEmail] = useState (JSON.parse(localStorage.getItem('email'))||'');
    const [street, setStreet] = useState (JSON.parse(localStorage.getItem('street'))||'');
    const [unit, setUnit] = useState (JSON.parse(localStorage.getItem('unit'))||'');
    const [city, setCity] = useState (JSON.parse(localStorage.getItem('city'))||'');
    const [province, setProvince] = useState (JSON.parse(localStorage.getItem('province'))||'');
    const [zip, setZip] = useState (JSON.parse(localStorage.getItem('zip'))||'');
    const [down, setDown] = useState (JSON.parse(localStorage.getItem('down'))||'');
    const [cardName, setCardName] = useState (JSON.parse(localStorage.getItem('cardName'))||'');
    const [cardNumber, setCardNumber] = useState (JSON.parse(localStorage.getItem('cardNumber'))||'');
    const [expiry, setExpiry] = useState (JSON.parse(localStorage.getItem('expiry'))||'');
    const [cvv, setCvv] = useState (JSON.parse(localStorage.getItem('cvv'))||'');
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);
    const [streetErr, setStreetErr] = useState(false);
    const [unitErr, setUnitErr] = useState(false);
    const [cityErr, setCityErr] = useState(false);
    const [provinceErr, setProvinceErr] = useState(false);
    const [zipErr, setZipErr] = useState(false);
    const [downErr, setDownErr] = useState(false);
    const [cardNameErr, setCardNameErr] = useState(false);
    const [cardNumberErr, setCardNumberErr] = useState(false);
    const [expiryErr, setExpiryErr] = useState(false);
    const [cvvErr, setCvvErr] = useState(false); 
    const [submissionConf, setSubmissionConf] = useState(false);
    const [errorSubmissionConf, setErrorSubmissionConf] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_afl3hrp', 'template_179938t', form.current, 'ZKwlCsjVEQLd8sYTP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    const vehicleDetails = () => {
     const myArray = ['apple', 'banana', 'orange']
     return myArray;
  }



    const validate = () => {
      
      if (!validName.test(name)) {
        setNameErr(true);
     }
     else 
     {
       setNameErr(false);
     }
      
     
     if (!validPhone.test(phone)) {
      setPhoneErr(true);
   }
   else 
   {
     setPhoneErr(false);
   }
     
      if (!validEmail.test(email)) {
           setEmailErr(true);
        }
        else 
        {
          setEmailErr(false);
        }
     
        if (!validStreet.test(street)) {
          setStreetErr(true);
       }
       else 
       {
         setStreetErr(false);
       }
  
       if (!validUnit.test(unit)) {
        setUnitErr(true);
     }
     else 
     {
       setUnitErr(false);
     }
     if (!validCity.test(city)) {
      setCityErr(true);
   }
   else 
   {
     setCityErr(false);
   }
   if (!validProvince.test(province)) {
    setProvinceErr(true);
  }
  else 
  {
   setProvinceErr(false);
  }
  if (!validZip.test(zip)) {
    setZipErr(true);
  }
  else 
  {
   setZipErr(false);
  }
  if (!validDown.test(down)) {
    setDownErr(true);
  }
  else 
  {
   setDownErr(false);
  }
  if (!validCardName.test(cardName)) {
    setCardNameErr(true);
  }
  else 
  {
   setCardNameErr(false);
  }
  if (!validCardNumber.test(cardNumber)) {
    setCardNumberErr(true);
  }
  else 
  {
   setCardNumberErr(false);
  }
  if (!validExpiry.test(expiry)) {
    setExpiryErr(true);
  }
  else 
  {
   setExpiryErr(false);
  }
  if (!validCvv.test(cvv)) {
    setCvvErr(true);
  }
  else 
  {
   setCvvErr(false);
  }
};
     

const validate1 = () => {
      if (validName.test(name) && validPhone.test(phone) && validEmail.test(email) && validStreet.test(street) 
      && validUnit.test(unit) && validCity.test(city) && validProvince.test(province) && validZip.test(zip) &&
      validDown.test(down) && validCardName.test(cardName) && validCardNumber.test(cardNumber) && 
      validExpiry.test(expiry) && validCvv.test(cvv))
      
      {
      setSubmissionConf(true);
      }
      else 
      {
        setSubmissionConf(false);
      }
      

  

    if (!validName.test(name) || !validPhone.test(phone) || !validEmail.test(email) || !validStreet.test(street) 
    || !validUnit.test(unit) || !validCity.test(city) || !validProvince.test(province) || !validZip.test(zip) ||
    !validDown.test(down) || !validCardName.test(cardName) || !validCardNumber.test(cardNumber) || 
    !validExpiry.test(expiry) || !validCvv.test(cvv))
    
    {
    setErrorSubmissionConf(true);
    }
    else 
    {
      setErrorSubmissionConf(false);
    }
    

  };




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
  
  <Link to='./#'>  
  <img id = "imageProfile" alt="car" src={pic1}></img>
  </Link>

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
Estimated delivery date is <App/>
  
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
  <Link to='./#'>  
  <img id = "imageProfile" alt="car" src={pic1}></img>
  </Link>
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
    Estimated delivery date is <App/><br></br> 
 <h7 style = {{color : "red"}}>*You have reached the maximum limit of 10 units</h7>  

  {/* A date function could be added here which adds few more days to the date  */}
  </div>
  </div>
  
  }
  
  
      else {
        return "";
      }
  
  
  }
    

  function Price(props) {
    return <h7>${55014 * count}</h7>
    // <h3> (55*{props.multiply})</h3>
  }

  function Tax(props) {
    return <h7>${7151 * count}</h7>
    // <h3> (55*{props.multiply})</h3>
  }
                                             
 function LicenseWarranty(props) {
  return <h7>${1600 * count}</h7>
  // <h3> (55*{props.multiply})</h3>
}
function ShippingGas (props) {
return <h7>${900 * count}</h7>
// <h3> (55*{props.multiply})</h3>
}
function Total (props) {
return <h7>${64665 * count}</h7>
// <h3> (55*{props.multiply})</h3>
} 




useEffect(() => {
  localStorage.setItem("name", JSON.stringify(name));
}, [name]);
useEffect(() => {
  localStorage.setItem("phone", JSON.stringify(phone));
}, [phone]);
useEffect(() => {
  localStorage.setItem("email", JSON.stringify(email));
}, [email]);
useEffect(() => {
  localStorage.setItem("street", JSON.stringify(street));
}, [street]);
useEffect(() => {
  localStorage.setItem("unit", JSON.stringify(unit));
}, [unit]);
useEffect(() => {
  localStorage.setItem("city", JSON.stringify(city));
}, [city]);
useEffect(() => {
  localStorage.setItem("province", JSON.stringify(province));
}, [province]);
useEffect(() => {
  localStorage.setItem("zip", JSON.stringify(zip));
}, [zip]);
useEffect(() => {
  localStorage.setItem("down", JSON.stringify(down));
}, [down]);
useEffect(() => {
  localStorage.setItem("cardName", JSON.stringify(cardName));
}, [cardName]);
useEffect(() => {
  localStorage.setItem("cardNumber", JSON.stringify(cardNumber));
}, [cardNumber]);
useEffect(() => {
  localStorage.setItem("expiry", JSON.stringify(expiry));
}, [expiry]);
useEffect(() => {
localStorage.setItem("cvv", JSON.stringify(cvv));
}, [cvv]);


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
 
  
 
 
 <form id="height2" ref={form} onSubmit={sendEmail} onChange={validate}>

 <div id = "squareBoxSpace1">

</div>
   
 <div id = "squareBox2">
{/* HERE */}

<div id="formSpace">

{/* This here is a temporary solution but in future you will be linking vehicle details through wither local storage */}
{/* or backend and will access it ust like {count} or {vehicle} as saved in */}

<input
      style={{fontSize : "15px", width : "0%", border: "white"}}
         value = "2024 Toyota 4Runner"
         name="to_vehicle" 
       /> 
       <input
      style={{fontSize : "15px", width : "0%", border: "white"}}
         value = "64,665"
         name="to_price" 
       /><input
       style={{fontSize : "15px", width : "0%", border: "white"}}
          value = {count}
          name="to_quantity" 
        /> 

</div>


<div id="form">

<div id="itemSpace"></div>
<div id="form1">



<input
       type="text" id = "formStyle" style={{fontSize : "15px", width : "100%"}}
         value={name}
         name="to_name" 
         placeholder= "First & Last Name"
         onChange={(e) => setName(e.target.value)} 
         maxLength="50"
       />

</div>
{nameErr && <h7 style = {{color: "red", textAlign: "left"}}>*Please re-enter</h7>}
<div id="itemSpace"></div>
<div id="form1">


    
 <input
       type="phone" 
       id = "formStyle" style={{fontSize : "15px", width : "100%"}}
         value={phone}
         name="to_phone" 
         placeholder= "Phone"
         onChange={(e) => setPhone(e.target.value)}
         maxLength="10"
       />
    

  



</div>
{phoneErr && <h7 style = {{color: "red"}}>*Please check</h7>}
<div id="itemSpace"></div>

 </div>

 

<div id="form">
<div id="itemSpace"></div>


<div id="form2">


  <input
         type="email"
         id = "formStyle" style={{fontSize : "15px", width : "100%"}}
         name="to_email"
         value={email}
         placeholder= "Email"
         onChange={(e) => setEmail(e.target.value)}       
       />
       
 
 


</div>


<div id="itemSpace"></div>
{emailErr && <h7 style = {{color: "red"}}>*Please check your email address</h7>}
</div>


<div id="form">
<div id="itemSpace"></div>





<div id="form2">



 
    

<input
       type="address" 
         value={street}
         name="to_street"
         id = "formStyle" style={{fontSize : "15px", width : "100%"}}
         placeholder= "Delivery Adress: Street Number & Name" 
         onChange={(e) => setStreet(e.target.value)}
         maxLength="50" 
       />
        


</div>
<div id="itemSpace"></div>
{streetErr && <h7 style = {{color: "red"}}>*Please check your street address</h7>}
</div>


<div id="form">

<div id="itemSpace"></div>
<div id="form1">

 

       <input
       type="unit"
       id = "formStyle" style={{fontSize : "15px", width : "100%"}}
       placeholder= "Unit" 
         value={unit}
         onChange={(e) => setUnit(e.target.value)} 
         maxLength="9" 
         name="to_unit"
       />


</div>
{unitErr && <h7 style = {{color: "red"}}>*Please check</h7>}

<div id="itemSpace"></div>

<div id="form1">


   <input
       type="text" 
       id = "formStyle" style={{fontSize : "15px", width : "100%"}}
       placeholder= "City"
         value={city}
         onChange={(e) => setCity(e.target.value)} 
         maxLength="30"
         name="to_city" 
       />

</div>
       {cityErr && <h7 style = {{color: "red"}}>*Please check</h7>}
<div id="itemSpace"></div>

 </div>



 <div id="form">

<div id="itemSpace"></div>
<div id="form1">



<input
       type="text" 
         value={province}
         id = "formStyle" style={{fontSize : "15px", width : "100%"}}
         onChange={(e) => setProvince(e.target.value)} 
         name="to_province" 
         maxLength="30"
         placeholder= "Province"
       />
    

</div>
{provinceErr && <h7 style = {{color: "red"}}>*Please check</h7>}
<div id="itemSpace"></div>
<div id="form1">


    
      <input
     id = "formStyle" style={{fontSize : "15px", width : "100%"}}
       type="text" 
       placeholder= "Postal Code" 
         value={zip}
         name="to_zip"
         onChange={(e) => setZip(e.target.value)} 
         maxLength="6" 
       />
       

</div>
{zipErr && <h7 style =  {{color: "red"}}>*Format X1X1X1</h7>}
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
<div id ="formText2"><Price multiply = {count}/> <br></br>
<Tax multiply = {count}/> <br></br>
<LicenseWarranty multiply = {count} /> <br></br>
<ShippingGas multiply = {count} />  <br></br>
<Total multiply = {count}/> <br></br>
4<br></br>
72<br></br>


<input

id = "formStyle" style={{fontSize : "15px", width : "100%"}}
    type="text" 
      value={down}
      name= "to_down"
      onChange={(e) => setDown(e.target.value)} 
      maxLength="6" 
    />
     
    
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

<div id="formSpace">

  {downErr && <h7 style = {{color: "red"}}>*Please check</h7>}
</div>



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
  
  
  

    
  
   <input
id = "formStyle" style={{fontSize : "15px", width : "100%"}}
   placeholder= "Cardholder Name" 
        type="text" 
          value={cardName}
          onChange={(e) => setCardName(e.target.value)} 
        />
 
  </div>

<div id="itemSpace"></div>

{cardNameErr && <h7 style = {{color: "red"}}>{nameErr && <h7 style = {{color: "red", textAlign: "left"}}>*Please re-enter your first & last name</h7>}</h7>}
    
  </div>

  <div id="card">
  <div id="itemSpace"></div>
  <div id="form2">
    

  
   <input
        type="text" 
        id = "formStyle" style={{fontSize : "15px", width : "100%"}}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)} 
          placeholder= "Card Number" 
          maxLength="16" 
        />
      
    
    </div>
<div id="itemSpace"></div>
{cardNumberErr && <h7 style = {{color: "red"}}> *Please check your card number</h7>}
  </div>

<div id="cardText">

<div id="cardTextUp">
<div id="itemSpace"></div>
<div id ="cardText1">
  
    
  
  <input
        type="text" 
          value={expiry}
          id = "formStyle" style={{fontSize : "15px", width : "100%"}}
          onChange={(e) => setExpiry(e.target.value)} 
          placeholder= "Expiration - MM/YY" 
          maxLength="7" 
        />
        
  
              
</div>

{expiryErr && <h7 style = {{color: "red"}}>*Format MM/YY</h7>}
<div id="itemSpace"></div>


<div id ="cardText2">
  
 
  
  <input
        type="text" 
          value={cvv}
          id = "formStyle" style={{fontSize : "15px", width : "100%"}}
           placeholder= "CVV"
          onChange={(e) => setCvv(e.target.value)} 
          maxLength="3" 
        />

  </div>
  {cvvErr && <h7 style = {{color: "red"}}>*Please check</h7>}
<div id="itemSpace"></div>
</div>


<div id="cardTextDown">

 <div id = "threeDivision1">
  {/* <p style={{fontSize: "13.2px", color: "white"}}>Maunny, Downtown Barrie</p> */}
  <img id = "imageProfile1" alt="car" src={interac}></img>
  </div> 



<div id = "threeDivision2">

<img id = "imageProfile1" alt="car" src={visaMastercard}></img>
  </div>

<div id = "threeDivision3">
<input type="checkbox"/>
{' '}
I have checked all my details  
<br></br>
All the information I have entered is correct 
</div>




{/* Once scheduled pickup, customer can pick up at loaction mentioned before pay that will be searched by system closest to 
their address, full address, contact info, timings and directions will be stated on pop up modal or confirmation email with
timings such as Mon-Sat: 6am-9pm, Sun: 9am-6pm */}

{/* 
Once saved this card it will be in local storage which later be back end
*/}
{/* end of carTextDown */}
</div>
                          {/* ending carText */}
</div> 

<div id="cardPay">

<button onClick={validate1} style = {{fontFamily: "roboto", fontSize: "15px", width: "78px", color: "white", background: "black", paddingTop: 
"1px"}} 
type="submit" 
>
PAY
      
</button>

{/* style = {{fontFamily: "roboto", fontSize: "15px", width: "26px", color: "white", background: "black"}} */}



</div>
<div id="formSpace"></div>


{/* ending squareBox2 */}
</div> 

<div id = "squareBoxSpace1">
  <br></br>


  
  {errorSubmissionConf && <h7 style = {{color: "green"}}>*PAYMENT ACCEPTED ! ORDER PLACED !   Order # BR08384<br></br>
Call at 1-800-888-6688 for questions regarding order details</h7>}


{submissionConf && <h7 style = {{color: "green"}}>*PAYMENT ACCEPTED ! ORDER PLACED !   Order # BR08384<br></br>
You will soon recieve an email at {email}</h7>}



</div>

</form>
{/* this is end of height 2 */}
  

  
 
 
{/* const Mailto = ({ email, subject = '', body = '', children }) => { */}
  {/* let params = subject || body ? '?' : ''; */}
  {/* if (subject) params += `subject=${encodeURIComponent(subject)}`; */}
  {/* if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`; */}

  {/* return <a href={`mailto:${email}${params}`}>{children}</a>; */}
{/* }; */}

{/* ReactDOM.createRoot(document.getElementById('root')).render( */}
  {/* <Mailto email="foo@bar.baz" subject="Hello & Welcome" body="Hello world!"> */}
    {/* Mail me! */}
  {/* </Mailto> */}
{/* ); */}
  






   </div>
  

   {/* this is end of backround */}
          </div>



    </MDBContainer >  





    </section>    
    
      
    )
}
