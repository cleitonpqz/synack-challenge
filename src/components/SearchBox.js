import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchText } from '../features/searcher/searcherSlice';

const SearchBox = () => {
  const searchText = useSelector((state) => state.searcher.searchTerm);
  const dispatch = useDispatch();

  const onTextChange = (event) => {
    dispatch(setSearchText(event.target.value));
  };
  return (
    <div>
      <input type="text" onChange={onTextChange} value={searchText}></input>
      <span hidden={searchText !== ''}>Please type something to search</span>
    </div>
  );
};

export default SearchBox;
