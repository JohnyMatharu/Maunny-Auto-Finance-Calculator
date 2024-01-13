// import {Counter1} from './test1.js';
import Counter1 from './test1.js';
import './test2.css';
import { Route, HashRouter as Router } from 'react-router-dom'
import React, {useState} from 'react';
import pic1 from '../pictures/pic1.jpeg';



export default function Counter2() {
    const [count, setCount] = useState (+localStorage.getItem('count')||0);
        // getting stored value

       console.log(count) 
        // const saved = localStorage.getItem('count');
        // const initialValue = JSON.parse(saved);
        // console.log(initialValue);
        // return initialValue;
        
    //   });  


  function renderDiv (count)

  {
  if ( count >= 1 && count <= 10) {
  console.log("I am the div, successful")
    return <div id ="heightTest" style = {{fontSize: "55px"}}>I am the div
    <img src={pic1}></img>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    <button onClick={() => setCount(0)}>Remove</button>
<h1>Qty:</h1>{count}

    {/* onClick={btnClick} */}
  
    </div>
  }

else if ( count > 10)
{
  return <div id ="heightTest" style = {{fontSize: "55px"}}>Limit Reached
  <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    <button onClick={() => setCount(0)}>Remove</button>
<h1>Qty:</h1>{count}
  </div>
}

else if ( count < 0)
{
  return <div id ="heightTest" style = {{fontSize: "55px"}}>Invalid Quantity
  <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    <button onClick={() => setCount(0)}>Remove</button>
<h1>Qty:</h1>{count}
  </div>
}


    else {
      return "";
    }


}
  



// function renderDivOne (countOne)

// {

// if ( countOne >= 1 && countOne <= 10) {
  // console.log("I am the div1, successful1")
    // return <div id ="heightTest" style = {{fontSize: "55px"}}>I am the div1
    // <img src={pic1}></img>
    // <button onClick={() => setCountOne(prevCount1 => prevCount1 + 1)}>+</button>
    // <button onClick={() => setCountOne(prevCount1 => prevCount1 - 1)}>-</button>
    // <button onClick={() => setCountOne(0)}>Remove</button>
{/* <h1>Qty:</h1>{countOne} */}

    
  
    // </div>
  // }

  // else if ( countOne > 10)
  // {
    // return <div id ="heightTest" style = {{fontSize: "55px"}}>Limit Reached
    // <button onClick={() => setCountOne(prevCount1 => prevCount1 + 1)}>+</button>
    // <button onClick={() => setCountOne(prevCount1 => prevCount1 - 1)}>-</button>
    // <button onClick={() => setCountOne(0)}>Remove</button>
{/* <h1>Qty:</h1>{countOne} */}
    // </div>
  // }
  
  // else if ( countOne < 0)
  // {
    // return <div id ="heightTest" style = {{fontSize: "55px"}}>Invalid Quantity
    // <button onClick={() => setCountOne(prevCount1 => prevCount1 + 1)}>+</button>
    // <button onClick={() => setCountOne(prevCount1 => prevCount1 - 1)}>-</button>
    // <button onClick={() => setCountOne(0)}>Remove</button>
{/* <h1>Qty:</h1>{countOne} */}
    // </div>
  // }



  // else {
    // return "";
  // }


// }





  return (
    
  <div>{renderDiv(count)}</div>
  
  );
}












