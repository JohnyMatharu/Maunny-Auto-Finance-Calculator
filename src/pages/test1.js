// This is final code being transferred to Shopping Cart





import React, {useState, useEffect} from 'react';
import * as ReactDOM from 'react-dom/client';
import './test1.css';
// import pic1 from '../pictures/pic1.jpeg';
import pic1 from '../pictures/pic1.jpeg';
import pic2 from '../pictures/pic2.jpeg';
import pic3 from '../pictures/pic3.jpeg';




class Render extends React.Component {
  constructor(props) {
    super(props);
  }
 
 render() {

  const multipleRender = [
 
        <div id="heightDiv"> 
        <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>,
        <div id="heightDiv">
        <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>,
       <div id="heightDiv"> 
        <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>       
    ];
    
    
    
      
    if (this.props.image === 0)
    {
      return multipleRender [this.props.image]; 
    }
    
    else if (this.props.image === 1)  {
      
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
      image: 'Initial State'
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
    return (
      <div>
      <button><img src = {pic1} onClick={this.handleClick}/></button>
        <button><img src = {pic2} onClick={this.handleClick2}/></button>
        <button><img src = {pic3} onClick={this.handleClick3}/></button>


        <Render image={this.state.image}/>
      </div>
    );
  }
};




export default function Counter({initialCount}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // storing input name
    localStorage.setItem("count", count.toString());}, [count]);




// You wil display the array and declare using use state, the function next to it will render the div based on array number
//once clicked on 1 pic the function will render the pic back in the display area







  return (
    <>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
       
 {/* Count1: {countOne} */}
 {/* <button onClick={() => setCountOne(0)}>Reset</button> */}
 {/* <button onClick={() => setCountOne(prevCount1 => prevCount1 - 1)}>-</button> */}
 {/* <button onClick={() => setCountOne(prevCount1 => prevCount1 + 1)}>+</button> */}
 
 {/* {renderDivOne(countOne)} */}


 <MyComponent1/>

</>


  );
}

