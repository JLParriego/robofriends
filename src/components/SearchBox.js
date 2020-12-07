import React from "react";


/* 
We capture the user input with the Onchange Event
When that happens we call the searchChange method passed from the the App.js

*/

const SearchBox = ({searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
      
    </div>
  );
};

export default SearchBox;
