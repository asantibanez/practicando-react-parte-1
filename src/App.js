import React from 'react'
import SumForm from './SumForm'

function App(props) {
  return (
    <div>
        
        <p>Hello World! {props.message}</p>
        
        <SumForm/>
      
    </div>
  );
}

export default App;
