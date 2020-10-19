import React from 'react';
import SearchBox from './SearchBox';
import SearchEngineSelector from './SearchEngineSelector';
import SubmitButton from './SubmitButton';

const SearchControls = () => (
  <div>
    <SearchBox />
    <SearchEngineSelector />
    <SubmitButton />
  </div>
);

export default SearchControls;
