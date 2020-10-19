import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searcher/searcherSlice';

export default configureStore({
  reducer: { searcher: searchReducer },
});
