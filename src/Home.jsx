import React, { useState } from "react";
import ListData from "./ListData";
import SearchBar from './SearchBar';
import "./App.css";
 
const Home = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="Home">
      <SearchBar customEvent={inputHandler} />
      <ListData input={inputText}/>
    </div>
  )
}

export default Home