import React from 'react';

const SearchEngineSelector = () => {
  const onEngineChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <select
        name="search-engine"
        id="search-engine-selector"
        onChange={onEngineChange}
      >
        <option value="">--Please choose an option--</option>
        <option value="Bing">Bing</option>
        <option value="Google">Google</option>
        <option value="Both">Both</option>
      </select>
    </div>
  );
};
export default SearchEngineSelector;
