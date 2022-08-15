import React from 'react';
import "./App.css"

const SearchBar = ({customEvent}) => {
  return (
    <div>
      <input type='text' className="searchbar" onChange={customEvent} placeholder='SearchBar...' style={{width : "30vw", height : "5vh", margin: "2rem", border: "1px solid black" , borderRadius: "0.5rem",
 }}/>
    </div>
  )
}

export default SearchBar