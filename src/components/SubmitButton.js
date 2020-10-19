import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchFunctions from '../app/searchFunctions';
import { clearResults } from '../features/searcher/searcherSlice';

const SubmitButton = () => {
  const term = useSelector((state) => state.searcher.searchTerm);
  const engine = useSelector((state) => state.searcher.searchEngine);

  const searchEngineSelected = engine && engine.trim() !== '';
  const searchTermProvided = term && term.trim() !== '';

  const dispatch = useDispatch();

  const handleClickButton = () => {
    dispatch(clearResults());
    if (searchEngineSelected && searchTermProvided) {
      const search = SearchFunctions[engine];
      dispatch(search(term));
    }
  };
  return (
    <div>
      <button
        className="button"
        type="submit"
        onClick={handleClickButton}
        disabled={!searchEngineSelected || !searchTermProvided}
      >
        Search
      </button>
    </div>
  );
};

export default SubmitButton;
