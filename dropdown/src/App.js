import { useState } from "react";
import Dropdown from "./Dropdown"
import "./Dropdown.css"
export default function App(){
  const [selected, setSelected]= useState("");
  return(
    <div className="App">
      

     <Dropdown selected={selected} setSelected={setSelected}/> 
    </div>
  );
}