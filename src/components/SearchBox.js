import React, { useState } from 'react';

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');
  const onTextChange = (event) => {
    console.log(event.target.value);
    setSearchText(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={onTextChange} value={searchText}></input>
    </div>
  );
};

export default SearchBox;
