import React from "react";

const SearchBox = ({ inputValue, searchChange }) => {
  return (
    <div className='pa3'>
      <input
        className='pa2 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search Robots'
        value={inputValue}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
