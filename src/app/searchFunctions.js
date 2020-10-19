import {
  searchFromGoogle,
  searchFromBing,
  searchFromBoth,
} from '../features/searcher/searcherSlice';

const searchOptions = {
  Google: searchFromGoogle,
  Bing: searchFromBing,
  Both: searchFromBoth,
};

export default searchOptions;
