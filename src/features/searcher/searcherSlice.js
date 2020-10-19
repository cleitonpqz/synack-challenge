import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetch from 'cross-fetch';

export const searchFromGoogle = createAsyncThunk(
  'searcher/searchFromGoogle',
  async (q) => {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyAEVu0CSVrZL0q5TI5JUoRIgRDU0P9XIng&cx=b4f7495383893e788&q=${q}`
    );
    const data = await response.json();

    if (data.items && data.items.length) {
      const items = data.items.map((item) => ({
        title: item.title,
        link: item.link,
      }));
      return items;
    }

    return [];
  }
);

export const searchFromBing = createAsyncThunk(
  'searcher/searchFromBing',
  async (q) => {
    const response = await fetch(
      `https://synack-challenge.cognitiveservices.azure.com/bing/v7.0/search?q=${encodeURIComponent(
        q
      )}`,
      {
        headers: {
          'Ocp-Apim-Subscription-Key': '744686968c714bb6ac6fad3869feff9f',
        },
      }
    );
    const data = await response.json();

    if (data.webPages && data.webPages.value && data.webPages.value.length) {
      const items = data.webPages.value.map((item) => ({
        title: item.name,
        link: item.url,
      }));
      return items;
    }

    return [];
  }
);

export const searcherSlice = createSlice({
  name: 'searcher',
  initialState: {
    searchTerm: '',
    searchEngine: '',
    searchResults: [],
  },
  reducers: {
    configureEngine: (state, action) => {
      state.searchEngine = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearResults: (state) => {
      state.searchResults = [];
    },
  },
  extraReducers: {
    [searchFromGoogle.fulfilled]: (state, action) => {
      state.searchResults = state.searchResults.concat(action.payload);
    },
    [searchFromBing.fulfilled]: (state, action) => {
      state.searchResults = state.searchResults.concat(action.payload);
    },
  },
});

export const {
  configureEngine,
  setSearchText,
  clearResults,
} = searcherSlice.actions;

export const searchFromBoth = (term) => (dispatch) => {
  dispatch(searchFromBing(term));
  dispatch(searchFromGoogle(term));
};

export default searcherSlice.reducer;
