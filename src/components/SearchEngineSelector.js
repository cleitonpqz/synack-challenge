import React from 'react';

const SearchEngineSelector = () => (
  <div>
    <select name="search-engine" id="search-engine-selector">
      <option value="">--Please choose an option--</option>
      <option value="Bing">Bing</option>
      <option value="Google">Google</option>
      <option value="Both">Both</option>
    </select>
  </div>
);

export default SearchEngineSelector;
