import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { configureEngine } from '../features/searcher/searcherSlice';

const SearchEngineSelector = () => {
  const engine = useSelector((state) => state.searcher.searchEngine);
  const dispatch = useDispatch();

  return (
    <div>
      <select
        name="search-engine"
        id="search-engine-selector"
        value={engine}
        onChange={(event) => {
          dispatch(configureEngine(event.target.value));
        }}
      >
        <option value="">--Please choose an option--</option>
        <option value="Bing">Bing</option>
        <option value="Google">Google</option>
        <option value="Both">Both</option>
      </select>
      <span hidden={engine !== ''}>
        Please select an engine to search or both
      </span>
    </div>
  );
};
export default SearchEngineSelector;
