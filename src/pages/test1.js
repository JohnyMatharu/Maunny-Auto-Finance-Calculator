import { addWeeks } from '@progress/kendo-date-math';
import React from 'react';
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
    return (
      <div class="date">
        <p> {this.state.date}</p>
      </div>
    );
  }
}











export default function counter1() 

{

  return (
    <div>
      <h1><App/></h1>
    </div>
  );
  
}

