import React from "react";
import './style.css'
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';

class App extends React.Component{
  constructor(){
    super()
  }
render(){
  return(<div>
    <Comp1 />
    <Comp2 />
    <Comp3 />
  </div>
  )}
}
export default App
