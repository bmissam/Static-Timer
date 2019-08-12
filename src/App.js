import React from 'react';

import ReactDOM from 'react-dom';
import './App.css';



class App extends React.Component {

  render() {
    return  <div className="Timer">
      <div className="clock">
   <h1>00 :</h1>
   <h1>30 :</h1>
   <h1>00</h1>
   </div>
   <div class="Unit">
   <span>Hour</span>
   <span>Minute</span>
   <span>Seconds</span>
   </div>
   
    </div>
  }

}

ReactDOM.render(<App />, document.getElementById("root"));
 export default App()
